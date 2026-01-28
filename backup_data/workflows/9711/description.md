![Transfer Stripe customers and checkout data to KlickTipp with conditional tagging.png](fileId:2984)
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
