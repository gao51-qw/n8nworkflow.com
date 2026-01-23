# LinkedIn job monitor: smart filtering + Google Sheets + Telegram/WhatsApp alerts

> # Automated LinkedIn Job Monitoring with AI Filtering, Google Sheets & Telegram Alerts

## 📋 Description

Automates LinkedIn job searches across multiple countries and categories, filters results with AI, stores data in Google Sheets, and sends weekly Telegram notifications. Perfect for professionals seeking opportunities in software development, web development, and digital marketing.

**Workflow Process:** Weekly scheduler triggers SerpAPI searches → AI processes and filters jobs → Saves to Google Sheets → Sends country-by-country analytics via Telegram/WhatsApp.

## 🛠️ Prerequisites

- **SerpAPI Account** (free 100 searches/month) - Get API key from serpapi.com
- **Telegram Bot Token** - Create via @BotFather
- **Google Sheets** - OAuth2 credentials + shareable spreadsheet
- **WhatsApp Business Cloud** (optional)

## 📋 Setup Instructions

### 1. Create Google Spreadsheet
Set column headers: `job_title | company_name | location | salary_raw | salary_numeric | remote_status | description | application_url | date_posted | country | timestamp_added | job_id | source`

### 2. Replace Placeholders
- `YOUR_SERPAPI_KEY_HERE` → Your SerpAPI key
- `YOUR_GOOGLE_SHEET_ID_HERE` → Spreadsheet ID from URL
- `YOUR_TELEGRAM_CHAT_ID_HERE` → Your Telegram chat ID
- `YOUR_PHONE_NUMBER_HERE` → WhatsApp number (optional)

### 3. Configure Search Parameters
Modify "Initialize Variables" node:
- `job_types`: "software development,web development,digital marketing"
- `countries`: "qatar,uae,saudi arabia"

### 4. Set Credentials
- Add SerpAPI HTTP credentials
- Configure Telegram bot credentials
- Set up Google OAuth2 credentials

**Column Requirements:** Ensure Google Sheets has exact column names as specified above for proper data mapping.

## 📊 Basic Information

- **Workflow ID:** 4780
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 310
- **Downloads:** 31
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4780)

## 👤 Author

- **Name:** papcy
- **Username:** @papcy

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **scheduleTrigger** 
- **set** (×2)
- **itemLists** (×2)
- **httpRequest** 
- **if** (×2)
- **code** (×4)
- **googleSheets** 
- **aggregate** 
- **telegram** (×2)
- **whatsApp** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
