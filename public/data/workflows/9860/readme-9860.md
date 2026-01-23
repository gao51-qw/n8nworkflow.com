# Automatically save Kindle handwritten notes to Google Drive with DeepSeek AI

> ### Summary:


This n8n workflow addresses the manual and cumbersome process of **exporting handwritten notes from Kindle devices, such as the Kindle Scribe**. It is designed to automate the extraction of the note's PDF download link from an email and subsequently save the file to your Google Drive.

### The Problem
Kindle devices that support handwritten notes (e.g., Kindle Scribe) allow users to export a notebook as a PDF file. However, there is no centralized repository or automated export function. The current process requires the user to:

1. Manually request an export for each file on the device.
2. Receive an auto-generated email containing a temporary, unique download URL (rather than the attachment itself).
3. This manual process represents a significant vendor lock-in challenge and a poor user experience.

### How This Workflow Solves It
This template automates the following steps:

1. Email Ingestion: Monitors your Gmail account for the specific export email from Amazon.
2. Link Extraction: Utilizes an LLM service (like DeepSeek, or any other suitable large language model) to accurately parse the email content and extract the unique PDF download URL.
3. PDF Retrieval & Storage: Executes a request to the extracted URL to download the PDF file and then uploads it directly to your Google Drive.

### Prerequisites
To implement and run this workflow, you will need:

1. Kindle Device: A Kindle model that supports handwritten notes and PDF export (e.g., Kindle Scribe).
2. Gmail Account: The account configured on your Kindle device to receive the export emails.
3. LLM Account: Access to an LLM API (e.g., DeepSeek, OpenAI, etc.) to perform the necessary text extraction.
4. Google Drive Credentials: Configured n8n credentials for your Google Drive account.

*This workflow is designed for easy and quick setup, providing a reliable, automated solution for backing up your valuable handwritten notes.*

## 📊 Basic Information

- **Workflow ID:** 9860
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 173
- **Downloads:** 17
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9860)

## 👤 Author

- **Name:** Gene Ishchuk
- **Username:** @geneishchuk

## 🏷️ Categories

- File Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** 
- **gmail** 
- **httpRequest** 
- **html** 
- **gmailTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
