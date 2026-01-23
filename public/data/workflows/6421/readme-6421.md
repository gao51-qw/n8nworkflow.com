# Generate automated daily email digests with Gmail and GPT-3.5 via OpenRouter

> ## AI-Powered Daily Gmail Digest Summary using LangChain & OpenRouter
This n8n template helps you automatically summarize your daily Gmail messages using OpenRouter's GPT model via LangChain. It generates a structured email digest highlighting key information, tasks, issues, and action items — all delivered to your inbox every morning.

## Who’s it for
- Busy professionals who want a quick overview of their daily emails
- Founders or managers needing to track team or client communication
- Anyone looking to automate inbox triage and reduce time spent on emails

## How it works / What it does
- This n8n workflow runs every morning at 7 AM, automatically:

1. Fetches emails from the last 24 hours
2. Collects important fields: sender, subject, and snippets
3. Feeds them into an AI-powered agent (OpenRouter + LangChain)
4. The AI:
    - Extracts key topics, tasks, deadlines, and issues
     - Formats the info clearly with a bullet-point summary
5. Sends the final summarized report to your inbox

## How to set up
1. Clone or import the workflow into your n8n instance
2. Replace &lt;Your Email ID&gt; in the Code node with your actual Gmail address (or remove if not needed)
3. Ensure your Gmail and OpenRouter credentials are set up in n8n
4. Update the recipient email in the Send Summary node if you want it sent to a fixed address
5. Activate the workflow once tested

## How to customize the workflow
- **Change Summary Style:** Edit the system message in the LangChain Agent to match your tone (e.g. casual, business, detailed)
- **Adjust Digest Time:** Change the Schedule Trigger to any preferred hour
- **Customize Recipients:** Change or add recipients dynamically or statically in the Gmail send node
- **Filter Email Type:** Modify the Gmail query in the Code node to include filters like from:, is:unread, subject:project








## 📊 Basic Information

- **Workflow ID:** 6421
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 498
- **Downloads:** 49
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6421)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
