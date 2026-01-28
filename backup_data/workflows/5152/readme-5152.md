# Automate customer support with Gmail, Google Sheets, ERP data & GPT-4o AI

> # 🌐 AI Customer Support Assistant - Cloud Version

**What this workflow does:**

This AI-powered customer support automation processes incoming support requests via email or chat, analyzes them using AI, retrieves relevant context, and generates draft responses for support agents.

**Key Features:**

✅ Multi-channel Input: Email & chat triggers
✅ AI-powered Analysis: Extracts sentiment, urgency, and key information
✅ Context Integration: Combines product manuals, ERP data, and support history
✅ Draft Response Generation: Creates professional responses in German
✅ Human-in-the-loop: Approval workflow before sending to customers

**Demo Instructions:**
1. Use the Chat interface to test with sample customer queries
2. Or send test emails to trigger the email workflow
3. Watch how AI analyzes and generates contextual responses

## 📊 Basic Information

- **Workflow ID:** 5152
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 4788
- **Downloads:** 478
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5152)

## 👤 Author

- **Name:** AOE Agent Lab
- **Username:** @aoepeople

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×10)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **googleSheets** 
- **aggregate** 
- **googleDrive** 
- **extractFromFile** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** 
- **gmail** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
