# Automated B2B lead generation & cold emails with OpenAI, Apify, Gmail & Telegram

> ## 🧩 Description  

A customized n8n workflow inspired by the **Lead Generation Agent** template.  
It automates B2B lead scraping via **Apify**, extracts contact emails with **AI**, sends cold emails via **Gmail**, and logs every interaction in **Google Sheets** with **Telegram alerts** for live monitoring.  

---

### 🧠 How It Works  

This workflow automates the entire B2B lead generation and outreach process from data collection to email delivery.  
Once you enter your search keyword and location, the system scrapes business details using Apify, filters valid websites, and extracts email addresses with AI. Each lead is then enriched and logged in Google Sheets.  

The workflow automatically composes a personalized cold email based on your preferred tone (friendly, simple, or professional) and sends it through Gmail with short delays between each message to avoid spam filters.  
You’ll also receive Telegram notifications to monitor progress and any leads that fail to send.  

---

### ⚙️ Setup Steps  

1. **Clone the workflow** into your n8n instance.  
2. **Add your API credentials:**  
   - Apify API Token  
   - OpenAI (or Gemini) API Key  
   - Google Sheets & Gmail account connections  
   - Telegram Bot Token + Chat ID *(optional)*  
3. Open the **Form node** or **Manual Trigger**, and set your search criteria (e.g., *“marketing agencies in London”*).  
4. Configure your **Google Sheet** — make sure the columns match the node mapping.  
5. Adjust the **AI prompt** in the OpenAI node if you want a different tone or style for your emails.  
6. Run the workflow manually to test one or two leads first.  
7. Once confirmed, activate scheduling or keep it manual for on-demand lead generation.  

---

### 🚀 Try It Out!  

Experience how AI and automation can take over your lead generation workflow.  
Just enter a business type and location, and watch as the system finds potential clients, extracts contact details, crafts a personalized cold email, and sends it — all without manual effort.  
Perfect for freelancers, agencies, or anyone looking to automate their B2B outreach process.  


## 📊 Basic Information

- **Workflow ID:** 9816
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 447
- **Downloads:** 44
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9816)

## 👤 Author

- **Name:** Adem Tasin
- **Username:** @ademtasin

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **telegram** 
- **googleSheets** (×2)
- **if** 
- **filter** 
- **gmail** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **wait** 
- **splitInBatches** 
- **httpRequest** 
- **formTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
