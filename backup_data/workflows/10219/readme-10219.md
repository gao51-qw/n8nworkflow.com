# Automate event planning & budget optimization with Claude AI and Google Sheets

> This enterprise-grade **n8n workflow** automates the **entire event planning lifecycle** — from client briefs to final reports — using **Claude AI**, real-time financial data, and smart integrations. It converts raw client data into **optimized, insight-driven event plans** with **cost savings**, **risk management**, and **automatic reporting**, all with zero manual work.


## **Key Features**

* **Multi-source data fusion** from Google Sheets (`ClientBriefs`, `BudgetEstimates`, `ActualCosts`, `VendorDatabase`)
* **AI-powered orchestration** using **Claude 3.5 Sonnet** for event plan optimization
* **Automatic ROI and variance analysis** with cost-saving insights
* **Vendor intelligence** — ranks suppliers by cost, rating, and reliability
* **Risk engine** computes event risk (probability × impact)
* **Auto-approval logic** for safe, high-ROI events
* **Multi-channel delivery:** Slack + Email + Google Sheets
* **Audit-ready:** Full JSON plan + execution logs
* **Scalable triggers:** Webhook or daily schedule


## **Workflow Process**

| Step | Node                        | Description                                              |
| ---- | --------------------------- | -------------------------------------------------------- |
| 1    | **Orchestrate Trigger**     | Runs daily at 7 AM or via webhook (`/event-orchestrate`) |
| 2    | **Read Client Brief**       | Loads event metadata from the `ClientBriefs` sheet       |
| 3    | **Read Budget Estimates**   | Fetches estimated budgets and vendor data                |
| 4    | **Read Actual Costs**       | Loads live cost data for comparison                      |
| 5    | **Read Vendor Database**    | Pulls vendor pricing, reliability, and rating            |
| 6    | **Fuse All Data**           | Merges data into a unified dataset                       |
| 7    | **Data Fusion Engine**      | Calculates totals, variances, and validates inputs       |
| 8    | **AI Orchestration Engine** | Sends structured prompt to **Claude AI** for analysis    |
| 9    | **Parse & Finalize**        | Extracts JSON, computes ROI, risks, and savings          |
| 10   | **Save Orchestrated Plan**  | Updates `OrchestratedPlans` sheet with results           |
| 11   | **Team Sync**               | Sends status & summary to Slack                          |
| 12   | **Executive Report**        | Emails final interactive plan to event planner           |


## **Setup Instructions**

### 1. Import Workflow

* Open **n8n → Workflows → Import from Clipboard**
* Paste the JSON workflow

### 2. Configure Credentials

| Integration       | Details                                            |
| ----------------- | -------------------------------------------------- |
| **Google Sheets** | Service account with spreadsheet access            |
| **Claude AI**     | Anthropic API key for `claude-3-5-sonnet-20241022` |
| **Slack**         | Webhook or OAuth app                               |
| **Email**         | SMTP or Gmail OAuth credentials                    |

### 3. Update Spreadsheet IDs

Ensure your Google Sheets include:

* `ClientBriefs`
* `BudgetEstimates`
* `ActualCosts`
* `VendorDatabase`
* `OrchestratedPlans`

### 4. Set Triggers

* **Webhook:** `/webhook/event-orchestrate`
* **Schedule:** Daily at 7:00 AM

### 5. Run a Test

Use **manual execution** to confirm:

* Sheet updates
* Slack notifications
* Email delivery


## **Google Sheets Structure**

### **ClientBriefs**

| eventId | clientName | eventType | attendees | budget | eventDate | plannerEmail | spreadsheetId | teamChannel | priority |
|----------|-------------|------------|-----------|----------|------------|---------------|---------------|-------------|
| EVT-2025-001 | Acme Corp | Conference | 200 | 75000 | 2025-06-15 | [sarah@acme.com](mailto:sarah@acme.com) | 1A... | #event-orchestration | High |

### **BudgetEstimates**

| category | item           | budgetAmount | estimatedCost | vendor      |
| -------- | -------------- | ------------ | ------------- | ----------- |
| Venue    | Grand Ballroom | 20000        | 22500         | Luxe Events |

### **ActualCosts**

| category | actualCost |
| -------- | ---------- |
| Venue    | 23000      |

### **VendorDatabase**

| vendorName  | category | avgCost | rating | reliability |
| ----------- | -------- | ------- | ------ | ----------- |
| Luxe Events | Venue    | 21000   | 4.8    | High        |

### **OrchestratedPlans**

Automatically filled with:
`eventId`, `savings`, `roi`, `riskLevel`, `status`, `summary`, `fullPlan (JSON)`


## **System Requirements**

| Requirement           | Version/Access                                 |
| --------------------- | ---------------------------------------------- |
| **n8n**               | v1.50+ (LangChain supported)                   |
| **Claude AI API**     | `claude-3-5-sonnet-20241022`                   |
| **Google Sheets API** | `https://www.googleapis.com/auth/spreadsheets` |
| **Slack Webhook**     | Required for notifications                     |
| **Email Service**     | SMTP, Gmail, or SendGrid                       |


## **Optional Enhancements**

* Add **PDF export** for management reports
* Connect **Google Calendar** for event scheduling
* Integrate **CRM (HubSpot / Salesforce)** for client updates
* Add **interactive Slack buttons** for approvals
* Export results to **Notion** or **Airtable**
* Enable **multi-event batch orchestration**
* Add **forecasting** from past data trends


**Result:**
A single automated system that plans, analyzes, and reports events — **with full AI intelligence and zero manual work.**


**Explore More AI Workflows:** [https://www.oneclickitsolution.com/contact-us/](https://www.oneclickitsolution.com/contact-us/)



## 📊 Basic Information

- **Workflow ID:** 10219
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 223
- **Downloads:** 22
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10219)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** (×5)
- **merge** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** 
- **emailSend** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
