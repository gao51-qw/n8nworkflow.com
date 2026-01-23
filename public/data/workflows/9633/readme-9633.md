# Newsletter summarization & briefing with Gmail, AI, Google Sheets & Email

> Your inbox is overflowing with daily newsletters: Public Affairs, ESG, Legal, Finance, you name it.
You want to stay informed, but reading 10 emails every morning? Impossible.

What if you could get one single digest summarizing everything that matters, automatically?

❌ No more copy-pasting text into ChatGPT
❌ No more scrolling through endless email threads
✅ Just one smart, structured daily briefing in your inbox



## Who Is This For

Public Affairs Teams: Stay ahead of political and regulatory updates—without drowning in emails.
Executives & Analysts: Get daily summaries of key insights from multiple newsletters.
Marketing, Legal, or ESG Departments: Repurpose this workflow for your own content sources.



## How It Works
 1. Gmail collects all newsletters from the day (based on sender or label).
 2. HTML noise and formatting are stripped automatically.
 3. Long texts are split into chunks and logged in Google Sheets.
 4. An AI Agent (Gemini or OpenAI) summarizes all content into one clean daily digest.
 5. The workflow structures the summary into an HTML email and sends it to your chosen recipients.



## Setup Guide
 • You’ll need Gmail and Google Sheets credentials.
 • Add your own AI Model (e.g., Gemini or OpenAI) with an API key.
 • Adjust the prompt inside the “Public Affairs Consultant” node to fit your topic (e.g., Legal, Finance, ESG, Marketing).
 • Customize the email subject and design inside the “Structure HTML-Mail” node.
 • Optional: Use Memory3 to let the AI learn your preferred tone and style over time.


## Cost & Runtime

Runs once per day.
Typical cost: ~$0.10–0.30 per run (depending on model and input length).
Average runtime: &lt;2 minutes.

## 📊 Basic Information

- **Workflow ID:** 9633
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1323
- **Downloads:** 132
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9633)

## 👤 Author

- **Name:** Jan Zaiser
- **Username:** @janzaiser

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **emailSend** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmail** 
- **googleSheets** (×2)
- **scheduleTrigger** 
- **code** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.code** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
