# Automate funding insights with Crunchbase, Google Sheets & Airtable

> ## How it works
This workflow runs daily to collect the latest funding round data from Crunchbase. It retrieves up to 100 recent funding events, including company, investors, funding amount, and industry details. The data is cleaned and filtered to only include rounds announced in the last 30 days. Finally, the results are saved into both Google Sheets for reporting and Airtable for structured database management.

## Step-by-step
1. **Trigger & Data Fetching**  
   - **Schedule Trigger node** – Runs the workflow once a day.  
   - **HTTP Request node** – Calls the Crunchbase API to fetch the latest 100 funding rounds with relevant details.  

2. **Data Processing**  
   - **Code node** – Parses the raw API response into clean fields such as company name, funding type, funding amount, investors, industry, and Crunchbase URL.  
   - **Filter node** – Keeps only funding rounds from the last 30 days to ensure the dataset remains fresh and relevant.  

3. **Storage & Outputs**  
   - **Google Sheets node** – Appends or updates the filtered funding records in a Google Sheet for easy sharing and reporting.  
   - **Airtable node** – Stores the same records in Airtable for more structured, database-style organization and management.  

## Why use this?
- Automates daily collection of startup funding data from Crunchbase.  
- Keeps only the most recent and relevant records for faster insights.  
- Ensures data is consistently stored in both Google Sheets and Airtable.  
- Supports reporting, collaboration, and database management in one flow.  


## 📊 Basic Information

- **Workflow ID:** 8584
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 158
- **Downloads:** 15
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8584)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** 
- **googleSheets** 
- **airtable** 
- **stickyNote** (×3)
- **filter** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
