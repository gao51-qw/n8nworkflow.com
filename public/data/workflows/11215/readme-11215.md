# Automate job applications with AI resume tailoring using GPT-4o, LinkedIn & Gmail

> ## Overview
Stop applying manually. This workflow acts as your personal AI recruiter, automating the end-to-end process of finding high-quality jobs, tailoring your resume, and preparing personalized outreach emails to decision-makers.

## What this workflow does
* **Scrapes Real-Time Jobs:** Uses Apify to pull live job listings from LinkedIn based on your specific keywords (e.g., "AI Automation").
* **Smart Filtering:** Uses GPT-4o-mini to analyze job descriptions against your skills and automatically discards roles that aren't a good fit.
* **Hyper-Personalized Resume:** Uses GPT-4o to rewrite your "Master Resume" specifically for the target job description.
* **Document Generation:** Creates a new Google Doc with the tailored resume and automatically sets sharing permissions.
* **Decision Maker Enrichment:** Uses Anymail Finder to locate the verified email address of the Company CEO or Hiring Manager.
* **Cold Email Draft:** Generates a personalized pitch in Gmail (Drafts folder) with the link to your custom resume attached.

## Setup Requirements
To run this workflow, you will need to set up credentials in n8n for the following services. Please ensure you use n8n credentials and do not hardcode API keys into the HTTP nodes:
* **Google Drive & Docs:** To read your master resume and create new application files.
* **Apify Account:** To run the LinkedIn Job Scraper actor.
* **OpenAI API Key:** For logic (GPT-4o-mini) and writing (GPT-4o).
* **Anymail Finder API:** To find contact email addresses.
* **Gmail:** To create the draft emails.

## How to use
1. **Upload Resume:** Paste your "Master Resume" text into the first Google Docs node or connect your existing file.
2. **Configure Credentials:** Add your API keys in the n8n credentials section for all services listed above.
3. **Set Search Criteria:** Update the JSON body in the Apify node with your desired LinkedIn job search URL.
4. **Run:** Execute the workflow and watch your drafts folder fill up with ready-to-send applications.

## 📊 Basic Information

- **Workflow ID:** 11215
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1013
- **Downloads:** 101
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11215)

## 👤 Author

- **Name:** Websensepro
- **Username:** @websensepro

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDocs** (×2)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **limit** (×2)
- **filter** (×2)
- **markdown** 
- **gmail** 
- **googleDrive** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
