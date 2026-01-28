# Automated order confirmations with Abacate Pay: first-buyer coupon rewards via email & Slack

> ### Workflow Overview
This workflow provides a complete, automated post-purchase solution triggered by a successful payment webhook from **Abacate Pay**. *(For international users, think of Abacate Pay as 'the Brazilian Stripe' – a popular and robust payment gateway in Brazil).*

When a successful payment is registered, this workflow instantly sends a beautiful, responsive HTML confirmation email to the customer and posts a detailed notification to a designated Slack channel.

The key feature is its ability to **dynamically reward first-time buyers**. The workflow checks the customer's purchase history, and if it's their first order, it automatically generates a 10% discount coupon for their next purchase and includes it in the welcome email.

### Key Features:

* **Webhook Trigger:** Securely listens for successful payment events from Abacate Pay.
* **First-Time Buyer Detection:** Queries past orders to identify new customers.
* **Automatic Coupon Generation:** Creates a unique, single-use discount coupon for new buyers.
* **Dynamic Content:** The email and Slack messages automatically include the coupon details, but only for first-time buyers.
* **Responsive HTML Email:** Sends a professional and mobile-friendly order confirmation.
* **Rich Slack Notifications:** Uses Block Kit for well-formatted, actionable alerts for your team.
* **Centralized Configuration:** A single `Configs` node makes it easy to manage static variables like company name and tokens.

### Setup Instructions:

1.  **Webhook Node:** Copy the webhook URL and paste it into your Abacate Pay dashboard for the "payment successful" event (e.g., `billing.paid`).
2.  **Configs Node:** Open this `Set` node and fill in your company's information (`companyName`, `companySite`, `companyEmail`) and the `token` used to validate the webhook requests.
3.  **HTTP Request Nodes (`GetOrders`, `CreateCustomCoupon`):** In both nodes, go to the "Authentication" or "Header" section and replace the placeholder Bearer Token with your actual Abacate Pay API key.
4.  **Send Email Node:** Select your email credentials from the dropdown or configure a new account (e.g., `SMTP`, `Gmail`).
5.  **Slack Node:** Select your Slack credentials and choose the channel where you want to receive notifications.
6.  **Activate the Workflow:** Save and activate the workflow. It's now ready to process incoming orders!

### Required Credentials:

* Abacate Pay API Credentials
* Email Credentials (e.g., `SMTP`, `SendGrid`, `Gmail`)
* Slack API Credentials

## 📊 Basic Information

- **Workflow ID:** 7400
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 159
- **Downloads:** 15
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7400)

## 👤 Author

- **Name:** Matheus Pedrosa
- **Username:** @julinho

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **if** (×2)
- **respondToWebhook** 
- **code** (×2)
- **emailSend** 
- **slack** 
- **httpRequest** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
