# Sitemap.xml metadata export to Google Sheets (Title, Meta Description, and URLs)

> This workflow automates the extraction of SEO metadata (URL, page title, and meta description) from every page listed in your website's sitemap and exports it to Google Sheets. Ideal for SEO audits, content inventories, and tracking on-page elements.

## Prerequisites

Before using this workflow:
- A publicly accessible `sitemap.xml` URL
- Google Sheets spreadsheet with columns: **URL**, **Title**, and **meta description**
- Google Sheets API access via OAuth2

## Setup Instructions

### 1. Configure Sitemap Source
- In the **"Get Sitemap XML"** node, replace the default URL with your actual sitemap URL

### 2. Connect Google Sheets
- Open the **"Append or update row in sheet"** node
- Configure Google Sheets credentials
- Set Document ID and Sheet Name
- Verify column mappings match your spreadsheet

### 3. Adjust Rate Limiting (Optional)
- Modify Wait nodes if encountering 429 errors
- Increase delay between requests if needed

## How It Works

1. **Trigger**: Manual workflow execution
2. **Sitemap Fetch**: Retrieve sitemap.xml file
3. **URL Parsing**: Extract all URLs from sitemap
4. **Batch Processing**: Process URLs in manageable batches
5. **Data Extraction**: Scrape title and meta description from each page
6. **Data Merge**: Combine URL with extracted metadata
7. **Sheet Update**: Append or update rows in Google Sheets using URL as a unique key

## Features

- **Duplicate Prevention**: Uses `appendOrUpdate` with URL matching
- **Rate Limiting**: Built-in delays between requests
- **Flexible Processing**: Handles sitemaps of various sizes
- **Easy Customization**: Modify code nodes for additional data extraction

## Use Cases

- SEO audits of title and description tags
- Content migration planning
- Website content inventory management
- Ongoing SEO monitoring and reporting

## 📊 Basic Information

- **Workflow ID:** 8691
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 198
- **Downloads:** 19
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8691)

## 👤 Author

- **Name:** Jemee
- **Username:** @jemeeroy

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **splitInBatches** 
- **manualTrigger** 
- **httpRequest** (×2)
- **code** (×2)
- **stickyNote** (×3)
- **wait** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
