# Retrieve and filter Kagi News by category

> Get the latest news, from Kagi, with a workflow that lets you filter by news category.

Feed the results in your voice assistant automations to get on-demand news.

Or leverage LLM models to create daily summaries from the headlines you retrieved.

## How it works

This workflow takes a category name, from the ones available on Kagi News, then uses the Kagi News API to get all of the day's stories in that category. 

It then does a bit of filtering, to make it easier to manipulate. But you can skip or change that to your liking.

## How to use

To test it, simply change the pinned data in the `Start` node, particularly the `category` field. You can use such examples as `World`, `UK` or `Technology`.

Unsure as to what options for category there are? Just run the workflow and check the output of the `Split Categories` node! It will list all categories available. Take the value from `categoryName`.

## Things to consider

I used `categoryName` as the input instead of `categoryId` for one reason: to make it easier for LLMs to populate that field. 
If this doesn't work for you, it should be quite easy to change.

It is also a single category at a time. If you want to get stories from more categories at once, you can take an array as input in `Start`, then filter on the categories list containing your entries, rather than an exact match. Finally, you will have to merge all calls to `Split out stories` after each call to the API.

## Requirements

None beyond an internet connection for your n8n instance.

There is no API access token needed or any authorisation of any kind.

## 📊 Basic Information

- **Workflow ID:** 9318
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 64
- **Downloads:** 6
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9318)

## 👤 Author

- **Name:** Mihail Morosan
- **Username:** @morosanmihail

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **httpRequest** (×2)
- **splitOut** (×2)
- **filter** 
- **set** 
- **limit** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
