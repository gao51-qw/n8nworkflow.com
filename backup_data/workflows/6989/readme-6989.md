# Weekly Magento 2 stuck order reporting with Gmail & Google Sheets

> ### Automatically identifies and reports Magento 2 orders stuck for the past 7 business days. Sends a weekly email alert to the store manager with a Google Sheets report, helping streamline order follow-ups and prevent fulfilment delays.

![Automate_Order_Stuck_reporting2.png](fileId:1941)

#### 🔍 What It Does:
This n8n automation identifies Magento 2 orders that have been stuck in the same status (like "processing") for the past 7 weekdays (excluding weekends), compiles them into a clean Google Sheet report, and emails the store manager every Monday morning with a snapshot and link to the full data for immediate action.

#### ⚙️ Technical Highlights:
- Automatically runs every Monday at 8 AM using the Schedule Trigger.
- Dynamically calculates business days only (excluding weekends) to identify stale orders.
- Fetches order data using Magento 2 REST API.
- Filters and formats key details like customer name, order value, phone, and email.
- Stores the data in a Google Sheet titled with the current date.
- Sends a professionally formatted HTML email to the manager with:
- A summary table of stuck orders.
- A button linking directly to the full Google Sheet report.

#### ✅ Ideal For:
- Magento 2 store owners/managers who need better visibility on stuck or delayed orders.
- Operations teams who want to avoid lost revenue or customer complaints due to order inaction.
- Automation engineers looking to integrate Google Workspace and Magento efficiently using n8n.
- 📈 Why This Matters in the Current Market:
- In e-commerce, stuck orders = lost trust and lost revenue. As fulfillment expectations continue to rise, proactively managing delayed or idle orders is crucial. This workflow empowers store managers to act fast, reduce manual monitoring, and keep operations smooth — all while preserving customer satisfaction and operational reputation.

#### 🔧 Modules Used:
- Schedule Trigger
- HTTP Request (Magento 2 REST API)
- Code (JavaScript logic for date filtering, formatting)
- Google Sheets (Create & Append rows)
- Gmail (Send custom HTML email)
- Set/Get Logo (optional media path fetch for branding)

#### 💼 Use Cases:
- Weekly operational check-ins for stuck orders.
- Root cause analysis of order processing delays.
- Escalation trigger for order fulfillment teams.
- Dashboard data feed for pending revenue reports.
- Enhance Magento store manager awareness with automation.

#### 🔒 Credentials Required:
- Magento 2 Bearer Auth (Admin API access)
- Google Sheets OAuth2 (Access to Google Drive & Sheets)
- Gmail OAuth2 (Authorized sender account)

#### 📂 Category:
Magento 2 / E-Commerce Automation / Order Management / Reporting

#### 💬 Need Help?
If you'd like help customizing this for your Magento store, such as:
Filtering by specific order statuses
Adding Slack/Telegram alerts
Multi-store/multi-manager support
Feel free to reach out — we can assist in tailoring the workflow to your unique business logic.

Contact: Author

👤 Author
Kanaka Kishore Kandregula
Certified Magento 2 Developer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

## 📊 Basic Information

- **Workflow ID:** 6989
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 29
- **Downloads:** 2
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6989)

## 👤 Author

- **Name:** Kanaka Kishore Kandregula
- **Username:** @kmyprojects

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **code** (×4)
- **googleSheets** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
