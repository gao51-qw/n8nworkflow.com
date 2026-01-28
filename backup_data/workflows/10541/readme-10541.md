# Extract text from Google Drive images with OCR.space, OpenRouter AI summary to sheets & Gmail

> ## How it works
This workflow automatically detects new image files uploaded to a Google Drive folder, extracts Japanese text using OCR, summarizes it with AI, and records the result in Google Sheets.  
Finally, it sends a completion email notification with the file name and summary.

**Workflow steps:**
1. **Google Drive New File Trigger** – Watches a specific Google Drive folder for new image uploads.  
2. **Download Image File** – Downloads the newly uploaded image for processing.  
3. **Extract Text with OCR.space** – Sends the image to the OCR.space API to extract text (Japanese supported).  
4. **Format OCR Result & Check for Empty** – Cleans and validates the extracted text.  
5. **Generate Summary with OpenRouter AI** – Uses an AI model to generate a short summary of the text.  
6. **OpenRouter Chat Model** – Connects the AI Agent to the OpenRouter language model.  
7. **Append row in sheet** – Adds the file name, AI summary, and processing date to Google Sheets.  
8. **Send Completion Notification via Gmail** – Sends an email with the summarized content and Google Sheets link.  
9. **Process Completed** – Marks the workflow’s successful end.

---

## Setup steps
1. Connect your **Google Drive**, **Google Sheets**, and **Gmail** accounts through credentials.  
2. Set your **OCR.space API key** in the HTTP Request node.  
3. Add your **OpenRouter API key** credential for the AI node.  
4. Replace the **Google Sheet ID** and **folder ID** with your own.  
5. Customize the **Gmail recipient** and email message as needed.  
6. Adjust the **polling frequency** (e.g., every 1 minute) depending on your workflow needs.

---

## Ideal for
- Digitizing and summarizing handwritten or printed book pages.  
- Automatically extracting and archiving text from scanned reports or notes.  
- Businesses or educators automating document reading and summarization tasks.

---

⚙️ **Note:**  
Each node includes a clear **English Sticky Note** above it for easier understanding and documentation.


## 📊 Basic Information

- **Workflow ID:** 10541
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 212
- **Downloads:** 21
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10541)

## 👤 Author

- **Name:** Tsubasa Shukuwa
- **Username:** @tsubasa-shukuwa

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** 
- **googleDriveTrigger** 
- **googleDrive** 
- **httpRequest** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **noOp** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
