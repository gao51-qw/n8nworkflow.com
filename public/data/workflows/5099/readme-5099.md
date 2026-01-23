# TalentFlow AI – Instantly evaluate applicant's GitHub, LinkedIn, using  AI

> # AI-Powered Job Application Screening Workflow

## Who Is This For?

This template is ideal for:
- **HR teams**
- **Recruiters**
- **Hiring managers**

Who want to automate the screening of job applicants. If you collect candidate data via JotForm and want an AI‑powered, multi‑source evaluation—without manual copy‑paste—this workflow is for you.

## What Problem Does This Solve?

Manually reviewing:
- LinkedIn profiles
- GitHub repos
- LeetCode stats
- Resume PDFs

Is **time‑consuming** and **error‑prone**. This workflow:
1. Centralizes all candidate data
2. Scores each dimension against specific job requirements
3. Appends results to Google Sheets
4. Helps make data‑driven hiring decisions faster

## What This Workflow Does

### 1. Trigger on New JotForm Submission
Captures candidate name, email, social URLs, resume link, and **job description**  
*(Pro Tip: Add hidden field in JotForm to pass job requirements)*

### 2. Extract & Normalize Usernames
Parses LinkedIn, GitHub, and LeetCode handles

### 3. Scrape & Format Data
- **LinkedIn** → profile & latest posts via ScrapingDog & Apify
- **GitHub** → profile, repos, and contribution metrics via GitHub GraphQL
- **LeetCode** → submission stats & rankings via LeetCode GraphQL
- **Resume** → converts PDF to text with PDF.co

### 4. AI‑Powered Evaluation
Uses LangChain agents on OpenRouter to:
- Generate fit scores (1–10) **based on job description**
- Provide justifications for each source
- Analyze candidate suitability against specific role requirements

### 5. Merge & Append
Consolidates scores and feedback → writes new row to Google Sheets with hyperlinks and totals

## Setup

### JotForm Configuration
1. Create your job application form
2. **Add Hidden Field**:
   - Name: `job_description`
   - Value: [Paste full job description here]
   *(This enables AI to evaluate candidates against specific role requirements)*
3. Create fields matching the workflow requirements
![image.png](fileId:1592)

### Required Credentials/Variables
- JotForm API key
- SCRAPINGDOG_API_KEY & Apify token
- GitHub personal access token (read‑only)
- PDF.co API key
- OpenRouter API key

### Configuration Steps
1. **Google Sheets**
   - Create or select spreadsheet
   - Grant n8n access
2. **Node Organization**
   - All nodes renamed for clarity
   - Sticky notes explain prerequisites

## How to Customize

### 1. Job-Specific Evaluation
- Include hidden `job_description` field in JotForm
- AI will automatically analyze candidates against these requirements

### 2. Add/Edit Fields
Use `Edit Fields` node to map your form questions

### 3. Adjust Scoring
Tweak agent prompts:
- `linkedin evaluation`
- `github evaluation`
- etc.

### 4. Extend Sources
Insert new branches (e.g., Stack Overflow) by following existing patterns

## Result

Transforms raw candidate submissions into actionable insights—evaluating applicants against specific job requirements and reducing screening time from hours to minutes with consistent, unbiased evaluations.

## 📊 Basic Information

- **Workflow ID:** 5099
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 235
- **Downloads:** 23
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5099)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **noOp** (×3)
- **jotFormTrigger** 
- **httpRequest** (×6)
- **code** (×7)
- **if** (×3)
- **n8n-nodes-pdfco.PDFco Api** 
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
