import glob
import re

for f in sorted(glob.glob("*.html")):
    content = open(f, "r", encoding="utf-8").read()
    bn_amps = re.findall(r'data-bn=["\'][^"\']*&amp;[^"\']*["\']', content)
    en_amps = re.findall(r'data-en=["\'][^"\']*&amp;[^"\']*["\']', content)
    if bn_amps or en_amps:
        print(f"{f}: EN &amp; = {len(en_amps)}, BN &amp; = {len(bn_amps)}")
        if bn_amps:
            for b in bn_amps[:2]:
                print(f"   BN Sample: {b}")
