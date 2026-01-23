# Scrape detailed GitHub profiles to Google Sheets using BrowserAct

> ![Scraping GitHub Users Activity](https://i.postimg.cc/wM34W9T0/Screen-Shot-20251025115912.png)

## Scrape Detailed GitHub Profiles to Google Sheets Using BrowserAct

### This template is a sophisticated **data enrichment** and **reporting tool** that scrapes detailed GitHub user profiles and organizes the information into dedicated, structured reports within a Google Sheet.

This workflow is essential for technical recruiters, talent acquisition teams, and business intelligence analysts who need to dive deep into a pre-qualified list of developers to understand their recent activity, repositories, and technical footprint.

---

### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow is triggered **manually** but can be started by a Schedule Trigger or by integrating directly with a candidate sourcing workflow (like the "Source Top GitHub Contributors" template).
* A **Google Sheets** node reads a list of target GitHub user profile URLs from a master candidate sheet.
* The **Loop Over Items** node processes each user one by one.
* A **Slack** notification is sent at the beginning of the loop to announce that the scraping process has started for the user.
* A **BrowserAct** node visits the user's GitHub profile URL and scrapes all available data, including **profile info**, **repositories**, and **social links**.
* A custom **Code** node (labeled **"Code in JavaScript"**) performs a critical task: it cleans, fixes, and consolidates the complex, raw scraped data into a single, clean JSON object.
* The workflow then dynamically manages your output. It **creates a new sheet** dedicated to the user (named after them) and **clears** it to ensure a fresh report every time.
* The consolidated data is separated into three paths: main profile data, links, and repositories.
* Three final **Google Sheets** nodes then **append** the structured data to the user's dedicated sheet, creating a clear, multi-section report (User Data, User Links, User Repositories).

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Scraping GitHub Users Activity & Data**" Template
* **BrowserAct** "** Source Top GitHub Contributors by Language & Location**" Template Output
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for input (candidate list) and structured output (individual user sheets)
* **Slack** credentials for sending notifications

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [GitHub Data Mining: Extracting User Profiles & Repositories with N8N](https://youtu.be/YjINoZgqx0M)

## 📊 Basic Information

- **Workflow ID:** 9945
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9945)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×7)
- **splitInBatches** 
- **n8n-nodes-browseract-workflows.browserAct** (×2)
- **code** 
- **merge** (×2)
- **splitOut** (×3)
- **set** 
- **slack** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
