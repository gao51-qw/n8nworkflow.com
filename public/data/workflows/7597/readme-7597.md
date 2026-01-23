# Extract YouTube creator emails with Apify scraper and GPT-4o Mini

> This workflow automates the process of finding **YouTube creator contact emails** for outreach and partnerships. It combines **Apify scrapers** with **OpenAI** to deliver a clean list of emails from channel descriptions:  

- **Step 1:** Search YouTube with Apify based on a keyword or topic  
- **Step 2:** Scrape each channel for descriptions and metadata  
- **Step 3:** Use OpenAI to extract and format valid email addresses into a structured JSON output  

This is useful for influencer outreach, creator collaborations, UGC sourcing, or lead generation — all automated inside **n8n**.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Set Up Apify Connection
1. Go to [Apify Console](https://console.apify.com/) and sign up/login  
2. Get your API token here: [Apify API Keys](https://console.apify.com/account/integrations)  
3. Set up the two scrapers in your Apify account:  
   - [YouTube Scraper by streamers](https://apify.com/streamers/youtube-scraper)  
   - [YouTube Scraper by apidojo](https://apify.com/apidojo/youtube-scraper)  
4. In n8n, create a **HTTP Query Auth** credential  
   - Query Key: `token`  
   - Value: `YOUR_APIFY_API_KEY`  
5. Attach this credential to both **HTTP Request nodes** (`Search YouTube` and `Scrape Channels`)  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)  


## 📊 Basic Information

- **Workflow ID:** 7597
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 691
- **Downloads:** 69
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7597)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **splitInBatches** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
