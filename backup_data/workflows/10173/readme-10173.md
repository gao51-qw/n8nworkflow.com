# Scrape multi-page websites recursively with Google Sheets storage

> ## Configurable Multi-Page Web Scraper

### Introduction

This n8n workflow provides a robust and highly reusable solution for scraping data from paginated websites. Instead of building a complex series of nodes for every new site, you only need to update a simple JSON configuration in the initial Input Node, making your scraping tasks faster and more standardized.

### Purpose

The core purpose of this template is to automate the extraction of structured data (e.g., product details, quotes, articles) from websites with multiple pages. It is designed to be fully recursive: it follows the "next page" link until no link is found, aggregates the results from all pages, and cleanly structures the final output into a single list of items.

### Setup and Configuration

1. **Locate the Input Node:** The entire configuration for the scraper is held within the first node of the workflow.
2. **Update the JSON:** Replace the existing JSON content with your target website's details:
   * `startUrl`: The URL of the first page to begin scraping.
   * `nextPageSelector`: The CSS selector for the "Next" or "Continue" link element that leads to the next page. This is crucial for the pagination loop.
   * `fields`: An array of objects defining the data to extract on each page. For each field, specify the `name` (the output key), the `selector` (the CSS selector pointing to the data), and the `value` (the HTML attribute to pull, usually `text` or `href`).
3. **Run the Workflow:** After updating the configuration, execute the workflow. It will automatically loop through all pages and deliver a final, structured list of the scraped data.

For a detailed breakdown of the internal logic, including how the loop is constructed using the Set, If, and HTTP Request nodes, please refer to the original blog post: [Flexible Web Scraping with n8n: A Configurable, Multi-Page Template](https://n8nplaybook.com/post/2025/10/flexible-n8n-scraper-template/)

## 📊 Basic Information

- **Workflow ID:** 10173
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 154
- **Downloads:** 15
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10173)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **httpRequest** 
- **splitOut** (×2)
- **merge** 
- **html** (×2)
- **if** 
- **aggregate** 
- **stickyNote** (×5)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
