# Find company LinkedIn URLs using Apify - Google Sheets integration

> ## Find Company linkedin Urls directly in Google sheets

This n8n template shows how to populate a Google Spreadsheet with LinkedIn company URLs automatically using the [Apify LinkedIn Company URL Finder actor](https://apify.com/anchor/linkedin-company-url-finder) from [Anchor](https://apify.com/anchor). It will create a new sheet with the matched LinkedIn URLs.

![workflow tempalte screenshot overview](https://i.postimg.cc/sXWsfgL8/Screenshot-2025-11-11-at-21-49-31.png)

You can use it to speed up lead research, keep CRM records consistent, or prep outreach lists — all directly inside n8n.

### Who is this for
- Sales Teams: Map accounts to their official LinkedIn pages fast.
- Recruiters: Locate company pages before sourcing.
- Growth Marketers: Clean and enrich account lists at scale.
- Researchers: Track competitors and market segments.
- CRM Builders: Normalize company records with an authoritative URL.
- Lead-Gen Agencies: Deliver verified company URLs at volume.

### How it works
- Write a list of company names in Google Sheets (one per row)
- The Apify node resolves each name to its LinkedIn company page
- The results are then stored in a new Google Sheet

### How to use

In Google Sheets:
- Create a Google Sheet, rename the sheet companies, and add all the company names you want to resolve (one per row)


In this Workflow:
- Open “Set google sheet URL & original sheet name” and replace the example Google Sheet URL, and the name of the sheet where your company names are.


In the n8n credentials:
- Connect your Google Sheets account with read and write privileges.
- Connect your Apify account.


In Apify:
- Sign up for this [Apify Actor](https://apify.com/anchor/linkedin-company-url-finder)￼ 

### Requirements
- Apify account with access to LinkedIn Company URL Finder.
- A list of company names to process.

### Need Help?
Open an issue directly on Apify! Avg answer in less than 24h


Happy URL Finding!

## 📊 Basic Information

- **Workflow ID:** 10738
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10738)

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
