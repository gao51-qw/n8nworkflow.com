# Automated email classification & response system with Gmail, GPT, and Sheets

> ## Email Automation Workflow Template

This n8n template demonstrates how to automate email classification, labeling, draft generation, and logging using Gmail, OpenAI, and Google Sheets.  
Use cases include customer support management, sales inquiry handling, and keeping track of incoming emails efficiently in a structured way.

---

## Good to know

- Gmail OAuth2 credentials are required for sending, labeling, and drafting emails.  
- OpenAI credentials are needed for generating draft responses.  
- Google Sheets must have `Logs` and `Errors` sheets with the correct columns (`Original Email`, `Decision`, `Output Email` for Logs; `Node with Error`, `Error Message`, `Time`, `Execution ID`, `Workflow ID` for Errors).  
- The workflow is designed to handle multiple emails simultaneously and continues even if a node fails.

---

## How it works

1. The workflow is triggered by new emails in Gmail.  
2. Emails are classified into categories: Support, Sales, Complaints, Information, or Other.  
3. Based on the classification:
   - Support and Sales emails → Draft response generated with OpenAI and labeled in Gmail.  
   - Complaints, Information, and Other → Emails labeled accordingly.  
4. All processed emails and generated outputs are logged in Google Sheets (`Logs`).  
5. Any workflow errors are captured in the `Errors` sheet for debugging.

---

## How to use

- Test with a sample email to confirm classification, draft generation, labeling, and logging work correctly.  
- Update Google Sheets nodes with your document ID and sheet names.  

---

## Requirements

- Gmail account with OAuth2 credentials  
- OpenAI account for draft generation  
- Google Sheets account for logging  

---

## Customizing this workflow

- Add new email categories or refine existing ones.  
- Adjust draft responses or templates for Support/Sales.  
- Integrate with other apps or systems for more advanced automation (e.g., CRM updates, notifications).  


## 📊 Basic Information

- **Workflow ID:** 7839
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 1021
- **Downloads:** 102
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7839)

## 👤 Author

- **Name:** Sergio Afonso
- **Username:** @sergioafonso

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **stickyNote** (×12)
- **gmail** (×7)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **set** (×5)
- **googleSheets** (×3)
- **noOp** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
