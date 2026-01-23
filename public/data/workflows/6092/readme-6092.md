# Automated Stripe to KlickTipp: send purchase confirmation emails via tagging

> ![Stripe n8n WF.png](fileId:1816)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

### Introduction
This workflow automates Stripe checkout confirmations by capturing transaction data and syncing it into KlickTipp. Upon successful checkout, the contact's data is enriched with purchase details and tagged to trigger a personalized confirmation campaign in KlickTipp. Perfect for digital product sellers, course creators, and service providers seeking an end-to-end automated sales confirmation process.
### Benefits
- **Instant confirmation emails**: Automatically notify customers upon successful checkout—no manual processing needed.
- **Structured contact data**: Order data (invoice link, amount, transaction ID, products) is stored in KlickTipp custom fields.
- **Smart campaign triggering**: Assign dynamic tags to start automated confirmation or fulfillment sequences.
- **Seamless digital delivery**: Ideal for pairing with tools like Memberspot or Mentortools to unlock digital products post-checkout.
### Key Features
- **Stripe Webhook Trigger**:
  - Triggers on `Triggers on `Checkout Session.completed` events` events.
  - Captures checkout data including product names, order number, and total amount.
- **KlickTipp Contact Sync**:
  - Adds or updates contacts in KlickTipp.
  - Maps Stripe data into custom fields
  - Assigns a tag such as `Stripe Checkout` to initiate a confirmation campaign.
- **Router Logic (optional)**:
  - Branches logic based on product ID or Stripe payment link.
  - Enables product-specific campaigns or follow-ups.
### Setup Instructions
**KlickTipp Preparation**
   - Create the following custom fields in your KlickTipp account:
   
| **Field Name**          | **Field Type**   |
|--------------------------|------------------|
| Stripe \| Products       | Text             |
| Stripe \| Total          | Decimal Number   |
| Stripe \| Payment ID     | Text             |
| Stripe \| Receipt URL    | URL              |

   - Define a tag for each product or confirmation flow, e.g., `Order: Course XYZ`.
**Credential Configuration**
     - Connect your Stripe account using an API key from the Stripe Dashboard.
     - Authenticate your KlickTipp connection with username/password credentials (API access required).
**Field Mapping and Workflow Alignment**
   - Map Stripe output fields to the KlickTipp custom fields.
   - Assign the tag to trigger your post-purchase campaign.
   - Ensure that required data like email and opt-in info are present for the contact to be valid.
   
### Testing and Deployment
1. Click on **Inactive** to activate the scenario.
2. Perform a test payment using a Stripe product link.
3. Verify in KlickTipp:
   - The contact appears with email and opt-in status.
   - Custom fields for Stripe are filled.
   - The campaign tag is correctly applied and confirmation email is sent.

⚠️ *Note*: Use real or test-mode API keys in Stripe depending on your testing environment. Stripe events may take a few seconds to propagate.
### Campaign Expansion Ideas
- Launch targeted upsell flows based on the product tag.
- Use confirmation placeholders like:
  - `[[Stripe | Products]]`
  - `[[Stripe | Total]]`
  - `[[Stripe | Payment ID]]`
  - `[[Stripe | Products]]`
- Route customers to different product access portals (e.g., Memberspot, Mentortools).
- Send follow-up content over multiple days using KlickTipp sequences.
### Customization
You can extend the scenario using a switch node to:
- Assign different tags per used payment link
- Branch into upsell or membership activation flows  
- Chain additional automations like CRM entry, Slack notification, or invoice creation.


**Resources:**  
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)




## 📊 Basic Information

- **Workflow ID:** 6092
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 219
- **Downloads:** 21
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6092)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×3)
- **CUSTOM.klicktipp** 
- **stripe** 
- **httpRequest** (×2)
- **stripeTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
