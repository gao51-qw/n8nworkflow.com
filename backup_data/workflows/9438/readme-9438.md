# Create universal OpenAI-compatible API endpoints for multiple AI workflows

> # N8n OpenAI-Compatible API Endpoints

Transform your n8n workflows into OpenAI-compatible API endpoints, allowing you to access multiple workflows as selectable AI models through a single integration.

## What This Does

This workflow creates two API endpoints that mimic the OpenAI API structure:

- `/models` - Lists all n8n workflows tagged with `aimodel` (or any other tag of your choice)
- `/chat/completions` - Executes chat completions with your selected workflows, supporting both text and stream responses 

## Benefits

**Access Multiple Workflows**: Connect to all your n8n agents through one API endpoint instead of creating separate pipelines for each workflow.

**Universal Platform Support**: Works with any application that supports OpenAI-compatible APIs, including OpenWebUI, Microsoft Teams, Zoho Cliq, and Slack.

**Simple Workflow Management**: Add new workflows by tagging them with `aimodel` . No code changes needed.

**Streaming Support**: Handles both standard responses and streaming for real-time agent interactions .

## How to Use

1. Download the workflow JSON file from this repository
2. Import it into your n8n instance
3. Tag your workflows with `aimodel`  to make them accessible through the API
4. Create a new OpenAI credential in n8n and change the Base URL to point to your n8n webhook endpoints . [Learn more about OpenAI Credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) 
5. Point your chat applications to your n8n webhook URL as if it were an OpenAI API endpoint

## Requirements

- n8n instance (self-hosted or cloud)
- Workflows you want to expose as AI models
- Any OpenAI-compatible chat application

## Documentation

For detailed setup instructions and implementation guide, visit [https://medium.com/@deleodufuye/how-to-create-openai-compatible-api-endpoints-for-multiple-n8n-workflows-803987f15e24](https://medium.com/@deleodufuye/how-to-create-openai-compatible-api-endpoints-for-multiple-n8n-workflows-803987f15e24).

## Inspiration

This approach was inspired by [Jimleuk’s workflow on n8n Templates.](https://n8n.io/workflows/4217-create-openai-compatible-api-using-github-models-for-free-ai-access/)



## 📊 Basic Information

- **Workflow ID:** 9438
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 717
- **Downloads:** 71
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9438)

## 👤 Author

- **Name:** Dele Odufuye
- **Username:** @deleodufuye

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **aggregate** 
- **respondToWebhook** (×3)
- **webhook** (×2)
- **stickyNote** (×3)
- **n8n** 
- **set** 
- **code** (×3)
- **if** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
