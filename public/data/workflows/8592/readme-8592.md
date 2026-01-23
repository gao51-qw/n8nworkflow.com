# Fireflies transcripts to meeting summaries & task extractor to Slack & ClickUp

> # AI-powered Meeting Summaries and Action Items to Slack and ClickUp

## How it Works  
1. **Webhook Trigger**: The workflow starts when Fireflies notifies that a transcription has finished.  
2. **Transcript Retrieval**: The transcript is pulled from Fireflies based on the meeting ID.  
3. **Pre-processing**: The transcript is split into sentences and then aggregated into a raw text block.  
4. **AI Summarization**: The aggregated transcript is sent to Google Gemini, which generates a short summary and a structured list of action items.  
5. **Post-processing**: The AI response is cleaned and formatted into JSON. Action items are mapped to titles and descriptions.  
6. **Distribution**:  
   - The meeting summary is posted to Slack.  
   - Action items are created as tasks in ClickUp.  

---

## Use Case  
This workflow is designed for teams that want to reduce the manual effort of writing meeting notes and extracting action items.  

- Automatically generate a clear and concise meeting summary  
- Share the summary instantly with your team on Slack  
- Ensure action items are not lost by automatically creating tasks in ClickUp  
- Ideal for distributed teams, project managers, and product teams managing recurring meetings  

---

## Requirements  
- **n8n instance** set up and running  
- **Fireflies.ai account** with API access to meeting transcripts  
- **Google Gemini API (via PaLM credentials)** for AI-powered summarization  
- **Slack account** with OAuth2 credentials connected in n8n  
- **ClickUp account** with OAuth2 credentials connected in n8n

## 📊 Basic Information

- **Workflow ID:** 8592
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 936
- **Downloads:** 93
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8592)

## 👤 Author

- **Name:** Hashir Bin Waseem
- **Username:** @hashirxn8n

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **@firefliesai/n8n-nodes-fireflies.fireflies** 
- **splitOut** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **clickUp** 
- **slack** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×5)
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
