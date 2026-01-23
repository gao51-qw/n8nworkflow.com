This n8n workflow helps eCommerce businesses (especially in the Cash on Delivery space) send real-time order events to the **Meta (Facebook) Conversions API**, ensuring accurate event tracking and better ad attribution.

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