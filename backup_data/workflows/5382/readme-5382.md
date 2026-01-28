# Enrich company sales data with Extruct AI and export to Google Sheets

> **Who’s it for:**  
Sales and business development professionals who want to monitor company news, hiring trends, and business signals for their leads.

**How it works / What it does:**  
Add a company to the form, and the workflow will automatically search for the latest news, recent hires, company stage, and LinkedIn activity. The results are sent straight to your Google Sheet, helping you stay up to date with your leads and prospects.

**How to set up:**  
1. Register for Extruct at [www.extruct.ai/](https://www.extruct.ai/).  
2. Open the Extruct table template, copy the table ID from the browser’s address bar.  
3. Make a copy of the Google Sheets template to your Drive.  
4. Enter the table ID into the variables node in your n8n flow.  
5. Set up Bearer authentication in all HTTP Request nodes using your Extruct API token.  
6. In the Google Sheets node, paste your template link and connect your Google account.  
7. Run the flow once to load the mapping fields, then match each output to the correct column.  
8. Activate the flow and start adding companies through the form.

**Requirements:**  
- Extruct account and API token  
- Extruct table template  
- Google account with Google Sheets

**How to customize the workflow:**  
To track more business development signals, add new columns in both the Extruct table and your Google Sheet, then map them in the Google Sheets node.

## 📊 Basic Information

- **Workflow ID:** 5382
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 127
- **Downloads:** 12
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5382)

## 👤 Author

- **Name:** Extruct AI
- **Username:** @extruct-ai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×3)
- **if** 
- **wait** 
- **googleSheets** 
- **set** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
