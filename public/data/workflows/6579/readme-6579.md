# Send personalized product recommendations via email after Shopify purchases

> ## 🚀 Shopify Post-Purchase Upsell/Cross-sell Email Automation


## Overview
This automation triggers when a new order is placed in your Shopify store. It then waits a short period, intelligently identifies complementary products based on the customer's purchase, retrieves those product details, and finally sends a personalized email showcasing the recommendations.


## How it works

This automation triggers when a new order is placed in your Shopify store. It then waits a short period, intelligently identifies complementary products based on the customer's purchase, retrieves those product details, and finally sends a personalized email showcasing the recommendations.

1. Order Detection: When a customer completes a purchase, the flow begins.

2. Smart Delay: A brief pause ensures initial order confirmations are sent.

3. Recommendation Engine: The workflow identifies relevant upsell or cross-sell products based on your predefined rules.

4. Dynamic Email Creation: It fetches details for the recommended products and builds a visually appealing, personalized email.

5. Email Delivery: The tailored email is sent to your customer, encouraging their next purchase.

## Setup Steps

Getting this automation ready will take approximately 1-2 hours, including populating your product recommendations.

Import Workflow: Import the provided n8n JSON file into your n8n instance.

Configure Credentials: Set up your Shopify API and SMTP (email sending) credentials within n8n. Ensure your Shopify credential has read_orders and read_products permissions.

Define Recommendations: Open the Generate Recommendation IDs (Code) node. Crucially, update the recommendationsMap within this node to define which products should be suggested based on specific purchased product IDs from your Shopify store.

Customize Email & URLs: In the Send Upsell Email node, customize the fromEmail, subject, and the main HTML content to match your brand. Also, update YOUR_SHOPIFY_STORE_URL and YOUR_UNSUBSCRIBE_LINK placeholders in the Format Recommendations HTML (Code) and Send Upsell Email nodes.

Activate & Test: Turn the workflow to Active and place a test order in your Shopify store to verify everything works as expected.

(For detailed descriptions and troubleshooting, refer to the Sticky Notes located directly within the n8n workflow itself.)

## 📊 Basic Information

- **Workflow ID:** 6579
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 173
- **Downloads:** 17
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6579)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **shopifyTrigger** 
- **wait** 
- **code** (×2)
- **if** 
- **splitInBatches** 
- **shopify** 
- **merge** 
- **emailSend** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
