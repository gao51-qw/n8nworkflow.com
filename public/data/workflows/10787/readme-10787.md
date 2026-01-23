# Scrape LinkedIn post comments & reactions with Browserflow → export to Google Sheets

> ## Scrape LinkedIn Post Comments & Reactions → Export to Google Sheets
![Screenshot 20251118 at 09.00.56.png](fileId:3337)
This workflow lets you quickly extract all **comments** and **reactions** from any public LinkedIn post using Browserflow, then automatically saves the results into two separate Google Sheets tabs. Perfect for audience research, content analysis, engagement tracking, or social listening.


## ⚠️ Disclaimer – Community Node Notice
This template uses a verified community node available inside the n8n cloud environment.
To use it, go to “Nodes” → search for:

*Browserflow for Linkedin*

…and click Install.
It’s officially verified and accessible directly from n8n cloud.

In case you wish to run this template locally, you need to go to the settings, click community nodes and search for *n8n-nodes-browserflow*. Then after installing you can start using the actions in this node.

## How it works

• You click **Execute workflow** to manually start the process
• The workflow fetches your Google Sheet to grab all the post urls that have not been scraped yet.
• The Posts tab is updated so it registered which post was scraped.
• Browserflow scrapes the LinkedIn post (comments + reactions) based on the post URL you provide
• The workflow splits the scraped data into two streams:
 — one for **reactions**
 — one for **comments**
• Each item is appended into its matching Google Sheet tab — keeping everything clean and organized


---

## Requirements

* n8n (cloud or self-hosted)
* Browserflow account (free 7-day trial available at [https://browserflow.io](https://browserflow.io))
* Installed community node: **Browserflow for LinkedIn**
* Google account for Sheets access

---

## ⚙️ Setup Instructions

1. **Install the Browserflow Community Node**
    Go to *Nodes* → search **Browserflow for LinkedIn** → Install

2. **Get your Browserflow API Key**
    Available at [https://browserflow.io](https://browserflow.io)

3. **Connect your Browserflow Credential**
    Open any Browserflow node → Add Credential → paste your API key

4. **Prepare Your Sheet**
    Make a copy of the provided **Make a copy** of the [Google Sheets template](template).
    It already includes three tabs: 
**Posts,** **Comments** and **Reactions**

5. **Find some posts you want to scrape**
    Find some posts on LinkedIn, click on the top right corner and `click copy link to post`, then fill the url in the Posts tab of the sheet.

6. **Run the Workflow**
    Click *Execute workflow*, paste your LinkedIn post URL, and let it scrape everything automatically

---

## 🧩 Customization Tips

* Add more columns to the Sheets if you want to store additional metadata
* Combine this workflow with analytics or CRM integrations
* Add filters if you only want certain reaction types or comments containing keywords
* Schedule it with a Cron trigger to monitor post engagement over time
* Use additional Browserflow actions to scrape profiles or send invites

Let me know if you want me to also create the sticky notes, rewrite for posting in the n8n template library, or generate screenshots with annotation!
![Screenshot 20251118 at 09.00.33.png](fileId:3336)

## 📊 Basic Information

- **Workflow ID:** 10787
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 151
- **Downloads:** 15
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10787)

## 👤 Author

- **Name:** Kees Bosch - Browserflow
- **Username:** @browserflow

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n-nodes-browserflow.browserflow** 
- **googleSheets** (×4)
- **splitOut** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
