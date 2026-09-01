import os
import glob
import re

files = glob.glob('src/components/featured-work/*.tsx')
for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Regex to match (video.video || video.cardVideo) etc
    new_content = re.sub(r'\(([\w]+)\.(?:cardVideo|video)\s*\|\|\s*\1\.(?:cardVideo|video)\)', r'(\1.video)', content)
    new_content = re.sub(r'\(([\w]+)\.(?:cardWebm|webm)\s*\|\|\s*\1\.(?:cardWebm|webm)\)', r'(\1.webm)', new_content)

    # Some might not be wrapped in parens, like: `videoSrc={video.cardVideo || video.video!}`
    new_content = re.sub(r'([\w]+)\.(?:cardVideo|video)\s*\|\|\s*\1\.(?:cardVideo|video)', r'\1.video', new_content)
    new_content = re.sub(r'([\w]+)\.(?:cardWebm|webm)\s*\|\|\s*\1\.(?:cardWebm|webm)', r'\1.webm', new_content)

    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")
