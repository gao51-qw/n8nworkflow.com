# Chat with Gemini AI through local CLI via SSH

> This workflow allows you to integrate the Google Gemini CLI into your n8n AI Agents. It is designed for self-hosted n8n instances and enables you to chat with the Gemini CLI running on your local machine or server via SSH.

This is powerful for users who want to utilize the free tier of Gemini via Google's CLI tools or need the AI to interact with local files on the host server.

## How it works
* **AI Agent**: The main workflow uses a LangChain AI Agent with a custom tool.
* **Custom Tool**: When the agent needs to answer, it calls a sub-workflow ("Gemini CLI Worker").
* **SSH Execution**: The sub-workflow connects to your host machine via SSH, executes the `gemini` command with your prompt, and returns the CLI's standard output to the chat.

## Set up steps
1. **Prerequisites**: You must have [Node.js](https://nodejs.org/) (v20+) and the `gemini-chat-cli` installed on your host machine.
2. **Split the Workflows**:
   * Copy the bottom section (Sub-workflow).
   * Paste it into a new workflow, name it "Gemini CLI Worker", and **Save** it.
   * Note the ID of this new workflow.
3. **Configure the Main Workflow**:
   * Open the **Call 'Gemini CLI'** node.
   * In the "Workflow ID" field, select the "Gemini CLI Worker" workflow you just saved.
4. **Configure SSH**:
   * Open the **Execute a command** node in the sub-workflow.
   * Configure your SSH credentials (IP, Username, Password/Key) to allow n8n to connect to the host where Gemini CLI is installed.

## 📊 Basic Information

- **Workflow ID:** 11843
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 410
- **Downloads:** 41
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11843)

## 👤 Author

- **Name:** Alexandru Florea
- **Username:** @elitiv

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **noOp** 
- **stickyNote** (×4)
- **ssh** 
- **executeWorkflowTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
