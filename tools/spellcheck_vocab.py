"""
FUGA MYTHICA — dictionary check of every Cursus word (spylls = pure-Python hunspell)
  python tools/spellcheck_vocab.py <dictDir> [--out report.json] [--lang en,fr]
dictDir holds en_GB / fr / es_ES / it_IT / de_DE_frami / la  .dic+.aff (LibreOffice / wooorm dictionaries)
Step 1 dumps the packs with node (tools/dump_words.js); step 2 checks every token not an article / number / proper noun.
"""
import sys, json, re, subprocess, os
from spylls.hunspell import Dictionary
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dictDir = sys.argv[1]
out = sys.argv[sys.argv.index("--out") + 1] if "--out" in sys.argv else None
only = sys.argv[sys.argv.index("--lang") + 1].split(",") if "--lang" in sys.argv else None
words = json.loads(subprocess.check_output(["node", os.path.join(ROOT, "tools", "dump_words.js")], cwd=ROOT).decode("utf-8"))
DICT = {"en": "en_GB", "fr": "fr", "es": "es_ES", "it": "it_IT", "de": "de_DE_frami", "la": "la"}
ART = {"de": r"^(der|die|das|ein|eine|sich|zu)$", "fr": r"^(le|la|les|l'|un|une|d'|de|du|des|à|au|aux|se|s'|en|y|qu')$", "es": r"^(el|la|los|las|un|una|de|del|a|al|se|en|por|con|lo)$",
       "it": r"^(il|lo|la|i|gli|le|l'|un|uno|una|di|del|della|a|al|alla|da|si|in|con|per|dei|delle|degli)$", "en": r"^(the|a|an|to|of|in|on|at|by|for|with)$", "la": r"^$"}
report = {}
for lang, name in DICT.items():
    if only and lang not in only: continue
    d = Dictionary.from_files(os.path.join(dictDir, name))
    art = re.compile(ART[lang], re.I)
    bad = []
    for w in words[lang]:
        toks = []
        for t in re.split(r"[\s\-–—,;:!?()…]+", w[0].replace("’", "'")):
            toks += [x for x in re.split(r"(?<=')", t) if x]
        unk = [t for t in toks if t and not art.match(t) and not t.isdigit() and not t[0].isupper()
               and not (d.lookup(t) or d.lookup(t.lower()) or d.lookup(t[0].upper() + t[1:]))]
        if unk: bad.append([w[0], "|".join(unk), w[3] or ""])
    report[lang] = {"checked": len(words[lang]), "unknown": len(bad), "items": bad}
    print(lang, "checked", len(words[lang]), "unknown", len(bad), flush=True)
if out:
    json.dump(report, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
