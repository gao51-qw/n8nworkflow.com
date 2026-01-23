# Weekly Google Search Console SEO pulse: Organic & brand vs non-brand performance

> ## This workflow generates a weekly performance summary from Google Search Console, focused on brand-level SEO metrics and week-over-week trends.

It provides a structured view of how each brand segment is performing, with clean formatting for quick insights.

Key Features
- Sends a weekly email with a table showing clicks, impressions, CTR, and position — along with % change vs. the previous week.
- Highlights both brand and non-brand clicks separately.
- Color-coded % changes make it easy to spot wins (green) and losses (red) at a glance.

It’s designed to give SEO teams a consistent overview of performance by brand, helping to track directional shifts and support deeper analysis when needed.

### How it works
1. Runs weekly (e.g. every Monday) to compare “Last Week” vs. “2 Weeks Ago” from GSC data.
2. Includes both brand + non-brand click breakdown.
3. Calculates raw values and week-over-week % change for clicks, impressions, CTR, and position.
4. Outputs a clean, formatted table with labeled rows and color-coded changes.
5. Sends the table as part of a scheduled email (can also be adapted for Slack or other channels).

### Setup steps
- Requires connected Google Search Console data (per brand segment).
- Email delivery is included by default (customizable to other platforms).
- Update brand segmentation logic to match your tracking needs (e.g. domain, label, or custom filters).
- Typical setup time: ~5-10 minutes with structured input data.


## 📊 Basic Information

- **Workflow ID:** 7203
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 541
- **Downloads:** 54
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7203)

## 👤 Author

- **Name:** MattF
- **Username:** @the-curious-automator

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×7)
- **if** 
- **merge** (×3)
- **httpRequest** (×4)
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
