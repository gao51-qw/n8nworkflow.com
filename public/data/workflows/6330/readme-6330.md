# Extract local business contacts with Google Sheets, SerpAPI, Apify & GPT-4o

> ### Extract Local Business Contacts with Google Sheets, SerpAPI & GPT‑4o

**Status:** Ready for Use ✅  
**Disclaimer:** This workflow relies on **community nodes** that are not part of n8n’s core package.  
Install the following from **n8n → Community Nodes** before running:

- **n8n-nodes-langchain**  
- **n8n-nodes-openai** (Structured Output Parser)  
- **n8n-nodes-apify**

---

### 📝 Description
This **n8n workflow** automates discovery of local‑business contact details by search term and location, then enriches the results with publicly listed email addresses using **GPT‑4o AI**.

---

### 🔑 Key Features

#### 🔗 Google Sheets Integration
- Reads search terms and locations from a Google Sheet.  
- Processes only rows that are **not** marked `Complete`, preventing duplicates.

#### 🗺️ Google Maps Search via SerpAPI
- Queries Google Maps through **SerpAPI** for every search‑term‑and‑location pair.  
- Retrieves the following fields: **business name, website, street address, and phone number**.

#### 🧠 Website Scraping & Email Extraction
1. Scrapes the business homepage content with **Apify’s Fast Website Content Crawler**.  
2. Sends the scraped HTML to a **GPT‑4o AI Agent**.  
3. Extracts any publicly listed **email address**.  
4. Returns a clean, structured JSON object for downstream use.

#### 💾 Data Storage & Tracking
- Writes every result to a **Results** tab in the same Google Sheet.  
- Marks the corresponding row in the **Searches** tab as `Complete` once finished.

#### 🧱 Extensible Design
The workflow uses modular sub‑workflows and AI agents.  
You can easily extend it to add:

- Phone‑number verification with Twilio  
- Social‑media enrichment with Clearbit  
- Exports to **HubSpot**, **Salesforce**, **Airtable**, **PostgreSQL**, or CSV files

---

### 📄 Google Sheet Setup
Create a **Searches** tab with these exact columns (one header row):

Search | Area | Area Name | Complete

Create a results tab with these columns

title | website | address | phone | Search | Search Name | Area | email (Manual Entry)



---

### ⚙️ Prerequisites
1. **Google Cloud Project** with **Google Sheets API** and **Google Drive API** enabled  
2. **SerpAPI** account (free trial or paid) – obtain an API key  
3. **Apify** account (free trial or paid) with the **Fast Website Content Crawler** actor installed  
4. **OpenAI** account with an API key that can access GPT‑4o models

---

### 🚀 Setup Instructions

1. **Copy the Google Sheet**  
   - Make a personal copy of the template sheet.  
   - Ensure the tab names are **Searches** and **Results**.  
   - https://docs.google.com/spreadsheets/d/1QgcVMlXRlM_5ZFFUHr6bVK-93Tzia9XseTX03ZYnowI/edit?usp=sharing

2. **Configure Google Sheets nodes in n8n**  
   - Open the workflow.  
   - Update the nodes **Extract Search Terms** and **Save Emails to Sheet** to point at your copied sheet.  
   - Authenticate using Google OAuth2 credentials that have access to the sheet.

3. **Add SerpAPI credentials**  
   - Sign in at &lt;https://serpapi.com&gt;.  
   - Copy your API key.  
   - In the **Search Google Maps** node, create a new credential and paste the key.

4. **Set up Apify**  
   - Sign up at &lt;https://apify.com&gt;.  
   - Add the **Fast Website Content Crawler** actor to your account.  
   - In the **Scrape Web Page** HTTP node, append `?token=YOUR_API_KEY` to the actor URL.

5. **Add your OpenAI API key**  
   - Go to &lt;https://platform.openai.com&gt;.  
   - Generate an API key.  
   - Add it to the **AI Agent** and **OpenAI Chat Model** node credentials.

---

### ✅ Running the Workflow
1. Click **Execute Workflow** in n8n.  
2. For each unprocessed row in the **Searches** tab, the automation will:  
   1. Retrieve business information from Google Maps via SerpAPI.  
   2. Scrape the business website using Apify.  
   3. Use GPT‑4o to extract a public email address.  
   4. Write all collected data to the **Results** tab.  
   5. Mark the original row as `Complete`.

---

### 🧩 Example Use Cases
- Build highly targeted lead lists for **sales** and **marketing** outreach.  
- Compile local business directories for regional websites or apps.  
- Automate contact‑information collection for **lead‑generation** campaigns and reduce manual data entry.

## 🤝 Connect with Me

## Description  
I’m Robert Breen, founder of Ynteractive — a consulting firm that helps businesses automate operations using **n8n**, **AI agents**, and custom workflows. I’ve helped clients build everything from intelligent chatbots to complex sales automations, and I’m always excited to collaborate or support new projects.

If you found this workflow helpful or want to talk through an idea, I’d love to hear from you.

## Links  
🌐 Website: [https://www.ynteractive.com](https://www.ynteractive.com)  
📺 YouTube: [@ynteractivetraining](https://www.youtube.com/@ynteractivetraining)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen](https://www.linkedin.com/in/robert-breen)  
📬 Email: rbreen@ynteractive.com

## 📊 Basic Information

- **Workflow ID:** 6330
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1440
- **Downloads:** 144
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6330)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 
- **executeWorkflow** 
- **googleSheets** (×3)
- **filter** 
- **code** (×2)
- **n8n-nodes-serpapi.serpApi** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **summarize** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
