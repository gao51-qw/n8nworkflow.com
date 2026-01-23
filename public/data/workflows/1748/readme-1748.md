# Pulling data from services that n8n doesn’t have a pre-built integration for

> You still can use the app in a workflow even if we don’t have a node for that or the existing operation for that. With the HTTP Request node, it is possible to call any API point and use the incoming data in your workflow 

**Main use cases:**
- Connect with apps and services that n8n doesn’t have integration with
- Web scraping

**How it works**
This workflow can be divided into three branches, each serving a distinct purpose:

1.Splitting into Items (HTTP Request - Get Mock Albums):
- The workflow initiates with a manual trigger (On clicking 'execute').
- It performs an HTTP request to retrieve mock albums data from "https://jsonplaceholder.typicode.com/albums."
- The obtained data is split into items using the Item Lists node, facilitating easier management.

2.Data Scraping (HTTP Request - Get Wikipedia Page and HTML Extract):
- Another branch of the workflow involves fetching a random Wikipedia page using an HTTP request to "https://en.wikipedia.org/wiki/Special:Random."
- The HTML Extract node extracts the article title from the fetched Wikipedia page.

3.Handling Pagination (The final branch deals with handling pagination for a GitHub API request):
- It sends an HTTP request to "https://api.github.com/users/that-one-tom/starred," with parameters like the page number and items per page dynamically set by the Set node.
- The workflow uses conditions (If - Are we finished?) to check if there are more pages to retrieve and increments the page number accordingly (Set - Increment Page).
- This process repeats until all pages are fetched, allowing for comprehensive data retrieval.

## 📊 Basic Information

- **Workflow ID:** 1748
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 223504
- **Downloads:** 22350
- **Created:** 2022/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1748)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **set** (×2)
- **itemLists** (×2)
- **htmlExtract** 
- **if** 
- **httpRequest** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
