window.DOC_SEARCH_INDEX = [
  {
    "title": "Overview: Oracle AWR Interpretation Guide",
    "url": "index.html#overview",
    "category": "Overview",
    "snippet": "A Top-Down Diagnostic Approach for Database Performance Tuning and Wait Event Root-Cause Analysis.",
    "keywords": [
      "DIAGNOSTICS & TUNING",
      "Subrata Sarkar",
      "Overview",
      "Outcomes"
    ]
  },
  {
    "title": "Goal: Calculate Average Active Sessions (AAS = DB Time / Elapsed Time) to measure core load instantly",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Calculate Average Active Sessions (AAS = DB Time / Elapsed Time) to measure core load instantly",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Diagnose Top Timed Foreground Events (db file sequential read, log file sync, cache buffers chains)",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Diagnose Top Timed Foreground Events (db file sequential read, log file sync, cache buffers chains)",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Correlate wait events directly to offending SQL_IDs in SQL Statistics sections",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Correlate wait events directly to offending SQL_IDs in SQL Statistics sections",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Extract exact historical execution plans from AWR memory via DBMS_XPLAN.DISPLAY_AWR",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Extract exact historical execution plans from AWR memory via DBMS_XPLAN.DISPLAY_AWR",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Oracle AWR Interpretation Guide",
    "url": "index.html#oracle-awr-interpretation-guide",
    "category": "Section",
    "snippet": "Technical section on Oracle AWR Interpretation Guide in AWR Interpretation Guide",
    "keywords": [
      "Oracle AWR Interpretation Guide",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "1. Context & Overhead (Header & Load Profile)",
    "url": "index.html#1-context-overhead-header-load-profile",
    "category": "Section",
    "snippet": "Technical section on 1. Context & Overhead (Header & Load Profile) in AWR Interpretation Guide",
    "keywords": [
      "1. Context & Overhead (Header & Load Profile)",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "Key Load Profile Metrics:",
    "url": "index.html#key-load-profile-metrics",
    "category": "Subsection",
    "snippet": "Technical section on Key Load Profile Metrics: in AWR Interpretation Guide",
    "keywords": [
      "Key Load Profile Metrics:",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "2. Top Timed Foreground Events",
    "url": "index.html#2-top-timed-foreground-events",
    "category": "Section",
    "snippet": "Technical section on 2. Top Timed Foreground Events in AWR Interpretation Guide",
    "keywords": [
      "2. Top Timed Foreground Events",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "3. SQL Statistics Section",
    "url": "index.html#3-sql-statistics-section",
    "category": "Section",
    "snippet": "Technical section on 3. SQL Statistics Section in AWR Interpretation Guide",
    "keywords": [
      "3. SQL Statistics Section",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "4. Memory & I/O Advisories",
    "url": "index.html#4-memory-io-advisories",
    "category": "Section",
    "snippet": "Technical section on 4. Memory & I/O Advisories in AWR Interpretation Guide",
    "keywords": [
      "4. Memory & I/O Advisories",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "5. Diagnostic Workflow Summary",
    "url": "index.html#5-diagnostic-workflow-summary",
    "category": "Section",
    "snippet": "Technical section on 5. Diagnostic Workflow Summary in AWR Interpretation Guide",
    "keywords": [
      "5. Diagnostic Workflow Summary",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "\ud83d\udca1 Key Takeaway",
    "url": "index.html#-key-takeaway",
    "category": "Subsection",
    "snippet": "Technical section on \ud83d\udca1 Key Takeaway in AWR Interpretation Guide",
    "keywords": [
      "\ud83d\udca1 Key Takeaway",
      "DIAGNOSTICS & TUNING"
    ]
  },
  {
    "title": "FAQ: How is Average Active Sessions (AAS) calculated and interpreted?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "AAS = DB Time / Elapsed Time. If AAS is less than the number of available CPU cores on the host, the database is operati",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: What is the difference between 'db file sequential read' and 'db file scattered read'?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "'db file sequential read' represents single-block I/O, typically caused by index lookups. 'db file scattered read' repre",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: How do you resolve high 'log file sync' wait events?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "High log file sync indicates commit latency. Resolve by eliminating commits inside loops (batch commits), optimizing red",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: How do you extract the exact historical execution plan for an offending SQL ID?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "Execute SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_AWR('your_sql_id_here')); directly against the database to view the histo",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  }
];