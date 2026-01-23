# OCR document processing from LINE/Gmail using GPT-4o to Google Workspace

> **Who this is for**

Users who frequently receive images or documents via LINE or email

Teams needing automatic OCR + AI summarization

Anyone who wants hands-free document processing and structured storage

**How it works**

Triggers: LINE Webhook and Gmail IMAP Trigger capture incoming messages or emails.

Source Tagging: Inputs are tagged as LINE or EMAIL for later branching.

File Handling: Files are uploaded to Google Drive and converted for analysis.

OCR: An AI vision model extracts all readable text from the document image.

AI Summarization: A text model produces a concise summary.

Logging: The summary is appended to Google Sheets for record-keeping.

Email Drafting: A Gmail Draft is generated containing the OCR text and summary.

**How to set up**

Connect your LINE, Gmail, OpenAI, and Google Drive/Sheets credentials.

Update folder IDs, sheet names, and authentication fields as needed.

Optional: customize summarization instructions.

**Customization ideas**

Add translation or classification steps

Modify output format for Slack/Notion

Store files in date-based Drive folders

## 📊 Basic Information

- **Workflow ID:** 11413
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11413)

## 👤 Author

- **Name:** SOLOVIEVA ANNA
- **Username:** @anna0726

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **gmailTrigger** 
- **set** (×3)
- **merge** 
- **googleDrive** 
- **code** (×2)
- **gmail** 
- **if** 
- **googleSheets** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **wait** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
