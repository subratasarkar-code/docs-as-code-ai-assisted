import os
import re

files_to_update = [
    'build_all_sites.py',
    'build_full_sites.py',
    'generator.py'
]

replacements = [
    ('/* Fiserv Enterprise Documentation Styling */', '/* Enterprise Technical Documentation Styling */'),
    ('/* Master Enterprise Documentation Hub Styling - Fiserv Standard */', '/* Master Enterprise Documentation Hub Styling */'),
    ('Fiserv Docs', 'Technical Documentation Portal'),
    ('Fiserv Enterprise Documentation Architecture', 'Enterprise Database Engineering Documentation Hub'),
    ('Fiserv Enterprise Documentation Hub', 'Enterprise Documentation Hub'),
    ('Fiserv internal engineering knowledge-base', 'Internal engineering technical reference & architecture repository'),
    ('fiserv-docs-theme', 'tech-portal-theme'),
    ('fiserv-logo-sq', 'portal-logo-sq'),
    ('>fi<', '>DB<'),
    ('Fiserv standard color scheme', 'Modern technical color scheme'),
    ('Fiserv orange branding', 'Modern technical theme'),
    ('Fiserv theme', 'Modern theme'),
    ('Fiserv branding', 'Modern styling'),
    ('Fiserv', 'Technical Architecture')
]

for fname in files_to_update:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
        for old, new in replacements:
            content = content.replace(old, new)
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Cleaned {fname}")

print("Templates cleaned of all Fiserv references.")
