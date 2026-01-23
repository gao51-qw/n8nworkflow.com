# Workflow for submitting changed sitemap URLs using Google Indexing API and Bing IndexNow

> ### This n8n template saves you hours of manual SEO work by automatically parsing your sitemap and submitting updated URLs to Google and Bing (IndexNow).

### Who’s it for

Site owners, SEOs, and marketers who want a single automation to notify Google (Indexing API) and Bing (via IndexNow) whenever site URLs are added or updated. No more need to update it manually. Hours saved

### What it does

This workflow parses your sitemap.xml, and for each URLs that have been changed on the last X days (this is a setting from Config node), submit them to Google and Bing via IndexNow. Before submitting to Google it checks the status. For IndexNow it just submits based on the last updated date it can find on the sitemap.


### How it works

* Parses your sitemap(s)to generate a list of urls ordered by lastmod date.
* Create a batch of the urls updated in the last X days (settings DAYS_BACK from the "Config" node)
* For Google, it first aks the current indexing notification status of this exact URL. If the sitemap shows the page was modified after the last submission, the workflow sends a new "URL_UPDATED" notification to Google. If Google has no record (404), it means the URL was never submitted and the workflow treats it as new and submits it. 
* For Bing through IndexNow, it only sends “recently changed URLs” based on the sitemap’s &lt;lastmod&gt; and the variable DAYS_BACK from the Config Node, by batches of 500 (current limit recommendation by Bing). IndexNow doesn't have an API to check the status of the url. 

Requirements

* Google Indexing API credentials (Service Account with https://www.googleapis.com/auth/indexing scope, added as Owner in Search Console).
* IndexNow API key: you can create it here https://www.bing.com/indexnow/getstarted.

How to use

* Edit the "Config" node with your data & preferences (everything explain in the workflow).
* Edit the "Check status (Google)" and "URL updated (Google)" node with your Google service account credentials.
* Execute the workflow to test it 
* Set up a cron with the "Schedule Trigger" node depending on your needs

## 📊 Basic Information

- **Workflow ID:** 8778
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 574
- **Downloads:** 57
- **Created:** 2025/9/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8778)

## 👤 Author

- **Name:** Geoffroy
- **Username:** @jojoq42

## 🏷️ Categories

- Content Creation
- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** (×5)
- **xml** (×2)
- **splitOut** (×2)
- **sort** 
- **code** (×4)
- **splitInBatches** (×2)
- **if** 
- **wait** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
