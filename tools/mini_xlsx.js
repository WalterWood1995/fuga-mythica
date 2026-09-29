/* minimal xlsx writer: sheets = [{name, rows:[[cell,...]], widths:[..], freeze:1}] */
const zlib = require("zlib"), fs = require("fs");
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
  .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,"");
function col(n){ let s=""; n++; while(n>0){ const r=(n-1)%26; s=String.fromCharCode(65+r)+s; n=(n-(r+1))/26; } return s; }
function sheetXml(sh){
  const rows = sh.rows.map((r,i) => `<row r="${i+1}">` + r.map((c,j) => {
    if (c === null || c === undefined || c === "") return "";
    const ref = col(j)+(i+1);
    if (typeof c === "number") return `<c r="${ref}"><v>${c}</v></c>`;
    return `<c r="${ref}" t="inlineStr"${i===0?' s="1"':''}><is><t xml:space="preserve">${esc(c)}</t></is></c>`;
  }).join("") + `</row>`).join("");
  const cols = (sh.widths||[]).map((w,j)=>`<col min="${j+1}" max="${j+1}" width="${w}" customWidth="1"/>`).join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>${cols?`<cols>${cols}</cols>`:""}<sheetData>${rows}</sheetData></worksheet>`;
}
function zip(files){
  const chunks=[], central=[]; let off=0;
  const dos=(()=>{ const d=new Date(2026,8,29,12,0,0);
    return { t:((d.getHours()<<11)|(d.getMinutes()<<5)|(d.getSeconds()/2))&0xffff,
             d:(((d.getFullYear()-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate())&0xffff }; })();
  for (const f of files){
    const name=Buffer.from(f.name,"utf8"), raw=Buffer.from(f.data,"utf8");
    const comp=zlib.deflateRawSync(raw,{level:9});
    const crc=crc32(raw);
    const lh=Buffer.alloc(30); lh.writeUInt32LE(0x04034b50,0); lh.writeUInt16LE(20,4); lh.writeUInt16LE(0x800,6);
    lh.writeUInt16LE(8,8); lh.writeUInt16LE(dos.t,10); lh.writeUInt16LE(dos.d,12); lh.writeUInt32LE(crc,14);
    lh.writeUInt32LE(comp.length,18); lh.writeUInt32LE(raw.length,22); lh.writeUInt16LE(name.length,26);
    chunks.push(lh,name,comp);
    const ch=Buffer.alloc(46); ch.writeUInt32LE(0x02014b50,0); ch.writeUInt16LE(20,4); ch.writeUInt16LE(20,6);
    ch.writeUInt16LE(0x800,8); ch.writeUInt16LE(8,10); ch.writeUInt16LE(dos.t,12); ch.writeUInt16LE(dos.d,14);
    ch.writeUInt32LE(crc,16); ch.writeUInt32LE(comp.length,20); ch.writeUInt32LE(raw.length,24);
    ch.writeUInt16LE(name.length,28); ch.writeUInt32LE(off,42);
    central.push(ch,name); off += lh.length+name.length+comp.length;
  }
  const cd=Buffer.concat(central);
  const end=Buffer.alloc(22); end.writeUInt32LE(0x06054b50,0); end.writeUInt16LE(files.length,8);
  end.writeUInt16LE(files.length,10); end.writeUInt32LE(cd.length,12); end.writeUInt32LE(off,16);
  return Buffer.concat([...chunks,cd,end]);
}
let T=null;
function crc32(buf){ if(!T){ T=[]; for(let i=0;i<256;i++){ let c=i; for(let k=0;k<8;k++) c=c&1?0xEDB88320^(c>>>1):c>>>1; T[i]=c>>>0; } }
  let c=0xFFFFFFFF; for(let i=0;i<buf.length;i++) c=T[(c^buf[i])&0xFF]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
function write(path, sheets){
  const files=[
    {name:"[Content_Types].xml", data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${sheets.map((s,i)=>`<Override PartName="/xl/worksheets/sheet${i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`},
    {name:"_rels/.rels", data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`},
    {name:"xl/workbook.xml", data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheets.map((s,i)=>`<sheet name="${esc(s.name)}" sheetId="${i+1}" r:id="rId${i+1}"/>`).join("")}</sheets></workbook>`},
    {name:"xl/_rels/workbook.xml.rels", data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((s,i)=>`<Relationship Id="rId${i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i+1}.xml"/>`).join("")}<Relationship Id="rIdS" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`},
    {name:"xl/styles.xml", data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FF241B16"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE8B64C"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`},
    ...sheets.map((s,i)=>({name:`xl/worksheets/sheet${i+1}.xml`, data:sheetXml(s)})),
  ];
  fs.writeFileSync(path, zip(files));
}
module.exports = { write };
