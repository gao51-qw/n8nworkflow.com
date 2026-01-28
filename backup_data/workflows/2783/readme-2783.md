# AI marketing report (Google Analytics & Ads, Meta Ads), sent via email/Telegram

> ## What this workflow does
This workflow retrieves Online Marketing data (Google Analytics for several domains, Google Ads, Meta Ads) from the last 7 days and the same period in the previous year. The data is then prepared by AI as a table, analyzed and provided with a small summary.
The summary is then sent by email to a desired address and, shortened and summarized again, sent to a Telegram account.

This workflow has the following sequence:

1. time trigger (e.g. every Monday at 7 a.m.)
2. retrieval of Online Marketing data from the last 7 days (via sub workflows)
3. assignment and summary of the data
4. retrieval of Online Marketing data from the same time period of the previous year
5. allocation and summary of the data
6. preparation in tabular form and brief analysis by AI.
7. sending the report as an email
8. preparation in short form by AI for Telegram (optional)
9. sending as Telegram message.

## Requirements
The following accesses are required for the workflow:
- Google Analytics (via Google Analytics API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/)
- Google Ads (via HTTP Request -&gt; Google Ads API):[Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/)
- Meta Ads (via Facebook Graph API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/facebookgraph/)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- SMTP access data (for sending the mail)
- Telegram access data (optional for sending as Telegram message): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/telegram/)

You must set up the individual sub-workflows as separate workflows. Then set the “Execute workflow trigger” here. Then select the corresponding sub-workflow in the AI Agent Tools.
You can select the number of domains yourself. If the data queries are not required, simply delete the corresponding tool (e.g. “Analytics_Domain_5).

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 📊 Basic Information

- **Workflow ID:** 2783
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 49524
- **Downloads:** 4952
- **Created:** 2025/1/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2783)

## 👤 Author

- **Name:** Friedemann Schuetz
- **Username:** @freddy-schuetz

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×7)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolCalculator** (×3)
- **stickyNote** (×5)
- **googleAnalytics** (×2)
- **code** (×8)
- **set** (×6)
- **summarize** (×6)
- **httpRequest** (×2)
- **facebookGraphApi** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **emailSend** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 42 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
