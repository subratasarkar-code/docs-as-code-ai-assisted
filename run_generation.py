#!/usr/bin/env python3
"""
Full Static Site Generator for all 11 Source Documents
Converts extracted markdown from source PDFs into enterprise-grade documentation websites.
"""

import os
import re
import json
import html

WORKSPACE_DIR = "/Users/anindtasarkar/IdeaProjects/google/advanced-static-website"
SOURCE_DIR = os.path.join(WORKSPACE_DIR, "source")
OUTPUT_DIR = os.path.join(WORKSPACE_DIR, "output")
MD_DIR = os.path.join(WORKSPACE_DIR, "scratch", "extracted_md")

os.makedirs(OUTPUT_DIR, exist_ok=True)

def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text)
    return text or 'section'

def clean_inline_md(text):
    # Remove markers
    text = re.sub(r'<mark>', '', text)
    text = re.sub(r'</mark>', '', text)
    # Bold
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    # Italic
    text = re.sub(r'\_(.*?)\_', r'<em>\1</em>', text)
    # Inline code
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    return text

def parse_markdown_to_html(md_content):
    lines = md_content.splitlines()
    html_out = []
    toc_items = []
    search_items = []
    
    in_code_block = False
    code_lang = "sql"
    code_lines = []
    
    in_table = False
    table_lines = []
    
    in_list = False
    list_type = "ul"
    
    def flush_list():
        nonlocal in_list
        if in_list:
            html_out.append(f"</{list_type}>")
            in_list = False

    def flush_code():
        nonlocal in_code_block, code_lines, code_lang
        if in_code_block:
            code_text = html.escape("\n".join(code_lines))
            html_out.append(f'''
<div class="code-container">
  <div class="code-header">
    <span class="code-lang-label">{code_lang}</span>
    <button class="copy-btn" title="Copy to clipboard">Copy</button>
  </div>
  <pre><code class="language-{code_lang}">{code_text}</code></pre>
</div>''')
            in_code_block = False
            code_lines = []

    def flush_table():
        nonlocal in_table, table_lines
        if in_table and table_lines:
            table_html = render_table(table_lines)
            html_out.append(table_html)
            in_table = False
            table_lines = []

    def render_table(raw_lines):
        rows = []
        for line in raw_lines:
            line = line.strip()
            if not line:
                continue
            
            # Protect pipes inside backticks or parentheses
            def protect_pipes(match):
                return match.group(0).replace('|', '___PIPE___')
            
            protected = re.sub(r'`[^`]+`', protect_pipes, line)
            protected = re.sub(r'\([^)]+\)', protect_pipes, protected)
            
            if protected.startswith('|') and protected.endswith('|'):
                cells = [c.replace('___PIPE___', '|').strip() for c in protected[1:-1].split('|')]
                rows.append(cells)
            elif protected.startswith('|'):
                cells = [c.replace('___PIPE___', '|').strip() for c in protected[1:].split('|')]
                rows.append(cells)
                
        if not rows:
            return ""
        # Filter out separator row e.g. |---|---|
        header_row = rows[0]
        data_rows = []
        is_first = True
        for r in rows:
            if is_first:
                is_first = False
                continue
            if all(re.match(r'^:?-+:?$', c) for c in r if c):
                continue
            data_rows.append(r)
        
        out = ['<div class="table-responsive"><table>']
        out.append('<thead><tr>')
        for c in header_row:
            clean_c = clean_inline_md(c.replace('<br>', ' '))
            out.append(f'<th>{clean_c}</th>')
        out.append('</tr></thead><tbody>')
        for r in data_rows:
            out.append('<tr>')
            for idx, c in enumerate(r):
                clean_c = clean_inline_md(c.replace('<br>', '<br/>'))
                out.append(f'<td>{clean_c}</td>')
            out.append('</tr>')
        out.append('</tbody></table></div>')
        return "\n".join(out)

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Code block
        if stripped.startswith("```"):
            if in_code_block:
                flush_code()
            else:
                flush_list()
                flush_table()
                in_code_block = True
                lang_match = re.match(r"^```(\w*)", stripped)
                code_lang = lang_match.group(1).lower() if lang_match and lang_match.group(1) else "sql"
                code_lines = []
            i += 1
            continue

        if in_code_block:
            code_lines.append(line)
            i += 1
            continue

        # Tables
        if stripped.startswith("|"):
            flush_list()
            in_table = True
            table_lines.append(stripped)
            i += 1
            continue
        elif in_table:
            flush_table()

        # Headings
        h_match = re.match(r'^(#{1,5})\s+(.*)$', stripped)
        if h_match:
            flush_list()
            level = len(h_match.group(1))
            heading_raw = h_match.group(2).strip()
            # Clean heading text
            clean_h = re.sub(r'[*_`]', '', heading_raw)
            clean_h = re.sub(r'<[^>]+>', '', clean_h).strip()
            anchor = slugify(clean_h)
            
            if level <= 2:
                html_out.append(f'<h2 id="{anchor}" class="section-heading">{clean_inline_md(heading_raw)}</h2>')
                toc_items.append({"title": clean_h, "id": anchor, "level": 2})
                search_items.append({"title": clean_h, "url": f"#{anchor}", "category": "Section", "content": clean_h})
            elif level == 3:
                html_out.append(f'<h3 id="{anchor}" class="subsection-heading">{clean_inline_md(heading_raw)}</h3>')
                toc_items.append({"title": clean_h, "id": anchor, "level": 3})
                search_items.append({"title": clean_h, "url": f"#{anchor}", "category": "Subsection", "content": clean_h})
            else:
                html_out.append(f'<h4 id="{anchor}" class="tertiary-heading">{clean_inline_md(heading_raw)}</h4>')
            i += 1
            continue

        # Callouts & special notes
        if stripped.startswith("`💡`") or stripped.startswith("💡"):
            flush_list()
            html_out.append(f'''
<div class="callout callout-tip">
  <div class="callout-title">💡 Pro Tip / Architectural Insight</div>
  <div>{clean_inline_md(stripped.replace("`💡`", "").replace("💡", "").strip())}</div>
</div>''')
            i += 1
            continue

        if stripped.startswith("`🚩`") or stripped.startswith("🚩"):
            flush_list()
            html_out.append(f'''
<div class="callout callout-danger">
  <div class="callout-title">🚩 Performance Red Flag</div>
  <div>{clean_inline_md(stripped.replace("`🚩`", "").replace("🚩", "").strip())}</div>
</div>''')
            i += 1
            continue

        # Lists
        bullet_match = re.match(r'^[-*]\s+(.*)$', stripped)
        num_match = re.match(r'^\d+\.\s+(.*)$', stripped)
        if bullet_match:
            if not in_list or list_type != "ul":
                flush_list()
                html_out.append("<ul>")
                in_list = True
                list_type = "ul"
            html_out.append(f"<li>{clean_inline_md(bullet_match.group(1))}</li>")
            i += 1
            continue
        elif num_match:
            if not in_list or list_type != "ol":
                flush_list()
                html_out.append("<ol>")
                in_list = True
                list_type = "ol"
            html_out.append(f"<li>{clean_inline_md(num_match.group(1))}</li>")
            i += 1
            continue
        else:
            flush_list()

        # Regular Paragraph
        if stripped:
            # Check if it looks like a page number indicator
            if re.match(r'^(Page \d+ of \d+|\d+\s*\|\s*Enterprise Case Study)$', stripped):
                i += 1
                continue
            html_out.append(f"<p>{clean_inline_md(stripped)}</p>")
        
        i += 1

    flush_code()
    flush_table()
    flush_list()

    return "\n".join(html_out), toc_items, search_items

print("Markdown to HTML parser ready.")
