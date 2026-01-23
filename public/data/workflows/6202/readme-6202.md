# Automated email classification & response system with Groq AI and Pinecone

> 📝 Description
This workflow helps automatically classify incoming emails using a combination of conditional logic and minimal AI-based classification. The system checks email content, performs sentiment analysis, uses OpenAI for categorization, and routes emails accordingly — with smart but efficient use of LLMs and AI Agents.

⚙️ How it works
Trigger: An IMAP Email Trigger initiates the workflow upon receiving a new email.

Code Block: Parses essential data from the email.

Switch Node: Routes emails based on classification.

LLM Chain: Processes specific email cases (e.g., inquiries or complaints).

AI Agent (Minimal): Used only when other methods cannot determine intent.

Email Responses: Sends tailored replies or routes to support/sales teams accordingly.

Sentiment Analysis: Assists with tone evaluation for better response routing.

🧩 Set up steps
Estimated setup time: 10–15 minutes

You’ll need:

An IMAP-compatible email account

OpenAI or any compatible LLM provider

Pinecone (optional, for vector memory)

SMTP credentials for sending email

Replace placeholder credentials in sticky notes before running.

## 📊 Basic Information

- **Workflow ID:** 6202
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 566
- **Downloads:** 56
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6202)

## 👤 Author

- **Name:** ResilNext
- **Username:** @rnair1996

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **switch** (×2)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGroq** (×4)
- **twitter** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsCohere** (×2)
- **manualTrigger** 
- **httpRequest** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **emailSend** (×9)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
