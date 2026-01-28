# Daily business news briefings with NewsAPI & GPT-4 insights to Slack

> ## This n8n workflow automatically fetches trending news articles based on your chosen country, category, and keyword — then enriches the data with AI-powered business insights before posting a concise summary to Slack.

Ideal for sales teams, executives, marketers, or anyone who wants fast, actionable news briefings directly in their Slack workspace.

⸻

## Who it’s for

Executives, analysts, sales teams, or marketing professionals who want curated, AI-enhanced news summaries tailored to business opportunities, risks, and trends — delivered automatically to Slack.

⸻

## How it works / What it does
1. A Schedule Trigger runs on a daily, weekly, or custom frequency.
2. It queries the NewsAPI to retrieve top headlines by country, category, or keyword.
3. Headlines are formatted and enriched with your configured query context.
4. The AI model (GPT-4) analyzes articles and summarizes key insights, categorizing them as Opportunities, Risks, or Trends.
5. Finally, the summarized insights are posted directly into a Slack channel of your choice.

⸻

## How to set up
1. Set your schedule frequency in the Schedule Trigger node.
2. Configure your preferred country, category, and keyword in the Inject Config node.
3. Add your NewsAPI Key inside the Fetch News Articles node.
4. Connect your Slack credentials in the Post to Slack node.
5. Optional: Adjust the AI prompt for more tailored analysis.

⸻

## Requirements
- A NewsAPI account to fetch headlines.
- An OpenAI API key for GPT-4 summarization.
- A Slack workspace and connected credentials via n8n.

⸻

## How to customize the workflow
- Change the country, category, or keyword in the Inject Config to focus on specific markets or sectors.
- Adjust the AI prompt in the GPT node to prioritize certain insights like ESG factors, M&A activity, or market sentiment.
- Extend the workflow to log results to Google Sheets, email summaries, or send SMS alerts.
- Replace the Schedule Trigger with a Webhook if you want to trigger summaries on demand.

This template is designed to be modular, making it easy to adapt for competitive intelligence, investment tracking, or industry news curation.

## 📊 Basic Information

- **Workflow ID:** 6273
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2595
- **Downloads:** 259
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6273)

## 👤 Author

- **Name:** James Carter
- **Username:** @arioloop

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **slack** 
- **stickyNote** (×9)
- **set** (×2)
- **httpRequest** 
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
