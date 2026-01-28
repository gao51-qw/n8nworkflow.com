# UX interview analysis with OpenAI: transcribe and export to Google Sheets

> ***UX Interview Analysis with OpenAI: Transcipt, Summarize, and Export to Google Sheets!***

## About
Easily analyze and summarize UX interviews. Just upload your files to Google Drive and get the insights directly in Google Sheets.

## How It Works
- The workflow is triggered manually 
- Upload the interview recordings in MP3 format to Google Drive (or modify the node “Filter by MP3” to support other formats)
- OpenAI transcribes the audio
- An AI agent generates a summary
- Store the results in Google Sheets

## How To Use
- Import the package into your n8n interface
- Set up credentials for each node to access the required tools
- Upload your interview files to Google Drive
- Create a Google Sheet with the following columns:
	•	Persona
	•	User Needs
	•	Pain Points
	•	New Feature Requests
- Connect the Google Sheets node titled “Insert results to Google Sheets” to your created document
- Start the workflow


## Requirements
- OpenAI for transcription and summarization (you can replace it with Gemini if preferred)





## 📊 Basic Information

- **Workflow ID:** 7126
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 515
- **Downloads:** 51
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7126)

## 👤 Author

- **Name:** Gulfiia
- **Username:** @gulfia

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDrive** (×2)
- **filter** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitOut** 
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
