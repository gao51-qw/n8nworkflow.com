# AI-curated Indian marketing newsletter with RSS feeds and Gmail delivery

> ## How it works
This workflow automatically generates a daily Indian marketing & advertising newsletter. It fetches articles from Campaign India and Economic Times BrandEquity feeds, merges them, and evaluates each story using an AI relevance filter. Only meaningful updates, such as brand launches, marketing campaigns, and changes to digital media, are retained.

Relevant stories are stored in an n8n Data Table and later used to build a clean HTML newsletter. Every day at 7:30 PM IST, the workflow composes the email and sends it via Gmail, with an optional SMTP fallback if Gmail fails. After sending, processed entries are removed to keep the next day’s digest fresh.


## Set up steps

- Add your Gmail and (optional) SMTP credentials.
- Update the recipient email inside the Gmail/SMTP nodes.
- Confirm the Data Table exists or let n8n create it automatically.
- Adjust schedule timing if you want the newsletter at a different time.
- Add or remove RSS feeds as needed (inside the brown “RSS Fetching Block”).

(Full explanations for each block are included as sticky notes inside the workflow.)

### By Deepak Singh
If you need help or want custom automations:
deepakbiz@outlook.com

## 📊 Basic Information

- **Workflow ID:** 11281
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 80
- **Downloads:** 8
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11281)

## 👤 Author

- **Name:** Deepak Singh
- **Username:** @itsdeepak

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **emailSend** 
- **@n8n/n8n-nodes-langchain.agent** 
- **splitInBatches** 
- **merge** (×4)
- **if** 
- **scheduleTrigger** 
- **code** 
- **rssFeedRead** (×4)
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **dataTable** (×3)
- **limit** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
