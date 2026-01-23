# Message on website content changed in Telegram

> I wanted a system to monitor website content changes and notify me. So I made it using n8n.

Especially my competitor blogs. I wanted to know how often they are posting new articles. (I used their sitemap.xml file) (The below workflow may vary)

In the Below example, I used HackerNews for example.

Explanation:

- First HTTP Request node crawls the webpage and grabs the website source code
- Then wait for x minutes
- Again, HTTP Node crawls the webpage
- If Node compares both results are equal if anything is changed. It’ll go to the false branch and notify me in telegram.

**Workflow:**

![](https://community.n8n.io/uploads/default/optimized/2X/b/b737a95de4dfe0825d50ca098171e9f33a459e74_2_690x288.png)

**Sample Response:**

![](https://community.n8n.io/uploads/default/original/2X/d/d21ba41d7ac9ff5cd8148fedb07d0f1ff53b2529.png)


## 📊 Basic Information

- **Workflow ID:** 1471
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 13185
- **Downloads:** 1318
- **Created:** 2022/2/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1471)

## 👤 Author

- **Name:** MC Naveen
- **Username:** @mcnaveen

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **httpRequest** (×2)
- **wait** 
- **if** 
- **cron** 
- **telegram** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
