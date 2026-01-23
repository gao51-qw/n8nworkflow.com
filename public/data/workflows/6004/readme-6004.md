# Daily Google Search Console SEO pulse: Catch top movers across keyword segments

> ### This workflow helps SEO teams catch top movers in Google Search Console by comparing daily performance across keyword segments like brand, nonbrand, and content categories. 

Instead of serving as a routine check, it highlights the queries and pages with the biggest jumps or drops, making it ideal for spotting wins, losses, or unexpected shifts early.

### How It Works
1. Runs daily on a scheduled trigger (e.g. every morning).
2. Pulls GSC data for the prior two days (e.g. yesterday vs. day before).
3. Segments traffic by keyword type or URL pattern (e.g. brand, nonbrand, recipes, blogs, etc.).
4. Calculates changes in clicks, impressions, CTR, and average position.
5. Flags top movers with the biggest positive or negative deltas.
6. Sends structured reports via Slack or email, grouped by segment and sorted by impact.

### Setup Steps
- Connect your Google Search Console account and optionally Gmail or Slack.
- Swap in your own domain(s) and customize segmentation logic (e.g. brand terms, path filters).
- By default, the workflow includes Slack alerts, but these can be easily switched to or combined with email, webhook, or other channels.
- Full setup takes around 15–20 minutes with working GSC credentials.

*Note: The “recipes” segment is included as an example of how to segment content. This can be changed to match blog, FAQ, product pages, or any other category.*

## 📊 Basic Information

- **Workflow ID:** 6004
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 437
- **Downloads:** 43
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6004)

## 👤 Author

- **Name:** MattF
- **Username:** @the-curious-automator

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **if** 
- **code** (×11)
- **merge** 
- **scheduleTrigger** 
- **httpRequest** (×2)
- **slack** (×4)
- **switch** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
