# Fix & resend guest order emails in Magento 2 via REST API

> ### This powerful n8n automation workflow is built for Magento 2 store owners and support teams who need to quickly correct guest customer email addresses and automatically resend order confirmation emails — all without logging into the Magento Admin Panel.

#### 🧩 What This Workflow Does:
- 🔄 Automates Magento 2 Admin Token Generation for secure REST API access.
- ✏️ Edits the email address on guest orders by updating both customer_email and billing_address.email fields using the Magento 2 Order API.
- 📧 Triggers the Magento 2 order confirmation email using the official /V1/orders/:id/emails endpoint.
- 🧠 Can be triggered manually or automatically from a form, CRM, failed email webhook, or helpdesk system.
- 📝 Logs actions and results to keep track of which emails were updated and which confirmations were resent.

#### ✅ Why Use This n8n Workflow?
- No more manual edits via Admin Panel.
- Ideal for support teams fixing typos like @gamil.com or @yahho.com.
- Seamless experience for customers who never received their order confirmation.
- Easily extendable — connect to your existing n8n ecosystem (forms, Slack, HelpDesk, Airtable, etc.)

#### 💼 Use Cases
- 🔧 A customer checks out as a guest and provides the wrong email — this automation fixes it in seconds.
- 📦 Support team gets a ticket: “I didn’t receive my confirmation email” — plug in the new address and let the workflow handle the rest.
- 🤖 Ecommerce operators who want to automate email recovery and cleanup workflows with precision and audit logs.

#### 🔑 Credentials Used
- HTTP Request – For calling Magento 2 REST API endpoints.
- Magento 2 Admin API Token – Acquired via /V1/integration/admin/token using admin username/password.

#### 🏷️ Tags
#n8n #Magento2 #AdobeCommerce #RESTAPI #Automation #Ecommerce #EmailFix #GuestCheckout #OrderMan

#### 📂 Category
Ecommerce Automation / Magento 2 / Developer Tools / Support Ops

#### 💬 Need Help?
💡 Having trouble setting it up or want to customize this workflow further?
Feel free to reach out — I’m happy to help with setup, customization, or Magento 2 API integration issues.

Contact: Author

#### 👤 Author
**Kanaka Kishore Kandregula**
Certified Magento 2 Developer | N8N Engineer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

Thank you

## 📊 Basic Information

- **Workflow ID:** 6707
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 74
- **Downloads:** 7
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6707)

## 👤 Author

- **Name:** Kanaka Kishore Kandregula
- **Username:** @kmyprojects

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×3)
- **httpRequest** (×2)
- **if** (×2)
- **code** 
- **mySql** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
