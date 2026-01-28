# Use OpenRouter in n8n versions <1.78

> ## What it is:

In version 1.78, n8n introduced a dedicated node to use the OpenRouter service, which lets you to use a lot of different LLM models and providers and change models on the fly in an agentic workflow.

For prior n8n versions, there's a workaround to make OpenRouter accessible, by using the OpenAI node with a OpenRouter-specific BaseURL.

This trivial workflow demonstrates this for version before 1.78, so that you can use different LLM model dynamically with the available n8n nodes for OpenAI LLM and OpenAI credentials.

## What you can do:

* Use any of the [OpenRouter models](https://openrouter.ai/models)
* Have the model even dynamically configured or changing (by some external config, some rule, or some specific chat message)

## Setup steps:

* Import the workflow
* Ensure you have registered and account, purchased some credits and created and API key for [OpenRouter.ai](https://openrouter.ai)
* Configure the "OpenRouter" credentials with your own credentials, using an _OpenAI  type_ credential, but making sure in the credential's config form its "Base URL" is set to _https://openrouter.ai/api/v1_ so OpenRouter is used instead of OpenAI. 
* Open the "Settings" node and change the model value to any valid model id from the [OpenRouter models list](https://openrouter.ai/models) or even have the model property set dynamically

## 📊 Basic Information

- **Workflow ID:** 2897
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3418
- **Downloads:** 341
- **Created:** 2025/2/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2897)

## 👤 Author

- **Name:** Daniel Nolde
- **Username:** @dnolde

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
