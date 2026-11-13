window.DOC_SEARCH_INDEX = [
  {
    "title": "Overview: DATE vs. TIMESTAMP Technical Comparison",
    "url": "index.html#overview",
    "category": "Overview",
    "snippet": "Precision, Time Zone Variants, Byte Storage Layout, and Datetime Arithmetic Behavior.",
    "keywords": [
      "STORAGE & DATATYPES",
      "Subrata Sarkar",
      "Overview",
      "Outcomes"
    ]
  },
  {
    "title": "Goal: Select the exact datatype for standard business entities vs event tracing and benchmarking",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Select the exact datatype for standard business entities vs event tracing and benchmarking",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Understand sub-second precision differences (Whole Seconds vs up to 9-digit Nanoseconds)",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Understand sub-second precision differences (Whole Seconds vs up to 9-digit Nanoseconds)",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Configure TIMESTAMP WITH TIME ZONE (TSTZ) vs LOCAL TIME ZONE (TSLTZ) for global auditing",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Configure TIMESTAMP WITH TIME ZONE (TSTZ) vs LOCAL TIME ZONE (TSLTZ) for global auditing",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "Goal: Predict exact arithmetic results: numeric difference in DAYS vs INTERVAL DAY TO SECOND",
    "url": "index.html#user-goals",
    "category": "User Goal",
    "snippet": "Predict exact arithmetic results: numeric difference in DAYS vs INTERVAL DAY TO SECOND",
    "keywords": [
      "Goal",
      "Task",
      "How to"
    ]
  },
  {
    "title": "DATE vs. TIMESTAMP Technical Comparison",
    "url": "index.html#date-vs-timestamp-technical-comparison",
    "category": "Section",
    "snippet": "Technical section on DATE vs. TIMESTAMP Technical Comparison in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "DATE vs. TIMESTAMP Technical Comparison",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "1. Technical Comparison Matrix",
    "url": "index.html#1-technical-comparison-matrix",
    "category": "Section",
    "snippet": "Technical section on 1. Technical Comparison Matrix in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "1. Technical Comparison Matrix",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "2. Key Architectural Differences",
    "url": "index.html#2-key-architectural-differences",
    "category": "Section",
    "snippet": "Technical section on 2. Key Architectural Differences in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "2. Key Architectural Differences",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "A. Fractional Second Precision",
    "url": "index.html#a-fractional-second-precision",
    "category": "Subsection",
    "snippet": "Technical section on A. Fractional Second Precision in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "A. Fractional Second Precision",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "B. Time Zone Handling Variants",
    "url": "index.html#b-time-zone-handling-variants",
    "category": "Subsection",
    "snippet": "Technical section on B. Time Zone Handling Variants in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "B. Time Zone Handling Variants",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "C. Internal Byte Storage Layout",
    "url": "index.html#c-internal-byte-storage-layout",
    "category": "Subsection",
    "snippet": "Technical section on C. Internal Byte Storage Layout in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "C. Internal Byte Storage Layout",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "D. Datetime Arithmetic Behavior",
    "url": "index.html#d-datetime-arithmetic-behavior",
    "category": "Subsection",
    "snippet": "Technical section on D. Datetime Arithmetic Behavior in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "D. Datetime Arithmetic Behavior",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "Best Practices & Selection Criteria",
    "url": "index.html#best-practices-selection-criteria",
    "category": "Subsection",
    "snippet": "Technical section on Best Practices & Selection Criteria in DATE vs TIMESTAMP Comparison",
    "keywords": [
      "Best Practices & Selection Criteria",
      "STORAGE & DATATYPES"
    ]
  },
  {
    "title": "FAQ: What is the storage footprint difference between DATE and TIMESTAMP?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "Standard DATE always consumes a fixed 7 bytes (Century, Year, Month, Day, Hour, Minute, Second). TIMESTAMP(0) also consu",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: Why does DATE subtraction differ from TIMESTAMP subtraction?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "Subtracting two DATE values yields a numeric value representing the difference in DAYS (e.g. 0.5 = 12 hours). Subtractin",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: When should TIMESTAMP WITH LOCAL TIME ZONE (TSLTZ) be preferred over TSTZ?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "TSLTZ normalizes data to the database time zone upon storage and automatically converts to the querying client's session",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  },
  {
    "title": "FAQ: What happens when casting a high-precision TIMESTAMP to a DATE?",
    "url": "faq.html",
    "category": "FAQ",
    "snippet": "CAST(timestamp_val AS DATE) strips sub-second values and rounds to the nearest whole second.",
    "keywords": [
      "FAQ",
      "Question",
      "Answer",
      "Troubleshooting"
    ]
  }
];