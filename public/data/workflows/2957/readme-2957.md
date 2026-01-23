# 💡🌐 Essential multipage website scraper with Jina.ai

> ## 💡🌐 Essential Multipage Website Scraper with Jina.ai

**Use responsibly and follow local rules and regulations**

This N8N workflow enables automated multi-page website scraping using [Jina.ai's](https://jina.ai) powerful web scraping capabilities, with seamless integration to Google Drive for content storage. Here's how it works:

## Main Features
The workflow automatically scrapes multiple pages from a website's sitemap and saves each page's content as a separate Google Drive document.

## Key Components
**Input Configuration**
- **Starts with a sitemap URL (default: https://ai.pydantic.dev/sitemap.xml)**
- Processes the sitemap to extract individual page URLs
- Includes filtering options to target specific topics or pages

**Scraping Process**
- Uses Jina.ai's web scraper to extract content from each URL
- Converts webpage content into clean markdown format
- Extracts page titles automatically for document naming

**Storage Integration**
- Creates individual Google Drive documents for each scraped page
- Names documents using the format "URL - Page Title"
- Saves content in markdown format for better readability

## Usage Instructions
1. Set your target website's sitemap URL in the "Set Website URL" node
2. Configure the "Filter By Topics or Pages" node to select specific content
3. Adjust the "Limit" node (default: 20 pages) to control batch size
4. Connect your Google Drive account
5. Run the workflow to begin automated scraping

## Additional Features
- Built-in rate limiting through the Wait node to prevent overloading servers
- Batch processing capability for handling large sitemaps

The workflow requires no API key for Jina.ai, making it accessible for immediate use while maintaining responsible scraping practices.


## 📊 Basic Information

- **Workflow ID:** 2957
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 17711
- **Downloads:** 1771
- **Created:** 2025/2/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2957)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **manualTrigger** 
- **splitInBatches** 
- **wait** 
- **limit** 
- **httpRequest** (×2)
- **xml** 
- **splitOut** 
- **filter** 
- **set** 
- **googleDrive** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
