# Smart Gmail cleaner with AI validator & Telegram alerts

> Automatically clean up your Gmail inbox by deleting unwanted emails, validated by Gemini AI.  
Ideal for anyone tired of manual inbox cleanup, this workflow helps you save time while staying in control, with full transparency via Telegram alerts.

## How it works

- Scans Gmail inbox in adjustable 2-week batches  
- Uses Gemini AI to decide if an email should be deleted or skipped  
- Applies a label to skipped emails to avoid rechecking in future runs  
- Deletes unwanted emails and sends a Telegram message with the **AI's reasoning**  
- Also notifies on skipped emails, with explanation included  

## Set up steps

1. Connect your Gmail, Gemini AI, and Telegram accounts  
2. Adjust the AI baseline to control sensitivity (e.g. how strict the filtering should be)  
3. Set your batch range (default: last 2 weeks, adjustable)  
4. Define your Telegram chat/channel for notifications

---

**Note:** Thanks to n8n's modular design, you can easily switch Gemini for another AI model (like OpenAI, Claude, etc.) or replace Telegram with Discord, Slack, or even email, no code changes needed, just swap the nodes.


## 📊 Basic Information

- **Workflow ID:** 3502
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2761
- **Downloads:** 276
- **Created:** 2025/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3502)

## 👤 Author

- **Name:** Reyhan
- **Username:** @abizareyhan

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **gmail** (×3)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **telegram** (×4)
- **noOp** 
- **set** (×3)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
