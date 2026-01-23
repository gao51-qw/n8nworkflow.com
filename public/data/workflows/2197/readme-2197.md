# Auto-label incoming Gmail messages with AI nodes

> This workflow uses AI to analyze the content of every new message in Gmail and then assigns specific labels, according to the context of the email. 

Default configuration of the workflow includes 3 labels:
- „Partnership” - email about sponsored content or cooperation,
- „Inquiry” - email about products, services,
- „Notification” - email that doesn't require response.

You can add or edit labels and descriptions according to your use case. 

🎬 See this workflow in action [in my YouTube video](https://youtu.be/a8Dhj3Zh9vQ) about automating Gmail. 

## How it works?

Gmail trigger performs polling every minute for new messages (you can change the trigger interval according to your needs). The email content is then downloaded and forwarded to an AI chain.

💡 The prompt in the AI chain node includes instructions for applying labels according to the email content - change label names and instructions to fit your use case.

Next, the workflow retrieves all labels from the Gmail account and compares them with the label names returned from the AI chain. Label IDs are aggregated and applied to processed email messages.

⚠️ Label names in the Gmail account and workflow (prompt, JSON schema) must be the same.

## Set up steps

1. Set credentials for Gmail and OpenAI. 
2. Add labels to your Gmail account (e.g. „Partnership”, „Inquiry” and „Notification”).
3. Change prompt in AI chain node (update list of label names and instructions). 
4. Change list of available labels in JSON schema in parser node. 
5. Optionally: change polling interval in Gmail trigger (by default interval is 1 minute).

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows/) and/or [my newsletter](https://workfloows.com/).





## 📊 Basic Information

- **Workflow ID:** 2197
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 29994
- **Downloads:** 2999
- **Created:** 2024/3/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2197)

## 👤 Author

- **Name:** Oskar
- **Username:** @workfloows

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **gmailTrigger** 
- **gmail** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** 
- **splitOut** 
- **merge** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
