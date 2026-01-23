# Auto-categorize YNAB transactions with GPT-5-Mini and Discord notifications

> ## YNAB Super Budget

Ever wish that Y.N.A.B was just a little smarter when auto-categorizing your transactions?

Now you can supercharge your YNAB budget with ChatGPT! No more manual categorization. 

## Setup
1. Get a [YNAB Api Key](https://api.ynab.com/)
2. Get YNAB Budget ID & Account ID (They are part of the URL) `https://app.ynab.com/BUDGETID/accounts/ACCOUNTID`

## Additional information

Every transaction that this workflow modifies will be tagged with `n8n` and color `yellow`. You can easily review all changes by selecting just that tag. 

![Screenshot 20250814 at 21.02.07.png](fileId:2142)

## Customization

By default it pulls transactions from the last 30 days. 
This workflow will post a message in a discord channel showing which transactions it modified and what categories it chose. 

Discord notifications are optional. 

![Screenshot 20250818 at 23.41.54.png](fileId:2141)



## Considerations
YNAB allows for `200` api calls per hour. If you have more than 200 Uncategorized transactions, consider reducing the `previous_days` value.

## 📊 Basic Information

- **Workflow ID:** 7566
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 536
- **Downloads:** 53
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7566)

## 👤 Author

- **Name:** spencer owen
- **Username:** @spuder

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **httpRequest** (×3)
- **splitOut** (×4)
- **filter** (×3)
- **merge** 
- **aggregate** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **discord** 
- **splitInBatches** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
