# Automate PDF purchase orders to sales orders in Adobe Commerce with AI

> # 📄 PDF-to-Order Automation for Magento2 (Adobe commerce / open source)

## Description
This n8n template demonstrates how to automatically process **PDF purchase orders** received via email and convert them into **sales orders in Adobe Commerce (Magento 2)** using **Company Credit** as the payment method.  

This is especially useful for **B2B companies** receiving structured orders from clients by email.  

**Use cases include:**  
- Automating incoming B2B orders  
- Reducing manual entry for sales teams  
- Ensuring fast order creation in Adobe Commerce  
- Reliable error handling and customer validation  

---

## Good to know
- This workflow is tailored for **Adobe Commerce**, using the **Company Credit** payment method.  
- It requires that the customer already has an account in Adobe Commerce and is authorized to use Company Credit.  
- The same flow can be easily adapted for other payment methods (e.g. Purchase Order, Bank Transfer).  
- No third-party services are required aside from **n8n** and access to Adobe Commerce with API credentials.  

---

## How it works
1. **Trigger** → Monitors an email inbox for incoming emails with PDF attachments.  
2. **Extract PDF** → Downloads the attached PDF and parses order data (e.g. SKU, quantity, customer reference).  
3. **Validate Customer** → Checks if the sender matches an existing customer in Adobe Commerce and verifies Company Credit eligibility.  
4. **Create Order** → Generates a new order in Magento using the extracted product data and Company Credit.  
5. **Handle Errors** → Logs issues and can notify a designated channel (email, Slack, etc.) if something goes wrong.  
6. **Optional Enhancements** → Add logging to Airtable, send confirmations to customers, or attach parsed order data to CRM entries.  

---

## How to use
- A manual trigger is included as an example, but you can replace it with an **IMAP Email Trigger**, **Gmail Trigger**, or **Webhook**, depending on your setup.  
- Customize the **PDF parser** node to fit your specific document layout and field structure.  
- Configure **Adobe Commerce API credentials** in the HTTP nodes (or use environment variables).  
- Optionally connect error steps to **Slack**, **Email**, or **dashboards** for monitoring.  

---

## Requirements
- ✅ n8n instance (self-hosted or cloud)  
- ✅ Adobe Commerce (Magento 2) instance with API access and Company Credit enabled  
- ✅ Structured PDF templates used by your customers  
- (Optional) Slack/Email/Airtable for notifications and logs  

---

## Customising this workflow
This workflow can be adapted for:  
- Other payment methods (e.g. **Purchase Orders**, **Online Payment**) 
- Magento open source ready. Just use your own payment method
- Alternate order sources (e.g. uploading PDFs via a portal instead of email)  
- Parsing other document formats (e.g. **CSV, Excel**)  
- Direct integration into **ERP systems**  

---


## 📊 Basic Information

- **Workflow ID:** 8388
- **Complexity:** advanced
- **Node Count:** 96
- **Views:** 474
- **Downloads:** 47
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8388)

## 👤 Author

- **Name:** JKingma
- **Username:** @jkingma

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **extractFromFile** (×3)
- **httpRequest** (×16)
- **formTrigger** 
- **set** (×24)
- **aggregate** 
- **code** (×8)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **if** (×11)
- **merge** (×2)
- **limit** (×2)
- **switch** 
- **stopAndError** 
- **noOp** (×7)
- **splitOut** (×2)
- **executeWorkflow** 
- **wait** 
- **microsoftOutlookTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **microsoftOutlook** 
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **splitInBatches** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 96 nodes with 84 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
