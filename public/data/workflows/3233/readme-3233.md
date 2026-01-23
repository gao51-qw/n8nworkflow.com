# Automate n8n user invitations from a Google spreadsheet

> This workflow retrieves all users from n8n, compares them against entries in a Google Sheets spreadsheet, and automatically creates new users when needed.  

Once new users are created, invitation emails are sent automatically.  

You can trigger the workflow manually or set it to run on a schedule to ensure continuous synchronization.  

### Spreadsheet Template  
This workflow is designed to work with a Google Sheets structure inspired by Squarespace's newsletter block connection. You can modify the node settings to adapt to a different column format.  

👉 [Clone the sample sheet here](https://docs.google.com/spreadsheets/d/1wi2Ucb4b35e0-fuf-96sMnyzTft0ADz3MwdE_cG_WnQ/edit?usp=sharing)  

**Suggested columns:**  
- Submitted On  
- Email Address  
- Name  

## Requirements
### Credentials
To use this workflow, you need:

- n8n API Key – to update users from n8n.
- Google Sheets API credentials – Required to get data from a spreadsheet.
### Configure Your n8n Instance  
To make this workflow work with your n8n instance, update the API endpoint:  

🔧 **Edit Global node 👇**  
Change `n8n_url` to match your instance URL:  
[Authentication Guide](https://docs.n8n.io/api/authentication/#call-the-api-using-your-key)  

---

Explore More Templates
👉 [Check out my other n8n templates](https://n8n.io/creators/bangank36/)

## 📊 Basic Information

- **Workflow ID:** 3233
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 702
- **Downloads:** 70
- **Created:** 2025/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3233)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **googleSheets** 
- **merge** 
- **scheduleTrigger** 
- **set** (×2)
- **stickyNote** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
