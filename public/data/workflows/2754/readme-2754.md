# Summarize the new documents from Google Drive and save summary in Google Sheet

> This workflow is created by AI developers at WeblineIndia. It streamlines the process of managing content by automatically identifying and fetching the most recently added Google Doc file from your Google Drive. It extracts the content of the document for processing and leverages an AI model to generate a concise and meaningful summary of the extracted text. The summarized content is then stored in a designated Google Sheet, alongside relevant details like the document name and the date it was added, providing an organized and easily accessible reference for future use. This automation simplifies document handling, enhances productivity, and ensures seamless data management.

## Steps :
### Fetch the Most Recent Document from Google Drive
- **Action:** Use the Google Drive Node.
- **Details:** List files, filter by date to fetch the most recently added .doc file, and retrieve its file ID and metadata.

### Extract Content from the Document
- **Action:** Use the Google Docs Node.
- **Details:** Set the operation to "Get Content," pass the file ID, and extract the document's text content.

### Summarize the Document Using an AI Model
- **Action:** Use an AI Model Node (e.g., OpenAI, ChatGPT).
- **Details:** Provide the extracted text to the AI model, use a prompt to generate a summary, and capture the result.

### Store the Summarized Content in Google Sheets
- **Action:** Use the Google Sheets Node.
- **Details:** Append a new row to the target sheet with details such as the original document name, summary, and date added.

---

## About WeblineIndia
**WeblineIndia** specializes in delivering innovative and [custom AI solutions](https://www.weblineindia.com/ai-development.html) to simplify and automate business processes. If you need any help, please reach out to us.


## 📊 Basic Information

- **Workflow ID:** 2754
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 7180
- **Downloads:** 718
- **Created:** 2025/1/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2754)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleDocs** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **googleSheets** 
- **stickyNote** (×6)
- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
