# Generate audio from text using OpenAI and Webhook | Text to speech workflow

> **Who is this for?**
This workflow is ideal for developers, content creators, or customer support teams looking to automate text-to-speech conversion using OpenAI.

**What problem does this solve?**
It automates the process of converting text inputs into speech, reducing manual effort and enhancing productivity.

**What this workflow does:**
This workflow triggers when a text input is received via a webhook, converts it into audio using the OpenAI API, and sends the generated speech back through a webhook response.

**Setup:**

1. Ensure you have an OpenAI API key (you can get it from OpenAI website).
2. Set up the webhook URL and parameters.
3. Configure the OpenAI node with your API key (Create New Credentials).
4. set up the `responde to webhook` node.

## 📊 Basic Information

- **Workflow ID:** 2386
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 11816
- **Downloads:** 1181
- **Created:** 2024/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2386)

## 👤 Author

- **Name:** Ayoub
- **Username:** @ayoub-n8n

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **respondToWebhook** 
- **stickyNote** (×2)
- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
