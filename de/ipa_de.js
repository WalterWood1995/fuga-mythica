/* =====================================================
   DEUTSCHE WURZELN — rule-based German pronunciation.
   An approximate IPA transcription derived from the spelling. German
   orthography is regular enough for this to be genuinely useful, but it is
   an approximation: loanwords, names and some compounds come out wrong, so
   the UI labels it 近似音标 and always offers real spoken audio beside it.
   Exposes: ipaDe(word), sylDe(word)
   ===================================================== */
(function (global) {
  /* ---- 1. split the spelling into units (digraphs count as one) ---- */
  const DOUBLED = ["bb", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "tt"];
  const DIGRAPHS = ["tsch", "sch", "chs", "ch", "ck", "ph", "qu", "th", "dt", "tz", "ng", "nk", "pf", "ss",
                    ...DOUBLED,
                    "ie", "ei", "ai", "ey", "ay", "eu", "äu", "au", "aa", "ee", "oo"];
  /* these always shorten the vowel in front of them */
  const SHORTENING = new Set(["ck", "tz", "ss", "chs", "ng", "nk", "pf", "tsch", ...DOUBLED]);
  const VOW = new Set(["a", "e", "i", "o", "u", "ä", "ö", "ü", "y",
                       "ie", "ei", "ai", "ey", "ay", "eu", "äu", "au", "aa", "ee", "oo"]);
  const DIPH = { ei: "aɪ", ai: "aɪ", ey: "aɪ", ay: "aɪ", eu: "ɔʏ", "äu": "ɔʏ", au: "aʊ" };
  const LONGV = { a: "aː", e: "eː", i: "iː", o: "oː", u: "uː", "ä": "ɛː", "ö": "øː", "ü": "yː", y: "yː",
                  ie: "iː", aa: "aː", ee: "eː", oo: "oː" };
  const SHORTV = { a: "a", e: "ɛ", i: "ɪ", o: "ɔ", u: "ʊ", "ä": "ɛ", "ö": "œ", "ü": "ʏ", y: "ʏ",
                   ie: "iː", aa: "aː", ee: "eː", oo: "oː" };
  const CONS = { b: "b", c: "k", d: "d", f: "f", g: "ɡ", h: "h", j: "j", k: "k", l: "l", m: "m", n: "n",
                 p: "p", q: "k", r: "ʁ", s: "s", t: "t", v: "f", w: "v", x: "ks", z: "ts", "ß": "s",
                 tsch: "tʃ", sch: "ʃ", chs: "ks", ck: "k", ph: "f", qu: "kv", th: "t", dt: "t",
                 tz: "ts", ng: "ŋ", nk: "ŋk", pf: "pf", ss: "s",
                 bb: "b", dd: "d", ff: "f", gg: "ɡ", kk: "k", ll: "l", mm: "m", nn: "n", pp: "p", rr: "ʁ", tt: "t" };
  const PREFIX = ["ver", "zer", "ent", "emp", "miss", "be", "ge", "er"];

  function units(w) {
    const out = [];
    for (let i = 0; i < w.length;) {
      const d = DIGRAPHS.find(x => w.startsWith(x, i));
      if (d) { out.push(d); i += d.length; } else { out.push(w[i]); i++; }
    }
    return out;
  }
  /* ---- 2. transcribe ---- */
  /* how many consonant units remain to the end after position i (0 if a vowel follows) */
  function tailAfter(u, i) {
    let k = i + 1, n = 0;
    while (k < u.length && !VOW.has(u[k])) { n++; k++; }
    return k >= u.length ? n : -1;
  }
  function core(w) {
    const u = units(w);
    let out = "", stressAt = -1, onset = 0, seenVowel = false, nV = 0;
    for (let i = 0; i < u.length; i++) {
      const c = u[i], prev = u[i - 1] || "", next = u[i + 1] || "", next2 = u[i + 2] || "";
      if (VOW.has(c)) {
        if (stressAt < 0) { stressAt = onset; onset = -1; }
        /* an unstressed e before a nasal or liquid is a schwa: Wissenschaft, Wanderung */
        if (c === "e" && seenVowel && next === "r") {
          seenVowel = true; nV++;
          if (VOW.has(u[i + 2] || "")) { out += "ə"; continue; }   /* Wan-de-rung */
          out += "ɐ"; i++; continue;                                /* Kin-der, Jahr-hun-dert */
        }
        if (c === "e" && seenVowel && "nlm".includes(next)) { seenVowel = true; out += "ə"; continue; }
        if (c === "e" && nV >= 2 && tailAfter(u, i) === 1 && "tns".includes(next)) { seenVowel = true; out += "ə"; continue; }
        seenVowel = true;
        if (DIPH[c]) { out += DIPH[c]; continue; }
        /* how many consonant units until the next vowel? */
        let k = i + 1, n = 0;
        while (k < u.length && !VOW.has(u[k])) { n++; k++; }
        const hLong = next === "h";
        const tail = k >= u.length;                     /* nothing but consonants to the end */
        const long = hLong || n === 0 || (n === 1 && !SHORTENING.has(next));
        /* word-final -e / -er / -en / -el are reduced */
        if (c === "e" && tail && n === 0) { out += "ə"; continue; }
        if (c === "e" && tail && n === 1 && next === "r") { out += "ɐ"; i++; continue; }
        if (c === "e" && tail && n === 1 && (next === "n" || next === "l" || next === "m")) { out += "ə" + CONS[next]; i++; continue; }
        if (c === "i" && tail && next === "g" && n === 1) { out += "ɪç"; i++; continue; }
        out += long ? (LONGV[c] || SHORTV[c]) : (SHORTV[c] || c);
        if (hLong) i++;                                  /* the lengthening h is silent */
        continue;
      }
      if (stressAt < 0 && onset >= 0) { /* still collecting the onset */ }
      if (c === "s") {
        if (i === 0 && (next === "p" || next === "t")) { out += "ʃ"; continue; }
        out += VOW.has(next) ? "z" : "s";
        continue;
      }
      if (c === "ch") { out += /[aouäöü]$/.test(w.slice(0, i)) || /au$/.test(w.slice(0, i)) ? "x" : "ç"; continue; }
      if (c === "r") { out += VOW.has(next) ? "ʁ" : (i === u.length - 1 ? "ɐ" : "ʁ"); continue; }
      if (c === "h") { out += VOW.has(next) ? "h" : ""; continue; }
      if (c === "v") { out += /^(vase|vulkan|villa|vitamin|violine|vision|variante|vokal|verb)/.test(w) ? "v" : "f"; continue; }
      out += CONS[c] || c;
    }
    return { ipa: out, stressAt };
  }
  /* the ch after a back vowel is [x]; after a front vowel or a consonant it is [ç] */
  function ipaDe(word) {
    if (!word) return "";
    const raw = String(word).toLowerCase().replace(/^(der|die|das)\s+/, "").trim();
    if (raw.includes("-")) return raw.split("-").filter(Boolean).map(ipaDe).join("-");
    if (raw.includes(" ")) return raw.split(/\s+/).filter(Boolean).map(ipaDe).join(" ");
    const w = raw.replace(/[^a-zäöüß]/g, "");
    if (!w) return "";
    /* an unstressed prefix is transcribed on its own so the stress lands after it */
    const pre = PREFIX.find(p => w.startsWith(p) && w.length >= p.length + 3);
    if (pre) {
      const head = core(pre).ipa.replace(/ɛ(?=[ʁɐ])/, "ɛ").replace(/^ɡə$/, "ɡə");
      /* a participle after an unstressed prefix ends in a schwa: be-freund-et, ge-lieb-t */
      let rest = ipaDe(w.slice(pre.length)).replace(/ˈ/g, "");
      const syl = (rest.match(/[aeiouɛɪɔʊœøyʏɐə]ː?/g) || []).length;
      if (syl >= 2) rest = rest.replace(/eːt$/, "ət").replace(/eːn$/, "ən");   /* be-freund-et, not Ge-bet */
      return reduce(head) + "ˈ" + rest;
    }
    const r = core(w);
    let out = r.ipa;
    /* common suffixes keep a short vowel: -lich, -isch, -in, -nis */
    if (/lich/.test(w)) out = out.replace(/liːç/g, "lɪç");
    if (/isch$/.test(w)) out = out.replace(/iːʃ$/, "ɪʃ");
    if (/in$/.test(w) && w.length > 4) out = out.replace(/iːn$/, "ɪn");
    if (/nis$/.test(w)) out = out.replace(/niːs$/, "nɪs");
    /* final devoicing of the last consonant */
    out = out.replace(/b$/, "p").replace(/d$/, "t").replace(/ɡ$/, "k").replace(/v$/, "f").replace(/z$/, "s");
    /* stress goes before the onset consonants of the first full syllable */
    const m = out.match(/[aeiouɛɪɔʊœøyʏɐəaɪaʊɔʏ]/);
    if (m && m.index !== undefined) {
      let at = m.index;
      while (at > 0 && !/[aeiouɛɪɔʊœøyʏɐə]/.test(out[at - 1])) at--;
      out = out.slice(0, at) + "ˈ" + out.slice(at);
    }
    return out;
  }
  function reduce(s) { return s.replace(/ɛ(?=ʁ)/, "ɛ").replace(/eː$/, "ə"); }

  /* rough syllable split for display: Brü·cke */
  function sylDe(word) {
    const w = String(word).replace(/^(der|die|das)\s+/, "");
    const V = "aeiouäöüyAEIOUÄÖÜY";
    return w
      .replace(new RegExp(`([${V}])([^${V}])([${V}])`, "g"), "$1·$2$3")
      .replace(new RegExp(`([${V}][^${V}])([^${V}])([${V}])`, "g"), "$1·$2$3");
  }
  global.ipaDe = ipaDe;
  global.sylDe = sylDe;
})(typeof window !== "undefined" ? window : globalThis);
