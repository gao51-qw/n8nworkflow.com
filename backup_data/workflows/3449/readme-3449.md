# Manage calendar events with Slack using OpenAI-powered Outlook assistant

> ### This n8n template demonstrates how easy it is to build an Outlook Calendar Assistant powered by an AI agent equipped with Tools.

For teams using Outlook Calendar and Slack who need easier calendar management, this workflow can be a great first step to introducing powerful AI tools into your daily activities.

### How it works
* A Slack Trigger node is configured to catch "bot mentions" events in a designated channel.
* The message is parsed using the Edit fields node to extract only the required attributes of the event.
* An AI Agent equipped with Outlook Calendar Tools enables question and answer capability for the organisation's shared calendars and events.
* The AI agent's response is sent back to Slack as a reply to the user's query.

### How to use
* The workflow is triggered via @mention-ing the bot followed by the query. eg. "@bot how many meetings does Paul have to attend to this week?"
* To start listening to real mentions, you must activate the workflow and set it to production mode. You must use the production webhook URL for the event subscription.

**Some sample queries to try**
* "What's included in the product team's sprint demo this week?"
* "Who's booked room 7 for this Thursday?"
* "When is Jim & Nik's sales meeting with Microsoft?"

### Requirements
* Slack for Chat and Trigger.
  * To get connected to Slack, see the [official n8n docs for Slack Credentials](https://docs.n8n.io/integrations/builtin/credentials/slack/).
* Outlook for Agent Tools
  * To get connected to Outlook, see the [official n8n docs for Outlook Credentials](https://docs.n8n.io/integrations/builtin/credentials/imap/outlook/).

### Customising this workflow
* Not using Slack? This template can be modified to work with Teams but requires a little more configuration.
* Agents can have any number of tools but an overloaded agent is prone to confusion! If this happens, try splitting into multiple agents serving separate needs.

## 📊 Basic Information

- **Workflow ID:** 3449
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1555
- **Downloads:** 155
- **Created:** 2025/4/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3449)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **microsoftOutlookTool** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×5)
- **slack** 
- **respondToWebhook** 
- **if** 
- **set** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
