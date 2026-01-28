# Validate & score leads with ZeroBounce AI before sending Gmail emails

> ## ZeroBounce Email Validation, A.I Scoring & Sending with Gmail
![ZeroBounce Logo](https://raw.githubusercontent.com/zerobounce/n8n-nodes-zerobounce/main/icons/zerobounce-logo.svg)


This workflow automates the process of validating, scoring, and emailing leads from a Google Sheet. It ensures you only send emails to high-quality contacts, protecting your sender reputation.



### 🚀 How it Works
1.  **Trigger:** Watches a Google Sheet for new or updated rows (contacts).
2.  **Validate:** Uses **ZeroBounce** to check if the email address is valid.
    * *If Invalid:* Updates the sheet with the reason and marks "Emailed" as `false`.
3.  **Score:** If valid, uses **ZeroBounce A.I. Scoring** to grade the lead quality (0-10).
    * *If Low/Medium Score (&lt;9):* Updates the sheet with the score and marks "Emailed" as `false`.
4.  **Send:** If the score is **High (9-10)**, sends an email via **Gmail**.
5.  **Update:** Writes the final status back to the Google Sheet, preventing duplicate sends.



### 📋 Setup Requirements
* **Google Sheet:** A sheet with columns for `Email`, `Validated`, `Scored`, `Score`, `Emailed`, `Reason`, etc.
* **ZeroBounce Account:** API Key for validation and scoring.
* **Gmail Account:** Connected via OAuth2 to send emails.



### 💡 Key Features
* **Cost Efficient:** Checks existing `Validated` and `Scored` columns to avoid re-processing contacts.
* **Risk Protection:** Filters out valid but low-quality leads (e.g., catch-alls or low scores).
* **Status Tracking:** Keeps your Google Sheet updated with rich data (Sub-status, Domain Age, etc.).

## 📊 Basic Information

- **Workflow ID:** 11902
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 13
- **Downloads:** 1
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11902)

## 👤 Author

- **Name:** ZeroBounce
- **Username:** @zerobounce

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **googleSheetsTrigger** 
- **switch** 
- **@zerobounce/n8n-nodes-zerobounce.zeroBounce** (×2)
- **googleSheets** (×4)
- **if** (×4)
- **set** (×3)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
