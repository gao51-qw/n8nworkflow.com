# Auto-audit SEO traffic drops with AI & Google Search Console to Slack

> # Auto-Audit SEO Traffic Drops with AI & GSC

Automatically monitor your Google Search Console data to catch SEO performance drops before they become critical. This workflow identifies pages losing rankings and clicks, scrapes the live content, and uses AI to analyze the gap between "Search Queries" (User Intent) and "Page Content" (Reality). It then delivers actionable fixes—including specific Title rewrites and missing H2 headings—directly to Slack.

Ideal for SEO managers, content marketers, and site owners who want a pro-level SEO consultant running 24/7 on autopilot.

## How it works
1. **Compare & Detect:** Compares last month's GSC performance with the previous month to identify pages with declining traffic.
2. **Deep Dive:** For each struggling page, it fetches the top search queries and scrapes the actual Title and H2 tags from your live website.
3. **AI Analysis:** An AI Agent analyzes *why* the page is failing by comparing user intent vs. actual content.
4. **Report:** Sends a "Consultant-style" report to Slack with quantitative data and specific improvement tasks (e.g., "Add this H2 heading").

## Set up steps
1. **Configure:** Open the `📝 Edit Me: Config` node and enter your GSC Property URL (e.g., `sc-domain:example.com`).
2. **Connect Credentials:**
    * **Google Search Console:** To fetch performance data.
    * **OpenAI:** To analyze content and generate ideas.
    * **Slack:** To receive the weekly reports.
3. **Activate:** Turn on the workflow to receive your SEO audit every Monday morning.

## 📊 Basic Information

- **Workflow ID:** 11401
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 135
- **Downloads:** 13
- **Created:** 2025/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11401)

## 👤 Author

- **Name:** Shun Nakayama
- **Username:** @nakayama

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **n8n-nodes-google-search-console.googleSearchConsole** (×2)
- **filter** 
- **splitInBatches** 
- **wait** 
- **code** (×2)
- **httpRequest** 
- **html** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
