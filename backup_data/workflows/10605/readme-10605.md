# Summarize Google Play Store reviews with GPT-4-mini, Pinecone & Slack alerts

> This workflow automatically fetches reviews for one or more Google Play Store apps, summarizes the feedback using OpenAI, stores and manages review data with Pinecone, and posts the summary to a Slack channel. It is designed for product teams, community managers, or anyone who wants to keep track of app sentiment and review trends without manually reading each review.

**Features:**

- Fetches daily reviews for specified Google Play Store app bundle IDs using a Google Service Account.
- Stores reviews in a Pinecone vector database for efficient retrieval and summarization.
- Uses OpenAI to generate a summary, including:
  - Positive and negative review highlights
  - Star rating breakdown and average rating
  - Total number of reviews processed
- Posts the summary to a Slack channel of your choice.
- Supports both daily and weekly triggers.
- Automatically clears old reviews from the vector store weekly to keep data fresh.

**Setup Instructions:**

- Add your Google Play app bundle IDs in the “Set the bundle ids” node.
- Configure your Google Service Account, Pinecone, OpenAI, and Slack credentials.
- Set your preferred Slack channel in the “Send to Slack channel” node.
- Enable the workflow and customize the schedule as needed.

**Use Cases:**

- Monitor app sentiment and user feedback trends.
- Share review insights with your team in Slack.
- Automate reporting for product or support teams.

## 📊 Basic Information

- **Workflow ID:** 10605
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 1149
- **Downloads:** 114
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10605)

## 👤 Author

- **Name:** Ertay Kaya
- **Username:** @ertay

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **splitOut** (×3)
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×2)
- **stickyNote** (×11)
- **scheduleTrigger** (×2)
- **httpRequest** 
- **filter** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
