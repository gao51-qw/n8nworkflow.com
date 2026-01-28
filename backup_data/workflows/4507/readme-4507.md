# AI email classifier & auto-delete for Gmail (SPAM/OFFER cleaner)

> This workflow is designed for freelancers, solopreneurs, and business owners who receive a high volume of irrelevant messages in their Gmail inbox — from cold offers to spammy promotions — and want to automatically filter and delete them using AI. Its main purpose is to scan new emails with the help of OpenAI, classify their content, and automatically delete those considered marketing (`OFFER`) or junk (`SPAM`). The result is a cleaner inbox without the need to manually sift through low-value messages.

The classification logic uses a detailed system prompt with practical examples, so even complex or borderline messages are categorized accurately. Important emails — such as payment confirmations, shipping updates, or genuine business inquiries — remain untouched. This helps maintain a professional inbox with only valuable and relevant communication.

The entire process runs automatically in the background and can be customized further — for example, to archive instead of delete, or log deleted emails for review.

## How it works

When triggered (every hour), the workflow fetches new Gmail messages using the Gmail Trigger node. Each message is passed to an AI classifier powered by OpenAI, which reads the message body (email snippet) and returns one of three labels:

* `SPAM`: Obvious junk messages, scams, or low-effort bulk messages
* `OFFER`: Cold outreach, discount promotions, cart reminders, or generic advertising
* `IMPORTANT`: Valuable information for the user, even if commercial (e.g., invoices, order updates, personal inquiries)

The workflow then routes the result through an IF node. If the message is marked as `SPAM` or `OFFER`, it is immediately deleted from Gmail via the Gmail Delete node. Emails marked as `IMPORTANT` are ignored and remain in the inbox.

The classification is entirely AI-driven based on message content — sender address, headers, or metadata are not used.

## How to set up

To get started, simply connect two credentials:

* A Gmail account using OAuth2 (via the Gmail Trigger and Gmail Delete nodes)
* An OpenAI API key (used by the AI classifier node)

No advanced setup is needed beyond these two connections.

Optionally, you can review or modify the system prompt used for classification — it’s available inside the workflow’s LangChain AI Agent node. The prompt is in English, so it’s recommended to use this workflow with English-language emails for best results.

By default, the workflow deletes matching emails immediately. If you prefer safer testing, you can modify the Gmail node to archive, label, or log emails instead of deleting them.

The full workflow takes around 5–10 minutes to configure and includes a sticky note with additional instructions and warnings.


## 📊 Basic Information

- **Workflow ID:** 4507
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 3087
- **Downloads:** 308
- **Created:** 2025/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4507)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
