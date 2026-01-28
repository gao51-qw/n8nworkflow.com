# Generate & enrich LinkedIn leads with Apollo.io, LinkedIn API, Mail.so & GPT-3.5

> **Note:** *Now includes an Apify alternative for Rapid API (Some users can't create new accounts on Rapid API, so I have added an alternative for you. But immediately you are able to get access to Rapid API, please use that option, it returns more detailed data). **Scroll to bottom for APify setup guide***

This n8n workflow automates **LinkedIn lead generation, enrichment, and activity analysis** using **Apollo.io**, **RapidAPI**, **Google Sheets** and **Mail.so**.

Perfect for **sales teams, founders, B2B marketers**, and cold outreach pros who want **personalized lead insights** to drive better conversion rates.

---

## ⚙️ How This Workflow Works

The workflow is broken down into several key steps, each designed to help you build and enrich a valuable list of LinkedIn leads:

### 1. 🔑 Lead Discovery (Keyword Search via Apollo)
- Pulls leads using **Apollo.io's API** based on keywords, industries, or job titles.
- Saves lead name, title, company, and LinkedIn URL to your Google Sheet.
- You can replace the trigger node from the form node to a webhook, whatsapp, telegram, etc, any way for you to send over your query variables over to initiate the workflow.

### 2. 🧠 Username Extraction (from LinkedIn URL)
- Extracts the **LinkedIn username** from profile URLs using a simple script node.
- This is required for further enrichment via RapidAPI.

### 3. ✉️ Email Lookup (via Apollo User ID)
- Uses the **Apollo User ID** to retrieve the lead’s **verified work email**.
- Ensures high-quality leads with reliable contact info.
- To double check that the email is currently valid, we use the mail.so api and filter out emails that fail deliverability and mx-record check. We don't wanna risk sending emails to no longer existent addresses, right?

### 4. 🧾 Profile Summary Enrichment (via RapidAPI)
- Queries the **LinkedIn Data API** to fetch a lead’s **profile summary/bio**.
- Gives you a deeper understanding of their background and expertise.

### 5. 📰 Recent Activity Collection (Posts & Reposts)
- Retrieves **recent posts or reposts** from each lead’s profile.
- Great for tailoring outreach with reference to what they’re currently talking about.

### 6. 🗂️ Leads Database Update
- All enriched data is written to the same Google Sheet.
- New columns are filled in without overwriting existing data.

---

## ✅ Smart Retry & Row Status Logic

Every subworkflow includes a **fail-safe mechanism** to ensure:

- ✅ Each row has status columns (e.g., `done`, `failed`, `pending`).
- 🕒 A **scheduled retry workflow** resets failed rows to `pending` after **2 weeks** (customizable).
- 💬 This gives failed enrichments another chance to be processed later, reducing data loss.

---

## 📋 Google Sheets Setup

Template 1: [Apollo Leads Scraping & Enrichment](https://docs.google.com/spreadsheets/d/1d99PlHkp9RPeSAtmATgQ4OC4Selcp8JSFLNuKx-n1EQ/edit?gid=0#gid=0)  

Template 2: [Enriched Leads Database](https://docs.google.com/spreadsheets/d/1c5USULUPS-2_RdNf29cyDguuHH7A7JNwzFCjQQUJTvE/edit?gid=0#gid=0)  

Make a copy to your Drive and use.

Columns will be filled as each subworkflow runs (email, summary, interests, etc.)

---

## 🔐 Required API Keys

To use this workflow, you’ll need the following credentials:

### 🧩 Apollo.io
- Sign up and get your key here: [Apollo.io API Keys](https://developer.apollo.io/keys/)
- ⚠️ **Important:** Toggle the **“Master API Key”** option to **ON** when generating your key.  
This ensures the same key can be used for all Apollo endpoints in this workflow.

### 🌐 RapidAPI (LinkedIn Data API)
- Subscribe to the API here: [LinkedIn Data API on RapidAPI](https://rapidapi.com/rockapis-rockapis-default/api/linkedin-data-api)
- Use the key in the `x-rapidapi-key` header in the relevant nodes.

### ✉️ Mail.so
- Sign up and get your key here: [Mail.so API](https://mails.so/dashboard/api)


&gt; 💡 For both APIs, set up the credentials in **n8n as “Generic Credential”** types.  
This way, you won’t need to reconfigure the headers in each node.

---

## 🛠️ Customization Options

- Modify the Apollo filters (location, industry, seniority) to target your ideal customers.
- Change retry interval in the scheduler (e.g., weekly instead of 2 weeks).
- Connect the database to your email campaign tool like Mailchimp or Instantly.ai.
- Replace the AI nodes with your desired AI agents and customize the system messages further to get desired results.

---

## 🆕 Apify Update Guide

To use this workflow, you’ll need the following credentials:

Login to Apify, then open this link; [https://console.apify.com/actors/2SyF0bVxmgGr8IVCZ/](https://console.apify.com/actors/2SyF0bVxmgGr8IVCZ/)

Click on integrations and scroll down to API Solutions and select "Use API endpoints". Scroll to "Run Actor synchronously and get dataset items" and copy the actor endpoint url then paste it in the placeholder inside the http node of Apify alternative flow "apify-actor-endpoint". That's it, you are set to go.


---

I am available for custom n8n workflows, if you like my work, please get in touch with me on email at [joseph@uppfy.com](mailto:joseph@uppfy.com)


## 📊 Basic Information

- **Workflow ID:** 3791
- **Complexity:** advanced
- **Node Count:** 66
- **Views:** 23264
- **Downloads:** 2326
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3791)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **splitOut** 
- **googleSheetsTrigger** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **stickyNote** (×10)
- **set** 
- **googleSheets** (×23)
- **scheduleTrigger** (×3)
- **httpRequest** (×6)
- **code** (×8)
- **merge** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 66 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
