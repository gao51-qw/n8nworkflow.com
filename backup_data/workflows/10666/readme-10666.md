# Summarize Apple App Store reviews with Pinecone, GPT-4 Mini & Slack

> This n8n workflow automates the process of collecting, storing, and summarizing customer reviews from the Apple App Store for multiple apps. It fetches daily reviews, stores them in a Pinecone vector database, and generates a weekly summary using OpenAI, which is then posted to a Slack channel.

**Key Features**

- Fetches daily customer reviews for a list of Apple App Store apps using the App Store Connect API.
- Stores reviews in Pinecone, with separate namespaces for each app and automatic weekly cleanup.
- Uses OpenAI to generate a summary of reviews, including positive/negative highlights and average star rating.
- Posts the summary to a specified Slack channel every week.


**How to use**

- Set your Apple App Store app IDs and names in the provided Set nodes.
- Configure your Apple API, Pinecone, OpenAI, and Slack credentials.
- Adjust the schedule triggers as needed for daily fetching and weekly summarization.
- Deploy the workflow to automate review monitoring and reporting for your apps.

## 📊 Basic Information

- **Workflow ID:** 10666
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 199
- **Downloads:** 19
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10666)

## 👤 Author

- **Name:** Ertay Kaya
- **Username:** @ertay

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **splitOut** (×3)
- **splitInBatches** (×2)
- **jwt** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×12)
- **scheduleTrigger** (×2)
- **set** (×2)
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
