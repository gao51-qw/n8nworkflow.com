# Track and receive Upwork job alerts via WhatsApp and Google Sheets

> ![Screenshot 20251015 184902.png](fileId:2958)

## Short Description  
Automatically scrape new Upwork job listings, save them to Google Sheets, and get real-time WhatsApp alerts when new matching jobs appear. This workflow helps freelancers and agencies track new opportunities instantly — without checking Upwork manually.

---

## Who’s it for  
For freelancers, agencies, and automation enthusiasts who want to monitor Upwork jobs automatically and receive instant notifications for relevant projects.

## How it works  
This workflow connects with RapidAPI to fetch new Upwork job listings, filters relevant ones, stores them in a Google Sheet, and sends WhatsApp alerts for matching results.  
It includes:  
- **Trigger node** for scheduled or webhook-based execution  
- **HTTP Request node** connected to RapidAPI for scraping  
- **Google Sheets node** to store job data  
- **Filter (IF) node** to select relevant jobs  
- **WhatsApp API node** to send alerts automatically  

## How to set up  
1. Get an API key from [RapidAPI](https://rapidapi.com) and subscribe to an Upwork scraper API.  
2. Create a Google Sheet with columns like *Title, Budget, Category, Link, and Description*.  
3. Connect your Google account to n8n using **Google Sheets credentials**.  
4. Set up your **WhatsApp API endpoint** (e.g., via Waha API or WhatsApp Cloud API).  
5. Paste your API keys into the HTTP Request nodes and test the workflow.  
6. Schedule the workflow to run automatically (e.g., every hour or once daily).  

## Requirements  
- RapidAPI account (for Upwork scraper API)  
- Google Sheets account  
- WhatsApp API access (Waha / Cloud API)  
- n8n cloud or self-hosted instance  

## How to customize  
You can modify this workflow to:  
- Track specific job categories or keywords (e.g., “automation”, “AI”, “n8n”)  
- Send alerts to Telegram, Discord, or Slack instead of WhatsApp  
- Add budget or client rating filters for higher-quality job leads  
- Connect it with Airtable or Notion for advanced job tracking


## 📊 Basic Information

- **Workflow ID:** 9713
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 208
- **Downloads:** 20
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9713)

## 👤 Author

- **Name:** Asfandyar Malik
- **Username:** @asfandyar-malik

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **manualTrigger** 
- **set** (×2)
- **if** 
- **stickyNote** (×6)
- **webhook** 
- **respondToWebhook** 
- **httpRequest** (×2)
- **whatsApp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
