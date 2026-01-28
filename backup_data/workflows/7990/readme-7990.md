# Receipt scanning & analysis workflow

> ### How it works:
- Automatically detects when a new receipt is uploaded to Google Drive.
- Extracts text from the receipt using OCR.
- Uses an AI Agent to analyze the extracted data and structure it (e.g., vendor, date, total, tax).
- Saves the organized receipt data into a Google Sheet for easy tracking.

### Set up steps:
- Setup takes around 15–20 minutes.
- You'll need a Google Drive folder for receipts and a Google Sheet to store results.
- Configure your Google Drive Trigger, OCR extraction, AI Agent, and Google Sheets connection.

Detailed instructions and explanations are included in [this n8n Starter Session tutorial series](https://www.youtube.com/playlist?list=PLWYu7XaUG3XOJwOOGiX89SQ_w67vw3dq7).

## 📊 Basic Information

- **Workflow ID:** 7990
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 7673
- **Downloads:** 767
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7990)

## 👤 Author

- **Name:** Aemal Sayer
- **Username:** @aemal

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **httpRequest** 
- **mistralAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
