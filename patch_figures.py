with open('build_all_sites.py', 'r', encoding='utf-8') as f:
    code = f.read()

old_logic = '''        if 'DOCUMENT_UPLOADS' in content_html:
            content_html = content_html.replace('### <strong', fig1 + '\\n### <strong', 1)
        if 'Unstructured Document AI Workflow' in content_html:
            content_html = content_html.replace('Unstructured Document AI Workflow', 'Unstructured Document AI Workflow\\n' + fig3, 1)
        if 'RAG Implementation Flow for Document Upload and Query Processing' in content_html:
            content_html = content_html.replace('RAG Implementation Flow for Document Upload and Query Processing', 'RAG Implementation Flow for Document Upload and Query Processing\\n' + fig4, 1)
        if 'RAG Architecture Diagram' in content_html:
            content_html = content_html.replace('RAG Architecture Diagram', 'RAG Architecture Diagram\\n' + fig5, 1)
        if 'Key Benefits' in content_html:
            content_html = content_html.replace('Key Benefits', 'Key Benefits\\n' + fig6, 1)
            
    elif doc_id == "multi-agent-rag":
        fig_agent = \'''
<div class="doc-figure" id="figure-blackboard-architecture">
  <div class="doc-figure-img-wrap">
    <a href="images/figure_3_1.png" target="_blank" title="Click to view full image">
      <img src="images/figure_3_1.png" alt="Blackboard Multi-Agent Architecture Diagram" loading="lazy">
    </a>
  </div>
  <div class="doc-figure-caption">
    <span><strong>Figure 1:</strong> Native Multi-Agent Architecture with Stateful Circuit Breakers & Blackboard Pattern</span>
    <span style="font-size:11px;color:var(--text-light);">Click image to enlarge</span>
  </div>
</div>\'''
        if '3.1 The &quot;Blackboard&quot; Design Pattern' in content_html:
            content_html = content_html.replace('3.1 The &quot;Blackboard&quot; Design Pattern', '3.1 The &quot;Blackboard&quot; Design Pattern\\n' + fig_agent, 1)
        elif '3.1 The \"Blackboard\" Design Pattern' in content_html:
            content_html = content_html.replace('3.1 The \"Blackboard\" Design Pattern', '3.1 The \"Blackboard\" Design Pattern\\n' + fig_agent, 1)
        else:
            content_html = fig_agent + '\\n' + content_html'''

new_logic = '''        if 'DOCUMENT_UPLOADS</strong></h3>' in content_html:
            content_html = content_html.replace('DOCUMENT_UPLOADS</strong></h3>', 'DOCUMENT_UPLOADS</strong></h3>\\n' + fig1, 1)
        if 'DOCUMENT_CHUNKS</strong></h3>' in content_html:
            content_html = content_html.replace('DOCUMENT_CHUNKS</strong></h3>', 'DOCUMENT_CHUNKS</strong></h3>\\n' + fig2, 1)
        if '<p><strong>Unstructured Document AI Workflow</strong></p>' in content_html:
            content_html = content_html.replace('<p><strong>Unstructured Document AI Workflow</strong></p>', '<p><strong>Unstructured Document AI Workflow</strong></p>\\n' + fig3, 1)
        if '<p><strong>RAG Implementation Flow for Document Upload and Query Processing</strong></p>' in content_html:
            content_html = content_html.replace('<p><strong>RAG Implementation Flow for Document Upload and Query Processing</strong></p>', '<p><strong>RAG Implementation Flow for Document Upload and Query Processing</strong></p>\\n' + fig4, 1)
        if '<h2 id="rag-architecture-diagram"' in content_html:
            content_html = re.sub(r'(<h2 id="rag-architecture-diagram"[^>]*>.*?</h2>)', r'\\1\\n' + fig5, content_html, count=1)
        if '<h2 id="benefits-of-ai-enablement"' in content_html:
            content_html = re.sub(r'(<h2 id="benefits-of-ai-enablement"[^>]*>.*?</h2>)', r'\\1\\n' + fig6, content_html, count=1)
            
    elif doc_id == "multi-agent-rag":
        fig_agent = \'''
<div class="doc-figure" id="figure-blackboard-architecture">
  <div class="doc-figure-img-wrap">
    <a href="images/figure_3_1.png" target="_blank" title="Click to view full image">
      <img src="images/figure_3_1.png" alt="Blackboard Multi-Agent Architecture Diagram" loading="lazy">
    </a>
  </div>
  <div class="doc-figure-caption">
    <span><strong>Figure 1:</strong> Native Multi-Agent Architecture with Stateful Circuit Breakers & Blackboard Pattern</span>
    <span style="font-size:11px;color:var(--text-light);">Click image to enlarge</span>
  </div>
</div>\'''
        if '31-the-blackboard-design-pattern' in content_html:
            content_html = re.sub(r'(<h3 id="31-the-blackboard-design-pattern"[^>]*>.*?</h3>)', r'\\1\\n' + fig_agent, content_html, count=1)
        else:
            content_html = fig_agent + '\\n' + content_html'''

if old_logic in code:
    code = code.replace(old_logic, new_logic, 1)
    with open('build_all_sites.py', 'w', encoding='utf-8') as f:
        f.write(code)
    print("Successfully patched figure injection logic!")
else:
    print("Old logic not found for figure injection!")
