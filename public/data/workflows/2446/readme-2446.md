# Voice activated multi-agent demo for Vagent.io using Notion and Google Calendar

> ## Purpose
Use a lightweight Voice Interface, for you and your entire organization, to interact with an AI Supervisor, a personal AI Assistant, which has access to your custom workflows. You can also connect the supervisor to your already existing Agents.

## Demo & Explanation
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/qe23D1hgLwY/0.jpg)](https://youtu.be/qe23D1hgLwY)

## How it works
- After recording a message in the Vagent App, it gets transcribed and sent in combination with a session ID to the registered webhook
- The Main Agent acts as a router. I interprets the message while using the stored chat history (bound to the session ID) and chooses which tool to use to perform the required action and. Tools on this level are workflows, which contain subordinated Agents. Since the Main Agent interprets the original message, the raw input is passed to the Tools/Sub-Agents as a separate parameter
- Within the Sub-Agents the actual processing takes place. Each of those has it’s separate chat memory (with a suffix to the main session ID), to achieve a clear separation of concerns
- Depending on the required action an HTTP Request Tool is called. The result is being formatted in Markdown and returned to the Main Agent with an additional short prompt, so it does not get interpreted by the Main Agent.
- Drafts are separated from a short message by added indentation (angle brackets). If some information is missing, no tool is called just yet, instead a message is returned back to the user
- The Main Agent then outputs the result from the called Sub-Agent. If a draft is included, it gets separated from the spoken output
- Finally the formatted output is returned as response to the webhook. The message is split into a spoken and a text version, which enables the App to read out loud unnecessary information like drafts in this example

See the full documentation of Vagent: [https://vagent.io/docs](https://vagent.io/docs)

## Setup
- Import this workflow into your n8n instance
- Follow the instructions given in the sticky notes on the canvas
- Setup your credentials. OpenAI can be replaced by another LLM in the workflow, but is required for the App to work. Google Calendar and Notion are required for all scenarios to work
- Copy the Webhook URL from the Webhook node of the main workflow
- Download the Vagent App from [https://vagent.io](https://vagent.io)
- In the settings paste your OpenAI API Token, the Webhook URL and the password defined for Header Auth
- Now you can use the App to interact with the Multi-Agent using your Voice by tapping the Mic symbol in the App to record your message.

*To use the chat trigger (for testing) properly, temporarily disable the nodes after the Tools Agent.*

## 📊 Basic Information

- **Workflow ID:** 2446
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 12585
- **Downloads:** 1258
- **Created:** 2024/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2446)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×3)
- **set** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×3)
- **stickyNote** (×4)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
