# Manage Cloudflare DNS records with AI-powered chat assistant

> ![DNS](https://cf-assets.www.cloudflare.com/slt3lc6tev37/4d5FOMGmOZuI85eO3xFMcX/4a35297e8ed24b8996a62c941e11c8d8/Advanced_DNS_protection.png)

### This n8n flow demos basic dev-ops operation task, dns records management. 

**AI agent** with light and basic prompt functions like `getter` and `setter` for DNS records. 

In this special case, we are managing remote dns server, via **API calls** - that are handled on **CloudFlare** platform side.

Use-cases for this flow can be standalone, or you can chain it in your pipe-line to get powerful infrastructure flows for your needs.

## How it works

- we created basic agent and gave it a prompt to know about one tool: cf_tool - sub-routine (to itself flow - or it can be separate dedicated one)
- prompt have defined arguments that are needed for passing them when calling agent, for each action specifically
- tool it self have basic if switch that is - based of a action call - calling specific CloudFlare API endpoint (and pass down the args from the tool)

### Requirements

For storing and processing of data in this flow you will need:

- CloudFlare.com API key/token - for retrieving your data (https://dash.cloudflare.com/?to=/:account/api-tokens)
- OpenAPI credentials (or any other LLM provider) saved - for agent chat
- (Optional) PostGres table for chat history saving


### Official CloudFlare api Documentation

For full details and specifications please use API documentation from: https://developers.cloudflare.com/api/

#### Linkedin post

Let me know if you found this flow usefull on my Linkedin post &gt; [here](https://www.linkedin.com/posts/mkdizajn_manage-cloudflare-dns-records-with-ai-powered-activity-7358119317768409088-7hRV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAYKYd8B0_a-uIsW3piMYLQCgdQDd0yfrPc).

tags: `#cloudflare`, `#dns`, `#domain`



## 📊 Basic Information

- **Workflow ID:** 6844
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1020
- **Downloads:** 102
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6844)

## 👤 Author

- **Name:** KPendic
- **Username:** @kres

## 🏷️ Categories

- DevOps
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×3)
- **code** 
- **switch** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **noOp** 
- **executeWorkflowTrigger** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
