# Automated cover letter generator with Indeed job scraping and GPT-4o-mini

> This workflow automates the process of writing tailored **cover letters** for job applications. It:  
1. Uses **Apify’s Indeed Scraper** to pull live job postings based on your chosen search term.  
2. Sends the job description along with your resume into **OpenAI**, which writes an optimized cover letter — one paragraph plus bullet points — only using details from your resume.  

Perfect for quickly generating professional, customized cover letters for each role you want to apply to.  

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
3. Set up this scraper in your Apify account:  
   - [Indeed Scraper](https://apify.com/misceres/indeed-scraper)  
4. In n8n, create a **HTTP Query Auth** credential  
   - Query Key: `token`  
   - Value: `YOUR_APIFY_API_KEY`  
5. Attach this credential to the **HTTP Request node** (`Search Indeed`)  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)  


## 📊 Basic Information

- **Workflow ID:** 7602
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 877
- **Downloads:** 87
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7602)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
