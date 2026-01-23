# Capture Gumroad sales, add buyer to MailerLite group, log to Google Sheets CRM

> ### Turn Gumroad buyers into loyal email subscribers and keep your CRM up‑to‑date.

When someone makes a purchase on your Gumroad store, this n8n workflow instantly adds that customer to the right [MailerLite](https://www.mailerlite.com/a/Kr9Yplim6ZhV) group (so your nurture sequence starts on time) and writes the sale details into your Google Sheets CRM. You’ll never copy‑and‑paste orders again, and every buyer begins receiving your follow‑up emails the moment they purchase.

### Requirements
1. A [Gumroad](https://gumroad.com) account with a product listed
2. A [MailerLite](https://www.mailerlite.com/a/Kr9Yplim6ZhV) account. 
3. A MailerLite group of subscribers created
4. Enabled APIs and credentials for Google Sheets, MailerLite and Gumroad


### How it works
- **Listen for a new sale on Gumroad**
The Gumroad trigger watches your account 24/7 and fires as soon as a sale is completed.

- **Create (or update) the subscriber in MailerLite**
Their name and email are added to MailerLite. If they already exist, the workflow simply updates their profile.

- **Assign the subscriber to your Gumroad group**
Grouping lets your MailerLite automation send the right onboarding or upsell sequence without manual tagging.

- **Log the purchase in Google Sheets**
The buyer’s contact details, product, price, and date are appended as a new row in your CRM sheet.

### Set‑up steps
- Create an application in Gumroad. Copy the access token, you’ll paste it into the Gumroad trigger node.

- Grab your MailerLite API key
MailerLite dashboard → Integrations → API. Paste it into the two MailerLite nodes.

- Prepare a Google Sheets spreadsheet
Add column headers like Name, Email, Product, Price, Date.

Open the template in n8n Cloud or Desktop

In the Gumroad node, paste your token.

In the MailerLite nodes, paste your API keys and replace the group id.

In the Google Sheets node, replace the credentials, pick your spreadsheet and worksheet.


### Get in touch with us
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.











## 📊 Basic Information

- **Workflow ID:** 3676
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 496
- **Downloads:** 49
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3676)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** 
- **gumroadTrigger** 
- **googleSheets** 
- **stickyNote** (×4)
- **mailerLite** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
