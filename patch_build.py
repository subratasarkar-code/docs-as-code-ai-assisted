with open('build_all_sites.py', 'r', encoding='utf-8') as f:
    code = f.read()

target = 'from run_generation import parse_markdown_to_html, clean_inline_md, slugify'
replacement = 'from run_generation import parse_markdown_to_html, clean_inline_md, slugify\nfrom faqs_data import DOCUMENT_FAQS'

if target in code and 'from faqs_data import DOCUMENT_FAQS' not in code:
    code = code.replace(target, replacement, 1)
    with open('build_all_sites.py', 'w', encoding='utf-8') as f:
        f.write(code)
    print("Successfully patched build_all_sites.py with DOCUMENT_FAQS import!")
else:
    print("Already patched or target not found.")
