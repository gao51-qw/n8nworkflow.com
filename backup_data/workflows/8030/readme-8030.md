# Auto-send PDF invoices with Stripe payment triggers and Gmail

> # 💰 Auto-Send PDF Invoice When Stripe Payment is Received

This workflow automatically generates a **PDF invoice** every time a successful payment is received in **Stripe**, then emails the invoice to the customer via **Gmail**. Perfect for freelancers, SaaS businesses, and service providers who want to automate billing without manual effort.

---

## ⚙️ How It Works

1. **Stripe Payment Webhook**  
   - Listens for successful payment events (`payment_intent.succeeded`).  
   - Triggers the workflow whenever a new payment is made.

2. **Normalize Payment Data**  
   - A **Code node** extracts and formats details like:  
     - Payment ID  
     - Amount & currency  
     - Customer name & email  
     - Payment date  
     - Description  
   - Generates a unique invoice number.

3. **Generate Invoice HTML**  
   - A **Code node** builds a professional **invoice template** in HTML.  
   - Data is dynamically inserted (amount, customer info, invoice number).  
   - Output prepared for PDF generation.

4. **Send Invoice Email**  
   - The **Gmail node** sends an email to the customer.  
   - Invoice is attached as a PDF file.  
   - Includes a confirmation message with payment details.

---

## 🛠️ Setup Steps

### 1. Stripe Webhook
- In your [Stripe Dashboard](https://dashboard.stripe.com):  
  - Navigate to **Developers → Webhooks**  
  - Add a new endpoint with your **Webhook URL** from the n8n Webhook node.  
  - Select event:  
    - `payment_intent.succeeded`  

### 2. Gmail Setup
- In n8n, connect your **Gmail OAuth2 credentials**.  
- Emails will be sent directly from your Gmail account.  

### 3. Customize Invoice
- Open the **Generate Invoice HTML** node.  
- Replace `"Your Company Name"` with your actual business name.  
- Adjust invoice branding, colors, and layout as needed.  

---

## 📧 Example Email Sent

**Subject:** Invoice INV-123456789 - Payment Confirmation  

**Body:**  
Dear John Doe,
Thank you for your payment! Please find your invoice attached.
Payment Details:
Amount: USD 99.00
Payment ID: pi_3JXXXXXXXX
Date: 2025-08-29
Best regards,
Your Company Name


(Attached: `invoice_INV-123456789.pdf`)

---

⚡ With this workflow, every Stripe payment automatically creates and delivers a polished PDF invoice — no manual work required.


## 📊 Basic Information

- **Workflow ID:** 8030
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 340
- **Downloads:** 34
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8030)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **webhook** 
- **code** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
