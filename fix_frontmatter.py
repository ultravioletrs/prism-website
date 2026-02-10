import os
import re

def fix_frontmatter(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if not filename.endswith(('.md', '.mdx')):
                continue
            
            filepath = os.path.join(dirpath, filename)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Check if frontmatter exists
            frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
            frontmatter = {}
            if frontmatter_match:
                frontmatter_text = frontmatter_match.group(1)
                # Simple parsing
                for line in frontmatter_text.split('\n'):
                    if ':' in line:
                        key, val = line.split(':', 1)
                        frontmatter[key.strip()] = val.strip()
            
            if 'title' in frontmatter:
                print(f"Skipping {filename}: title already present")
                continue
                
            # Find H1
            h1_match = re.search(r'^#\s+(.*)', content, re.MULTILINE)
            if h1_match:
                title = h1_match.group(1).strip()
            else:
                title = os.path.splitext(filename)[0].replace('-', ' ').title()
                
            print(f"Fixing {filename}: Adding title '{title}'")
            
            if frontmatter_match:
                # Insert title into existing frontmatter
                new_frontmatter = f"---\ntitle: \"{title}\"\n{frontmatter_text}\n---"
                new_content = content.replace(frontmatter_match.group(0), new_frontmatter)
            else:
                # Add new frontmatter
                new_content = f"---\ntitle: \"{title}\"\n---\n\n{content}"
            
            with open(filepath, 'w') as f:
                f.write(new_content)

fix_frontmatter('content/docs')
