# Extract and process information directly from PDF using Claude and Gemini

> ## Overview
- This workflow helps you compare Claude 3.5 Sonnet and Gemini 2.0 Flash when extracting data from a PDF
- This workflow extracts and processes the data within a PDF in **one single step**, **instead of calling an OCR and then an LLM”**


## How it works
- The initial 2 steps download the PDF and convert it to base64.
- This base64 string is then sent to both Claude 3.5 Sonnet and Gemini 2.0 Flash to extract information.
- This workflow is made to let you compare results, latency, and cost (in their dedicated dashboard).


## How to use it
- Set up your Google Drive if not already done
- Select a document on your Google Drive
- Modify the prompt in "Define Prompt" to extract the information you need and transform it as wanted.
- Get a [Claude API key](https://console.anthropic.com/settings/keys) and/or [Gemini API key](https://aistudio.google.com/app/apikey)
- Note that you can deactivate one of the 2 API calls if you don't want to try both
- Test the Workflow


## 📊 Basic Information

- **Workflow ID:** 2764
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 15895
- **Downloads:** 1589
- **Created:** 2025/1/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2764)

## 👤 Author

- **Name:** Agent Studio
- **Username:** @agentstudio

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **extractFromFile** 
- **googleDrive** 
- **httpRequest** (×2)
- **stickyNote** (×5)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
