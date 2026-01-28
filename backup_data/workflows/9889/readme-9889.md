# Automate YP.com directory scraping to Google Sheets using BrowserAct

> ![Online Directory Lead Scraper](https://i.postimg.cc/prtYjx5F/Screen-Shot-20251025120254.png)
## Automate Directory Scraping to Google Sheets using BrowserAct

### This n8n template helps you generate local business leads by automatically scraping online directories and saving the results directly to a spreadsheet.

This workflow is perfect for sales teams, marketing agencies, or anyone looking to build a list of local business leads by scraping online directories like YP.com.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow is triggered **manually**. You can set the `business_category` and `city_location` inputs in the "Run a workflow task" node.
* A **BrowserAct** node initiates the web scraping task on your BrowserAct account using the template specified.
* A second **BrowserAct** node ("Get details of a workflow task") patiently waits for the scraping job to finish before allowing the workflow to proceed.
* A **Code** node takes the raw output from the scraper (which is a single JSON string) and correctly parses it, splitting the data into individual items for each business.
* Finally, a **Google Sheets** node appends or updates each business as a new row in your spreadsheet, matching on "Company Name" to prevent duplicates.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Online Directory Lead Scraper (YP.com)**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for saving the leads

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)


---
### Workflow Guidance and Showcase

* #### [STOP Manual Leads! Automate Lead Gen with BrowserAct & n8n](https://www.youtube.com/watch?v=W9BHL7vok6c)

## 📊 Basic Information

- **Workflow ID:** 9889
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9889)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n-nodes-browseract-workflows.browserAct** (×2)
- **code** 
- **googleSheets** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
