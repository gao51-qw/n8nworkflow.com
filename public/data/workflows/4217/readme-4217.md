# Create OpenAI-compatible API using GitHub models for free AI access

> ### This n8n template shows you how to connect [Github's Free Models](https://docs.github.com/en/github-models) to your existing n8n AI workflows.

Whilst it is possible to use HTTP nodes to access Github Models, The aim of this template is to use it with existing n8n LLM nodes - saves the trouble of refactoring!

Please note, Github states their model APIs are not intended for production usage! If you need higher rate limits, you'll need to use a paid service.

### How it works
* The approach builds a custom OpenAI compatible API around the Github Models API - all done in n8n!
* First, we attach an OpenAI subnode to our LLM node and configure a new OpenAI credential.
* Within this new OpenAI credential, we change the "Base URL" to point at a n8n webhook we've prepared as part of this template.
* Next, we create 2 webhooks which the LLM node will now attempt to connect with: "models" and "chat completion".
* The "models" webhook simply calls the Github Model's "list all models" endpoint and remaps the response to be compatible with our LLM node.
* The "Chat Completion" webhook does a similar task with Github's Chat Completion endpoint.

### How to use
* Once connected, just open chat and ask away!
* Any LLM or AI agent node connected with this custom LLM subnode will send requests to the Github Models API. Allowing your to try out a range of SOTA models for free.

### Requirements
* Github account and credentials for access to Models. If you've used the Github node previously, you can reuse this credential for this template.

### Customising this workflow
* This template is just an example. Use the custom OpenAI credential for your other workflows to test Github models.

### References
* [https://docs.github.com/en/github-models/prototyping-with-ai-models](https://docs.github.com/en/github-models/prototyping-with-ai-models)
* [https://docs.github.com/en/github-models](https://docs.github.com/en/github-models)


## 📊 Basic Information

- **Workflow ID:** 4217
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 5428
- **Downloads:** 542
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4217)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **aggregate** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **respondToWebhook** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×5)
- **webhook** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
