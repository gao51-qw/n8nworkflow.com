# YouTube competitor video analytics to Google Sheets

> ![Screenshot 20251014 191255.png](fileId:2945)

## Short Description:
Automatically collect and analyze your competitor’s YouTube performance. This workflow extracts video titles, views, likes, and descriptions from any YouTube channel and saves the data to Google Sheets — helping creators spot viral trends and plan content that performs.

## Who’s it for  
For content creators, YouTubers, and marketing teams who want to track what’s working for their competitors — without manually checking their channels every day.

## How it works  
This workflow automatically collects data from any YouTube channel you enter.  
You just write the channel name in the form — n8n fetches the channel ID, gets all recent video IDs, and extracts each video’s title, views, likes, and description.  
Finally, all the information is saved neatly into a connected Google Sheet for analysis.

## How to set up  
1. Create a Google Sheet with columns for Title, Views, Likes, Description, and URL.  
2. Connect your Google account to n8n.  
3. Add your YouTube Data API key inside the HTTP Request nodes (use n8n credentials, not hardcoded keys).  
4. Update your form submission or trigger node to match your input method.  
5. Execute the workflow once to test and verify that data is flowing into your sheet.

## Requirements  
- YouTube Data API key  
- Google Sheets account  
- n8n cloud or self-hosted instance  

## How to customize  
You can modify the JavaScript code node to include more metrics (like comments or publish date), filter by keywords, or change the output destination (e.g., Airtable or Notion).


## 📊 Basic Information

- **Workflow ID:** 9641
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 247
- **Downloads:** 24
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9641)

## 👤 Author

- **Name:** Asfandyar Malik
- **Username:** @asfandyar-malik

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **httpRequest** (×3)
- **code** (×5)
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
