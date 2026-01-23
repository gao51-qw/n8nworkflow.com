# Extract email addresses from websites with EmailListVerify API and Google Sheets

> ## How to scrape emails from websites

This workflow will :
- Try to find emails by scraping the website via http request
- If no result is found, it will use [EmailListVerify email finder API](https://emaillistverify.com/email-finder-api) to guess an email address

Scraping email via http request is a cost-effective way to find email addresses, so it can save you a few bucks to use it before calling any email finder API.

## Who is for
This workflow will help you transform a list of websites into a list of leads with email addresses. This is a handy workflow for any lead generation specialist.

Pay attention that this workflow will usually return only generic emails like "contact@". Those generic emails are useful when you target small businesses; the owner usually monitors those emails. However, I don't advise this workflow to target enterprise customers.

# Requirements

In order to use this workflow, you will need:
- To copy [this Google sheet template](https://docs.google.com/spreadsheets/d/1VOTFM8UeWHhJbtBM7SRca6vsVJlRUXzX71kjJ8n2jUY/edit?gid=1538095319#gid=1538095319)
- Get an API key for [EmailListVerify](https://emaillistverify.com/)

You then need to edit the setup of the 3 stages highlighted with a yellow sticky note, and you will be good to go.


## 📊 Basic Information

- **Workflow ID:** 7948
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 478
- **Downloads:** 47
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7948)

## 👤 Author

- **Name:** EmailListVerify
- **Username:** @emaillistverify

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **httpRequest** (×2)
- **set** 
- **manualTrigger** 
- **code** (×3)
- **merge** 
- **googleSheets** (×2)
- **if** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
