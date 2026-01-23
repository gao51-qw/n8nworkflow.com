**Description:**

Automatically detect and flag high-value sales orders as VIP in Zoho CRM using this intelligent n8n workflow. Ideal for eCommerce platforms, sales automation tools, or ERP systems, this automation template listens to incoming order data via webhook, checks if the sales order amount exceeds a set threshold (₹10,000 or $10,000), and updates the CRM with a VIP tag in real time.

Whether you're scaling your operations or building a smart sales pipeline, this template ensures no important order goes unnoticed—real-time tagging of premium clients made easy.

**What This Template Does (Step-by-Step)**

🔔 Webhook Trigger (Sales Order Intake)
- Receives real-time POST requests from your e-commerce, POS, or order management system
- Captures order details, including total value ($json.body.salesorder.total)

⚖️ High-Value Condition Check
- Evaluates whether the sales order value exceeds a custom threshold (default: 10,000)
- If order total &gt; 10,000, continues the workflow
- Otherwise, halts execution (no CRM action)

🏷️ Zoho CRM VIP Tagging
- Automatically creates or updates a purchase order record in Zoho CRM
- Tags the record with “VIP Order” to flag it for priority handling
- Uses OAuth2-secured integration with your Zoho account

**Required Integrations:**

✅ Zoho CRM (OAuth2 credentials)
✅ Any external sales/order system with webhook support

**Use Cases:**

💰 B2B sales teams tracking large enterprise orders
🛍️ D2C brands prioritizing premium customers for fulfillment or loyalty
🔁 CRM automation agencies building smart workflows for clients
🧑‍💼 Sales managers setting up internal escalations or alerts for VIP deals

**Key Features:**

⚙️ No-code CRM automation using n8n
🔒 Secure Zoho CRM integration via OAuth2
⏱️ Instant tagging for faster follow-up
🧠 Configurable logic (change the threshold easily!)
📈 Scalable for thousands of incoming orders