import glob
import re

for f in sorted(glob.glob("*.html")):
    content = open(f, "r", encoding="utf-8").read()
    entities = re.findall(r'data-(?:en|bn)=["\'][^"\']*&[#a-zA-Z0-9]+;[^"\']*["\']', content)
    # filter out &amp;
    non_amps = [e for e in entities if not re.search(r'&amp;', e)]
    if non_amps:
        print(f"{f}: Non-amp entities: {len(non_amps)}")
        for na in non_amps[:3]:
            print(f"   Sample: {na[:80]}")
