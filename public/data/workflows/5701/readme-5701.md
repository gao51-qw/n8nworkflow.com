# Automated local business lead generation with Google Maps & GPT-4

> # AI-Powered Local Lead Generation Workflow with n8n

This workflow solves one of the biggest pain points for **freelancers**, **agencies**, and **SaaS founders**—finding accurate local business leads at scale without manual copy-pasting or unreliable scraping tools.

Traditional lead generation is **time-consuming** and **prone to errors**.  
This template automates the entire process so you can **focus on outreach, not data gathering**.

---

## ✅ What the Workflow Does
- Accepts a **business type** (e.g., `plumbers`) and **city** (e.g., `Los Angeles`) as input
- Uses **AI to generate hyperlocal search terms** for full neighborhood coverage
- Scrapes **Google Maps results** to extract business details and websites
- Filters out **junk, Google-owned links, and duplicates**
- Scrapes **homepage HTML** for each business and extracts valid emails using **Regex**
- Outputs a **clean, deduplicated lead list** with business names, websites, and emails

---

## 🛠 Everything Runs Inside n8n With:
- **OpenAI** for AI-driven query generation
- **Zyte API** for reliable scraping
- **JavaScript functions** for email extraction
- **Built-in filtering and batching** for clean results

---

## 👥 Who is This For?
- **Marketing agencies** doing local outreach
- **Freelancers** offering SEO, design, or lead gen services
- **SaaS founders** targeting SMBs
- **Sales teams** scaling outbound campaigns

---

## ✅ Requirements
- **n8n account** (Cloud or self-hosted)
- **OpenAI API key** (stored in n8n credentials)
- **Zyte API key** (stored securely)
- Basic familiarity with **Google Sheets** if you want to export results

---

## ⚙️ How to Set Up
1. Import the **workflow JSON** into n8n
2. Go to **Credentials** in n8n and add **OpenAI** and **Zyte API keys**
3. Replace **placeholder credential references** in the HTTP Request nodes
4. Set your **search parameters** (business type and city) in the designated Set node
5. Test the workflow with a **single search** to confirm scraping and email extraction steps
6. Configure **batching** if you plan to scrape multiple neighborhoods
7. Add an **output step** (Google Sheets, Airtable, or CRM) to store your leads

---

## 🔧 How to Customize
- Update the **OpenAI prompt** for different search formats (e.g., `service + zip code`)
- Adjust the **Regex pattern** in the JavaScript node for additional email validation rules
- Add extra **filtering logic** for niche-specific keywords
- Integrate with **Instantly, HubSpot**, or any email-sending tool for full automation


## 📊 Basic Information

- **Workflow ID:** 5701
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1810
- **Downloads:** 181
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5701)

## 👤 Author

- **Name:** Shahrukh
- **Username:** @shahrukhma

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitOut** (×2)
- **set** (×3)
- **splitInBatches** (×2)
- **limit** (×2)
- **wait** (×2)
- **code** (×2)
- **httpRequest** (×2)
- **filter** (×2)
- **removeDuplicates** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
