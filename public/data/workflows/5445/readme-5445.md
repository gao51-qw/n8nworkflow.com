# Automatic blog post generation from WooCommerce products with GPT-4.1-mini

> ## What it does
This workflow automatically creates and publishes engaging blog posts for products in your WooCommerce store using OpenAI.  
Every 6 hours (schedule adjustable), it randomly selects a product from your store, generates a fun, curiosity-driven post, formats it for WordPress, and publishes it — all without manual intervention.

## How it works
1. **Schedule Trigger** – Runs on a set interval (default: every 6 hours).  
2. **Pull WooCommerce Products** – Uses the WooCommerce REST API to retrieve up to 100 products.  
3. **Sort Randomly & Select One** – Ensures variety by picking a different product each run.  
4. **OpenAI Blog Post Generation** – Sends the product link and a creative prompt to GPT-4.1-mini for a casual, shareable blog post.  
5. **Format Post** – Extracts title, content, slug, and excerpt from AI output.  
6. **Publish to WordPress** – Posts directly via the WP REST API with your chosen category.

## Key features
- **Hands-off content creation** — Runs automatically on your schedule.  
- **Unique, non-corporate tone** — Prompt crafted for casual, social-media-friendly style.  
- **Product variety** — Randomized selection keeps posts fresh.  
- **End-to-end automation** — From product data to live blog post in minutes.  
- **Easy to customize** — Adjust prompt, schedule, categories, or post format.

## Setup instructions
1. **WooCommerce**
   - Enable REST API and create a key with *Read* permissions.  
   - Store your API key/secret in n8n as Basic Auth credentials.  
   - Update the “Pull WooCommerce Product” URL to your store domain.

2. **OpenAI**
   - Add your API key in n8n’s OpenAI credentials.  
   - Optionally adjust model or prompt for your tone/style.

3. **WordPress**
   - Enable REST API and create an Application Password or Basic Auth user with *Author* or higher permissions.  
   - Add credentials to the “Publish to WordPress” node.  
   - Update post category ID in the “Publish” node if needed.

## Costs
- **OpenAI:** per-token usage (GPT-4.1-mini is cost-efficient for blog-length content).  
- **Hosting:** Your n8n instance, WooCommerce, and WordPress hosting costs.

## Troubleshooting
- **No products retrieved:** Check WooCommerce API credentials and endpoint URL.  
- **Post fails to publish:** Verify WordPress API credentials and category ID.  
- **Formatting issues:** Adjust the “Format Post For Publishing” code node to tweak parsing.


## 📊 Basic Information

- **Workflow ID:** 5445
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 660
- **Downloads:** 66
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5445)

## 👤 Author

- **Name:** Thomas
- **Username:** @darkrangeholdings

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×2)
- **stickyNote** (×3)
- **sort** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
