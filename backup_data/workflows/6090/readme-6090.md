# Weekly financial markets report: Generate with Gemini AI for Telegram & Discord

> # Purpose & Overview
This workflow is designed for market analysts, traders, and content creators who need a comprehensive, automated solution for generating weekly market intelligence reports. By aggregating and structuring news and forecasts across all major financial sectors, it streamlines the process of delivering actionable weekly insights for blogs, newsletters, and chat platforms.

## What the Workflow Does
1. Aggregates news and analysis from trusted sources for nine key market sections, ensuring broad and deep coverage.
2. Integrates economic calendar data for the upcoming week, providing a forward-looking preview of high-impact events.
3. Applies date and currency filters to ensure all data is current and relevant.
4. Compiles a structured Weekly Report ready for publication or distribution.

## Market Sections Covered
**Last Week Recap:**
Highlights and summarizes the most significant economic events and market moves from the previous week.
**Week Ahead Forecast:**
Outlines upcoming high-impact economic events and market expectations for the days ahead.
**General Market Forecast:**
Provides a broad outlook on global market sentiment and macroeconomic themes.
**Gold Weekly Outlook:**
Offers analysis and forecasts for the gold market, including technical and fundamental drivers.
**Oil Weekly Outlook:**
Delivers insights into oil price trends, supply/demand factors, and key geopolitical influences.
**BTC Weekly Outlook:**
Summarizes major developments and technical perspectives for Bitcoin.
**ETH Weekly Outlook:**
Covers Ethereum market trends, network updates, and technical analysis.
**Indices Weekly Outlook:**
Reviews and forecasts major stock indices, highlighting sector performance and risk sentiment.
**Currency Pairs Outlook:**
In-depth coverage of major FX pairs, including EURUSD, GBPUSD, AUDUSD and more.

## Key Features

**Sub-Workflow for Economic Calendar:**
Automatically fetches and integrates economic calendar updates for the next 4–5 days, enhancing the “Week Ahead” section with the latest data.

**Customizable Filters:**
Adjust date and currency parameters to tailor the report for any audience or market focus.

**Multi-Platform Output:**
The report is formatted for easy sharing as a blog post, newsletter, or direct updates to Telegram and Discord.

**Note:** Platform-specific AI summarization nodes can be added to respect character limits (Telegram: 4000, Discord: 2000).


## Use Cases
**Weekly Blog or Newsletter Updates:**
Publish comprehensive market roundups and forecasts with minimal manual work.

**Telegram & Discord Alerts:**
Keep your trading community or team informed with structured, automated weekly updates.

**Market Research & Strategy:**
Use the report as a foundation for deeper analysis, trading plans, or client briefings.

## Setup & Delivery
**Automated aggregation:** 
Set your preferred schedule and let the workflow collect, filter, and compile all relevant data.

**Flexible output:** 
Adapt the workflow for different platforms and audiences as needed.

## How to Set Up
A comprehensive step-by-step video and written guide is included with your subworkflow file.
If you need further assistance, personalized setup support is also available.

This workflow delivers a professional, all-in-one solution for staying ahead of the markets—saving you hours each week and ensuring your updates are always timely, comprehensive, and actionable.


## 📊 Basic Information

- **Workflow ID:** 6090
- **Complexity:** advanced
- **Node Count:** 137
- **Views:** 212
- **Downloads:** 21
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6090)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedRead** (×41)
- **manualTrigger** 
- **limit** (×4)
- **merge** (×7)
- **stickyNote** (×24)
- **filter** (×16)
- **code** (×9)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×10)
- **set** (×10)
- **@n8n/n8n-nodes-langchain.agent** (×10)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **discord** 
- **convertToFile** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 137 nodes with 110 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
