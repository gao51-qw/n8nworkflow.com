# Build an internet search chatbot with Firecrawl API

> ## Internet Search Chat with Firecrawl

### How it works
1. A user sends a query via the chat widget and the Chat Trigger captures the message.
2. The chat flow posts the query to the backend webhook (HTTP Request) which forwards it to the search service.
3. The webhook calls Firecrawl to run the web search and returns raw results.
4. A formatter converts the raw results into concise Markdown blocks and separators.
5. The chat node sends the formatted search summary back to the user.
6. Optional: an admin can manually trigger a credits check to review Firecrawl usage.

### Setup
- [ ] Add Firecrawl API credentials in n8n.
- [ ] Update the webhook URL in the "Define constants" node to your n8n instance URL.
- [ ] Configure and enable the Chat Trigger (make it public and set initial messages).
- [ ] Ensure the webhook node path matches the constant and is reachable from the chat node.
- [ ] Test the chat by sending a sample query and verify the formatted search results.
- [ ] (Optional) Run the manual "Check credits" trigger to monitor Firecrawl account usage.


## 📊 Basic Information

- **Workflow ID:** 11134
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 66
- **Downloads:** 6
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11134)

## 👤 Author

- **Name:** Alysson Neves
- **Username:** @alysson

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×4)
- **webhook** 
- **@mendable/n8n-nodes-firecrawl.firecrawl** (×2)
- **respondToWebhook** 
- **noOp** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chat** 
- **code** 
- **set** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
