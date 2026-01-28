# Baserow campaign database to Shopify with image upload & dynamic template update

> Automating your marketing campaign management process can streamline your workflow and save you valuable time. With the combination of Baserow and n8n, you can efficiently handle your campaign data and seamlessly publish content to your Shopify store.

In this workflow template, I demonstrate how to leverage Baserow as a centralized platform for organizing your marketing campaign assets, including copy and images. By utilizing n8n, we automate the process of fetching images and campaign descriptions from Baserow and uploading them directly to your Shopify store.

With this automated solution, you can expedite the publishing process, ensuring that your campaigns are launched swiftly across your sales channels. Additionally, this workflow serves as a foundational step towards further automation in campaign management, allowing you to dynamically generate and upload content to your Shopify store with ease.

## This template will help you:

1. Use n8n to get images for marketing campaigns from Baserow and upload them to your Shopify media library
2. Dynamically inject data from Baserow into a template file 
3. Upload a template file to your Shopify theme

## This template will demonstrate the follwing concepts in n8n:

- use the **Webhook node**
- use the **IF node** to control the execution flow of the workflow
- do time calculation using expressions and javascript
- use the **GraphQL node** to upload images to your Shopify media files
- create a dynamic template file for your Shopify theme
- use the **HTTP Reqest node** to upload your template file to your Shopify store

## How to get started?

1. Create a custom app in Shopify get the credentials needed to connect n8n to Shopify
This is needed for the Shopify Trigger
2. Create **Shopify Acces Token API** credentials n n8n for the Shopify trigger node
3. Create **Header Auth** credentials: 
Use **X-Shopify-Access-Token** as the name and the Acces-Token from the Shopify App you created as the value.
The Header Auth is neccessary for the GraphQL nodes.
4. You will need a running Baserow instance for this. You can also sign up for a free account at [https://baserow.io/](https://baserow.io/)

Please make sure to read the notes in the template. 

For a detailed explanation please check the corresponding video: [https://youtu.be/Ky-dYlljGiY](https://youtu.be/Ky-dYlljGiY)

## 📊 Basic Information

- **Workflow ID:** 2186
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1293
- **Downloads:** 129
- **Created:** 2024/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2186)

## 👤 Author

- **Name:** Sascha
- **Username:** @m3tam3re

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **noOp** 
- **httpRequest** 
- **graphql** 
- **set** 
- **webhook** 
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
