# Configure your own image creation API using OpenAI DALLE-3

> How it works:
Webhook URL that responds to Requests with an AI generated Image based on the prompt provided in the URL.


Setup Steps:
- Ideate your prompt
- URL Encode The Prompt (as shown in the Template)
- Authenticate with your OpenAI Credentials
- Put together the Webhook URL with your prompt and enter into a webbrowser

In this way you can expose a public url to users, employee's etc. without exposing your OpenAI API Key to them.

[**Click here to find a blog post with additional information.**](https://n8n-automation.com/2024/04/13/easy-image-generation-with-ai-a-simplified-guide-to-openais-dalle-3-and-n8n/)

## 📊 Basic Information

- **Workflow ID:** 2217
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 6252
- **Downloads:** 625
- **Created:** 2024/4/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2217)

## 👤 Author

- **Name:** Bela
- **Username:** @bwiertz

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
