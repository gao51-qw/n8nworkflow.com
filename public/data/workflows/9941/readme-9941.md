# Track freelance jobs from Apify and get instant WhatsApp alerts for new leads

> ![Screenshot 20251024 210656.png](fileId:3107)

Automatically track new freelance job postings from any platform using **Apify Actors**, process the results, and get **real-time WhatsApp alerts** for new opportunities.  
This workflow saves jobs to Google Sheets for record-keeping and sends instant notifications so you never miss a client lead.

---

## Who’s it for
Freelancers, agencies, and business developers who want to monitor platforms like **Upwork, Fiverr, or Freelancer** for new jobs — without checking manually.

---

## How it works
1. The workflow starts when a **chat message** or trigger event is received.  
2. It runs an **Apify Actor** to scrape job listings from your target platform.  
3. The **dataset results** are fetched via Apify’s API.  
4. A **JavaScript Code node** processes and filters the results for relevant jobs.  
5. The data is saved to **Google Sheets** for tracking and reporting.  
6. A formatted job summary is created and sent as a **WhatsApp message** directly to your phone.

---

## How to set up
1. Create or use an **Apify Actor** for scraping job listings from your chosen site.  
2. Connect your **Apify API token** in n8n under credentials.  
3. Link your **Google Sheets** account and specify the sheet for storing job data.  
4. Add your **WhatsApp Cloud API** or **Twilio WhatsApp** credentials.  
5. Test the workflow by sending a trigger message — new jobs will be fetched, stored, and sent to WhatsApp.

---

## Requirements
- Apify account with API access  
- Google Sheets integration  
- WhatsApp Cloud API or Twilio account  
- n8n Cloud or self-hosted instance  

---

## How to customize
- 🧩 **Add filters:** Include keyword or budget filters in the JavaScript node.  
- 🔄 **Schedule runs:** Replace the chat trigger with a **Cron node** for hourly or daily tracking.  
- 📊 **Change destination:** Save results to Notion, Airtable, or Slack instead of Google Sheets.  
- 🗣️ **Multi-channel alerts:** Send updates to Discord, Telegram, or Email as well.

---

**Stay ahead of freelance opportunities — this n8n workflow finds jobs, logs them, and alerts you instantly via WhatsApp.**

## 📊 Basic Information

- **Workflow ID:** 9941
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 104
- **Downloads:** 10
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9941)

## 👤 Author

- **Name:** Asfandyar Malik
- **Username:** @asfandyar-malik

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **set** (×2)
- **whatsApp** 
- **stickyNote** (×3)
- **@apify/n8n-nodes-apify.apify** (×2)
- **code** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
