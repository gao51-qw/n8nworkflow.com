# Facebook/Meta conversion API for eCommerce leads/orders

> This n8n workflow helps eCommerce businesses (especially in the Cash on Delivery space) send real-time order events to the **Meta (Facebook) Conversions API**, ensuring accurate event tracking and better ad attribution.

### Features
- **Webhook Listener**: Accepts incoming order data (name, phone, IP, user-agent, etc.) via HTTP POST/GET.

- **Data Normalization**: Cleans and formats first_name, last_name, phone, and event_time according to Facebook's strict specs.

- **Data Hashing**: Securely hashes sensitive user data (SHA256), as required by Meta.

- **Full Custom Data Suppor**t: Pass order value, currency, and more.

### Ideal For:
- Shopify, WooCommerce, custom stores (Laravel, Node, etc.)

- Businesses using **Meta Ads** and needing high-quality server-side tracking

- Teams without access to full dev resources, but using n8n for automation

### How It Works:

1. **Receive Order** from your store via Webhook or API.

2. **Format & Normalize** fields to match Facebook’s expected structure.

3. **Encrypt Sensitive** Fields using SHA256 (name, phone, email).

4. **Send to Facebook** via the Conversions API endpoint.

### Requirements:
- A Meta Business Manager account with **Conversions API access**

- Your **Access Token** and **Pixel ID** set up in n8n credentials

## 📊 Basic Information

- **Workflow ID:** 5136
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2387
- **Downloads:** 238
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5136)

## 👤 Author

- **Name:** Omar Akoudad
- **Username:** @mediaplusma

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×2)
- **stickyNote** (×10)
- **facebookGraphApi** 
- **webhook** 
- **code** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
