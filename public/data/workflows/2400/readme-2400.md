# AI agent with charts capabilities using OpenAI structured output and Quickchart

> This workflow is an experiment to integrate charts in AI Agents, using the new [Structured Output from OpenAI](https://openai.com/index/introducing-structured-outputs-in-the-api/) and [Quickchart.io](https://quickchart.io/).

## How it works
- Users chat with an AI Agent.
- Anytime the AI Agent considers a chart is needed, it calls a tool to generate a chart
- OpenAI generates a chart using the Quickchart definition
- This object is added at the end of a Quickchart.io URL ([see documentation](https://quickchart.io/documentation/usage/parameters/))
- The url is added in the conversation via the AI Agent as markdown.


## Set up steps
- Create an [OpenAI API Key](https://platform.openai.com/api-keys)
- Create the OpenAI credentials
- Use the credentials for the HTTP Request node (as Predefined Credential type)
- Activate your workflow
- Start chatting
- For example, you can ask the AI Agent to generate a chart about the top 5 movies at the box office
- Start exploring the limits

**Shout-out**
[Quickchart.io](https://quickchart.io) is an amazing open source project that provides a free API to test. Go check them out!


**Example of chart**
![Screenshot 20240904 at 14.08.29.png](fileId:836)

## 📊 Basic Information

- **Workflow ID:** 2400
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 18295
- **Downloads:** 1829
- **Created:** 2024/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2400)

## 👤 Author

- **Name:** Agent Studio
- **Username:** @agentstudio

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **httpRequest** 
- **set** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
