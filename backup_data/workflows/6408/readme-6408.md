# Multi-platform price finder: Scraping prices with Bright Data, Claude AI & Telegram

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# 📦 Multi-Platform Price Finder: Scraping Prices with Bright Data & Telegram

An intelligent n8n automation that fetches real-time product prices from marketplaces like Amazon, Wayfair, Lowe's, and more using Bright Data's dataset, and sends promotional messages via Telegram using AI—perfect for price tracking, deal alerts, and affiliate monetization.

---

## 📋 Overview

This automation tracks product prices across top e-commerce platforms using Bright Data and sends out alerts via Telegram based on the best available deals. The workflow is designed for affiliate marketers, resellers, and deal-hunting platforms who want real-time competitive pricing.

---

## ✨ Key Features

- 🔎 **Multi-Platform Scraping**: Supports Amazon, Wayfair, Lowe's, and more
- ⚡ **Bright Data Integration**: Access to structured product snapshots
- 📢 **AI-Powered Alerts**: Generates Telegram-ready promo messages using AI
- 🧠 **Lowest Price Logic**: Filters and compares products across sources
- 📈 **Data Merge & Processing**: Combines multiple sources into a single stream
- 🔄 **Keyword-Driven Search**: Searches using dynamic keywords from form input
- 📦 **Scalable Design**: Built for multiple platform processing simultaneously
- 🧼 **Clean Output**: Strips unnecessary formatting before publishing

---

## 🎯 What This Workflow Does

### **Input**
- **Search Keywords**: User-defined keyword(s) from a form trigger
- **Platform Sources**: Wayfair, Lowe's, Amazon, etc.
- **Bright Data API Key**: Needed for authenticated scraping

### **Processing Steps**
1. **User Input** via n8n form trigger (keyword-based)
2. **Bright Data API Trigger** for each marketplace
3. **Status Polling**: Wait until scraping snapshot is `ready`
4. **Data Retrieval**: Fetches JSON results from Bright Data snapshot
5. **Data Cleaning & Normalization**: Price, title, and URL are extracted
6. **Merging Products** from all platforms
7. **Find Lowest Price Product** using custom JS logic
8. **AI Prompt Generation** via Claude/Anthropic
9. **Telegram Formatting** and alert message creation

### **Output**
- 🛍️ Product Title
- 💰 Final Price
- 🔗 Product URL
- ✉️ Promotional Message (for Telegram/notifications)

---

## 🚀 Setup Instructions

### **Step 1: Import Workflow**
1. Open n8n &gt; Workflows &gt; **+ Add Workflow**
2. Import the provided JSON file

### **Step 2: Configure Bright Data**
- Add credentials under **Credentials → Bright Data API**
- Set the appropriate `dataset_id` for each platform
- Ensure dataset includes `title`, `price`, and `url` fields

### **Step 3: Enable Keyword Trigger**
- Use the built-in `Form Trigger` node
- Input: Single keyword field (SearchHere)

### **Step 4: Telegram or AI Integration**
- Modify prompt node for your language or tone
- Add Telegram webhook or integration where needed

---

## 📖 Usage Guide

### Adding Keywords
- Trigger the form with a product keyword like `iPhone 15`
- Wait for workflow to fetch best deals and generate Telegram message

### Understanding AI-Powered Output
- AI creates a short, engaging message like:
  &gt; "🔥 Deal Alert: Get the iPhone 15 for just ₹74,999! Limited stock—Check it out: [link]"

### Debugging Output
- Output node shows cleaned JSON with `title`, `price`, `url`, and `message`
- If no valid results, debug message is returned with sample structure info

---

## 🔧 Customization Options

### Add More Marketplaces
- Clone any HTTP Request node (e.g., for Wayfair)
- Update `dataset_id` and required output fields

### Modify Price Logic
- Update the `Code1` node to change comparison (e.g., highest price instead of lowest)

### Change Message Format
- Edit the `AI Agent` prompt to customize tone/language
- Add emoji, CTAs, or markdown formatting as needed

---

## 🧪 Test & Activation

- Add a few sample keywords via form trigger
- Run manually or set as a webhook for external app input
- Check final AI-generated message in output node

---

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| **No Data Returned** | Ensure keyword matches real products |
| **Status Not 'Ready'** | Bright Data delay; add `Wait` nodes |
| **Invalid API Key** | Check Bright Data credentials |
| **AI Errors** | Adjust prompt or validate input fields |

---

## 📊 Use Cases

- 💰 **Affiliate Campaigns**: Show best deals across platforms
- 🛒 **Deal Pages**: Post live offers with product links
- 🧠 **Competitor Analysis**: Track cross-platform pricing
- 🔔 **Alert Bots**: Send real-time alerts to Telegram or Slack

---

## ✅ Quick Setup Checklist

- [x] Bright Data API credentials configured
- [x] n8n form trigger enabled
- [x] Claude or AI model connected
- [x] All HTTP requests working
- [x] AI message formatting verified

---

## 🌐 Example Output

```json
{
  "title": "Apple iPhone 15 Pro Max",
  "price": 1199,
  "url": "https://amazon.com/iphone-15",
  "message": "🔥 Grab the Apple iPhone 15 Pro Max for just $1199! Limited deal—Check it out: https://amazon.com/iphone-15"
}
```

---

## 📬For any questions or support, please contact:

📧 &lt;info@incrementors.com&gt;

or fill out this form: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)


## 📊 Basic Information

- **Workflow ID:** 6408
- **Complexity:** advanced
- **Node Count:** 85
- **Views:** 866
- **Downloads:** 86
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6408)

## 👤 Author

- **Name:** Incrementors
- **Username:** @incrementors

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **googleSheets** (×8)
- **httpRequest** (×24)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **telegram** 
- **code** (×2)
- **if** (×24)
- **merge** 
- **filter** (×8)
- **wait** (×8)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 85 nodes with 78 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
