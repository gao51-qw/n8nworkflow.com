# AI video generator for eCommerce product catalogs with Veo 3.1

> # AI Video Generator for eCommerce Product Catalogs

Transform static product images from any online store into engaging animated videos using Google's Veo 3.1 AI. Simply submit a catalog page URL and automatically generate professional product showcase videos where models pose and move to display clothing and fashion items from multiple angles - perfect for elevating product pages with dynamic content that increases conversion rates.

## How it works

* **Submit any eCommerce catalog page URL** through a simple web form (works with Shopify, WooCommerce, and most online stores)
* **Automatically scrapes product listings** using Firecrawl to extract product titles and high-quality images
* **Batch processes product images** with intelligent iteration through your catalog inventory
* **Generates 8-second animated videos** using Google Veo 3.1 where models wearing the clothing strike multiple poses to showcase fit and style
* **Polls for completion status** and automatically downloads finished videos when ready
* **Organizes assets in Google Drive** with source images and output videos in a structured folder system

The workflow creates professional product videos that show garments from different angles with natural model movements, giving shoppers a much better sense of how items look and fit compared to static photos alone.

## Set up steps

1. **Connect API credentials**: Firecrawl account for web scraping, Google Gemini/Veo API for video generation, Google Drive for asset storage
2. **Create Google Drive output folder** where source images and generated videos will be automatically saved
3. **Configure folder ID** in the workflow to point to your designated Drive location
4. **Adjust product limit** (optional) to control how many catalog items to process per run
5. **Deploy the form webhook** to get your submission URL for catalog page processing

**Time investment**: ~15-20 minutes for API setup and configuration, then just submit catalog URLs to automatically generate video content for your entire product line.

**Requirements**: Firecrawl account for web scraping, Google Cloud account with Veo 3.1 API access (currently in preview), Google Drive account. Works best with fashion and apparel catalogs.

**Note**: Video generation takes approximately 10 seconds per product as Veo processes each request. The workflow includes automatic polling to handle the async video generation process.

## 📊 Basic Information

- **Workflow ID:** 10063
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1935
- **Downloads:** 193
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10063)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@mendable/n8n-nodes-firecrawl.firecrawl** 
- **splitOut** 
- **limit** 
- **splitInBatches** 
- **httpRequest** (×4)
- **set** 
- **wait** 
- **if** 
- **extractFromFile** 
- **googleDrive** (×2)
- **convertToFile** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
