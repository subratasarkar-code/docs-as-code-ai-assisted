window.HUB_SEARCH_INDEX = [
  {
    "title": "AI Enablement of Oracle Database Using Oracle 26ai and Oracle APEX 24.2",
    "url": "AI Enablement of Oracle Database/index.html",
    "pdf_url": "AI Enablement of Oracle Database/AI Enablement of Oracle Database.pdf",
    "category": "DATABASE AI & RAG",
    "author": "Subrata Sarkar",
    "snippet": "Evaluate and deploy in-database AI capabilities, Vector Embeddings, and Retrieval-Augmented Generation (RAG) with Oracle APEX 24.2.",
    "goals": [
      "Enable natural language querying over unstructured enterprise documents",
      "Store and query vector embeddings natively inside Oracle Database 26ai",
      "Integrate Oracle APEX 24.2 with OpenAI embeddings and LLM prompts",
      "Eliminate external vector database silos by co-locating AI with business data"
    ]
  },
  {
    "title": "Efficient LOB Handling in PL/SQL",
    "url": "Efficient_LOB_Handling_in_PLSQL/index.html",
    "pdf_url": "Efficient_LOB_Handling_in_PLSQL/Efficient_LOB_Handling_in_PLSQL.pdf",
    "category": "PL/SQL PERFORMANCE",
    "author": "Subrata Sarkar",
    "snippet": "PGA Memory Management, Piecewise Processing, SecureFiles Storage Optimization, and Zero-Copy Parameter Passing.",
    "goals": [
      "Prevent PGA memory exhaustion and temp tablespace leaks when processing multi-GB LOBs",
      "Accelerate LOB concatenation by up to 100x using DBMS_LOB.WRITEAPPEND instead of || in loops",
      "Stream multi-gigabyte files piecewise in 32 KB chunks to external REST endpoints and socket streams",
      "Configure SecureFiles storage with inline compression, deduplication, and caching"
    ]
  },
  {
    "title": "Efficient XML Parsing in PL/SQL",
    "url": "Efficient_XML_Parsing_in_PLSQL/index.html",
    "pdf_url": "Efficient_XML_Parsing_in_PLSQL/Efficient_XML_Parsing_in_PLSQL.pdf",
    "category": "PL/SQL PERFORMANCE",
    "author": "Subrata Sarkar",
    "snippet": "Vectorized Processing, Binary XML, Streaming APIs (DBMS_XMLSTORE), and Memory Optimization.",
    "goals": [
      "Avoid DOM-based 5x-10x PGA memory bloat when parsing large XML payloads",
      "Load bulk relational data from XML using set-based SQL (XMLTable + INSERT INTO ... SELECT)",
      "Stream massive XML files (>10 MB to GBs) directly to database tables via DBMS_XMLSTORE",
      "Store persistent XML as pre-tokenized SecureFile Binary XML for high-frequency reads"
    ]
  },
  {
    "title": "Expert Oracle PL/SQL Performance Tuning & High-Speed Architectures",
    "url": "Expert Oracle PLSQL Performance Tuning Case Study/index.html",
    "pdf_url": "Expert Oracle PLSQL Performance Tuning Case Study/Expert Oracle PLSQL Performance Tuning Case Study.pdf",
    "category": "ENTERPRISE CASE STUDY",
    "author": "Subrata Sarkar, Senior PL/SQL & APEX Developer",
    "snippet": "An Enterprise Case Study on High-Throughput Subsystem Engineering in High-Volume Financial Systems.",
    "goals": [
      "Eradicate iterative row-by-row bottlenecks using BULK COLLECT with LIMIT 5000 and FORALL SAVE EXCEPTIONS",
      "Stream high-speed financial analytics using Pipelined Table Functions without PGA exhaustion",
      "Prevent silent index-disabling table scans caused by implicit datatype coercion",
      "Scale asynchronous batch jobs up to 70% faster using DBMS_PARALLEL_EXECUTE and DBMS_SCHEDULER"
    ]
  },
  {
    "title": "Native Multi-Agent RAG Architecture with Stateful Circuit Breakers in Oracle Database",
    "url": "Native Multi-Agent RAG Architecture with Stateful Circuit Breakers in Oracle Database/index.html",
    "pdf_url": "Native Multi-Agent RAG Architecture with Stateful Circuit Breakers in Oracle Database/Native Multi-Agent RAG Architecture with Stateful Circuit Breakers in Oracle Database.pdf",
    "category": "DATABASE AI & RAG",
    "author": "Subrata Sarkar",
    "snippet": "Database-Native, Asynchronous Multi-Agent RAG with Decoupled Blackboard Design and Stateful Circuit Breakers.",
    "goals": [
      "Eliminate external Python server bloat (LangGraph/LangChain) by running agentic workflows natively in Oracle DB",
      "Implement a decoupled Blackboard Pattern using AGENT_BLACKBOARD table with FOR UPDATE SKIP LOCKED",
      "Orchestrate collaborative Search, Synthesizer, and Critic agents with hallucination feedback loops",
      "Protect database sessions from external LLM outages using a stateful 3-state Circuit Breaker (CLOSED/OPEN/HALF-OPEN)"
    ]
  },
  {
    "title": "Oracle AWR Interpretation Guide",
    "url": "Oracle_AWR_Interpretation_Guide/index.html",
    "pdf_url": "Oracle_AWR_Interpretation_Guide/Oracle_AWR_Interpretation_Guide.pdf",
    "category": "DIAGNOSTICS & TUNING",
    "author": "Subrata Sarkar",
    "snippet": "A Top-Down Diagnostic Approach for Database Performance Tuning and Wait Event Root-Cause Analysis.",
    "goals": [
      "Calculate Average Active Sessions (AAS = DB Time / Elapsed Time) to measure core load instantly",
      "Diagnose Top Timed Foreground Events (db file sequential read, log file sync, cache buffers chains)",
      "Correlate wait events directly to offending SQL_IDs in SQL Statistics sections",
      "Extract exact historical execution plans from AWR memory via DBMS_XPLAN.DISPLAY_AWR"
    ]
  },
  {
    "title": "DATE vs. TIMESTAMP Technical Comparison",
    "url": "Oracle_DATE_vs_TIMESTAMP_Comparison-v2/index.html",
    "pdf_url": "Oracle_DATE_vs_TIMESTAMP_Comparison-v2/Oracle_DATE_vs_TIMESTAMP_Comparison-v2.pdf",
    "category": "STORAGE & DATATYPES",
    "author": "Subrata Sarkar",
    "snippet": "Precision, Time Zone Variants, Byte Storage Layout, and Datetime Arithmetic Behavior.",
    "goals": [
      "Select the exact datatype for standard business entities vs event tracing and benchmarking",
      "Understand sub-second precision differences (Whole Seconds vs up to 9-digit Nanoseconds)",
      "Configure TIMESTAMP WITH TIME ZONE (TSTZ) vs LOCAL TIME ZONE (TSLTZ) for global auditing",
      "Predict exact arithmetic results: numeric difference in DAYS vs INTERVAL DAY TO SECOND"
    ]
  },
  {
    "title": "Oracle Explain Plan Tuning Guide",
    "url": "Oracle_Explain_Plan_Tuning_Guide/index.html",
    "pdf_url": "Oracle_Explain_Plan_Tuning_Guide/Oracle_Explain_Plan_Tuning_Guide.pdf",
    "category": "DIAGNOSTICS & TUNING",
    "author": "Subrata Sarkar",
    "snippet": "A Practical Reference for Reading Execution Plans, Execution Order, and Pinpointing Performance Red Flags.",
    "goals": [
      "Master execution order reading: Deepest indented step -> Siblings top-to-bottom -> Parent bubble up",
      "Capture actual runtime execution statistics using GATHER_PLAN_STATISTICS and ALLSTATS LAST",
      "Identify and eliminate Cardinality Misestimates (E-Rows vs A-Rows disparity) - the #1 silent killer",
      "Detect and rectify dangerous plan operations: Unindexed Full Scans, Cartesian joins, and Index Full Scans"
    ]
  },
  {
    "title": "Accelerating Real-Time Enterprise Analytics: Oracle Database In-Memory",
    "url": "Oracle_In_Memory_Case_Study_Final/index.html",
    "pdf_url": "Oracle_In_Memory_Case_Study_Final/Oracle_In_Memory_Case_Study_Final.pdf",
    "category": "ENTERPRISE CASE STUDY",
    "author": "Subrata Sarkar, Senior PL/SQL & APEX Developer",
    "snippet": "A Technical Case Study on Dual-Format Architecture Deployment and Mixed-Workload Optimization.",
    "goals": [
      "Unify OLTP transactional responsiveness and OLAP analytics on a single database instance",
      "Achieve 10x to 100x query acceleration for scan-intensive reports without application rewrites",
      "Deploy vectorized SIMD in-memory bloom filters to convert multi-table joins from minutes to fractions of a second",
      "Configure policy-driven Automatic Data Optimization (ADO) to tier hot, warm, and cold data"
    ]
  },
  {
    "title": "PL/SQL Collection Types Comparison",
    "url": "PLSQL_Collection_Types_Comparison/index.html",
    "pdf_url": "PLSQL_Collection_Types_Comparison/PLSQL_Collection_Types_Comparison.pdf",
    "category": "PL/SQL ARCHITECTURE",
    "author": "Subrata Sarkar",
    "snippet": "Associative Arrays, Varrays, and Nested Tables - Architectural Analysis and Selection Decision Tree.",
    "goals": [
      "Compare subscript types, sparsity, storage locations, and column persistence across all 3 collection types",
      "Implement high-performance in-memory caching and key-value mapping using Associative Arrays",
      "Store fixed-size ordered audit sequences in database columns using Varrays",
      "Execute powerful SQL set operations (MULTISET UNION, MEMBER OF, CARDINALITY) with Nested Tables"
    ]
  },
  {
    "title": "Technical Report: Oracle Machine Learning (OML) Proof of Concept",
    "url": "Technical Report: Oracle Machine Learning (OML) Proof of Concept/index.html",
    "pdf_url": "Technical Report: Oracle Machine Learning (OML) Proof of Concept/Technical Report: Oracle Machine Learning (OML) Proof of Concept.pdf",
    "category": "ADVANCED ANALYTICS",
    "author": "Subrata Sarkar",
    "snippet": "In-Database Claim Denial Predictive Modeling using Generalized Linear Model (GLM) Classification and DBMS_DATA_MINING.",
    "goals": [
      "Eliminate data egress to external Python runtimes by building and executing ML models inside Oracle DB",
      "Engineer clean feature pipelines from transactional claims (rxc_claim_features_v) with NVL and flag logic",
      "Configure, compile, and train Generalized Linear Models (GLM) using DBMS_DATA_MINING.CREATE_MODEL",
      "Perform dynamic real-time scoring in SQL using PREDICTION() and PREDICTION_PROBABILITY()"
    ]
  }
];