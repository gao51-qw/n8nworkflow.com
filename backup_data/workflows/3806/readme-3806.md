# Track Amazon product prices with ScrapeOps API & Google Sheets alerts

> # Amazon Product Price Tracker

This workflow automatically monitors Amazon product prices, tracks price changes, and sends alerts when significant price fluctuations occur. Built with ScrapeOps' structured data API, it provides a reliable, maintenance-free solution for price tracking without worrying about anti-bot measures or complex selectors.

## What This Workflow Does

- Monitors multiple Amazon products simultaneously using their ASINs
- Calculates both absolute and percentage price changes
- Sends customizable email alerts when prices cross defined thresholds
- Maintains a historical record of all price data for trend analysis
- Updates a Google Sheets with the latest price information

## Prerequisites

- A ScrapeOps API key (register at https://scrapeops.io)
- Google account for Google Sheets integration
- SMTP email configuration for alerts

## Setup Instructions

1. **Spreadsheet Setup**
   - Make a copy of the template spreadsheet: https://docs.google.com/spreadsheets/d/1hRv-TBXrpN6rkIU65WorttNHt-IPWas_An0sF4Of39U
   - Add your Amazon product ASINs in the "Products to Monitor" sheet
   - Set your desired alert thresholds for price increases/decreases

2. **Workflow Configuration**
   - Add your ScrapeOps API key to the "Setup" node
   - Update the spreadsheet URL in the "Setup" node with YOUR copy
   - Configure your email settings for notifications
   - Adjust the schedule frequency as needed (default: hourly)

## How It Works

The workflow reads product ASINs from your Google Sheet, fetches current pricing data via ScrapeOps' Amazon Product API, calculates price changes, updates your spreadsheet, and sends alerts when price movements exceed your defined thresholds.

Unlike traditional web scrapers that break when websites change, this solution uses ScrapeOps' reliable API that handles all the complexity of Amazon data extraction, ensuring consistent results without maintenance.

## Additional Notes

- This workflow is ideal for deal hunters, price comparison services, and e-commerce analytics
- The alerting system can be extended to additional channels like Slack or Telegram
- ScrapeOps handles all anti-bot measures, proxy management, and parsing complexities

## 📊 Basic Information

- **Workflow ID:** 3806
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1886
- **Downloads:** 188
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3806)

## 👤 Author

- **Name:** ScrapeOps
- **Username:** @scrapeops-main

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **googleSheets** (×3)
- **splitInBatches** 
- **httpRequest** 
- **set** (×5)
- **emailSend** 
- **if** (×2)
- **stickyNote** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
