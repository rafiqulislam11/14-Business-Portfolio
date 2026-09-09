import glob
import re

for f in sorted(glob.glob("*.html")):
    content = open(f, "r", encoding="utf-8").read()
    # Find text nodes between > and < that contain &amp; or other raw code
    # Specifically where the element itself doesn't have data-en/bn, or where it does
    # Let's see if there are any suspicious patterns like <span ...>&amp;amp; or literal code
    double_escaped = re.findall(r'&amp;amp;', content)
    if double_escaped:
        print(f"[{f}] DOUBLE ESCAPED &amp;amp;: {len(double_escaped)}")
    
    raw_tags_in_text = re.findall(r'>\s*&lt;[a-z]+&gt;', content)
    if raw_tags_in_text:
        print(f"[{f}] Escaped tags shown as text: {raw_tags_in_text}")
