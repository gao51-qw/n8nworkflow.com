# Ask a human for help when the AI doesn't know the answer

> This is a workflow that tries to answer user queries using the standard GPT-4 model. If it can't answer, it sends a message to Slack to ask for human help. It prompts the user to supply an email address.

This workflow is used in [Advanced AI examples | Ask a human](https://docs.n8n.io/advanced-ai/examples/human-fallback/) in the documentation.

To use this workflow:

1. Load it into your n8n instance.
2. Add your credentials as prompted by the notes.
3. Configure the Slack node to use your Slack details, or swap out Slack for a different service.

## 📊 Basic Information

- **Workflow ID:** 2095
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 9611
- **Downloads:** 961
- **Created:** 2024/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2095)

## 👤 Author

- **Name:** Deborah
- **Username:** @deborah

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **if** 
- **slack** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
