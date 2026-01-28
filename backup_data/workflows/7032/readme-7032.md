# Weekly Notion journal & task summarization with GPT-4.1 to Discord

> ## Notion Weekly Journal AI Summary
This workflow will run on a weekly schedule and retrieve your Notion Daily Journal pages for the past week and aggregate them into a ChatGPT generated concise summary. It will save that weekly summary back to your Notion as a new Note in addition to posting to a personal Discord channel.

Additionally it will also retrieve all of the Tasks you've completed in the past week and provide a quick total with a congratulatory message to a Discord channel as well.

### Requirements/Setup:
- You need Notion setup w/ a Notes database
  - If you want the Discord messages, setup a Discord webhook for your channel as well, or simply delete the Discord nodes.
- One of the properties for the Notes db should be `Type` with a value of `Journal`
- The contents of your daily Journal pages can be whatever you want
  - I've found what works best for me is the format of "What was a highlight of the day?", "What was a low point of the day?", and "What decisions did I delegate, delay, or dodge?"
- You should also create an additional `Type` for your Weekly summary page that gets created - in this case I used simply `Weekly`
- Automate this to run weekly on your day of choice. I tend to only journal on weekdays so I've set mine up to run every Friday retrieving the past week's Journal entries.


### Options:
- You don't have to use Discord, feel free to swap out with Slack or remove altogether.
- You also don't need to use the Tasks summary bottom half, simply remove that if you don't want it or need it.
- You can easily reuse this workflow to aggregate your Weekly Summary notes (that this workflow auto generates/saves) to generate a Quarterly or even Yearly summary!



## 📊 Basic Information

- **Workflow ID:** 7032
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 299
- **Downloads:** 29
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7032)

## 👤 Author

- **Name:** Jason Krol
- **Username:** @shorttompkins

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **notion** (×4)
- **scheduleTrigger** 
- **code** (×2)
- **discord** (×2)
- **stickyNote** (×4)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
