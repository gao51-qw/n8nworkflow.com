# Generate & schedule social posts with Gemini/OpenAI for X and LinkedIn

> ## 💼 LinkedIn Content Machine – AI-Powered Post Generator & Scheduler for X and LinkedIn

**How it works:**  
This end-to-end workflow automates your personal or brand content strategy by:
- 🧠 Using Google Gemini or OpenAI to generate engaging LinkedIn/X content from a title or trending posts.
- 🗓️ Posting directly to LinkedIn and X (formerly Twitter).
- 📊 Pulling high-performing LinkedIn posts to inspire new ideas.
- ✍️ Saving AI-generated drafts to Google Sheets for review.
- 🔔 Notifying your team on Slack when drafts are ready.

**Steps to set up:**
1. Add your API keys for Google Gemini or OpenAI.
2. Set up your LinkedIn, X (Twitter), Google Sheets, and Slack credentials.
3. Customize prompt logic or post filters if needed.
4. Schedule the idea generation module or trigger it manually.
5. Start generating and posting consistent, high-quality content with zero manual effort!


## 📊 Basic Information

- **Workflow ID:** 5913
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3651
- **Downloads:** 365
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5913)

## 👤 Author

- **Name:** Nurseflow
- **Username:** @nurseflowio

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **twitter** 
- **linkedIn** 
- **merge** 
- **form** 
- **scheduleTrigger** 
- **httpRequest** 
- **function** 
- **openAi** 
- **googleSheets** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
