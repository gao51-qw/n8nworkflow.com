# Generate personalized cold email icebreakers with GPT-4 from Google Sheets to instantly

> Overview:
This workflow automates the full pipeline of preparing scraped leads and loading them into an Instantly campaign for cold outreach.It begins by pulling rows from a Google Sheet that contains lead data sourced from your scraper or enrichment tools. Each row is checked for required fields first name, last name, summary, and email.

 The workflow also validates the email format to ensure only usable contacts continue through the system.

For every lead that passes the filter, the workflow uses OpenAI to clean and standardize the contact’s name and then generates a personalized icebreaker. 

Use Cases:
If your running an instantly campaign for cold email outreach this tool can gernerate personaizled ice breakers 
Prerequiste:To have instantly campaign along with instantly API
google sheet API
Also a Telegram api (optional)

Extra Info:
The icebreaker is crafted using the lead’s summary, company information, job history, achievements, or any contextual details your sheet provides. This personalization step is heavily dependent on the quality and freshness of your scraped data.

The workflow appends the lead into a selected Instantly campaign, storing the icebreaker as a custom variable so it can be inserted directly into your outreach sequence. After all leads have been processed and uploaded, the workflow sends a Telegram notification confirming completion. This gives you fast visibility and ensures you always know when a new batch has successfully synced into Instantly.

## 📊 Basic Information

- **Workflow ID:** 11144
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 82
- **Downloads:** 8
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11144)

## 👤 Author

- **Name:** Jason Stelo
- **Username:** @jasonstelo

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×2)
- **telegram** 
- **limit** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **httpRequest** 
- **stickyNote** (×8)
- **manualTrigger** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
