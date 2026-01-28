# Generate and manage short links with GPT-4.1 and data storage

> This AI Agent helps you create short links from your original URLs.  
Each generated short link is automatically stored in a database table for easy management and tracking.

---

## How It Works

1. Provide a long URL to the Agent.  
2. The Agent saves your original link in the database.  
3. It generates a short link in the following format:

```
Short link:  https://{webhook_url}/webhook/shortLink?q={shortLinkId}
```

When users open the short link, they are automatically redirected to your original link.

---

## How to Use

- Send your link to the Agent.  
- The Agent will respond with a generated short link.  

---

## Requirements

- Add your `your_webhook_url` to the **Config Node**.  
- OpenAI account
- Create a database table named `ShortLink` with the following columns:

| Column Name   | Description                  |
|----------------|------------------------------|
| `originalLink` | Stores the full original URL. |
| `shortLinkId`  | Stores the unique short link ID. |

---

## Customization Options

- Add traffic tracking or analytics for each short link.  
- Customize the redirect page to display your logo, message, or branding.


## 📊 Basic Information

- **Workflow ID:** 9861
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 572
- **Downloads:** 57
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9861)

## 👤 Author

- **Name:** Nghia Nguyen
- **Username:** @nghiaaidev

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **dataTable** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **html** 
- **respondToWebhook** 
- **webhook** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
