# Customer Support Channel and Ticketing System with Slack and Linear

> This n8n workflow demonstrates how to create a really simple yet effective customer support channel and pipeline by combining Slack, Linear and AI tools.

Built on n8n's ability to integrate anything, this workflow is intended for small support teams who want to maximise re-use of the tools they already have with an interface which is doesn't require any onboarding.

**Read the blog post here**: [https://blog.n8n.io/automated-customer-support-tickets-with-n8n-slack-linear-and-ai/](https://blog.n8n.io/automated-customer-support-tickets-with-n8n-slack-linear-and-ai/)

## How it works
* The workflow is connected to a slack channel setup with the customer to capture support issues.
* Only messages which are tagged with a "✅" reaction are captured by the workflow. Messages are tagged by the support team in the channel.
* Each captured support issue is sent to the AI model to classify, prioritise and rewrite into a support ticket.
* The generated support ticket is uploaded to Linear for the support team to investigate and track.
* Support team is able to report back to the user via the channel when issue is fixed.

## Requirements
* Slack channel to be monitored
* Linear account and project

## Customising this workflow

Don't have Linear? This workflow can work just as well with traditional ticketing systems like JIRA.

## 📊 Basic Information

- **Workflow ID:** 2323
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 7904
- **Downloads:** 790
- **Created:** 2024/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2323)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **slack** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **stickyNote** (×7)
- **set** (×2)
- **if** 
- **linear** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **merge** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
