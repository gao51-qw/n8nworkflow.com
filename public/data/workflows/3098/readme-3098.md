# Fetch Squarespace Blog & Event Collections to Google Sheets

> ## Overview  
This workflow retrieves all blog and event collection items from a Squarespace site and saves them into a Google Sheets spreadsheet. It uses pagination to fetch 20 items per request, ensuring all content is collected efficiently.  

## How It Works  
1. The workflow queries your Squarespace blog and event collections.  
2. It fetches data in paginated batches (20 items per page).  
3. The retrieved data is formatted and inserted into Google Sheets.  
4. The workflow runs on demand or on a schedule, ensuring your data stays up to date.  

## Requirements  
### Credentials  
To use this template, you need:  
- Your Squarespace collection URL  
- Google Sheets API credentials  

### Google Sheets Setup  
Use [this sample Google Sheets template](https://docs.google.com/spreadsheets/d/1HGc7o4mqMY1t9fXT6LBhmZixjJYr0eapSUosXMA9v8E/edit?gid=0#gid=0) to get started quickly.  

## Who Is This For?  
This template is designed for:  
- Bloggers looking to manage and analyze content externally.  
- Businesses and marketers tracking content performance.  
- Anyone who needs an automated way to extract Squarespace blog and event data.  

## Explore More Templates  
Check out my other n8n templates:  
👉 [n8n.io/creators/bangank36](https://n8n.io/creators/bangank36/)  


## 📊 Basic Information

- **Workflow ID:** 3098
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 637
- **Downloads:** 63
- **Created:** 2025/3/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3098)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **scheduleTrigger** 
- **manualTrigger** 
- **httpRequest** 
- **stickyNote** (×2)
- **splitOut** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
