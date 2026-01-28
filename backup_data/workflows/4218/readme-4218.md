# OpenAI responses API adapter for LLM and AI agent workflows

> ### This n8n template demonstrates how to use OpenAI's Responses API with existing LLM and AI Agent nodes.

Though I would recommend just waiting for official support, if you're impatient and would like a round-about way to integrate OpenAI's responses API into your existing AI workflows then this template is sure to satisfy!

This approach implements a simple API wrapper for the Responses API using n8n's builtin webhooks. When the base url is pointed to these webhooks using a custom OpenAI credential, it's possible to intercept the request and remap for compatibility.

### How it works
* An OpenAI subnode is attached to our agent but has a special custom credential where the base_url is changed to point at this template's webhooks.
* When executing a query, the agent's request is forwarded to our mini chat completion workflow.
* Here, we take the default request and remap the values to use with a HTTP node which is set to query the Responses API.
* Once a response is received, we'll need to remap the output for Langchain compatibility. This just means the LLM or Agent node can parse it and respond to the user.
* There are two response formats, one for streaming and one for non-streaming responses.

### How to use
* You must activate this workflow to be able to use the webhooks.
* Create the custom OpenAI credential as instructed.
* Go to your existing AI workflows and replace the LLM node with the custom OpenAI credential. You do not need to copy anything else over to the existing template.

### Requirements
* OpenAI account for Responses API

### Customising this workflow
* Feel free to experiment with other LLMs using this same technique!
* Keep up to date with the Responses API announcements and make modifications as required.


## 📊 Basic Information

- **Workflow ID:** 4218
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 3367
- **Downloads:** 336
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4218)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **webhook** (×2)
- **httpRequest** (×2)
- **respondToWebhook** (×3)
- **code** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
