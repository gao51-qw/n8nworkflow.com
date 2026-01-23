# AI-powered WooCommerce Support-Agent

> With this workflow you get a fully automated AI powered Support-Agent for your WooCommerce webshop. It allows customers to request information about things like:
- the status of their order
- the ordered products
- shipping and billing address
- current DHL shipping status

**How it works**

The workflow receives chat messages from an in a website integrated chat. For security and data-privacy reasons, does the website transmit the email address of the user encrypted with the requests. That ensures that user can just request the information about their own orders.

An AI agent with a custom tool supplies the needed information. The tool calls a sub-workflow (in this case, in the same workflow for convenience) to retrieve the required information. This includes the full information of past orders plus the shipping information from DHL.
If otherr shipping providers are used it should be simple to adjust the workflow to query information from other APIs like UPS, Fedex or others. 

## 📊 Basic Information

- **Workflow ID:** 2161
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 19439
- **Downloads:** 1943
- **Created:** 2024/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2161)

## 👤 Author

- **Name:** Jan Oberhauser
- **Username:** @jan

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×9)
- **set** (×8)
- **if** (×4)
- **merge** (×3)
- **splitOut** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **wooCommerce** 
- **httpRequest** 
- **dhl** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **respondToWebhook** 
- **webhook** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
