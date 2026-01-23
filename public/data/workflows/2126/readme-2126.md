# Automate your UTM campaign tracking: Shopify, n8n to Baserow

> Campaign tracking is pivotal; it enables marketers to evaluate the efficacy of various strategies and channels. UTM parameters are particularly essential as they provide granular details about the source, medium, and campaign effectiveness. 
However, when this data is not automatically integrated into a centralized system, it can become a tedious and error-prone process to manually collate and analyze it.

Retrieving UTM data from Shopify and storing it in Baserow enables oy to do more with this data. For example you could build a campaign database in Baserow and automatically add campaign revenue to it using this workflow template.

![20240223_11h48m44s_grim.png](fileId:744)

## This template will help you:

1. Automatically retrieve UTM parameters from Shopify orders using the Shopify Admin API
2. Process marketing data through n8n
3. Store this data into Baserow, providing you with a dynamic, responsive base for campaign tracking and decision-making

## This template will demonstrate the follwing concepts in n8n:

- use the **Schedule trigger node**
- use the **GraphQL node** to call the Shopify Admin API
- split larger incoming datasets into n8n items with the **Split node**
- transform the data structure with the **Set node**
- control flow with the **If node**
- store data in Baserow with the **Baserow node**

## How to get started?

1. Create a custom app in Shopify get the credentials needed to connect n8n to Shopify
This is needed for the Shopify Trigger
2. Create **Shopify Acces Token API** credentials n n8n for the Shopify trigger node
3. Create **Header Auth** credentials: 
Use **X-Shopify-Access-Token** as the name and the Acces-Token from the Shopify App you created as the value.
The Header Auth is neccessary for the GraphQL nodes.
4. You will need a running Baserow instance for this. You can also sign up for a free account at [https://baserow.io/](https://baserow.io/)

Please make sure to read the notes in the template. 

For a detailed explanation please check the corresponding video: [https://youtu.be/VBeN-3129RM](https://youtu.be/VBeN-3129RM)

## 📊 Basic Information

- **Workflow ID:** 2126
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1447
- **Downloads:** 144
- **Created:** 2024/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2126)

## 👤 Author

- **Name:** Sascha
- **Username:** @m3tam3re

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **baserow** 
- **noOp** 
- **set** (×2)
- **graphql** 
- **scheduleTrigger** 
- **splitOut** 
- **if** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
