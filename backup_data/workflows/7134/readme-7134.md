# Automate email marketing campaigns with NocoDB & Brevo

> ## **Description🔍**
This n8n workflow is a **complete marketing automation system** that connects to your CDP (Customer Data Platform), selects which flows to send, and delivers personalized emails using Brevo. It's modular and extensible — you can also add SMS, push notifications, Telegram messages, or other channels.

To build a full marketing automation system, you need **four key components**:

1. **Workflow Automation** – using n8n (this workflow)
2. **CDP** – store and manage user data (e.g., NocoDB, Metabase, Power BI, etc.)
3. **Database** – track transactions, templates, and send statuses (e.g., NocoDB)
4. **BI / Analytics** – monitor performance by flows, journeys, and sent events

This workflow represents the **Workflow Automation** layer. You can connect it to your own data stack or use the included example databases (`cdp-ecrm`, `n8n-templates-ecrm`, and `n8n-transaction-ecrm`) to get started quickly.

###  👤 Who’s it for?

- Growth & CRM teams managing user engagement flows
- Ecommerce marketers running time-sensitive email journeys
- Marketing automation pros using low-code CRM stacks
- Data teams building custom campaign triggers from CDPs

### ✅ Features

- 🔁 Two modular flows: "Insert user_id" and "Sending Email"
- 🧠 Select flow using `flow_id` from templates in NocoDB
- ✏️ Insert user data into `n8n-transaction-ecrm` with processing status
- 🔍 Filter duplicate users by `user_id` to avoid over-sending
- 📧 Validate email fields and flag disposables
- 📨 Send personalized emails using Brevo template parameters
- 📊 Track delivery with `sent_result`, `sent_at`, and status updates
- 🕒 Runs every 30 minutes via schedule trigger

### 🛠 How to Use

1. **Set your flow**  
    In the `Setup Flow` node, change the `flow_id` to match a row in your `n8n-templates-ecrm` table.
    
2. **Prepare your tables in NocoDB**
    
    - `cdp-ecrm`: contains users (`user_id`, `email`, `first_name`, `phone_number`)
    - `n8n-templates-ecrm`: contains flows with metadata
    - `n8n-transaction-ecrm`: stores and updates user send status
    
3. **Configure credentials**
    
    - NocoDB API Token
    - Brevo (Sendinblue) API Key
    
4. **Trigger the flows**

    - Run “Insert user_id” manually or on a schedule to prepare users
    - “Sending Email” runs automatically every 30 minutes

### 📌 Notes

- Disposable email domains are filtered using regex
- Status:
    - `0-processing` → just inserted
    - `1-sending` → ready to send
    - `2-sent` → email sent successfully
    - `3-no-email` → missing email address
    - `4-disposal-email` → disposable or banned email   
- Easily duplicate the "Insert user_id" flow to add more campaigns

## 📊 Basic Information

- **Workflow ID:** 7134
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 987
- **Downloads:** 98
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7134)

## 👤 Author

- **Name:** Nima Salimi
- **Username:** @salimi

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **set** (×2)
- **filter** 
- **if** (×5)
- **nocoDb** (×9)
- **wait** 
- **removeDuplicates** 
- **sendInBlue** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
