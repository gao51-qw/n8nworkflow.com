# Send Google Analytics data to A.I. to analyze then save results in Baserow

> ## Who's this for?
- If you own a website and need to analyze your Google analytics data
- If you need to create an SEO report on which pages are getting most traffic or how your google search terms are performing
- If you want to grow your site based on suggestions from data

![Screenshot 20241101 at 11.07.21 PM.png](fileId:858)
![Screenshot 20241101 at 11.07.31 PM.png](fileId:857)

## Use case
Instead of hiring an SEO expert, I run this report weekly. It checks compares the data from this week to the week before:
- Views based on countries
- The top performing pages
- Google search console performance

[Watch youtube tutorial here](https://www.youtube.com/watch?v=KlWFhTz9M9g)

[Get my SEO A.I. agent system here](https://2828633406999.gumroad.com/l/rumjahn)

## How it works
- The workflow gathers google analytics for the past 7 days then it gathers the data for the week before for comparison.
- It does this 3 times to get: views per country, engagement per page and google search console results for organic search results.
- The google analytics nodes has already chosen the correct dimensions and metrics. 
- At the end, it passes the data to openrouter.ai for A.I. analyse.
- Finally it saves to baserow. 

## How to use this
- Input your Google analytics credentials
- Input your property ID
- Input your Openrouter.ai credentials
- Input your baserow credentials
- You will need to create a baserow database with columns: Name, Country Views, Page Views, Search Report, Blog (name of your blog).

Created by [Rumjahn](https://rumjahn.com/)


## 📊 Basic Information

- **Workflow ID:** 2517
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 6383
- **Downloads:** 638
- **Created:** 2024/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2517)

## 👤 Author

- **Name:** Keith Rumjahn
- **Username:** @rumjahn

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **manualTrigger** 
- **stickyNote** (×4)
- **googleAnalytics** (×6)
- **code** (×6)
- **httpRequest** (×3)
- **baserow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
