# Enrich LinkedIn leads with Apify using Google Sheets

> ## Enrich Profiles directly in Google Sheet !

This n8n template shows how to enrich Google spreadsheet with LinkedIn profiles automatically using the Apify LinkedIn Profile Enrichment actor from [Anchor](https://apify.com/anchor). It will create a new sheet with the enriched data.

You can use it to build lead enrichment workflows, update your CRM records, or personalize outreach campaigns — all directly inside n8n.

![Screenshot](https://i.postimg.cc/X7ZzKyj2/Screenshot-2025-11-11-at-13-33-30.png)

### Who is this for
- Sales Teams: Build targeted B2B lead lists fast.
- Recruiters: Gather candidate data from LinkedIn profiles.
- Growth Marketers: Enrich outreach lists with LinkedIn info.
- Researchers: Analyze industries, roles, and company trends.
- CRM Builders: Auto-populate contact data from LinkedIn.
- Lead-Gen Agencies: Deliver qualified prospect lists at scale.

### How it works
- The workflow starts with a list of LinkedIn profile URLs (you need to set the Google sheet URL after you added the Google credentials from the n8n settings).
- The Apify node runs the LinkedIn Profile Enrichment actor to extract structured data such as name, title, company, location, and more.
- The results are then stored in a new Google Sheet

### How to use
In Google Sheet:
- Create a Google sheet, rename the sheet "profiles" and add all the LinkedIn URLs you want to enrich (one url per row)


In this Workflow:
- Open the "Set google sheet URL & orginial sheet name" and replace the example Google sheet URL, and the name of the sheet where your LinkedIn URLs are  


In the n8n credentials:  
- Connect your Google Sheet account, with read and write privileges for google sheets
- Connect to your Apify account 


In Apify:
- Sign up for this [Apify Actor](https://apify.com/anchor/linkedin-profile-enrichment)

### Requirements
- Apify account with access to the LinkedIn Profile Enrichment actor
- LinkedIn profile URLs to process

#### Need Help?

Open an issue on directly on Apify￼! Avg answer in less than 24h

Happy Enrichment!



## 📊 Basic Information

- **Workflow ID:** 10668
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 152
- **Downloads:** 15
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10668)

## 👤 Author

- **Name:** Anchor
- **Username:** @anchor

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **googleSheets** (×3)
- **set** 
- **merge** 
- **code** 
- **@apify/n8n-nodes-apify.apify** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
