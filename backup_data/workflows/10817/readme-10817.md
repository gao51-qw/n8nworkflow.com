# Automate Shopify Product Posting to Social Media with GPT-4.1-Mini & Data Tracking

> ## How it works
This workflow listens for new products in Shopify and transforms the product data into polished social media content. It generates captions and hashtags using an AI model, then posts the product to Instagram and Facebook using the Facebook Graph API. It logs every post to Google Sheets and sends a confirmation message to Discord. The flow ensures consistent publishing across all platforms with automated formatting and tracking.

## Step-by-step

- **Trigger on Shopify product creation**  
  - **Shopify Trigger** – Activates when a new product is added to the store.

- **Prepare product data**  
  - **parse product data** – Extracts product name, price, description, URL, image, and timestamp.

- **Generate caption and hashtags**  
  - **Generate caption and hashtags** – Uses an AI model to craft a caption and produce 10 relevant hashtags.

- **Configure posting parameters**  
  - **Set Configuration** – Stores access tokens, platform IDs, caption text, hashtags, and image URL.

- **Publish to Instagram**  
  - **Create Instagram Media Container** – Sends the image and caption to create a media container.  
  - **Wait for Processing** – Waits for the container to finish processing.  
  - **Publish Instagram Media** – Publishes the processed container to the Instagram feed.

- **Publish to Facebook**  
  - **Download Image for Facebook** – Downloads the product image from Shopify.  
  - **Post to Facebook Page** – Uploads the image with the caption and hashtags to the Facebook Page.

- **Merge publishing results**  
  - **Merge** – Combines responses from Instagram and Facebook for unified logging.

- **Log post to Google Sheets**  
  - **Log Product Post Data** – Appends product info, caption, and hashtags to a spreadsheet.

- **Notify via Discord**  
  - **Notify Discord About Post** – Sends a message summarizing the published product.

## Why use this?
- Ensures every new Shopify product is promoted instantly across major social platforms.  
- Eliminates manual posting and caption creation with reliable automation.  
- Maintains centralized logging for auditing, tracking, or analytics.  
- Provides real-time team notifications to confirm successful posts.  
- Reduces errors and keeps brand messaging consistent across channels.


## 📊 Basic Information

- **Workflow ID:** 10817
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 378
- **Downloads:** 37
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10817)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×4)
- **wait** 
- **shopifyTrigger** 
- **function** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **discord** 
- **merge** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
