# Automate ITSM ticket classification and resolution using Gemini, Qdrant and ServiceNow

> ## Who’s it for
This template is ideal for IT support teams, internal helpdesk automation engineers, and developers building intelligent ticketing systems. It helps streamline ITSM workflows by automatically classifying user queries, retrieving relevant knowledge base entries, and triggering incident creation in ServiceNow.

## How it works / What it does
This workflow uses Google Gemini and Qdrant to power an intelligent ITSM assistant. When a user submits a query via chat:

The Text Classifier categorizes the input as an Incident, Request, or Other.
Based on the category:

Incidents are automatically logged in ServiceNow.
Requests trigger an HTTP call (e.g., for provisioning or access).
Other queries are routed to an AI Agent that searches the FAQBase in Qdrant and responds contextually.


The Gemini LLM enriches responses and summaries.
The Qdrant Vector Store retrieves semantically similar answers from a pre-embedded FAQ knowledge base.
The Summarization Chain condenses incident details for better tracking.

Sticky notes are used throughout the workflow to document each node’s purpose and improve maintainability.

### How to set up

Connect your Google Gemini API, Qdrant, and ServiceNow credentials.
Populate the FAQBase collection in Qdrant with your ITSM knowledge base.
Deploy the webhook to receive chat inputs.
Test the flow using the Manual Trigger node.
Customize the classifier categories and Gemini prompts as needed.


## Requirements

Google Gemini API access
Qdrant vector database with embedded FAQ data
ServiceNow account with API access
n8n instance with LangChain nodes installed


## How to customize the workflow

Modify the Text Classifier categories to suit your organization’s ticket types.
Add more FAQ entries to Qdrant for broader coverage.
Replace the HTTP Request node with integrations relevant to your ITSM tools.
Adjust the Gemini prompts to reflect your tone and support style.
Extend the workflow with Slack, Teams, or email notifications for ticket updates.

## 📊 Basic Information

- **Workflow ID:** 10241
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1112
- **Downloads:** 111
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10241)

## 👤 Author

- **Name:** Nikitha
- **Username:** @nikitha-didikadi

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **serviceNow** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **httpRequest** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
