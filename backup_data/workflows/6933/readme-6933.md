# Automate bulk update Magento 2 product prices via Google Sheets

> ### This workflow automates bulk price updates for Magento 2 products using data from a Google Sheet. It reads SKUs and new prices, cleans and validates the data, and updates each product via the Magento 2 REST API. 

Error messages from failed updates are parsed and logged clearly, making it easy to monitor and correct issues directly from the spreadsheet. Ideal for store managers and merchandisers who need a faster, error-resistant alternative to manual updates in the admin panel.

#### ✅ What This Workflow Does:
Automatically updates Magento 2 product prices in bulk using values from a Google Sheet. It reads SKU and price values, processes the data, and uses the Magento 2 REST API to push updates directly—without ever logging into the Magento admin panel.

#### 💼 Use Cases:
- Magento 2 store owners or managers who frequently need to update product prices in bulk
- Merchandisers adjusting prices during promotions or sales events
- Agencies managing multiple stores looking to centralize product updates from Google Sheets
- Dropshipping businesses syncing supplier pricing effortlessly

#### 🔧 Modules Used:
- Manual Trigger
- Google Sheets
- Function
- HTTP Request

#### 🔒 Credentials Required:
- Google Sheets OAuth2 API
- Magento 2 Admin Token (via HTTP Header Auth)

#### 📂 Category:
E-Commerce / Magento 2 / Automation / Google Sheets

#### 💬 Need Help?
Having trouble setting it up or want to customize this workflow further?
Feel free to reach out — I’m happy to help with setup, customization, or Magento 2 API integration issues.

or

#### 💡 Have IDEA?
Please feel free to contact Auther. Happy to help.

Contact: Author

👤 Author
Kanaka Kishore Kandregula
Certified Magento 2 Developer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

## 📊 Basic Information

- **Workflow ID:** 6933
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6933)

## 👤 Author

- **Name:** Kanaka Kishore Kandregula
- **Username:** @kmyprojects

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **if** 
- **googleSheets** (×3)
- **code** (×2)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
