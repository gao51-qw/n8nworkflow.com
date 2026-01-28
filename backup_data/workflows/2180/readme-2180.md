# Scrape and summarize posts of a news site without RSS feed using AI and save them to a NocoDB

> The [News Site](https://www.colt.net/resources/type/news/) from Colt, a telecom company, does not offer an RSS feed, therefore web scraping is the choice to extract and process the news.

The goal is to get only the newest posts, a summary of each post and their respective (technical) keywords.

Note that the news site offers the links to each news post, but not the individual news. We collect first the links and dates of each post before extracting the newest ones.

The result is sent to a SQL database, in this case a NocoDB database.

This process happens each week thru a cron job.

**Requirements**:
- Basic understanding of CSS selectors and how to get them via browser (usually: right click &rarr; inspect)
- ChatGPT API account - normal account is not sufficient
- A NocoDB database - of course you may choose any type of output target

**Assumptions**:
- CSS selectors work on the news site
- The post has a date with own CSS selector - meaning date is not part of the news content

**"Warnings"**
- Not every site likes to be scraped, especially not in high frequency
- Each website is structured in different ways, the workflow may then need several adaptations.

## 📊 Basic Information

- **Workflow ID:** 2180
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 29636
- **Downloads:** 2963
- **Created:** 2024/3/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2180)

## 👤 Author

- **Name:** Askan
- **Username:** @askans

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **html** (×3)
- **openAi** (×2)
- **set** (×2)
- **merge** (×4)
- **code** 
- **httpRequest** (×2)
- **stickyNote** (×18)
- **scheduleTrigger** 
- **nocoDb** 
- **itemLists** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
