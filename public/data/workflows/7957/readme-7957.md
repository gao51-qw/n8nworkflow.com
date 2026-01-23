# Conversational Meta ads reporting & management with GPT-5

> Currently Work-In-Progress

This n8n template creates an intelligent AI assistant that responds to chat messages, providing conversational access to your Meta Ads data. Powered by an OpenAI GPT-5 model and equipped with memory to maintain context, this agent can interact with your Meta Ads accounts via the Facebook Graph API.

Users can ask it to:
* **List all connected ad accounts.**
* **Retrieve detailed information** for a specific ad account, including active campaigns, ad sets, and individual ads.
* **Fetch performance insights** (e.g., spend, impressions, conversions, CPC, CPM, CTR, ROAS) for a given account and time range.
 
Ideal for **marketers, advertisers**, or anyone needing quick, conversational access to their Meta Ads performance data and campaign structure without logging into the Ad Manager directly.

Requires: OpenAI and Facebook Graph API credentials.

## 📊 Basic Information

- **Workflow ID:** 7957
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 3551
- **Downloads:** 355
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7957)

## 👤 Author

- **Name:** Konrad Roziewski
- **Username:** @kroziewski

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **switch** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **facebookGraphApi** (×6)
- **merge** 
- **code** (×2)
- **noOp** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
