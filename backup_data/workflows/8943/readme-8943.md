# Automated monthly & quarterly Stripe revenue reports to Slack with financial insights

> ## Description
Automate your financial reporting by pulling charge and refund data from Stripe, calculating key revenue and risk metrics, and delivering professional reports directly into Slack. This workflow runs on a monthly or quarterly schedule, processes Stripe data into insights, and formats a rich Slack message with revenue breakdowns, top customers, refund analysis, and payment method insights. 📊💰💬

## What This Template Does
- Runs automatically on a monthly (1st day) or quarterly schedule (every 3 months) at 9 AM. ⏱️
- Fetches Stripe charges and refunds for the reporting period. 💳
- Merges charge and refund data for a unified dataset. 🔄
- Calculates financial metrics: total revenue, net revenue, average transaction value, refund rate. 📈
- Estimates growth metrics: Monthly Recurring Revenue (MRR) and Annual Recurring Revenue (ARR). 🚀
- Identifies top 3 customers by revenue. 🏆
- Breaks down payment methods used (e.g., Visa, Mastercard, etc.). 💳
- Performs risk analysis on transactions by Stripe’s risk scores. ⚠️
- Analyzes refund reasons and generates insights. 🔄
- Formats all results into a clear, structured Slack message with sections for finance, growth, risk, and customers. 💬

## Key Benefits
- Eliminates manual Stripe report exports. ⚡
- Ensures timely financial reporting (monthly or quarterly). 📅
- Provides instant visibility of revenue, refunds, and risks in Slack. 📲
- Surfaces top customers and payment methods for strategic insights. 🏅
- Helps finance and ops teams catch anomalies early (high refunds or risky transactions). 🛡️
- Keeps leadership and teams aligned with automated reporting. 👩‍💻👨‍💻

## Features
- Schedule Triggers – Automates reporting on monthly or quarterly cycles.
- Stripe Charges & Refunds – Pulls transaction and refund data directly from Stripe API.
- Merge Node – Combines charges and refunds into a single dataset.
- Custom Code Metrics – Calculates revenue, net revenue, refund rates, and growth metrics.
- Top Customer Analysis – Highlights top revenue-generating customers.
- Payment Breakdown – Shows revenue split by card brand/payment method.
- Refund Analysis – Summarizes refund reasons and rates.
- Risk Analysis – Categorizes payments by low, medium, or high risk scores.
- Slack Integration – Delivers insights in a professional report format.

## Requirements
- n8n instance (cloud or self-hosted).
- Stripe API credentials with read access to charges and refunds.
- Slack Bot token with chat:write permission.
- Target Audience
- Finance teams needing automated recurring Stripe reports. 💼
- SaaS companies monitoring MRR, ARR, and refunds. 🚀
- Founders/Execs who want financial dashboards in Slack. 👩‍💼
- Operations teams tracking risk and refund trends. 🛠️
- Remote teams relying on Slack for reporting. 🌍

## Step-by-Step Setup Instructions
- Connect your Stripe API credentials in n8n. 🔑
- Connect your Slack API credentials and select your target channel. 💬
- Adjust the schedule triggers (monthly/quarterly) if needed. ⏱️
- Customize the Slack message formatting if you want branding or tone changes. 🎨
- Test the workflow with sample data to confirm financial metrics. ✅


## 📊 Basic Information

- **Workflow ID:** 8943
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 136
- **Downloads:** 13
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8943)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×9)
- **scheduleTrigger** (×2)
- **code** (×3)
- **stripe** 
- **merge** 
- **slack** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
