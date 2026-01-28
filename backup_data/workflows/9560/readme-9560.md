# Automatically send WhatsApp discount codes to Shopify customers using Rapiwa

> # Automatically Send WhatsApp Discount Codes to Shopify Customers Using Rapiwa

## Who is this for?
This n8n workflow **automatically sends WhatsApp promotional messages to top customers** whenever a new discount code is created in Shopify. It’s perfect for store owners, marketers, sales teams, or support agents who want to engage their best customers effortlessly. The workflow fetches customer data, filters high-spending customers, verifies their WhatsApp numbers using the Rapiwa API, sends discount messages to verified contacts, and logs all activity in Google Sheets. Designed for non-technical users who don’t use the official WhatsApp Business API, this automation simplifies customer outreach and tracking without any manual work.

## What this Workflow Does
This **n8n workflow** connects with a **Google Sheet** that contains a list of contacts. It reads rows marked for processing, cleans the phone numbers, checks their validity using **Rapiwa's WhatsApp validation API**, sends WhatsApp messages to valid numbers, and updates the status of each row accordingly.



## Key Features
- **Runs Every 5 Minutes**: Automatically triggers the workflow
- **Google Sheets Integration**: Reads and writes data from a specific sheet
- **Phone Number Validation**: Confirms if a WhatsApp number is active via Rapiwa API
- **Message Sending**: Sends a message using Rapiwa's `/send-message` endpoint
- **Status Update**: Sheet is updated with success or failure status
- **Safe API Usage**: Delays added between requests to prevent rate limits
- **Batch Limit**: Processes max 60 rows per cycle
- **Conditional Checks**: Skips rows without a "check" value

## Requirements
- A **Google Sheet** with necessary columns
- **Rapiwa account** with active subscription (you can free 200 message)
- Your WhatsApp number connected to Rapiwa
- Valid **Bearer Token**
- **n8n Instance** (self-hosted or cloud)
  - Google Sheets node configured
  - HTTP Request node access


## How to Use
### Step-by-Step Setup

1. **Webhook**
   - Receives Shopify Webhook (discount creation) via HTTP POST request.  
This is triggered when a discount is created in your Shopify store.

1. **Configure Google Sheets in n8n**
   - Use the Google Sheets node with OAuth2 access

2. **Get Rapiwa API Token**
   - Create an account on [Rapiwa](https://rapiwa.com/pricing/)
   - Connect your WhatsApp number
   - Copy your **Bearer Token** from the Rapiwa dashboard

3. **Set Up HTTP Request Nodes**
   - Validate number via: `https://app.rapiwa.com/api/verify-whatsapp`
   - Send message via: `https://app.rapiwa.com/api/send-message`
   - Add your bearer token to the headers

---

## Google Sheet Column Structure
- **A Google Sheet** formatted like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1Zx_WXQW29NsITFPJ-SnjHgOlouvzG_sBNGzSA_B8cSA/edit?usp=sharing)


| discount_code   | created_at                | shop_domain             | name           | number        | verify     | status   |
| -------------------------------------------- | ------- | ------------------------- | ----------------------- | -------------- | ------------- | ---------- | -------- |
| V8ZGVRDFP5TB | 2025-09-25T05:26:40-04:00 | your_shop_domain | Abdul Mannan    | 8801322827798| unverified | not sent |
| V8ZGVRDFP5TB | 2025-09-25T05:26:40-04:00 | your_shop_domain | Abdul Mannan         | 8801322827799| verified   | sent     |


---

## Support & Help
- **Rapiwa Website:** [https://rapiwa.com](https://rapiwa.com/)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)


## 📊 Basic Information

- **Workflow ID:** 9560
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9560)

## 👤 Author

- **Name:** Rapiwa
- **Username:** @rapiwa

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **wait** 
- **code** (×3)
- **splitInBatches** 
- **stickyNote** (×5)
- **httpRequest** 
- **googleSheets** (×2)
- **n8n-nodes-rapiwa.rapiwa** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
