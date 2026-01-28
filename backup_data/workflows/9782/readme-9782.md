# AI-powered customer feedback analysis & routing for Gmail, Zendesk, Slack & Pipedrive

> ## Who's it for
This workflow is for Customer Success, Product, and Support teams who need to centralize and analyze unstructured customer feedback. It automates the process of identifying key themes from various communication channels, allowing you to proactively address issues, track feature requests, and understand the voice of the customer without manual effort.

## What it does
This workflow uses a powerful chain of AI agents to process customer feedback from end to end. It begins by using a Data Agent to gather all recent customer interactions from multiple sources, including Gmail, Pipedrive, Zendesk, and Slack.

Once the raw data is collected, a second AI Chain reads all the text and compresses it into concise, actionable "signals." A third AI Chain then takes these signals and intelligently clusters them into shared topics, assigning each a human-readable label like "Billing," "Performance," or "Feature Request."

Finally, a fourth AI Agent acts as a dispatcher. It analyzes the clustered topics and follows a set of routing rules defined in its prompt to take the appropriate action. It uses its tools to automatically create a Zendesk ticket for product feedback, send a Slack message for billing issues, create a Notion page for training opportunities, or send a direct email alert for high-risk accounts.

## How to set up
To get this workflow running, you will need to configure the credentials and parameters for the following nodes:
1.  **Configure Credentials:** Add your credentials for the `Config: Set LLM for Agents` node and all of the Tool nodes (`Gmail`, `Pipedrive`, `Zendesk`, `Slack`, and `Notion`).
2.  **Set Initial Parameters:** In the `Set: Initial Parameters` node, update the placeholder email address and the Slack channel name for billing alerts.
3.  **Update Slack Search Channel:** In the `Tool: Search Slack Messages` node, set the channel you want the agent to search for feedback in.
4.  **Activate Workflow:** Once configured, you can run the workflow manually to start the analysis.

## Requirements
- An account with an LLM provider, such as OpenAI.
- Accounts for the services you wish to connect (Gmail, Pipedrive, Zendesk, Slack, Notion).
- This workflow requires n8n's Langchain community nodes to be installed on your instance.

## How to customize the workflow
This workflow's logic is primarily driven by AI prompts, making it highly customizable:
- **AI Prompts:** Adjust the prompts in any of the `AI Agent` or `AI Chain` nodes to change the data gathering, analysis, clustering, or routing rules to fit your business needs.
- **Data Sources:** Add, remove, or swap out the "Tool" nodes in the `AI Agent: Gather Customer Feedback` section to connect to different data sources like Intercom, Salesforce, or a database.
- **Triggers:** Replace the `Manual Trigger` with a `Schedule Trigger` to run the analysis automatically on a daily or weekly basis.

## 📊 Basic Information

- **Workflow ID:** 9782
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9782)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **gmailTool** (×2)
- **pipedriveTool** 
- **zendeskTool** (×2)
- **slackTool** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **notionTool** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
