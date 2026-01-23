# Crypto market analysis with Chart-img, BrowserAI & GPT insights to Telegram

> **AI powered Automated Crypto Insights with Chart-img and BrowserAI**

*Tired of paying for costly crypto updates? Or reading long analyses?*

This n8n workflow automates the delivery of personalized crypto insights, using **[Chart-img](https://chart-img.com)** for capturing coin graphs of **BTC, ETH, SOL**, and **XRP** as base64 images, and **[BrowserAI](https://browser.ai)** for web scraping and information gathering of news and articles. This setup ensures thorough market coverage and timely updates, without breaking the bank.

## Overview
Designed for crypto enthusiasts, traders, and analysts, this workflow automates the process of collecting and distributing valuable crypto information.
It’s perfect for anyone wanting consistent and accurate updates conveniently.

## Setup Instructions

### Pre-conditions
1. **Chart-img Account:** Register for a Chart-img account and obtain an API key [here](https://chart-img.com/account/api).
2. **BrowserAI Account:** Sign up for BrowserAI and get your API key from your [BrowserAI dashboard](https://browser.ai/dashboard/page/account/tab/api_key).

## Step-by-Step Setup

**🗓️ Schedule and Date Calculation**
- Triggers twice daily at 8AM and 8PM to ensure up-to-date insights, and can be changed to your like.
- Calculates yesterday’s date dynamically for accurate data retrieval.

**📊 Coin Graph Capture with Chart-img**
- Uses Chart-img API to capture 24-hour graphs for **BTC, ETH, SOL**, and **XRP**.
- Converts images to base64 strings for easy integration into analysis.

**🌐 Web Scraping with BrowserAI**
- Creates tasks in BrowserAI to gather the latest crypto news and insights.
- Automates data extraction for comprehensive market analysis.

**⌛ Monitor and Complete Tasks**
- Incorporates status checks to ensure BrowserAI tasks complete successfully before proceeding.

**✏️ Analyze and Synthesize Information**
- Combines graph data with web-scraped insights for an enriched summary.
- Uses AI to generate simple, informative descriptions under 60 words to not overload you.

**📩 Deliver Insights Efficiently**
- Sends the compiled analysis to your Telegram, with easy options to switch to WhatsApp, email, or any other communication channel.

## Customization Guidance
- **Content Personalization:** Customize the datasets and keywords for tailored updates.
- **Modify Schedule:** Adjust triggering times according to your needs using n8n’s scheduling options.

This workflow delivers a seamless and cost-effective approach to staying informed about crypto market trends, combining the latest technology for superior insights.

++WARNING:++ This template is intended for personal use only and does not constitute financial advice. Any actions taken using this tool are solely the user's responsibility.

## 📊 Basic Information

- **Workflow ID:** 8252
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 786
- **Downloads:** 78
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8252)

## 👤 Author

- **Name:** Alex Gurinovich
- **Username:** @alexg

## 🏷️ Categories

- Crypto Trading
- AI RAG

## 🔗 Nodes Used

- **code** (×5)
- **scheduleTrigger** 
- **httpRequest** (×6)
- **merge** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **switch** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **telegram** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
