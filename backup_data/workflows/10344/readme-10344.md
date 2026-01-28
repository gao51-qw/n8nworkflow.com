# Automate Gmail responses with GPT and human-in-the-loop verification

> ## Try It Out!
This n8n template uses AI to automatically respond to your Gmail inbox by drafting response for your approval via email.

### How it works
* **Gmail Trigger** monitors your inbox for new emails
* **AI Analysis** determines if a response is needed based on your criteria
* **Draft Generation** creates contextually appropriate replies using your business information
* **Human Approval** sends you the draft for review before sending
* **Auto-Send** replies automatically once approved

### Setup
1. Connect your Gmail account to the Gmail Trigger node
2. Update the "Your Information" node with:
   * Entity name and description
   * Approval email address
   * Resource guide (FAQs, policies, key info)
   * Response guidelines (tone, style, formatting preferences)
3. Configure your LLM provider (OpenAI, Claude, Gemini, etc.) with API credentials
4. Test with a sample email

### Requirements
* n8n instance (self-hosted or cloud)
* Gmail account with API access
* LLM provider API key

### Need Help?
Email Nick @ nick@tropicflare.com

## 📊 Basic Information

- **Workflow ID:** 10344
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10344)

## 👤 Author

- **Name:** Nick Canfield
- **Username:** @tropicflare

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **code** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×10)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
