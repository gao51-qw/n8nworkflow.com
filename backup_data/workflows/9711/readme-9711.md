# Automate Stripe customer data transfer to KlickTipp with dynamic tagging logic

> ![Transfer Stripe customers and checkout data to KlickTipp with conditional tagging.png](fileId:2984)
Community Node Disclaimer: This workflow uses KlickTipp community nodes.

### How It Works
This workflow listens for new or updated customers and for checkout confirmations in **Stripe** and automatically creates or updates contacts in KlickTipp, enriching profiles for segmentation and automated messaging. Tags are applied dynamically: high-value orders (≥100) get a Premium Customer tag, and purchases with certain SKUs (e.g., clothing) receive product-based tags. The process keeps your database clean, accurate, and updated in real time for targeted campaigns. Perfect for digital product sellers, course creators, and service providers seeking an end-to-end automated sales confirmation process.

### Setup Instructions
1. **KlickTipp Preparation**
      - Prepare **custom fields**
       - `Products` (Text)
       - `Total` (Decimal Number)
       - `Payment ID` (Text)
       - `Receipt URL` (URL)
      - Prepare **tags**:
       - `Premium customer`
       - `Clothing buyer`

2. **Credential Configuration**
     - Connect your Stripe account using an API key from the Stripe Dashboard.
     - Authenticate your KlickTipp connection with username/password credentials (API access required).

### Customization
- Launch upsell or membership campaigns using tags.  
- Use KlickTipp placeholders (`[[Stripe | Products]]`, `[[Stripe | Total]]`, etc.) for dynamic emails.  
- Route buyers to portals (e.g., Memberspot, Mentortools).  
- Trigger CRM, Slack notification, or invoice creation.  


## 📊 Basic Information

- **Workflow ID:** 9711
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 20
- **Downloads:** 2
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9711)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×5)
- **CUSTOM.klicktipp** 
- **stripe** 
- **httpRequest** (×2)
- **n8n-nodes-klicktipp.klicktipp** (×3)
- **switch** (×2)
- **stripeTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
