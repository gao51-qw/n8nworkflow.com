# Automate job posting across multiple boards with Google Sheets and BrowserAct

> ![Automated Job Posting ](https://i.postimg.cc/vB7xpnDs/Screen-Shot-20251025120419.png)

## Post Jobs to Multiple Boards from Google Sheets using BrowerAct

### This powerful n8n template turns a Google Sheet into a control panel for automating job postings across multiple job boards.

This workflow is perfect for HR teams, recruiters, and hiring managers who want to streamline their hiring process by posting jobs to multiple boards from a single source of truth.


---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow is triggered in two ways: **manually** (to batch-post all "Ready to Post" jobs) or **automatically** via a **Google Sheets Trigger** when a single row is updated.
* An **If** node filters for jobs marked with the status 'Ready to Post'.
* A **BrowserAct** node takes the job details (title, description, logins, target URL) and runs an automation to post the job on the specified board.
* An **If** node checks if the posting was successful. If it fails, a **Slack** alert is sent.
* A **Code** node parses the successful result from BrowserAct to get the status and live URL.
* The workflow **Updates the row in Google Sheets** with the `Live_URL` and changes the `Status` to 'Posted'.
* A final **Slack** message is sent to a channel to confirm the successful posting.

---
### Requirements
* **BrowserAct** API account for automated posting
* **BrowserAct** "**Automated Job Posting to Niche Job Site (Custom Site)**" Template | User needs to customize the workflow based on the target site.
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))

* **Google Sheets** credentials
* **Slack** credentials for sending notifications

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)


## 📊 Basic Information

- **Workflow ID:** 9892
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 96
- **Downloads:** 9
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9892)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **n8n-nodes-browseract-workflows.browserAct** (×2)
- **code** 
- **if** (×2)
- **googleSheetsTrigger** 
- **stickyNote** (×9)
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
