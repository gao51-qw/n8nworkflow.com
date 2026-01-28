# Detect and score refund risk with Webhook, OpenAI and Google Sheets

> ## How it works  
This workflow automatically evaluates refund and chargeback risk for incoming e-commerce orders. Orders are received via a webhook, processed individually, and checked to avoid duplicate analysis. Each transaction is normalized and sent to OpenAI for structured risk scoring and classification. Results are logged for auditing, alerts are triggered for high-risk cases, and processed orders are marked to prevent reprocessing.

## Step-by-step  
- **Step 1 – Ingest incoming orders**  
  - **Webhook** – Receives single or bulk order payloads from external systems.  
  - **Split Out** – Breaks array-based payloads into individual order records.  
  - **Split In Batches** – Iterates through each order in a controlled loop.

- **Step 2 – Deduplication check**  
  - **IF (DEDUPE CHECK)** – Verifies whether an order was already processed and skips duplicates.

- **Step 3 – Normalize transaction data**  
  - **Code (Normalize Data)** – Validates required fields and standardizes order, customer, and behavioral attributes.

- **Step 4 – AI risk assessment**  
  - **OpenAI (Message a model)** – Sends normalized transaction data to the AI model and requests a strict JSON risk evaluation.

- **Step 5 – Parse AI output**  
  - **Code (Parse AI Output)** – Cleans the AI response and extracts risk score, risk level, key drivers, and recommendations.

- **Step 6 – Log results**  
  - **Google Sheets (Append)** – Stores timestamps, order details, and AI risk outcomes for reporting and audits.

- **Step 7 – Risk decision and alerts**  
  - **IF (High Risk)** – Filters only transactions classified as HIGH risk.  
  - **Discord** – Sends real-time alerts to operations or finance teams.  
  - **Gmail** – Emails finance stakeholders with full risk context.

- **Step 8 – Mark order as processed**  
  - **Google Sheets (Update)** – Updates the source row to prevent duplicate processing.

## Why use this?  
- Automatically detects high refund or chargeback risk before losses occur.  
- Eliminates manual review with consistent, AI-driven risk scoring.  
- Sends instant alerts so teams can act quickly on high-risk orders.  
- Maintains a clear audit trail for compliance and reporting.  
- Scales easily to handle single or bulk order evaluations.


## 📊 Basic Information

- **Workflow ID:** 12576
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12576)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **code** (×2)
- **if** (×2)
- **gmail** 
- **googleSheets** (×2)
- **splitInBatches** 
- **splitOut** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.openAi** 
- **discord** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
