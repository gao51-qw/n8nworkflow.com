# Find similar B2B companies to your best customers with Google Sheets and CompanyEnrich

> This workflow allows you to automatically expand your B2B target lists by discovering companies similar to your existing leads. 

Instead of manually searching for competitors or lookalikes, you can input a list of domains into Google Sheets and let the CompanyEnrich API generate high-quality lookalike suggestions along with similarity scores.

## Who is this for?
This template is ideal for **GTM Engineers**, **Sales Teams**, and **Growth Hackers** who want to enrich their lead databases and find new prospecting opportunities based on their current ideal customer profile (ICP).

## What it does
1. **Reads Source:** It pulls a list of company domains from a specified Google Sheet.
2. **Enriches:** It sends each domain to the CompanyEnrich API to find similar companies (competitors/lookalikes).
3. **Processes:** It merges the new data with your original list and formats the JSON response.
4. **Saves:** It appends the results (Similar Company Name, Domain, and Similarity Score) back into a new tab in your Google Sheet.

## Requirements
* **Google Sheets:** A spreadsheet with a column named `Domain` containing the websites you want to analyze.
* **CompanyEnrich API Key:** You need an API key from [CompanyEnrich](https://companyenrich.com).
* **n8n Credentials:** Connected Google Sheets account.

## How to set up
1. **Prepare Sheet:** Create a Google Sheet with two tabs. In the first tab, create a column header named `Domain` and add your target websites. Leave the second tab empty for results.
2. **Configure Nodes:** Open the "Read Source List" and "Write Results" nodes to select your spreadsheet file and the respective tabs.
3. **Add API Key:** Open the "Fetch Similar Companies" node. In the **Header Parameters** section, replace `YOUR_API_TOKEN` with your actual API key (keep the `Bearer ` prefix).

## How to customize
* **Filter by Score:** You can add an "If" node after the API call to filter out results with a low similarity score.
* **Change Destination:** Instead of Google Sheets, you can easily swap the final node to write results to Airtable, Notion, or your CRM (HubSpot/Pipedrive).

## 📊 Basic Information

- **Workflow ID:** 12300
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 11
- **Downloads:** 1
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12300)

## 👤 Author

- **Name:** CompanyEnrich
- **Username:** @companyenrich

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **httpRequest** 
- **merge** 
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
