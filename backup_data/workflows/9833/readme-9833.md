# Import products from Google Sheets to Shopify with multi-variant support

> ## Short Description (for listing)
Import products from Google Sheets to Shopify with automatic handling of single products and multi-variant products (sizes, colors, etc.). Includes SKU management, inventory tracking, and image uploads via GraphQL API.

## Category
- E-commerce
- Productivity
- Data Import/Export

## Full Description

### Overview
This workflow automates the process of importing products from a Google Sheet into your Shopify store. It intelligently detects and handles both simple products and products with multiple variants (like different sizes or colors), creating them with proper SKU management, pricing, inventory levels, and images.

### Key Features
- ✅ **Dual Product Support**: Handles single products and multi-variant products automatically
- ✅ **Smart SKU Parsing**: Automatically groups variants by parsing SKU format (e.g., `12345-SM`, `12345-MD`)
- ✅ **Inventory Management**: Sets stock levels for each variant at your default location
- ✅ **Image Upload**: Attaches product images from URLs
- ✅ **GraphQL API**: Uses Shopify's modern GraphQL API for reliable product creation
- ✅ **Batch Processing**: Process multiple products in one workflow run

### Use Cases
- Initial store setup with bulk product import
- Regular inventory updates from spreadsheet
- Migrating products from another platform
- Managing seasonal product catalogs
- Synchronizing products with external systems

### Requirements
1. Shopify store with Admin API access
2. Google Sheets API credentials
3. n8n version 1.0+
4. Basic understanding of GraphQL (helpful but not required)

### What You'll Need to Configure
- Shopify Admin API token
- Your Shopify store URL (in 'set store url' node)
- Google Sheets connection
- (Optional) Vendor name and product type defaults

### Input Format
Your Google Sheet should contain columns:
- Product Name
- SKU (format: `BASESKU-VARIANT` for variants)
- Size (or other variant option)
- Price
- On hand Inventory
- Product Image (URL)

Products with the same name are automatically grouped as variants.

### How It Works
1. **Reads** product data from your Google Sheet
2. **Groups** products by name and detects if they have variants
3. **Switches** to appropriate creation path (single or variant)
4. **Creates** product in Shopify with options and variants
5. **Updates** each variant with SKU and pricing
6. **Sets** inventory levels at your location
7. **Uploads** product images

### Technical Details
- Uses Shopify GraphQL Admin API (2025-04)
- Handles up to 100 variants per product
- Processes variants individually for accurate data mapping
- Includes error handling for missing data
- Supports one inventory location per run

### Common Modifications
- Change vendor name and product type
- Add more variant options (color, material, etc.)
- Customize product status (draft vs active)
- Modify inventory location selection
- Add product descriptions

### Perfect For
- Shopify store owners managing large catalogs
- E-commerce managers doing bulk imports
- Agencies setting up client stores
- Developers building automated product workflows

---

**Difficulty**: Intermediate  
**Estimated Setup Time**: 15-30 minutes  
**Nodes Used**: 16  
**External Services**: Shopify, Google Sheets

## 📊 Basic Information

- **Workflow ID:** 9833
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 277
- **Downloads:** 27
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9833)

## 👤 Author

- **Name:** Muhammad Asadullah
- **Username:** @asadtech

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **graphql** (×8)
- **splitOut** 
- **code** (×2)
- **switch** 
- **stickyNote** (×5)
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
