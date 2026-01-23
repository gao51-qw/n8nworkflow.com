# Automatically categorize Gmail messages with GPT-4 mini classification

> # 🛠️ Smart Email Classifier Workflow

Intelligent AI-powered email classification system that automatically sorts incoming Gmail messages into Business, Meetings, Cold Emails, and other categories using OpenAI.

## **⚡ Quick Setup**
1. Import this workflow into your n8n instance
2. Setup your OpenAI credentials at: [OpenAI api key](https://platform.openai.com/settings/organization/api-keys)
3. Configure your Gmail credentials and you're ready to go: [Google Cloud Console](https://console.cloud.google.com/)
4. Activate the workflow to start automatic email classification

## 🔧 How it Works

1. Gmail Trigger: Monitors incoming emails in real-time
2. Text Classifier: AI-powered categorization using OpenAI Chat Model
3. Smart Routing: Automatically sorts emails into predefined categories
4. Gmail Integration: Adds appropriate labels and organizes emails automatically
5. Fallback Handling: "No Operation" path for unclassifiable emails

Every email gets intelligently sorted into:

## **🏢 Business**

1. Work-related correspondence
2. Client communications
3. Project updates

## 📅 Meetings

1. Meeting invitations and requests
2. Calendar-related emails
3. Scheduling communications

## ❄️ Cold Emails

1. Sales outreach and pitches
2. Unsolicited business proposals
3. Marketing communications

## 🔀 Random

1. Personal emails
2. Newsletters
3. Miscellaneous content


## 📊 Basic Information

- **Workflow ID:** 7599
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 747
- **Downloads:** 74
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7599)

## 👤 Author

- **Name:** Ilyass Kanissi
- **Username:** @ilyass

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **noOp** 
- **gmail** (×3)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
