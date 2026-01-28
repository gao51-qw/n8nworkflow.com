# WooCommerce order updates to customers via WhatsApp with Rapiwa API

> ## Who is this for?
This workflow is for online store owners, support teams, and marketing staff who want to automatically verify WhatsApp numbers and send order invoice links or personalized order updates to customers. It’s built against WooCommerce order webhooks but can be adapted to Shopify or other e-commerce platforms that provide `billing` and `line_items`.

## What this Workflow Does
- Receives order events (Webhook / WooCommerce `order.updated`).
- Normalizes the payload into a compact object: `{ data: { customer, products, invoice_link } }` via a Code node.
- Iterates items in batches (`SplitInBatches`) to control throughput.
- Cleans phone numbers (removes non-digits) and verifies WhatsApp registration using Rapiwa (`/api/verify-whatsapp`).
- Sends templated WhatsApp messages through Rapiwa (`/api/send-message`) for verified numbers.
- Logs every attempt into Google Sheets: one sheet for verified & sent rows, another for unverified & not sent rows.
- Uses a `Wait` node to throttle and loop back into the batch processor.

## Key Features
- Trigger-based automation (Webhook or WooCommerce trigger).
- Payload normalization and mapping via JavaScript Code nodes.
- Controlled batching (SplitInBatches) to avoid rate limits.
- Pre-send verification of WhatsApp numbers using Rapiwa.
- Conditional branching with the IF node to separate verified vs unverified flows.
- Personalized message templates that pull customer and product fields from the mapped data.
- Logging and audit trail stored in Google Sheets (two separate append flows).

## How to Use — Step-by-step Setup
1. Add credentials in n8n
   - Rapiwa: Create an HTTP Bearer credential and paste your Bearer token (example name used in the flow: `Rapiwa Bearer Auth`).
   - Google Sheets: Create an OAuth2 credential (example: `Google Sheets`).
   - WooCommerce: Add WooCommerce API credentials for the trigger (or configure Shopify credentials if adapting).

3. Import / configure nodes in n8n
   - Webhook (or WooCommerce Trigger): receive order payloads. Example Webhook path is present in the exported flow.
   - Code node `Format Webhook Response Data`: map `body.billing`, `body.line_items`, `body.payment_url` into `{ data: { customer, products, invoice_link } }`.
   - Code node `Clean WhatsApp Number`: ensure the phone number is a string and strip non-digits: `String(rawNumber).replace(/\D/g, "")`.
   - HTTP Request `Check valid whatsapp number Using Rapiwa`: POST to `https://app.rapiwa.com/api/verify-whatsapp` with `{ number }`. Use the Rapiwa Bearer credential.
   - IF `If`: check verification result. The flow compares `{{$json.data.exists}}` to `"true"` in the exported flow; normalize types if your API returns booleans.
   - HTTP Request `Rapiwa Sender`: POST to `https://app.rapiwa.com/api/send-message` with `number`, `message_type: 'text'`, and a templated `message` (see message template in the flow).
   - Google Sheets `Store State of Rows in Verified & Sent` and `Store State of Rows in Unverified & Not Sent`

## Google Sheet Column Structure
Create these columns exactly (the Google Sheets nodes in the flow expect these names):
**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/1WKOFqFdF3tqfes5KKO1WGAp20SpO3jJl9GsE9CmtfLI/edit?usp=sharing)

| Name            | Number        | Email             | Address      | Product Title                                  | Product ID | Size | Quantity | Total Price   | Product Image                                                                 | Invoice Link                                                                                             | Product Status | Validity   | Status   |
|-----------------|---------------|-------------------|--------------|------------------------------------------------|------------|------|----------|----------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------|------------|----------|
| Abdul Mannan  | 8801322827799 | contact@spagreen.net   | mirpur dohs  | Air Force 1 Reigning Champ Dark Grey 1:1 - 40 | 251        | 40   | 1        | BDT 5800.00    | ![Product Image](https://rahxx23-WA0032.jpg)        | [Invoice](https://your_domainxxxr=truexxMqagSLWyft5t) | on-hold        | verified   | sent     |
| Abdul Mannan  | 8801322827799 | contact@spagreen.net   | mirpur dohs  | Air Force 1 Reigning Champ Dark Grey 1:1 - 40 | 251        | 40   | 1        | BDT 5800.00    | ![Product Image](https://rahixxxx20250323-WA0032.jpg)        | [Invoice](https://your_domainxxxrxxxer_wMqagSLWyft5t) | on-hold        | unverified | not sent |


## Customization Ideas
- Adapt the Code mapping node for Shopify payloads or other marketplaces.
- Iterate and include multiple products in the message instead of using `products[0]`.
- Add filters in the Code node (e.g., only process orders with `total &gt; 5000`).
- Add fallback channels (SMS or email) for unverified numbers.
- Persist logs into a database for analytics and retention beyond Google Sheets.
- Add admin notifications (Slack, email) at the end of each run.

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

- **Workflow ID:** 9880
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9880)

## 👤 Author

- **Name:** Rapiwa
- **Username:** @rapiwa

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **if** 
- **wait** 
- **splitInBatches** 
- **webhook** 
- **code** (×2)
- **googleSheets** (×2)
- **stickyNote** (×4)
- **n8n-nodes-rapiwa.rapiwa** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
