# Extract product info from website screenshots with Dumpling AI + Sheets

> ### What this workflow does

This workflow extracts product details—like name, price, discount, and rating—  
from website screenshots using Dumpling AI. It starts when a new product page  
URL is added to a Google Sheet, captures a screenshot of that page, extracts  
visible product info from the image, and writes the results back into the sheet.

### What problem is this workflow solving?

Many product pages block traditional scraping tools or use unstructured layouts.  
This workflow bypasses HTML limitations by using visual AI extraction, making  
it reliable even when content is embedded in images or hard to parse with code.

### Who is this for?

This is ideal for eCommerce researchers, pricing analysts, marketers, or anyone  
building a product database from websites without needing to code or maintain  
complex scrapers.

### Setup

1. Create a Google Sheet with a column named **"Site"** (or update the trigger).  
2. Add your product page URLs in this column—one per row.  
3. Connect your Google Sheets and Dumpling AI credentials in n8n.  
4. Ensure your Dumpling AI account has API access for screenshots and extraction.

### How to customize the workflow

- **Prompt adjustment**:  
  In the “Extract Text from Screenshot” node, you can modify the prompt to  
  extract other information like brand name, delivery time, or availability.

- **Add more fields**:  
  After the extraction, edit the “Format Extracted Data” node to map additional  
  fields from the response to your Google Sheet columns.

- **Change output destination**:  
  You can easily replace the Google Sheets module with Airtable, Notion, or  
  another app if preferred.

&gt; ⚠️ This works best when the product data is clearly visible in the screenshot.  
&gt; It won’t extract info that’s hidden behind popups or loaded via user interaction.


## 📊 Basic Information

- **Workflow ID:** 5169
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 540
- **Downloads:** 54
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5169)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** (×3)
- **extractFromFile** 
- **set** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
