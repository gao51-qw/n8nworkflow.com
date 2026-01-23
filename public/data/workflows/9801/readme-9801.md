# Summarize meeting transcripts with GPT-4 & sentiment analysis for Gmail

> ## Who it's for
Project managers, AI builders, and teams who want structured, automated meeting summaries with zero manual work.

## What it does
This workflow monitors a Google Drive folder for new meeting notes (PDF/TXT), extracts text, summarizes it via OpenAI GPT-4o, groups tasks by sentiment, builds a styled HTML summary, and sends it via Gmail.

## How to set it up
1. Connect Google Drive, OpenAI, and Gmail credentials.  
2. Point the Drive Trigger to your meeting notes folder.  
3. Paste the system prompt into the AI node.  
4. Set Gmail Email Type to **HTML** and Message to `{{$json.email_html}}`.  
5. Drop a test file and execute once.

## Requirements
- n8n account  
- Google Drive, OpenAI, and Gmail credentials  
- Non-scanned PDFs or plain text files

## Customization ideas
- Add Slack or Notion logging  
- Support additional file types  
- Translate summaries automatically

## Tags
#ai #automation #productivity #gmail #drive #meeting-summary #openai


## 📊 Basic Information

- **Workflow ID:** 9801
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 942
- **Downloads:** 94
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9801)

## 👤 Author

- **Name:** Dhinesh Ravikumar
- **Username:** @dk10rk

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **extractFromFile** (×2)
- **if** 
- **googleDrive** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **stickyNote** (×6)
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
