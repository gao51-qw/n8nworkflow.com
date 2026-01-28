# Generate authentic product reviews with OpenAI for WooCommerce

> This workflow automatically generates natural product comments using AI and posts them to your WooCommerce store. It helps boost engagement and makes product pages look more active and authentic.

## How It Works

Fetches all products from your WooCommerce store.

Builds an AI prompt based on each product’s name and description.

Uses OpenAI to generate a short, human-like comment (neutral, positive, negative, or questioning).

Assigns a random reviewer name and email.

Posts the comment back to WooCommerce as a product review.

### Requirements

1. n8n version: 1.49.0 or later (recommended).
2. Active OpenAI API key.
3. WooCommerce installed and REST API enabled.
4. WordPress API credentials (Consumer Key & Consumer Secret).

### Setup Instructions

Import this workflow into n8n.

Add your credentials in n8n &gt; Credentials:

OpenAI API (API key).

WooCommerce API (consumer key & secret).

Replace the sample URL https://example.com with your own WordPress/WooCommerce site URL.

Execute manually or schedule it to run periodically.

### Categories

AI & Machine Learning

WooCommerce

WordPress

Marketing

Engagement

#### Tags

ai, openai, woocommerce, comments, automation, reviews, n8n

&gt; Note: AI-generated comments should be reviewed periodically to ensure they align with your store’s policies and brand voice.

## 📊 Basic Information

- **Workflow ID:** 7579
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 715
- **Downloads:** 71
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7579)

## 👤 Author

- **Name:** Ali Khosravani
- **Username:** @alikhosro

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **httpRequest** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
