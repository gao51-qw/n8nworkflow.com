# Automate web interactions with Claude 3.5 Haiku and Airtop Browser Agent

> ### About this AI Agent

This workflow is designed to automate web interactions by simulating a human user, using a combination of the Agent node and AI tools powered by Airtop.

### How does this workflow works?

**Form Submission Trigger**: The workflow starts with a form submission trigger node named "On form submission". This node collects user instructions for the web AI agent, including a prompt and an optional Airtop profile name for sites requiring authentication.

**AI Agent**: The core of the workflow is the "AI Agent" node, which uses a smart web agent to manage a remote web browser. It is designed to fulfill user requests by interacting with the browser through various tools.

#### Browser Session Management

**Start Browser**: The "Start browser" node initiates a new browser session and window. It is essential for obtaining the sessionId and windowId required for subsequent operations.
Session and Window Management: The workflow includes nodes for creating and managing browser sessions and windows, such as "Session" and "Window".
Web Interaction Tools:

**Load URL**: This node loads a specified URL into the browser window.
Query: The "Query" node allows the agent to ask questions and extract information from the current web page.
Click: This node simulates clicking on elements within the web page.
Type: The "Type" node types text into specified elements on the page.
Session Termination: The "End session" node is used to terminate the browser session once the tasks are completed.

#### Output Handling

**Structured Output Parser**: This node processes the agent's results into a structured format.

**Output**: The final results are set and prepared for output.
Slack Integration: Although currently disabled, there is a "Slack" node intended to send messages to a Slack channel, potentially for notifications or live view URLs.

### Seting up your agent

**Airtop API Credentials**:
Users must have valid Airtop API credentials to interact with the web browser tools. This includes nodes like "Click", "Query", "Load URL", "End session", "Type", "Session", and "Window".
Slack API Credentials (Optional):

If users want to enable Slack notifications, they need to configure Slack OAuth2 credentials. The Slack node is currently disabled but can be used to send messages to a Slack channel.
Anthropic API Credentials:

The "Claude 3.5 Haiku" node requires Anthropic API credentials. Users need to have access to this API to utilize the language model features.

## 📊 Basic Information

- **Workflow ID:** 3592
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 10960
- **Downloads:** 1096
- **Created:** 2025/4/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3592)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **airtopTool** (×5)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **formTrigger** 
- **slack** (×2)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×2)
- **airtop** (×2)
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
