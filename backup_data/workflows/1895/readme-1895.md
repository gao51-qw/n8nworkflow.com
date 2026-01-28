# Reddit AI digest

> This workflow digests mentions of n8n on Reddit that can be sent as an single email or Slack summary each week. We use OpenAI to classify if a specific Reddit post is really about n8n or not, and then the summarise it into a bullet point sentence.

## How it works

1. Get posts from Reddit that might be about n8n;
2. Filter for the most relevant posts (posted in last 7 days and more than 5 upvotes and is original content);
3. Check if the post is actually about n8n;
4. If it is, categorise with OpenAI.
   
Bear in mind: Workflow only considers first 500 characters of each reddit post. So if n8n is mentioned after this amount, it won't register as being a post about [n8n.io](https://n8n.io/).

## Next steps
- Improve OpenAI Summary node prompt to return cleaner summaries;
- Extend to more platforms/sources - e.g. it would be really cool to monitor larger Slack communities in this way;
- Do some classification on type of user to highlight users likely to be in our ICP;
- Separate a list of data sources (reddit, twitter, slack, discord etc.), extract messages from there and have them go to a sub workflow for classification and summarisation.
     

## 📊 Basic Information

- **Workflow ID:** 1895
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 11858
- **Downloads:** 1185
- **Created:** 2023/2/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1895)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **reddit** 
- **stickyNote** (×4)
- **set** (×2)
- **if** (×2)
- **merge** (×2)
- **openAi** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
