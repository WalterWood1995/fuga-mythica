# -*- coding: utf-8 -*-
"""Cluster root families that look alike AND mean alike (sitz/setz, leg/lieg, acht/ächt …)."""
import re, unicodedata

def flat(s):
    s = s.lower().replace("ß", "ss")
    s = unicodedata.normalize("NFD", s)
    return "".join(c for c in s if unicodedata.category(c) != "Mn")

def forms(key):
    return [flat(f.strip().strip("-–")) for f in key.split("/") if len(f.strip().strip("-–")) >= 2]

def skel(s):
    return re.sub(r"[aeiouy]", "", s)

def lev(a, b):
    if abs(len(a) - len(b)) > 2: return 9
    d = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        p, d[0] = d[0], i
        for j, cb in enumerate(b, 1):
            p, d[j] = d[j], min(d[j] + 1, d[j - 1] + 1, p + (ca != cb))
    return d[-1]

def looks_alike(A, B):
    for a in A:
        for b in B:
            if len(a) < 3 or len(b) < 3: continue
            if a == b: return True
            if skel(a) == skel(b) and len(skel(a)) >= 2: return True       # Ablaut: sitz/setz
            if min(len(a), len(b)) >= 4 and lev(a, b) <= 1: return True    # one letter apart
            if min(len(a), len(b)) >= 4 and (a.startswith(b) or b.startswith(a)): return True
    return False

STOP_ZH = set("的、，,;；/ 与和或使被在人物事东西性者一个")
STOP_EN = {"the", "a", "an", "to", "of", "and", "or", "be", "one", "make", "something", "thing", "with", "for", "in", "on"}
def zh_set(s): return {c for c in (s or "") if "\u4e00" <= c <= "\u9fff" and c not in STOP_ZH}
def en_set(s): return {w for w in re.findall(r"[a-z]{3,}", (s or "").lower()) if w not in STOP_EN}

def means_alike(za, ea, zb, eb):
    return bool(zh_set(za) & zh_set(zb)) or bool(en_set(ea) & en_set(eb))

# reviewed look-alikes that are NOT related (different etyma or suffix vs root)
NOT_RELATED = [("art", "ort"), ("leicht", "licht"), ("bring", "trag"), ("chen", "klein"), ("wund", "wunder"),
  # Latin family: heart (cor/cord) is not run (curr/curs) or care (cur/cura)
  ("cord", "curs"), ("cord", "cur"), ("cardi", "cur"), ("cord", "curr"), ("coeur", "cour"), ("cor", "curs"), ("cuor", "cur"),
  ("port", "sort"), ("soir", "sur"), ("meta", "mut"), ("meta", "mud"), ("kine", "cion"), ("cine", "cion"),
  ("plan", "plat"), ("plan", "plaz"), ("llan", "plaz"), ("tir", "tra"), ("tir", "tratt"), ("abit", "ibi")]
def blocked(A, B):
    for x, y in NOT_RELATED:
        if (x in A and y in B) or (y in A and x in B): return True
    return False

def cluster(fams):
    """fams: list of dicts {key, zh, en}. Returns list of groups (lists of keys)."""
    parent = {f["key"]: f["key"] for f in fams}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]; x = parent[x]
        return x
    F = [(f["key"], forms(f["key"]), f["zh"], f["en"]) for f in fams]
    for i in range(len(F)):
        for j in range(i + 1, len(F)):
            ki, fi, zi, ei = F[i]; kj, fj, zj, ej = F[j]
            if looks_alike(fi, fj) and means_alike(zi, ei, zj, ej) and not blocked(fi, fj):
                parent[find(ki)] = find(kj)
    groups = {}
    for f in fams: groups.setdefault(find(f["key"]), []).append(f["key"])
    return list(groups.values())
