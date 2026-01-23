# Monitor Reddit job posts with GPT-4o analysis & Telegram alerts using Google Sheets

> ## How It Works

* **Monitors Reddit:** Automatically searches specified subreddits for posts matching your keywords or flair filters (template is n8n - Now Hiring flair)

* **AI Analysis:** Processes found posts using AI to create personalized summaries based on your custom prompts

* **Smart Filtering:** Tracks previously sent posts in Google Sheets to avoid duplicate notifications

* **Telegram Delivery:** Sends AI-generated summaries directly to your Telegram chat

## Set Up Steps
*Time required: ~15-20 minutes*

* **Configure Credentials (10 mins):** Set up Telegram bot token, Reddit app credentials, and Google Sheets access

* **Customize Search Parameters (3 mins):** Define target subreddit, keywords/flairs, and post limits

* **Personalize AI Settings (2 mins):** Adjust AI model and system prompts for your preferred summary style

* **Set Schedule & Chat (2 mins):** Choose monitoring frequency and configure your personal Telegram chat ID

&gt;The workflow includes detailed setup instructions and configuration guidance in the sticky notes within the template.

## 📊 Basic Information

- **Workflow ID:** 8120
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 163
- **Downloads:** 16
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8120)

## 👤 Author

- **Name:** Meelioo
- **Username:** @mookielian

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **httpRequest** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitInBatches** 
- **if** 
- **googleSheets** (×2)
- **code** 
- **telegram** 
- **telegramTrigger** 
- **scheduleTrigger** 
- **noOp** 
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
