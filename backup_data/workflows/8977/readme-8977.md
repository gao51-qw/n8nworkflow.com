# Client onboarding with form

> ## AI-Powered Lead Triage and Response System 🤖

This advanced workflow creates a customized, embedded lead-capture form, automatically logs client data to a spreadsheet, and uses AI to instantly analyze and summarize the lead for rapid human follow-up.

### **How it works**

1.  A potential client fills out the **Gurey AI partnership form** (built-in n8n form trigger).
2.  The workflow immediately **logs all submitted data** to a designated Google Sheet.
3.  An **AI Agent** receives the raw data and is instructed to condense it into a factual, concise client summary.
4.  A second **AI Agent** generates a **personalized welcome and confirmation email** to the client, using the AI-generated summary and original goals to make the email highly relevant.

---

### **Set up steps (2-3 minutes)** ⏱️

1.  **Google Sheets:** Create a new Google Sheet to log your client data, making sure the column headers match the form field names (e.g., "First Name", "📧 Email", etc.).
2.  **Credentials:** Add two credentials to your n8n instance:
    * **Google Sheets OAuth2 API**
    * **OpenRouter API** (for the AI Agents)
3.  **Update Nodes:** Connect the new credentials to the **"Log client data"** and **"OpenRouter Chat Model"** nodes.
4.  **Finalize:** Open the **"Log client data"** node and select your newly created Google Sheet.

*Detailed descriptions and links are available in the sticky notes within the workflow.* 🤓

## 📊 Basic Information

- **Workflow ID:** 8977
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 564
- **Downloads:** 56
- **Created:** 2025/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8977)

## 👤 Author

- **Name:** Abdullahi Ahmed
- **Username:** @abdosman06

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **formTrigger** 
- **executionData** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **telegram** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
