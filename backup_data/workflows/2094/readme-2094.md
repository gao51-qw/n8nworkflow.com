# Allow your AI to call an API to fetch data

> Use n8n to bring data from any API to your AI. This workflow uses the [Chat Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/) to provide the chat interface, and the [Custom n8n Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/) to call a second workflow that calls the API. 

The second workflow uses AI functionality to refine the API request based on the user's query. It then makes an API call, and returns the response to the main workflow.

This workflow is used in [Advanced AI examples | Call an API to fetch data](https://docs.n8n.io/advanced-ai/examples/api-workflow-tool/) in the documentation.

To use this workflow:

1. Load it into your n8n instance.
2. Add your credentials as prompted by the notes.

**Requires n8n 1.28.0 or above**


## 📊 Basic Information

- **Workflow ID:** 2094
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 22924
- **Downloads:** 2292
- **Created:** 2024/2/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2094)

## 👤 Author

- **Name:** Deborah
- **Username:** @deborah

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **set** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
