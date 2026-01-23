# Automatic re-engagement for inactive Shopify customers via Beex

>  
## Summary

Re-engage your customers with your Shopify store through a personalized contact sequence.
## How it works
1. The workflow is triggered by a Scheduler Trigger and immediately reviews your Shopify customers by retrieving their last_order_id.

2. For customers with a non-null last_order_id, the workflow proceeds to fetch detailed order information from Shopify, including the order closing date and the products involved.

3. Based on the order date, the workflow calculates the number of days the customer has been inactive. If this period exceeds a defined threshold (e.g., 30 days), the corresponding records are sent via API to Beex, where each customer enters a multi-step contact sequence that may include WhatsApp, email, and other channels. 

Example: "Customers can then expect to receive a limited-time discount coupon invitation as part of the reactivation strategy".

![beex_sequence.PNG](fileId:2768)

## How to set up
1. Before importing the template, make sure to install the Beex node using the following package name: n8n-nodes-beex
2. Configure your Shopify credentials according to your store’s settings. You will need to provide:
	- Your store subdomain
	- Your Access Token
	- Your App Secret Key
3. For Beex users with platform access (if you need a trial, please contact frank@beexcc.com), go to the main dashboard and navigate to:
Platform Settings → API KEY & Callback
There, you can retrieve your API key and insert it into the corresponding Beex node within n8n.

![beex_api_key.PNG](fileId:2769)

## Requirements
- You need accounts for: 
	- Beex (omnichannel contact platform)
	- Shopify (E-commerce platform builder)
- You need in Beex (Node): 
	- Portfolio ID
	- Sequence ID
- The above determines the sequence of contact that customers are subjected to.
## How to customize
- You can also change the threshold to define from what extent you consider that a client is inactive.
- You can configure a particular sequence in Beex to contact your inactive customers to insert them into the node.


## 📊 Basic Information

- **Workflow ID:** 9160
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9160)

## 👤 Author

- **Name:** Beex
- **Username:** @zapix

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **httpRequest** 
- **splitOut** 
- **filter** (×2)
- **shopify** (×2)
- **n8n-nodes-beex.beex** 
- **dateTime** 
- **set** (×2)
- **merge** 
- **scheduleTrigger** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
