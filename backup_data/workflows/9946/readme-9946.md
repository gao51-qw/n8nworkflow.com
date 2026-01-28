# Scrape & import shoe products to Shopify with BrowserAct (with variants & images)

> ![Scrape & Import Products to Shopify](https://i.postimg.cc/L8VdRyFL/Screen-Shot-20251024084138.png)

## Scrape & Import Products to Shopify from Any Site (with Variants & Images)-(Optimized for shoes)

### This advanced n8n template automates e-commerce operations by scraping product data (including variants and images) from any URL and creating fully detailed products in your Shopify store.

This workflow is essential for dropshippers, e-commerce store owners, and anyone looking to quickly import product catalogs from specific websites into their Shopify store.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow reads a list of product page URLs from a **Google Sheet**.
Your sheet, with its columns for **Product Name** and **Product Link**, acts as a **database for your workflow**.

* The **Loop Over Items** node processes products one URL at a time.
* Two **BrowserAct** nodes run sequentially to scrape all product details, including the `Name`, `price`, `description`, `sizes`, and `image links`.
* A custom **Code** node transforms the raw scraped data (where fields like sizes might be a single string) into a structured JSON format with clean lists for `sizes` and `images`.
* The **Shopify** node creates the base product entry using the main details.
* The workflow then uses a series of nodes (**Set Option** and **Add Option** via HTTP Request) to dynamically add **product options** (e.g., "Shoe Size") to the new product.
* The workflow intelligently uses **HTTP Request** nodes to perform two crucial bulk tasks:
    1.  Create a unique **variant** for each available size, including a custom SKU.
    2.  Upload all associated **product images** from their external URLs to the product.
* A final **Slack** notification confirms the batch has been processed.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Bulk Product Scraping From (URLs) and uploading to Shopify (Optimized for shoe - NIKE -&gt; Shopify)**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Google Sheets** credentials for the input list
* **Shopify** credentials (API Access Token) to create and update products, variants, and images
* **Slack** credentials (optional) for notifications

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [Automate Shoe Scraping to Shopify Using n8n, BrowserAct & Google Sheets](https://youtu.be/HPPJNlcMB3I)

## 📊 Basic Information

- **Workflow ID:** 9946
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 501
- **Downloads:** 50
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9946)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **merge** (×2)
- **shopify** 
- **slack** 
- **stickyNote** (×9)
- **httpRequest** (×3)
- **set** 
- **splitOut** (×2)
- **code** 
- **googleSheets** 
- **n8n-nodes-browseract-workflows.browserAct** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
