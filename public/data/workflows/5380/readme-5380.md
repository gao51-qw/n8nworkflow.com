# Collect company social media profiles with Extruct AI to Google Sheets

> **Who’s it for:**  
Sales teams, marketers, and analysts who need to quickly access all the social media and public profile links for any company.

**How it works / What it does:**  
When you enter a company into the form, this workflow automatically searches for and collects all available links to the company’s social media accounts, review sites, and public profiles from sources like Crunchbase and Zoominfo. All discovered URLs are added directly to your Google Sheet.

**How to set up:**  
1. Create an Extruct account at [www.extruct.ai/](https://www.extruct.ai/).  
2. Open the Extruct table template, find the table ID in your browser’s address bar, and copy it.  
3. Make a copy of the provided Google Sheets template to your own Google Drive.  
4. In n8n, paste the table ID into the variables node of your flow.  
5. Set up Bearer authentication in every HTTP Request node using your Extruct API token (found on the API page in Extruct).  
6. In the Google Sheets node, paste the link to your copied template and connect your Google account.  
7. Run the flow once to load the fields, then map the output fields to the correct columns in your sheet.  
8. Activate the flow and start adding companies via the form.

**Requirements:**  
- Extruct account and API token  
- Extruct table template  
- Google account with Google Sheets

**How to customize the workflow:**  
You can add your own columns to the Extruct table and your Google Sheet. Just add the new column in both places and map it in the Google Sheets node in n8n.

## 📊 Basic Information

- **Workflow ID:** 5380
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 700
- **Downloads:** 70
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5380)

## 👤 Author

- **Name:** Extruct AI
- **Username:** @extruct-ai

## 🏷️ Categories

- Lead Generation
- AI Summarization

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
