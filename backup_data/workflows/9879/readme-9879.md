# Auto-send WooCommerce invoices via WhatsApp with Rapiwa API

> ## Who is this for?
This workflow listens for new or updated WooCommerce orders, cleans and structures the order data, processes orders in batches, and standardizes WhatsApp phone numbers. It verifies phone numbers via the Rapiwa API, sends invoice links or messages to verified numbers, and logs results into separate Google Sheets tabs for verified and unverified numbers. Throttling and looping are managed using batch processing and wait delays.

## What this Workflow Does
- Receives order events (e.g., `order.updated`) from WooCommerce or a similar trigger.
- Extracts customer, billing/shipping address, product list, and invoice link from the order payload.
- Processes orders/items in batches for controlled throughput.
- Cleans and normalizes phone numbers by removing non-digit characters.
- Verifies whether a phone number is registered on WhatsApp using the Rapiwa API.
- If verified, sends a personalized message or invoice link via Rapiwa's `send-message` endpoint.
- If not verified, logs the customer as unverified in Google Sheets.
- Logs every send attempt (status and validity) into Google Sheets.
- Uses Wait nodes and batching to avoid API rate limits.

## Key Features
- Trigger-based automation (WooCommerce trigger; adaptable to Shopify webhook).
- Batch processing using `SplitInBatches` for stable throughput.
- Phone number cleaning using JavaScript (`waNoStr.replace(/\D/g, "")`).
- Pre-send WhatsApp verification via Rapiwa to reduce failed sends.
- Conditional branching (IF node) between verified and unverified flows.
- Personalized message templates that include product and customer fields.
- Logging to Google Sheets with separate flows for verified/sent and unverified/not sent.
- Wait node for throttling and looping control.


## Requirements
- Running n8n instance with nodes: HTTP Request, Code, SplitInBatches, IF, Google Sheets, Wait, and a WooCommerce trigger (or equivalent).
- Rapiwa account and Bearer token for verify/send endpoints.
- Google account and Google Sheets access with OAuth2 credentials.
- WooCommerce store access credentials (or Shopify credentials if adapting).
- Incoming order payloads containing `billing` and `line_items` fields.

## Google Sheet format (example rows)
**A Google Sheet** formatted like this ➤ [Sample](https://docs.google.com/spreadsheets/d/1NVYsvOg3mzsAGlzJiL7-2mtkN-5gsmqd3fG8hboE3vk/edit?usp=sharing)

| Customer Name  | Phone Number  | Email Address     | Address     | Product Title    | Product ID | Size | Quantity | Total Price | Product Image                                                                                                                              | Invoice Link                                                                                                                                                                                           | Status   | Validity   |
| -------------- | ------------- | --------------------------------------------------------------------- | ----------- | ------------------------------------ | ---------- | ---- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| Abdul Mannan| 8801322827799 | contact@spagreen.net | mirpur| T-Shirt - XL | 110        | XL   | 1        | BDT 499.00  | https://your_shop_domain/Product/gg.img | https://your_shop_domain/INV/DAS | sent     | verified   |
| Abdul Mannan| 8801322827799 | contact@spagreen.net | mirpur| T-Shirt - XL | 110        | XL   | 1        | BDT 499.00  | https://your_shop_domain/Product/gg.img | https://your_shop_domain/INV/DAS | not sent | unverified |


## Important Notes
- The Code nodes assume `billing` and `line_items` exist in the incoming payload; update mappings if your source differs.
- The message template references `products[0]`; if orders contain multiple items, update logic to summarize or iterate products.
- Start testing with small batches to avoid accidental mass messaging and to respect Rapiwa rate limits.

## Useful Links
- **Dashboard:** [https://app.rapiwa.com](https://app.rapiwa.com/login)
- **Official Website:** [https://rapiwa.com](https://rapiwa.com/)
- **Documentation:** [https://docs.rapiwa.com](https://docs.rapiwa.com/)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)


## 📊 Basic Information

- **Workflow ID:** 9879
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1058
- **Downloads:** 105
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9879)

## 👤 Author

- **Name:** Rapiwa
- **Username:** @rapiwa

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **if** 
- **wait** 
- **splitInBatches** 
- **code** (×2)
- **googleSheets** (×2)
- **wooCommerceTrigger** 
- **stickyNote** (×5)
- **n8n-nodes-rapiwa.rapiwa** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
