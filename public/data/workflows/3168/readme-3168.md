# Scrape Trustpilot reviews to Google Sheets + HelpfulCrowd compatible csv

> This workflow scrapes Trustpilot reviews for a given profile and saves them into Google Sheets.  

## How It Works  
Clone this [Google Sheets template](https://docs.google.com/spreadsheets/d/19nndnEO186vNmApxce8bA1AnLYrY8bR8VgYlwOU_FYA/edit?gid=0#gid=0), which includes two sheets:  

### **trustpilot**  
A raw collection of Trustpilot reviews. You can customize it as needed.  

### **helpfulcrowd**  
This sheet follows the format from [this HelpfulCrowd guide](https://www.guides.helpfulcrowd.com/en/article/import-product-reviews-wof0oy/), with a slight modification: an added `review_id` column to support the upsert process.  

Once the workflow is complete, export the sheet as a CSV and upload it to HelpfulCrowd. For detailed steps, see [this post](https://www.guides.helpfulcrowd.com/en/article/import-product-reviews-wof0oy/).  

## Running the Workflow  
You can trigger the workflow **on-demand** or schedule it to run at a set interval.  

## Requirements  
- **Trustpilot business name** (e.g., `n8n.io` in `https://www.trustpilot.com/review/n8n.io`). Update this name and pagination settings in the Global node.  
- **Google Sheets API credentials**  

---

Check out my other templates:  
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)


## 📊 Basic Information

- **Workflow ID:** 3168
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2503
- **Downloads:** 250
- **Created:** 2025/3/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3168)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **httpRequest** 
- **set** (×3)
- **code** 
- **splitOut** 
- **googleSheets** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
