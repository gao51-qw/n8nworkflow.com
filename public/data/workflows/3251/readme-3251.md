# Sync Squarespace newsletter signups to Mailchimp via Google Sheets

> This workflow captures Squarespace newsletter signups in a Google Sheet and automatically creates new Mailchimp contacts in the selected audience.  

It overcomes the limitation in Squarespace’s native Mailchimp integration, which only supports [new, empty audiences](https://support.squarespace.com/hc/en-us/articles/205815508-Using-Mailchimp-with-Squarespace#toc-connect-a-form-block-or-newsletter-block).  

You can trigger the workflow manually or schedule it for continuous synchronization.  

---

## Step-by-step tutorial
- First, you need to connect Squarespace newsletter block submission to Google Drive
- In Mailchimp node, choose your targeted audience in `List Name or ID`
 
### Connect a Squarespace Form to Google Drive  
To connect a form to Google Drive:  

1. In the form's storage options, click **Connect on Google Drive**.  
2. Log into your Google account.  
3. Click **Allow** to permit Squarespace to connect to Google Drive.  
4. Enter a **Spreadsheet Name**. This creates a new spreadsheet for your form submissions.  

**Columns in my sheet:**  
- `Submitted On`  
- `Email Address`  
- `Name`  

This structure is inspired by Squarespace’s newsletter block connection, but you can modify it based on your preferred data format.  

👉 **[Clone my Google Sheets template](https://docs.google.com/spreadsheets/d/1wi2Ucb4b35e0-fuf-96sMnyzTft0ADz3MwdE_cG_WnQ/edit?usp=sharing)**  

---

## Requirements  

### Credentials  

To use this workflow, you need:  

- **Mailchimp API Key** – Required to add contacts to Mailchimp.  
- **Google Sheets API credentials** – Required to retrieve signups from the spreadsheet.  

📌 [Mailchimp API Authentication Guide](https://mailchimp.com/developer/marketing/guides/quick-start/)  

---

## Explore More Templates  

👉 **[Check out my other n8n templates](https://n8n.io/creators/bangank36/)**


## 📊 Basic Information

- **Workflow ID:** 3251
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 486
- **Downloads:** 48
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3251)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **stickyNote** 
- **googleSheets** 
- **splitInBatches** 
- **mailchimp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
