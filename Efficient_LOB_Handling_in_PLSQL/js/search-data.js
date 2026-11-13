window.DOC_SEARCH_INDEX = [
  {
    "title": "Overview: Efficient LOB Handling in PL/SQL",
    "url": "index.html#overview",
    "category": "Overview",
    "snippet": "PGA Memory Management, Piecewise Processing, SecureFiles Storage Optimization, and Zero-Copy Parameter Passing.",
    "keywords": [
      "PL/SQL PERFORMANCE",
      "Subrata Sarkar",
      "Overview",
      "Outcomes"
    ]
  },
  {
    "title": "Goal: Prevent PGA memory exhaustion and temp tablespace leaks when processing multi-GB LOBs",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Prevent PGA memory exhaustion and temp tablespace leaks when processing multi-GB LOBs",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Accelerate LOB concatenation by up to 100x using DBMS_LOB.WRITEAPPEND instead of || in loops",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Accelerate LOB concatenation by up to 100x using DBMS_LOB.WRITEAPPEND instead of || in loops",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Stream multi-gigabyte files piecewise in 32 KB chunks to external REST endpoints and socket streams",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Stream multi-gigabyte files piecewise in 32 KB chunks to external REST endpoints and socket streams",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Configure SecureFiles storage with inline compression, deduplication, and caching",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Configure SecureFiles storage with inline compression, deduplication, and caching",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Efficient LOB Handling in PL/SQL",
    "url": "index.html#efficient-lob-handling-in-plsql",
    "category": "Section",
    "snippet": "Technical section on Efficient LOB Handling in PL/SQL in Efficient LOB Handling",
    "keywords": [
      "Efficient LOB Handling in PL/SQL",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "1. Fast Reference Matrix",
    "url": "index.html#1-fast-reference-matrix",
    "category": "Section",
    "snippet": "Technical section on 1. Fast Reference Matrix in Efficient LOB Handling",
    "keywords": [
      "1. Fast Reference Matrix",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "2. High-Performance Implementation Patterns",
    "url": "index.html#2-high-performance-implementation-patterns",
    "category": "Section",
    "snippet": "Technical section on 2. High-Performance Implementation Patterns in Efficient LOB Handling",
    "keywords": [
      "2. High-Performance Implementation Patterns",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Technique A: Avoid String Concatenation Operator (||) in Loops",
    "url": "index.html#technique-a-avoid-string-concatenation-operator-in-loops",
    "category": "Subsection",
    "snippet": "Technical section on Technique A: Avoid String Concatenation Operator (||) in Loops in Efficient LOB Handling",
    "keywords": [
      "Technique A: Avoid String Concatenation Operator (||) in Loops",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Technique B: Chunked / Piecewise Reading",
    "url": "index.html#technique-b-chunked-piecewise-reading",
    "category": "Subsection",
    "snippet": "Technical section on Technique B: Chunked / Piecewise Reading in Efficient LOB Handling",
    "keywords": [
      "Technique B: Chunked / Piecewise Reading",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "Technique C: Parameter Passing via NOCOPY",
    "url": "index.html#technique-c-parameter-passing-via-nocopy",
    "category": "Subsection",
    "snippet": "Technical section on Technique C: Parameter Passing via NOCOPY in Efficient LOB Handling",
    "keywords": [
      "Technique C: Parameter Passing via NOCOPY",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "3. Physical Storage Level Optimization (SecureFiles)",
    "url": "index.html#3-physical-storage-level-optimization-securefiles",
    "category": "Section",
    "snippet": "Technical section on 3. Physical Storage Level Optimization (SecureFiles) in Efficient LOB Handling",
    "keywords": [
      "3. Physical Storage Level Optimization (SecureFiles)",
      "PL/SQL PERFORMANCE"
    ]
  },
  {
    "title": "FAQ: Why does string concatenation (||) inside loops cause severe PGA memory exhaustion?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "The concatenation operator (||) creates an intermediate temporary LOB locator on every single iteration. Inside a loop o",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: What is the optimal chunk size when performing piecewise LOB reading?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "32,767 bytes (32 KB) is the maximum single buffer allocation size for VARCHAR2/RAW in PL/SQL. Reading in 32 KB chunks vi",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: Why must LOB parameters be passed using the NOCOPY hint?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "By default, PL/SQL passes IN OUT parameters by value, creating a complete local copy of the parameter upon procedure ent",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: What are the advantages of SecureFiles over legacy BasicFiles?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "SecureFiles enables inline storage for payloads under 4 KB (ENABLE STORAGE IN ROW), advanced block-level compression (CO",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  }
];