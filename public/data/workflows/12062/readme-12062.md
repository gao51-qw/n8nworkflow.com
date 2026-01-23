# Control AI agent tool access with Port RBAC and Slack mentions

> ## RBAC for AI agents with n8n and Port

This workflow implements role-based access control for AI agent tools using Port as the single source of truth for permissions. Different users get access to different tools based on their roles, without needing a separate permission database.

For example, developers might have access to PagerDuty and AWS S3, while support staff only gets Wikipedia and a calculator. The workflow checks each user's permissions in Port before letting the agent use any tools.

For the full guide with blueprint setup and detailed configuration, see [RBAC for AI Agents with n8n and Port](https://docs.port.io/guides/all/implement-rbac-for-ai-agents-with-n8n-and-port/) in the Port documentation.

## How it works
The n8n workflow orchestrates the following steps:

- Slack trigger — Listens for @mentions and extracts the user ID from the message.
- Get user profile — Fetches the user's Slack profile to get their email address.
- Port authentication — Requests an access token from the Port API using client credentials.
- Permission lookup — Queries Port for the user entity (by email) and reads their allowed_tools array.
- Unknown user check — If the user doesn't exist in Port, sends an error message and stops.
- Permission filtering — The "Check permissions" node compares each connected tool against allowed_tools and replaces unauthorized ones with a stub that returns "You are not authorized to use this tool."
- AI agent — Runs with only permitted tools, using GPT-4 and chat memory.
- Response — Posts the agent output back to the Slack channel.

## Setup
- [ ] Connect your Slack account and set the channel ID in the trigger node
- [ ] Add your OpenAI API key
- [ ] Register for free on [Port.io](https://www.port.io)
- [ ] Create the rbacUser blueprint in Port (see [full guide](https://docs.port.io/guides/all/implement-rbac-for-ai-agents-with-n8n-and-port/) for blueprint setup)
- [ ] Add user entities using email as the identifier
- [ ] Replace YOUR_PORT_CLIENT_ID and YOUR_PORT_CLIENT_SECRET in the "Get Port access token" node
- [ ] Connect credentials for any tools you want to use (PagerDuty, AWS, etc.)
- [ ] Update the channel ID in the Slack nodes
- [ ] Invite the bot to your Slack channel
- [ ] You should be good to go!

## Prerequisites
- You have a Port account and have completed the onboarding process.
- You have a working n8n instance (self-hosted) with LangChain nodes available.
- Slack workspace with bot permissions to receive mentions and post messages.
- OpenAI API key for the LangChain agent.
- Port client ID and secret for API authentication.
- (Optional) PagerDuty, AWS, or other service credentials for tools you want to control.


⚠️ This template is intended for Self-Hosted instances only.


## 📊 Basic Information

- **Workflow ID:** 12062
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 7
- **Downloads:** 0
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12062)

## 👤 Author

- **Name:** Port IO
- **Username:** @portio

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.code** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **if** 
- **stickyNote** (×6)
- **slackTrigger** 
- **slack** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **pagerDutyTool** 
- **awsS3Tool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
