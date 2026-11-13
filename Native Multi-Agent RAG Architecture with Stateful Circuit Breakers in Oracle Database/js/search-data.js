window.DOC_SEARCH_INDEX = [
  {
    "title": "Overview: Native Multi-Agent RAG Architecture with Stateful Circuit Breakers in Oracle Database",
    "url": "index.html#overview",
    "category": "Overview",
    "snippet": "Database-Native, Asynchronous Multi-Agent RAG with Decoupled Blackboard Design and Stateful Circuit Breakers.",
    "keywords": [
      "DATABASE AI & RAG",
      "Subrata Sarkar",
      "Overview",
      "Outcomes"
    ]
  },
  {
    "title": "Goal: Eliminate external Python server bloat (LangGraph/LangChain) by running agentic workflows natively in Oracle DB",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Eliminate external Python server bloat (LangGraph/LangChain) by running agentic workflows natively in Oracle DB",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Implement a decoupled Blackboard Pattern using AGENT_BLACKBOARD table with FOR UPDATE SKIP LOCKED",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Implement a decoupled Blackboard Pattern using AGENT_BLACKBOARD table with FOR UPDATE SKIP LOCKED",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Orchestrate collaborative Search, Synthesizer, and Critic agents with hallucination feedback loops",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Orchestrate collaborative Search, Synthesizer, and Critic agents with hallucination feedback loops",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Protect database sessions from external LLM outages using a stateful 3-state Circuit Breaker (CLOSED/OPEN/HALF-OPEN)",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Protect database sessions from external LLM outages using a stateful 3-state Circuit Breaker (CLOSED/OPEN/HALF-OPEN)",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "\ud83d\udcc4 TECHNICAL REPORT",
    "url": "index.html#-technical-report",
    "category": "Section",
    "snippet": "Technical section on \ud83d\udcc4 TECHNICAL REPORT in Native Multi-Agent RAG Architecture",
    "keywords": [
      "\ud83d\udcc4 TECHNICAL REPORT",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "1. Executive Summary",
    "url": "index.html#1-executive-summary",
    "category": "Section",
    "snippet": "Technical section on 1. Executive Summary in Native Multi-Agent RAG Architecture",
    "keywords": [
      "1. Executive Summary",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "2. Problem Statement",
    "url": "index.html#2-problem-statement",
    "category": "Section",
    "snippet": "Technical section on 2. Problem Statement in Native Multi-Agent RAG Architecture",
    "keywords": [
      "2. Problem Statement",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "3. System Architecture & Methodology",
    "url": "index.html#3-system-architecture-methodology",
    "category": "Section",
    "snippet": "Technical section on 3. System Architecture & Methodology in Native Multi-Agent RAG Architecture",
    "keywords": [
      "3. System Architecture & Methodology",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "3.1 The \"Blackboard\" Design Pattern",
    "url": "index.html#31-the-blackboard-design-pattern",
    "category": "Subsection",
    "snippet": "Technical section on 3.1 The \"Blackboard\" Design Pattern in Native Multi-Agent RAG Architecture",
    "keywords": [
      "3.1 The \"Blackboard\" Design Pattern",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "3.2 Implemented Agents",
    "url": "index.html#32-implemented-agents",
    "category": "Subsection",
    "snippet": "Technical section on 3.2 Implemented Agents in Native Multi-Agent RAG Architecture",
    "keywords": [
      "3.2 Implemented Agents",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "4. Key Advanced Features",
    "url": "index.html#4-key-advanced-features",
    "category": "Section",
    "snippet": "Technical section on 4. Key Advanced Features in Native Multi-Agent RAG Architecture",
    "keywords": [
      "4. Key Advanced Features",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "4.1 Stateful Circuit Breaker",
    "url": "index.html#41-stateful-circuit-breaker",
    "category": "Subsection",
    "snippet": "Technical section on 4.1 Stateful Circuit Breaker in Native Multi-Agent RAG Architecture",
    "keywords": [
      "4.1 Stateful Circuit Breaker",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "4.2 Asynchronous True Autonomy via DBMSSCHEDULER",
    "url": "index.html#42-asynchronous-true-autonomy-via-dbmsscheduler",
    "category": "Subsection",
    "snippet": "Technical section on 4.2 Asynchronous True Autonomy via DBMSSCHEDULER in Native Multi-Agent RAG Architecture",
    "keywords": [
      "4.2 Asynchronous True Autonomy via DBMSSCHEDULER",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "5. Successful Execution Evidence & Results",
    "url": "index.html#5-successful-execution-evidence-results",
    "category": "Section",
    "snippet": "Technical section on 5. Successful Execution Evidence & Results in Native Multi-Agent RAG Architecture",
    "keywords": [
      "5. Successful Execution Evidence & Results",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "6. Recommendations & Next Steps",
    "url": "index.html#6-recommendations-next-steps",
    "category": "Section",
    "snippet": "Technical section on 6. Recommendations & Next Steps in Native Multi-Agent RAG Architecture",
    "keywords": [
      "6. Recommendations & Next Steps",
      "DATABASE AI & RAG"
    ]
  },
  {
    "title": "FAQ: How does the Blackboard pattern orchestrate agents inside Oracle Database?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "The AGENT_BLACKBOARD table acts as the shared state store. Requests enter with an initialized status. Autonomous backgro",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: How do background agents achieve autonomous execution without deadlocks?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "Each agent runs as an independent DBMS_SCHEDULER job executing procedures with SELECT ... FOR UPDATE SKIP LOCKED. This e",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: What is the role of the Critic Agent?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "The Critic Agent evaluates the Synthesizer Agent's output against the source document chunks retrieved by the Search Age",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: How does the stateful Circuit Breaker protect the database from LLM outages?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "If external API calls fail consecutively beyond a configured threshold (e.g. 3 failures), the circuit breaker transition",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  }
];