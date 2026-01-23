# Sync Adobe Commerce Customer Data to KlickTipp with Value-Based Tagging

> ![Transfer Adobe Commerce customers and orders to KlickTipp with conditional Tagging.png](fileId:2982)
Community Node Disclaimer: This workflow uses KlickTipp community nodes.

### Introduction
This workflow monitors orders and customers in Adobe Commerce, automatically creating or updating contacts in KlickTipp, enriching profiles for segmentation and automated messaging. Tags are applied dynamically: high-value orders (≥100) receive a "Premium Customer" tag, and purchases with certain SKUs (e.g., clothing) are assigned product-based tags. Perfect for e-commerce businesses, online retailers, and digital shops that want to eliminate manual data entry and ensure every buyer and customer receives the right messages.

### Setup Instructions
1. **KlickTipp Preparation**
      - Prepare **custom fields**
       - `Payment ID`
       - `Total`
       - `Receipt URL`
       - `Products`
      - Prepare **tags**:
       - `Premium customer`
       - `Clothing buyer`

2. **Credential Configuration**
     - Connect your Magento account using an **Access Token/Base URL** from the Magento Admin Dashboard (System → Extensions → Integrations).
     - Authenticate your KlickTipp connection with **username/password** credentials (API access required).

### Customization
- **Trigger options:** If your Commerce edition supports **webhooks**, you can replace polling with a **Webhook** trigger.  
- **Cadence & overlap:** 1–30 min are typical; a 1–2 min overlap in the filter to avoid gaps.  
- **Routing variants:** Change the SKU list, switch to category checks, or add more value tiers.

## 📊 Basic Information

- **Workflow ID:** 9469
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 86
- **Downloads:** 8
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9469)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **n8n-nodes-klicktipp.klicktipp** (×4)
- **scheduleTrigger** 
- **switch** 
- **magento2** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
