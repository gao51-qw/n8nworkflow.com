# Generate ideal customer profile leads & personalized pitches with GPT-4o-mini, Perplexity and Apify

> ![screencaptureneightn011appn8ncloudworkflowBYoMCe7Hcdg2bajF2025101712_23_02.png](fileId:3000)

# n8n Workflow: Automated Lead Generation & Personalized Outreach

## Overview
This n8n workflow automates the entire lead generation and personalized email creation process for businesses. It analyzes a company's profile, identifies ideal customer profiles (ICP), finds matching leads, and generates customized outreach emails.

---

## Workflow Components

### 1. JotForm Trigger
**Purpose:** Form Submission Entry Point

- Captures business information through JotForm (Form ID: 252802732808054)
- Initiates the automation workflow when form is submitted
- Collects company website and business details

---

### 2. Perplexity API Integration
**Purpose:** Company Analysis

- **Method:** POST request to Perplexity AI Search API
- **Function:** Performs detailed research on the submitted company website
- **Output:** Comprehensive business intelligence and market positioning data

---

### 3. ICP Finder (OpenAI GPT-4o-mini)
**Purpose:** Ideal Customer Profile Creation

- **Model:** GPT-4o-mini
- **Role:** Expert client acquisition manager
- **Task:** Analyzes company details and generates best-fit customer profile
- **Input:** Company snippet from Perplexity research
- **Output:** Detailed ICP description

---

### 4. Edit Fields
**Purpose:** Data Transformation

- Extracts and formats the ICP output
- Prepares data for next workflow stage
- Ensures clean data flow between nodes

---

### 5. ICP Industry Finder (OpenAI GPT-4o-mini)
**Purpose:** Industry Classification

- **Model:** GPT-4o-mini
- **Role:** Expert ICP analyzer
- **Task:** Identifies specific business sector matching the ICP
- **Rules:**
  - Returns single industry sector only
  - Uses professional terminology (e.g., "healthcare", "call centre", "plumber")
  - Excludes all SaaS-related companies
  - Avoids generic terms like "technology industry"
- **Output:** Single industry sector name

---

### 6. Leads Generator (Apify API)
**Purpose:** Lead Discovery

- **API:** Local Business Lead Generator by james.logantech
- **Method:** Synchronous run with dataset items retrieval
- **Configuration:**
  - Location: United States
  - Maximum Results: 5 leads
  - Business Types: Based on ICP industry output
- **Output:** List of qualified business leads

---

### 7. Loop Over Items
**Purpose:** Batch Processing

- Processes leads individually
- Enables personalized email creation for each lead
- Controls workflow iteration

---

### 8. Personalized Emails (Apify API)
**Purpose:** Custom Email Generation

- **API:** Pitches Pro by onescales
- **Method:** Synchronous run with dataset items retrieval
- **Configuration:**
  - **Promoting:** Automation services
  - **Benefits:** "Save 10+ hours per week by automating manual tasks"
  - **Goal:** Partnership
  - **Tone:** Professional yet approachable, confident but not pushy
  - **Language:** English
  - **Additional Notes:** Focus on time-saving, avoid technical jargon, include soft CTA
- **Output:** Personalized email for each lead

---

## Data Flow
```
JotForm → Perplexity Analysis → ICP Generation → Field Formatting → 
Industry Classification → Lead Discovery → Batch Processing → Email Personalization
```

---

## Key Features

✅ **Fully Automated:** No manual intervention required  
✅ **AI-Powered:** Uses GPT-4o-mini for intelligent ICP analysis  
✅ **Personalized:** Custom emails for each prospect  
✅ **Scalable:** Processes multiple leads in batches  
✅ **Time-Saving:** Automates 10+ hours of manual work per week

---

## Requirements

- **APIs Required:**
  - Perplexity AI (with Authorization token)
  - OpenAI (GPT-4o-mini access)
  - Apify (2 actors: Local Business Lead Generator & Pitches Pro)
- **Form Platform:** JotForm account
- **n8n Instance:** Self-hosted or cloud

---






## 📊 Basic Information

- **Workflow ID:** 9794
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 92
- **Downloads:** 9
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9794)

## 👤 Author

- **Name:** neightn011
- **Username:** @neightn011

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **jotFormTrigger** 
- **set** 
- **splitInBatches** 
- **stickyNote** (×6)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
