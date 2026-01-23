# Audit Website Security Headers with AI Remediation and Google Sheets Reporting

> # What It Is

  An automated workflow for auditing website security headers and generating
  comprehensive security reports.

  The workflow consists of three main phases:

  1. Perform Security Scan
  2. Save Results in Table
  3. Email Report

  ---
## Perform Security Scan

  This phase analyzes a website's security headers and generates a security grade.

###  Form Input

  A form trigger collects user inputs:

  - Site: The website URL to audit (e.g., example.com)
  - Report Recipient: Email address to receive the security report

###  URL List & Fetch Headers

  - Prepares the URL for analysis and timestamps the audit
  - Sends an HTTP HEAD request to retrieve security headers
  - Timeout set to 10 seconds for reliable results

###  Parse Headers & Security Scorer

  - Extracts and normalizes HTTP headers for analysis
  - Evaluates 7 critical security headers:
    - Strict-Transport-Security (HSTS) - HTTPS enforcement
    - Content-Security-Policy (CSP) - XSS protection
    - X-Frame-Options - Clickjacking prevention
    - X-Content-Type-Options - MIME sniffing protection
    - Referrer-Policy - Information leakage control
    - Permissions-Policy - Feature access control
    - Cache-Control - Authentication page caching

###  Grade Calculator

  - Calculates security score (0-70 points) and assigns letter grade (A-F)
  - Identifies missing headers and configuration issues
  - Flags critical security vulnerabilities

  ---
##  Save Results in Table

  This phase exports audit results to a structured Google Sheets database.

###  Format Report

  - Structures audit data for spreadsheet export
  - Creates checkmark/X indicators for header presence
  - Summarizes issues and security recommendations

###  Export to Sheets

  - Appends results to Google Sheets for tracking trends
  - Includes timestamp, URL, grade, scores, and detailed findings
  - Supports historical analysis and compliance reporting

  ---
##  Email Report

  This phase generates AI-powered remediation instructions and sends detailed
  security reports.

###  AI Remediation Agent

  - Uses AI to create copy-paste instructions for non-technical users
  - Generates platform-specific implementation guidance
  - Provides step-by-step remediation for AI code editors (GitHub Copilot, Cursor,
  etc.)

###  Email Formatting & Delivery

  - Creates visually rich HTML email reports with:
    - Security grade and score breakdown
    - Missing headers analysis
    - Configuration warnings
    - AI-generated remediation instructions
    - Implementation checklist
  - Sends comprehensive report via Gmail

  ---
#  Setup

  To run this workflow, configure the following credentials in n8n:

###  OpenRouter

  - Generate an API key from your OpenRouter account for AI remediation features

###  Google Sheets

  - Uses OAuth 2.0 authentication
  - Create a spreadsheet for audit results storage
  - Update the spreadsheet ID in 'Export to Sheets' node

###  Gmail OAuth2

  - Configure Gmail credentials for automated report delivery
  - Authenticate with your Google account

## 📊 Basic Information

- **Workflow ID:** 10990
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 29
- **Downloads:** 2
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10990)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **set** (×2)
- **httpRequest** 
- **code** (×7)
- **googleSheets** 
- **gmail** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
