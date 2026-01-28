# Automate lead qualification calls with Salesforce, Retell AI, and OpenAI analysis

> **Transform your lead qualification process with automated AI-powered phone calls triggered directly from Salesforce lead creation.**

### What this workflow does:
1. **Webhook Trigger**: Receives new lead data from Salesforce
2. **Automated Calling**: Initiates phone calls via Retell AI
3. **Smart Monitoring**: Polls call status until completion
4. **AI Analysis**: Uses OpenAI to analyze call transcripts
5. **Salesforce Integration**: Creates follow-up tasks with insights

### Perfect for:
- Sales teams wanting to qualify leads faster
- Companies using Salesforce CRM
- Organizations looking to automate initial prospect outreach
- Teams wanting AI-powered call analysis

### You'll need:
- Salesforce org with lead creation triggers
- Retell AI account and agent setup
- OpenAI API access
- Basic n8n workflow knowledge

### Setup time: ~15 minutes

**Author**: Sri Kolagani
**Template Type**: Free

## 📊 Basic Information

- **Workflow ID:** 8929
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 768
- **Downloads:** 76
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8929)

## 👤 Author

- **Name:** Sri Kolagani
- **Username:** @srikolagani

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **webhook** 
- **httpRequest** (×2)
- **if** 
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **salesforce** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
