# Track marketing channel performance with HighLevel, Google Sheets, and Slack

> ## Description:
Discover which marketing channels actually convert with this n8n automation template.
 The workflow fetches all opportunities from HighLevel (GHL), filters for “Closed Won” deals, computes lead-to-sale conversion metrics per source, and sends a summary report to Slack while logging raw data into Google Sheets for ongoing analysis.
Perfect for marketing teams, growth analysts, and sales managers who want to reduce wasted ad spend and double down on sources that deliver real ROI.

## ✅ What This Template Does (Step-by-Step)
⚡ Manual or Scheduled Trigger
 Run the workflow manually for instant analysis or automate it daily/weekly with a schedule trigger.
📥 Fetch All Opportunities from HighLevel
 Pulls every deal record from your GHL CRM, including status, amount, and lead source fields.
🔍 Filter for Closed-Won Deals
 Separates deals by outcome — only “Won” deals are used for conversion tracking, while others trigger Slack alerts for team review.
📊 Log Won Deals to Google Sheets
 Saves every successful deal’s details into a structured Google Sheet for long-term performance tracking.
🧮 Calculate Lead Source Metrics
 Aggregates results by lead source, calculating total deals, conversion rate, and total revenue per source automatically.
📢 Send Slack Summary Report
 Posts a neat summary of conversion metrics to a dedicated Slack channel like #lead-source-report, ensuring visibility for the marketing and sales teams.
🔔 Alert for Lost/Pending Deals
 Non-won opportunities are flagged and shared with the team via Slack for timely follow-ups.

##🧠 Key Features
 📊 Automated lead source performance tracking
 💬 Slack alerts for both success and loss updates
 📈 Real-time conversion and ROI visibility
 ⚙️ Seamless GHL + Google Sheets + Slack integration
 🔁 Ready to run on-demand or on schedule

## 💼 Use Cases
 💡 Measure campaign ROI across channels
 🎯 Identify top-performing ad platforms
 📢 Send weekly sales source reports to marketing
 💰 Optimize budget allocation using data-driven insights

##  📦 Required Integrations
HighLevel (GHL) – for opportunity data retrieval
Google Sheets – for storing and visualizing deal data
Slack – for team notifications and reports

## 🎯 Why Use This Template?
 ✅ Saves hours of manual reporting work
 ✅ Ensures consistent performance tracking
 ✅ Highlights winning and underperforming sources
 ✅ Helps marketing teams focus on what truly converts


## 📊 Basic Information

- **Workflow ID:** 10149
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 196
- **Downloads:** 19
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10149)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **googleSheets** 
- **function** 
- **slack** (×2)
- **highLevel** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
