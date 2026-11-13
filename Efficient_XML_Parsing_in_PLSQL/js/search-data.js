window.DOC_SEARCH_INDEX = [
  {
    "title": "Overview: Efficient XML Parsing in PL/SQL",
    "url": "index.html#overview",
    "category": "Overview",
    "snippet": "Vectorized Processing, Binary XML, Streaming APIs (DBMS_XMLSTORE), and Memory Optimization.",
    "keywords": [
      "PL/SQL PERFORMANCE",
      "Subrata Sarkar",
      "Overview",
      "Outcomes"
    ]
  },
  {
    "title": "Goal: Avoid DOM-based 5x-10x PGA memory bloat when parsing large XML payloads",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Avoid DOM-based 5x-10x PGA memory bloat when parsing large XML payloads",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Load bulk relational data from XML using set-based SQL (XMLTable + INSERT INTO ... SELECT)",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Load bulk relational data from XML using set-based SQL (XMLTable + INSERT INTO ... SELECT)",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Stream massive XML files (>10 MB to GBs) directly to database tables via DBMS_XMLSTORE",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Stream massive XML files (>10 MB to GBs) directly to database tables via DBMS_XMLSTORE",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Store persistent XML as pre-tokenized SecureFile Binary XML for high-frequency reads",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Store persistent XML as pre-tokenized SecureFile Binary XML for high-frequency reads",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Efficient XML Parsing in PL/SQL",
    "url": "index.html#efficient-xml-parsing-in-plsql",
    "category": "Section",
    "snippet": "Technical section on Efficient XML Parsing in PL/SQL in Efficient XML Parsing",
    "keywords": [
      "Efficient XML Parsing in PL/SQL",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "1. Fast XML Processing Decision Matrix",
    "url": "index.html#1-fast-xml-processing-decision-matrix",
    "category": "Section",
    "snippet": "Technical section on 1. Fast XML Processing Decision Matrix in Efficient XML Parsing",
    "keywords": [
      "1. Fast XML Processing Decision Matrix",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "2. High-Performance Implementation Techniques",
    "url": "index.html#2-high-performance-implementation-techniques",
    "category": "Section",
    "snippet": "Technical section on 2. High-Performance Implementation Techniques in Efficient XML Parsing",
    "keywords": [
      "2. High-Performance Implementation Techniques",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Option A: Direct SQL Set-Based Parsing (XMLTable)",
    "url": "index.html#option-a-direct-sql-set-based-parsing-xmltable",
    "category": "Subsection",
    "snippet": "Technical section on Option A: Direct SQL Set-Based Parsing (XMLTable) in Efficient XML Parsing",
    "keywords": [
      "Option A: Direct SQL Set-Based Parsing (XMLTable)",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Option B: Memory-Optimized Streaming (DBMSXMLSTORE)",
    "url": "index.html#option-b-memory-optimized-streaming-dbmsxmlstore",
    "category": "Subsection",
    "snippet": "Technical section on Option B: Memory-Optimized Streaming (DBMSXMLSTORE) in Efficient XML Parsing",
    "keywords": [
      "Option B: Memory-Optimized Streaming (DBMSXMLSTORE)",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Option C: SecureFile Binary XML Storage Layout",
    "url": "index.html#option-c-securefile-binary-xml-storage-layout",
    "category": "Subsection",
    "snippet": "Technical section on Option C: SecureFile Binary XML Storage Layout in Efficient XML Parsing",
    "keywords": [
      "Option C: SecureFile Binary XML Storage Layout",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Option D: Targeted Scalar Extraction (XMLCast + XQuery)",
    "url": "index.html#option-d-targeted-scalar-extraction-xmlcast-xquery",
    "category": "Subsection",
    "snippet": "Technical section on Option D: Targeted Scalar Extraction (XMLCast + XQuery) in Efficient XML Parsing",
    "keywords": [
      "Option D: Targeted Scalar Extraction (XMLCast + XQuery)",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Key Architectural Guidelines",
    "url": "index.html#key-architectural-guidelines",
    "category": "Subsection",
    "snippet": "Technical section on Key Architectural Guidelines in Efficient XML Parsing",
    "keywords": [
      "Key Architectural Guidelines",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "FAQ: When should XMLTable be chosen over DBMS_XMLSTORE?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "XMLTable is the standard choice for set-based SQL transformations and relational loading where column data needs data ty",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: Why is DOM-based parsing (DBMS_XMLDOM) discouraged for large payloads?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "DOM parsers construct an entire in-memory tree representation of the XML document, typically consuming 5x to 10x the phy",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: What is the benefit of storing XML columns as SecureFile Binary XML?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "Binary XML stores tokenized, pre-parsed XML structures directly on disk. Queries avoid runtime XML parsing, and the opti",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: How does XMLCast with XMLQuery optimize single element extraction?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "Instead of parsing the entire document tree, XMLCast evaluates the target XPath expression directly to return a native S",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  }
];