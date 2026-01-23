# Automated website audit & personalized outreach with Lighthouse and GPT-4

> # Create AI-Driven Website Audits & Personalized Outreach with Lighthouse and GPT-4

## Who is this for?
This workflow is perfect for **marketing agencies**, **SEO consultants**, and **growth specialists** who need to scale personalized outreach without spending hours on manual research.

---

## What problem does it solve?
Traditional cold outreach feels **generic** and gets ignored.  
This template automates website audits and personalized email creation, making your outreach look **deeply researched and relevant—at scale**.

---

## What this workflow does
- Pulls business details from a **Google Sheet** (which you can fill via tools like Google Maps scrapers)
- Finds company emails using an **AI-powered scraper**
- Captures a **screenshot** of the business homepage
- Runs a **Lighthouse audit** (Performance, SEO, Accessibility, Best Practices)
- Performs **UI analysis** to spot design gaps using GPT-4
- Generates a **personalized outreach email** that references real site data, tone, and scores

**Result:**  
You end up with dozens of qualified leads, each with a **full audit report** and a **ready-to-send outreach email**.

---

## Requirements
- **n8n account** (self-hosted or cloud)
- **Google Sheets credentials** (use n8n’s built-in credential manager)
- **OpenAI API key** (stored securely in n8n credentials)
- **Lighthouse node installed**

---

## How to Set Up
1. **Connect Google Sheets** → Use it as your lead source
2. Add your **OpenAI** and **Google credentials** via n8n credential manager
3. Replace **placeholder variables** in the “Set” nodes for your campaign
4. Enable the **Lighthouse node** for audits
5. Run the workflow **manually** or **schedule it**

---

## How to Customize
- Change the **email prompt** in the OpenAI node to match your tone
- Modify the **Google Sheet structure** for different niches
- Add extra steps (e.g., push to a **CRM** or email sender like **Instantly**)


*Feel Free to drop me an email if you need help with building a custom automation for your business at : shahrukh@marketingbyprof.com*



## 📊 Basic Information

- **Workflow ID:** 5940
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 1309
- **Downloads:** 130
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5940)

## 👤 Author

- **Name:** Shahrukh
- **Username:** @shahrukhma

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×9)
- **googleSheets** (×8)
- **code** (×6)
- **if** (×5)
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **set** (×2)
- **webhook** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
