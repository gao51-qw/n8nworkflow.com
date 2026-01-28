# Web site scraper for LLMs with Airtop

> # Recursive Web Scraping 

## Use Case  
Automating web scraping with recursive depth is ideal for collecting content across multiple linked pages—perfect for content aggregation, lead generation, or research projects.

## What This Automation Does  
This automation reads a list of URLs from a Google Sheet, scrapes each page, stores the content in a document, and adds newly discovered links back to the sheet. It continues this process for a specified number of iterations based on the defined scraping depth.

### Input Parameters:
- `Seed URL`: The starting URL to begin the scraping process.  
  Example: `https://example.com/`
- `Links must contain`: Restricts the links to those that contain this specified string.  
  Example: `https://example.com/`
- `Depth`: The number of iterations (layers of links) to scrape beyond the initial set.  
  Example: `3`

## How It Works  
1. Starts by reading the `Seed URL` from the Google Sheet.
2. Scrapes each page and saves its content to the specified document.
3. Extracts new links from each page that match the `Links must contain` string, appends them to the Google Sheet.
4. Repeats steps 2–3 for the number of times specified by `Depth - 1`.

## Setup Requirements  
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.  
2. Credentials set up for Google Docs (requires creating a project on Google Console). Read [how to](https://docs.n8n.io/integrations/builtin/credentials/google/).  
3. Credentials set up for Google Spreadsheet.

## Next Steps  
- **Add Filtering Rules**: Filter which links to follow based on domain, path, or content type.  
- **Combine with Scheduler**: Run this automation on a schedule to continuously explore newly discovered pages.  
- **Export Structured Data**: Extend the process to store extracted data in a CSV or database for analysis.

Read more about [website scraping for LLMS](https://www.airtop.ai/automations/scrape-website-data-n8n)


## 📊 Basic Information

- **Workflow ID:** 4252
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 8689
- **Downloads:** 868
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4252)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×3)
- **googleSheets** (×5)
- **airtop** (×3)
- **googleDocs** (×3)
- **if** 
- **code** 
- **stickyNote** (×6)
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
