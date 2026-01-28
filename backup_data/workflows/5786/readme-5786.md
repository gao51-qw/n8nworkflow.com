# Scrape public email addresses from any website using Firecrawl

> ## Who's it for

This template is perfect for sales professionals, marketers, and business developers who need to quickly gather contact information from company websites. Whether you're building prospect lists, researching potential partners, or collecting leads for outreach campaigns, this automation saves hours of manual email hunting.

## What it does

This workflow automatically discovers and extracts email addresses from any website by:

- Taking a website URL as input through a simple form
- Using Firecrawl's mapping API to find relevant pages (about, contact, team pages)
- Batch scraping those pages to extract email addresses
- Intelligently handling common email obfuscations like "(at)" and "(dot)"
- Returning a clean, deduplicated list of valid email addresses

The automation handles rate limiting, retries failed requests, and filters out invalid or hidden email addresses to ensure you get quality results.

## How to set up

1. **Get Firecrawl API access**: Sign up at [firecrawl.dev](https://firecrawl.dev) and obtain your API key
2. **Configure credentials**: In n8n, create a new HTTP Header Auth credential named "Firecrawl" with:
   - Header Name: `Authorization`
   - Header Value: `Bearer YOUR_API_KEY`
3. **Import the workflow**: Copy the workflow JSON into your n8n instance
4. **Test the form**: Activate the workflow and test with a sample website URL

## How to customize the workflow

**Search parameters**: Modify the `search` parameter in the map_website node to target different page types (currently searches for "about contact company authors team")

**Extraction limits**: Adjust the `limit` parameter to scrape more or fewer pages per website

**Retry logic**: The workflow includes retry logic with a 12-attempt limit - modify the `check_retry_count` node to change this

**Output format**: The `set_result` node formats the final output - customize this to match your preferred data structure

**Email validation**: The JSON schema in `start_batch_scrape` defines how emails are extracted - modify the prompt or schema for different extraction rules

The workflow is designed to be reliable and handle common edge cases like rate limiting and failed requests, making it production-ready for regular use.

## 📊 Basic Information

- **Workflow ID:** 5786
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3331
- **Downloads:** 333
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5786)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×3)
- **if** (×2)
- **stopAndError** 
- **wait** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
