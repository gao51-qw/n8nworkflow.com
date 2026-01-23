# AI-powered customer feedback routing with Gmail, Slack, Pipedrive, Zendesk & Notion

> ## **Who’s it for**
This workflow is built for B2B SaaS and CX teams that are drowning in unstructured customer feedback across tools. It’s ideal for Customer Success, Product and Support leaders who want a light “voice of customer engine” without rebuilding their stack: Gmail for interactions, Slack for conversations, Pipedrive for notes and Zendesk for tickets, plus Notion for follow-up tasks. 

## **How it works / What it does**
The workflow runs on a schedule or manual trigger and first sets the CSM’s email address. It then uses an AI “Data agent” to pull recent customer signals from multiple sources: Gmail messages, Slack messages, Pipedrive notes and Zendesk tickets.
A “Signals agent” compresses each piece of feedback into a concise, neutral summary, which is then grouped by topic via a “Clustering agent”. Each cluster gets a label, count and examples.
Finally, an “Action agent” routes clusters based on their label:
- Create Zendesk tickets for product/performance issues
- Post to a dedicated Slack channel for billing / contract topics
- Create Notion tasks for sales-related feedback
- Send targeted Gmail messages to the CSM for high-risk or engagement-related items
## **How to set up**
1. Import the workflow into n8n.
2. Connect credentials for Gmail, Slack, Pipedrive, Zendesk, Notion and OpenAI.
3. Update the CSM email in the “Set CSM email” node.
4. Adjust date filters, send-to addresses and Slack channel IDs as needed.
5. Enable the schedule trigger for weekly or daily digests.
## **Requirements**
- Active accounts & credentials for: Gmail, Slack, Pipedrive, Zendesk and Notion
- OpenAI (or compatible) API key for the LLM node
- At least one Slack channel for posting feedback (e.g. #billing-feedback)
## **How to customize the workflow**
- Change the time window or filters (sender, channel, query) for each data source.
- Edit the clustering and routing prompts to match your own categories and teams.
- Add new destinations (e.g. Jira, HubSpot) by connecting more tools to the Action agent.
- Modify thresholds (e.g. minimum count) before a cluster triggers an action.
- Localize labels and email copy to your team’s language and tone.

## 📊 Basic Information

- **Workflow ID:** 11628
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 23
- **Downloads:** 2
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11628)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTool** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **pipedriveTool** 
- **slackTool** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **zendeskTool** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **notionTool** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **stickyNote** (×9)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
