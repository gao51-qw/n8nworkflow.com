# Automate lead enrichment with web scraping, GPT-4o, Airtable and Slack notifications

> ## AI Lead Enrichment & Notification System

### This n8n template automates the lead enrichment process for your business. Once a lead fills out a form, the workflow scrapes their website, provides a summary of their business, and logs everything into a CRM before notifying your team on Slack.

**Some use cases:** "Speed-to-Lead" optimization, lead enrichment, automated prospect research.

### How it works
1. **Ingestion:** A lead submits their details (Name, Email, Website) via a form.
2. **Intelligent scraping:** The workflow scrapes the provided URL.
3. **AI Analysis:** OpenAI's model (GPT-4o) analyzes the extracted data and determines whether there is enough info or if the workflow needs to scrape the "About Us" page.
4. **CRM Sync:** The CRM (Airtable) is updated with the enriched data.
5. **Notification:** An instant Slack notification is sent to the team channel.

### How to use the workflow
1. **Configure the form:** Open the trigger form and input the required fields.
2. **Setup OpenAI:** Ensure that your credentials are connected.
3. **Database mapping:** Ensure your Airtable base has the following columns: *Name*, *Website*, *AI Insight*, *Email*, and *Date*.
4. **Slack setup:** Specify the desired Slack channel for notifications.
5. **Test it out!** Open the form, enter sample data (with a real website), and watch the system enrich the lead for you.

### Requirements
* **OpenAI API Key** (For analyzing website content and generating summaries)
* **Airtable** (For CRM and logging)
* **Slack** (For team notifications)

## 📊 Basic Information

- **Workflow ID:** 11371
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 300
- **Downloads:** 30
- **Created:** 2025/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11371)

## 👤 Author

- **Name:** Harvex AI
- **Username:** @harvexai

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **html** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **switch** 
- **aggregate** 
- **airtable** (×2)
- **slack** 
- **httpRequest** (×2)
- **set** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
