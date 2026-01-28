# Scrape Google Maps business leads with Apify & GPT-4 email extraction

> # 💥 Automate Scrape Google Maps Business Leads (Email, Phone, Website) using Apify

![Workflow Overview](https://www.dr-firas.com/googlemaps.png)

# 🧠 AI-Powered Business Prospecting Workflow (Google Maps + Email Enrichment)

### Who is this for?
This workflow is designed for **entrepreneurs, sales teams, marketers, and agencies** who want to **automate lead discovery** and **build qualified business contact lists** — without manual searching or copying data.  
It’s perfect for anyone seeking an **AI-driven prospecting assistant** that saves time, centralizes business data, and stays fully **compliant with GDPR**.

---

### What problem is this workflow solving?
Manually searching for potential clients, copying their details, and qualifying them takes hours — and often leads to messy spreadsheets.  
This workflow **automates the process** by:
- Gathering **publicly available business information** from Google Maps  
- Enriching that data with **AI-powered summaries and contact insights**  
- Compiling it into a clean, ready-to-use **Google Sheet database**

This means you can focus on **closing deals**, not collecting data.

---

### What this workflow does
This automation identifies, analyzes, and organizes business opportunities in just a few steps:
1. **Telegram Trigger** → Send a message specifying your business type, number of leads, and Google Maps URL.  
2. **Apify Integration** → Fetches business information from Google Maps (public data).  
3. **Duplicate Removal** → Ensures clean, non-redundant results.  
4. **AI Summarization (GPT-4)** → Generates concise business summaries for better understanding.  
5. **Email Extraction (GPT-4)** → Finds and extracts professional contact emails from company websites.  
6. **Google Sheets Integration** → Automatically stores results (name, category, location, phone, email, etc.) in a structured sheet.  
7. **Telegram Notification** → Confirms when all businesses are processed.  

All data is handled ethically and transparently — only from **public sources** and without any unsolicited contact.

---

### Setup
1. **Telegram Setup**  
   - Create a Telegram bot via [BotFather](https://t.me/BotFather)  
   - Copy the API token and paste it into the Telegram Trigger node credentials.  

2. **Apify Setup**  
   - Create an account on [Apify](https://www.apify.com?fpr=udemy)  
   - Get your API token and connect it to the “Run Google Maps Scraper” node.  

3. **Google Sheets Setup**  
   - Connect your Google account under the “Google Maps Database” node.  
   - Specify the target spreadsheet and worksheet name.  

4. **OpenAI Setup**  
   - Add your OpenAI API key to the AI nodes (“Company Summary Info” and “Extract Business Email”).  

5. **Test**  
   - Send a Telegram message like:  
     `restaurants, 5, https://www.google.com/maps/search/restaurants+in+Paris`  

---

### How to customize this workflow to your needs
- **Change search region or business type** by modifying the Telegram input message format.  
- **Adjust the number of leads** via the `maxCrawledPlacesPerSearch` parameter in Apify.  
- **Add filters or enrichments** (e.g., websites with social links, review counts, or opening hours).  
- **Customize AI summaries** by tweaking the prompt inside the “Company Summary Info” node.  
- **Integrate CRM tools** like HubSpot or Pipedrive by adding a connector after the Google Sheets node.  

---

### ⚙️ Expected Outcome
✅ A clean, enriched, and ready-to-use **Google Sheet** of businesses with:  
- Name, category, address, and city  
- Phone number and website  
- AI-generated business summary  
- Extracted professional email (if available)  

✅ Telegram confirmation once all businesses are processed  

✅ Fully automated, scalable, and GDPR-compliant prospecting workflow  

---

💡 *This workflow provides a transparent, ethical way to streamline your B2B lead research while staying compliant with privacy and anti-spam regulations.*


### 🎥 [Watch This Tutorial](https://youtu.be/cijBIHI6iLk)

![Apify logo](https://www.dr-firas.com/apify.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Automate-Scrape-Google-Maps-Business-Leads-Email-Phone-Website-using-Apify-2a53d6550fd98118ba22e441171944dd?source=copy_link)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 📊 Basic Information

- **Workflow ID:** 10640
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 7197
- **Downloads:** 719
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10640)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@apify/n8n-nodes-apify.apify** (×2)
- **removeDuplicates** 
- **splitInBatches** 
- **googleSheets** (×2)
- **wait** 
- **telegramTrigger** 
- **code** 
- **telegram** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
