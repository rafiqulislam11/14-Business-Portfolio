import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Slide 1 replacement
slide1_old = """                  <h1 class="hero-title" data-en="Build Your Brand. <br><span class='gradient-text'>Grow Your Business.</span> <br>Go Digital." data-bn="আপনার ব্র্যান্ড গড়ে তুলুন। <br><span class='gradient-text'>ব্যবসাকে এগিয়ে নিন।</span> <br>ডিজিটাল হোন।">
                    Build Your Brand. <br>
                    <span class="gradient-text">Grow Your Business.</span> <br>
                    Go Digital.
                  </h1>"""

slide1_new = """                  <h1 class="hero-title">
                    <span data-en="Build Your Brand." data-bn="আপনার ব্র্যান্ড গড়ে তুলুন।">Build Your Brand.</span><br>
                    <span class="gradient-text" data-en="Grow Your Business." data-bn="ব্যবসাকে এগিয়ে নিন।">Grow Your Business.</span><br>
                    <span data-en="Go Digital." data-bn="ডিজিটাল হোন।">Go Digital.</span>
                  </h1>"""

# Slide 2 replacement
slide2_old = """                  <h1 class="hero-title" data-en="Amazon KDP Publishing <br><span class='gradient-text'>&amp; Passive Income</span> <br>Worldwide." data-bn="অ্যামাজন কেডিপি পাবলিশিং <br><span class='gradient-text'>&amp; প্যাসিভ ইনকাম</span> <br>বিশ্বজুড়ে রয়্যালটি।">
                    Amazon KDP Publishing <br>
                    <span class="gradient-text">&amp; Passive Income</span> <br>
                    Worldwide.
                  </h1>"""

slide2_new = """                  <h1 class="hero-title">
                    <span data-en="Amazon KDP Publishing" data-bn="অ্যামাজন কেডিপি পাবলিশিং">Amazon KDP Publishing</span><br>
                    <span class="gradient-text" data-en="&amp; Passive Income" data-bn="ও প্যাসিভ ইনকাম">&amp; Passive Income</span><br>
                    <span data-en="Worldwide." data-bn="বিশ্বজুড়ে রয়্যালটি।">Worldwide.</span>
                  </h1>"""

# Slide 3 replacement
slide3_old = """                  <h1 class="hero-title" data-en="Stunning Visuals <br><span class='gradient-text'>&amp; Viral Social Media</span> <br>Marketing." data-bn="নজরকাড়া ডিজাইন <br><span class='gradient-text'>&amp; ভাইরাল সোশ্যাল মিডিয়া</span> <br>মার্কেটিং সল্যুশন।">
                    Stunning Visuals <br>
                    <span class="gradient-text">&amp; Viral Social Media</span> <br>
                    Marketing.
                  </h1>"""

slide3_new = """                  <h1 class="hero-title">
                    <span data-en="Stunning Visuals" data-bn="নজরকাড়া ডিজাইন">Stunning Visuals</span><br>
                    <span class="gradient-text" data-en="&amp; Viral Social Media" data-bn="ও ভাইরাল সোশ্যাল মিডিয়া">&amp; Viral Social Media</span><br>
                    <span data-en="Marketing." data-bn="মার্কেটিং সল্যুশন।">Marketing.</span>
                  </h1>"""

# Slide 4 replacement
slide4_old = """                  <h1 class="hero-title" data-en="Fast Web Applications, <br><span class='gradient-text'>SEO &amp; Career Resumes</span> <br>Local to Global." data-bn="দ্রুতগতির ওয়েবসাইট, <br><span class='gradient-text'>এসইও ও ক্যারিয়ার ব্র্যান্ডিং</span> <br>লোকাল থেকে গ্লোবাল।">
                    Fast Web Applications, <br>
                    <span class="gradient-text">SEO &amp; Career Resumes</span> <br>
                    Local to Global.
                  </h1>"""

slide4_new = """                  <h1 class="hero-title">
                    <span data-en="Fast Web Applications," data-bn="দ্রুতগতির ওয়েবসাইট,">Fast Web Applications,</span><br>
                    <span class="gradient-text" data-en="SEO &amp; Career Resumes" data-bn="এসইও ও ক্যারিয়ার ব্র্যান্ডিং">SEO &amp; Career Resumes</span><br>
                    <span data-en="Local to Global." data-bn="লোকাল থেকে গ্লোবাল।">Local to Global.</span>
                  </h1>"""

replaced_count = 0
for old, new, name in [(slide1_old, slide1_new, "Slide 1"), (slide2_old, slide2_new, "Slide 2"), (slide3_old, slide3_new, "Slide 3"), (slide4_old, slide4_new, "Slide 4")]:
    if old in content:
        content = content.replace(old, new)
        replaced_count += 1
        print(f"[SUCCESS] Replaced {name}")
    else:
        print(f"[FAIL] Could not match {name}")

if replaced_count == 4:
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("All 4 hero slide headings successfully updated in index.html!")
else:
    print(f"Only {replaced_count}/4 matched. Not writing.")
