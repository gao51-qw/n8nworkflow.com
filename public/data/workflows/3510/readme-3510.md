# AI-driven WooCommerce product importer from Google Sheet with Yoast SEO meta

> This workflow streamlines your **WooCommerce product creation process** by integrating directly with **Google Sheets**. Simply input product details into your spreadsheet, and the workflow takes care of the rest-automatically creating new products on your WooCommerce store with **inventory management**.

But it doesn’t stop there. A dedicated **SEO expert chain** analyzes each product’s content and generates optimized meta titles and meta descriptions for the plugin **Yoast SEO**, enhancing visibility and ranking potential on search engines.

**Key Benefits:**
- 🔄 **Automation**: No more manual uploads—save time and reduce errors by syncing Google Sheets directly with WooCommerce.
- ⚡ **Speed**: Instantly publish multiple products with just one action.
- 🧠 **Built-in SEO Intelligence**: Automatically generate SEO-friendly meta titles and descriptions tailored to each product.
- 📈 **Improved Search Visibility**: Boost your store's traffic with optimized product listings.
- 🧩 **Customizable**: Easily adapt the workflow to your specific needs or integrate with other platforms.

---

### **How It Works**  
This workflow automates the creation of WooCommerce products and generates optimized SEO meta tags (title and description) using AI. Here’s the step-by-step process:  

- **Data Retrieval**: The workflow starts by fetching product details (title, category, description, price, etc.) from a Google Sheets document.  
- **Product Creation**: Each product is created in WooCommerce using the retrieved data, including categories, pricing, stock details, and images.  
- **AI-Powered SEO Optimization**: An AI model (Google Gemini via OpenRouter) analyzes the product details and generates SEO-optimized meta titles (≤60 chars) and meta descriptions (≤160 chars).  
- **Meta Tag Assignment**: The generated meta tags are saved back to the Google Sheets and applied to the WooCommerce product using Yoast SEO metadata.  
- **Completion Tracking**: The workflow marks completed entries in Google Sheets and sends a Telegram notification upon finishing all products.  
---
### **Set Up Steps**  
Before running the workflow, ensure the following steps are completed:  

- **Step 1**: Install the Yoast SEO plugin on WordPress and add the provided PHP code to `functions.php` to enable meta tag API support.  
- **Step 2**: Enable the WooCommerce REST API in WordPress and configure the Telegram node with a valid `CHAT_ID` for notifications.  
- **Step 3**: Prepare a Google Sheet with product data (columns A-I in specific formats) and share its ID in the workflow. Ensure columns B, E, and F are in text format, and column I is numeric.  

Once set up, the workflow can be triggered manually or scheduled to run automatically, streamlining product creation and SEO optimization.

---

### **Who is it useful for?** ###

Ideal for eCommerce managers, digital marketers, or anyone managing large product catalogs-this workflow turns your spreadsheet into a powerful product launcher.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 3510
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 4541
- **Downloads:** 454
- **Created:** 2025/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3510)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** (×3)
- **code** 
- **wooCommerce** (×2)
- **splitInBatches** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
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
