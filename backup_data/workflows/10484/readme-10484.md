# Zendesk ticket summarizer with Pinecone, OpenAI, and Slack

> ## Zendesk Ticket Summarizer with Pinecone, OpenAI, and Slack

This workflow automates the process of summarizing recent Zendesk support tickets and sharing key insights in a Slack channel. It is ideal for support teams who want daily, AI-generated overviews of customer issues without manually reviewing each ticket.

**How it works**

* Daily Trigger: The workflow runs every day at 10am.
* Fetch Tickets: It retrieves all Zendesk tickets created in the last 24 hours (optionally filtered by brand).
* Vector Storage: Tickets are stored in a Pinecone vector database, with relevant fields and metadata.
* AI Summarization: An AI agent (using OpenAI) analyzes the tickets, identifies main complaints, and counts how many tickets mention each issue.
* Slack Notification: The summary is posted to a specified Slack channel for your team to review.


**Setup Instructions**

1. Configure your Zendesk, Pinecone, OpenAI, and Slack credentials in the respective nodes.
2. Set your Pinecone index and namespace in both Pinecone nodes.
3. Adjust the Zendesk query if you want to filter by a specific brand.
4. Set the Slack channel ID where you want to receive the summaries.


**Use case**
Get daily, actionable insights from your Zendesk tickets, helping your team quickly spot trends and recurring issues.

## 📊 Basic Information

- **Workflow ID:** 10484
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 127
- **Downloads:** 12
- **Created:** 2025/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10484)

## 👤 Author

- **Name:** Ertay Kaya
- **Username:** @ertay

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **slack** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **wait** 
- **scheduleTrigger** 
- **zendesk** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
