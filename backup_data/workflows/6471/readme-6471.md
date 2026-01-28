# Magento 2 low stock alert via Slack & Gmail (MSI compatible)

> #### Daily Magento 2 stock check Automation

![ChatGPT Image Jul 26, 2025 at 03_39_21 AM.png](fileId:1866) 

It identifies SKUs with low inventory per source and sends daily alerts via:

##### 📬 Gmail (HTML email)
##### 💬 Slack (formatted text message)

This automation empowers store owners and operations teams to stay ahead of inventory issues by proactively monitoring stock levels across all Magento 2 sources. By receiving early alerts for low-stock products, businesses can restock before items sell out—ensuring continuous product availability, reducing missed sales opportunities, and maintaining customer trust.

Avoiding stockouts not only protects your brand reputation but also keeps your store competitive by preventing customers from turning to competitors due to unavailable items. Timely restocking leads to higher fulfillment rates, improved customer satisfaction, and ultimately, stronger revenue and long-term loyalty.

#### ✅ Features:

1. Filters out configurable, virtual, and downloadable products
2. Uses Magento 2 MSI stock per source
3. Customizable thresholds (default: ≤10 overall or ≤5 per source)
4. HTML-formatted email report
5. Slack notification with a code-formatted
6. Runs daily via Cron (08:50 AM)
7. No need of any 3rd part Modules
8. One time Setup

#### 🔑 Credentials Used
1. HTTP Request (Magento 2 REST API using Bearer Token)
2. Gmail (OAuth2)
3. Slack (OAuth2 or Webhook)

#### 📊 Tags
Magento, Inventory, MSI, Stock Alert, Ecommerce, Slack, Gmail, Automation

#### 📂 Category
E-commerce → Magento 2 (Adobe Commerce)

#### 👤 Author

**Kanaka Kishore Kandregula**  
Certified Magento 2 Developer 
https://gravatar.com/kmyprojects  
https://www.linkedin.com/in/kanakakishore  

## 📊 Basic Information

- **Workflow ID:** 6471
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 130
- **Downloads:** 13
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6471)

## 👤 Author

- **Name:** Kanaka Kishore Kandregula
- **Username:** @kmyprojects

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** 
- **slack** 
- **stickyNote** (×9)
- **httpRequest** (×2)
- **code** (×3)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
