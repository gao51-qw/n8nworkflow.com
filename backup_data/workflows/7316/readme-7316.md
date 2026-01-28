# Monitor Twitter accounts & generate intelligence summaries with Gemini AI & Telegram

> This workflow automates the process of monitoring Twitter accounts for intelligence gathering. It fetches new tweets from specified accounts via RSS, uses a powerful AI model (Google Gemini) to analyze the content based on your custom prompts, and sends formatted alerts to a Telegram chat for high-priority findings.

Key Features:

Scheduled Execution: Runs automatically at your desired interval.

Dynamic Configuration: Manage which Twitter accounts to follow and what AI prompts to use directly from a Postgres database.

AI-Powered Analysis: Leverages Google Gemini to extract summaries, keywords, and assign an importance level to each tweet.

Duplicate Prevention: Keeps track of the last processed tweet to ensure you only get new updates.

Customizable Alerts: Sends well-structured and easy-to-read notifications to Telegram.

Setup Required:

Postgres Database: Set up a table to store your configuration (see the Sticky Note in the workflow for the required schema).

RSSHub: You need access to an RSSHub instance to convert Twitter user timelines into RSS feeds.

Credentials: Add your credentials for Postgres, Google AI (Gemini), and your Telegram Bot in n8n.

Configuration: Update the placeholder values in the RSS and Telegram nodes (e.g., your RSSHub URL, your Telegram Chat ID).

## 📊 Basic Information

- **Workflow ID:** 7316
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 775
- **Downloads:** 77
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7316)

## 👤 Author

- **Name:** jellyfish
- **Username:** @jellyfish

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **filter** (×2)
- **postgres** (×2)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **code** (×2)
- **if** 
- **rssFeedRead** 
- **telegram** 
- **scheduleTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
