# Send WooCommerce discount coupons to customers via WhatsApp using Rapiwa API

> ## Who is this for?
This workflow is ideal for WooCommerce store owners who want to automatically send promotional WhatsApp messages to their customers when new coupons are created. It’s designed for marketers and eCommerce managers looking to boost engagement, streamline coupon sharing, and track campaign performance effortlessly through Google Sheets.

## Overview
This workflow listens for WooCommerce coupon creation events (coupon.created) and uses customer billing data to send promotional WhatsApp messages via the Rapiwa API. The flow formats the coupon data, cleans phone numbers, verifies WhatsApp registration with Rapiwa, sends the promotional message when verified, and logs each attempt to Google Sheets (separate sheets for verified/sent and unverified/not sent).

## What this Workflow Does
- Listens for new coupon creation events in WooCommerce via the WooCommerce Trigger node
- Retrieves all customer data from the WooCommerce store
- Processes customers in batches to control throughput
- Cleans and formats customer phone numbers for WhatsApp
- Verifies if phone numbers are valid WhatsApp accounts using Rapiwa API
- Sends personalized WhatsApp messages with coupon details to verified numbers
- Logs all activities to Google Sheets for tracking and analysis
- Handles both verified and unverified numbers appropriately

## Key Features
- Automated coupon distribution: Triggers when new coupons are created in WooCommerce
- Customer data retrieval: Fetches all customer information from WooCommerce
- Phone number validation: Verifies WhatsApp numbers before sending messages
- Personalized messaging: Includes customer name and coupon details in messages
- Dual logging system: Tracks both successful and failed message attempts
- Rate limiting: Uses batching and wait nodes to prevent API overload
- Data formatting: Structures coupon information for consistent messaging


## Google Sheet Column Structure
**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/14UclmcZ7TGU4Qaag89yaZLVFee1IQNA6t-uhgN8_TAE/edit?usp=drivesdk)
The workflow uses a Google Sheet with the following columns to track coupon distribution:

| name        | number        | email                                               | address1  | couponCode | couponTitle    | couponType | couponAmount | createDate          | expireDate          | validity   | status   |
| ----------- | ------------- | --------------------------------------------------- | --------- | ---------- | -------------- | ---------- | ------------ | ------------------- | ------------------- | ---------- | -------- |
| Abdul Mannan | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net)     | mirpur-DOHS | 62dhryst   | eid offer 2025 | percent    | 20.00        | 2025-09-11 06:08:02 | 2025-09-15 00:00:00 | unverified | not sent |
| Abdul Mannan  | 8801322827799 | [contact@spagreen.net](mailto:contact@spagreen.net) | mirpur-DOHS | 62dhryst   | eid offer 2025 | percent    | 20.00        | 2025-09-11 06:08:02 | 2025-09-15 00:00:00 | verified   | sent     |


## Requirements
- n8n instance with the following nodes: WooCommerce Trigger, Code, SplitInBatches, HTTP Request, IF, Google Sheets, Wait
- WooCommerce store with API access
- Rapiwa account with API access for WhatsApp verification and messaging
- Google account with Sheets access
- Customer phone numbers in WooCommerce (stored in billing.phone field)


## Important Notes
- **Phone Number Format**: The workflow cleans phone numbers by removing all non-digit characters. Ensure your WooCommerce phone numbers are in a compatible format.
- **API Rate Limits**: Rapiwa and WooCommerce APIs have rate limits. Adjust batch sizes and wait times accordingly.
- **Data Privacy**: Ensure compliance with data protection regulations when sending marketing messages.
- **Error Handling**: The workflow logs unverified numbers but doesn't have extensive error handling. Consider adding error notifications for failed API calls.
- **Message Content**: The current message template references the first coupon only (`coupons[0]`). Adjust if you need to handle multiple coupons.

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

- **Workflow ID:** 10140
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 107
- **Downloads:** 10
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10140)

## 👤 Author

- **Name:** Rapiwa
- **Username:** @rapiwa

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **if** 
- **wait** 
- **splitInBatches** 
- **wooCommerceTrigger** 
- **code** (×2)
- **googleSheets** (×2)
- **wooCommerce** 
- **stickyNote** (×5)
- **n8n-nodes-rapiwa.rapiwa** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
