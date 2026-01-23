# Auto-enrich & sync companies from Google Sheets to HubSpot using GPT-4o-mini

> ### How it works
This workflow starts whenever you add a new company name to a Google Sheet. It checks if the company name is filled in, then uses AI to find more details about the company like industry, size, location, and website. Next, it looks for the company in your HubSpot CRM. If the company is not there, it adds it automatically. Finally, it updates the Google Sheet with all the new company information so you have everything organized in one place.

### Step-by-step
**1. Start with Google Sheets**
- The workflow watches your Google Sheet for new company names.

- It ignores any empty or incomplete entries.

**2. Get Company Details**
- Uses AI (OpenAI GPT-4o-mini) to find more information about the company.

- Formats the AI results so they can be used easily.

**3. Check and Update HubSpot**
- Searches your HubSpot CRM to see if the company already exists.

- If the company is new, it creates a record in HubSpot with the AI details.

**4. Save Everything in Google Sheets**
- Prepares the enriched data for saving.

- Adds or updates the company information in the Google Sheet for easy tracking.

### Why use this?
- Automatically adds useful company info without manual work.

- Keeps your CRM clean by avoiding duplicates.

- Stores all updated company details in one place for easy access.

- Runs smoothly in the background without you needing to do anything after setup.

## 📊 Basic Information

- **Workflow ID:** 7314
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 286
- **Downloads:** 28
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7314)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **hubspot** (×2)
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
