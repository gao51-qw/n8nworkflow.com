# Web crawler: Convert websites to AI-ready markdown in Google Sheets

> Transform any website into a structured knowledge repository with this intelligent crawler that extracts hyperlinks from the homepage, intelligently filters images and content pages, and aggregates full Markdown-formatted content—perfect for fueling AI agents or building comprehensive company dossiers without manual effort.

## 📋 What This Template Does
This advanced workflow acts as a lightweight web crawler: it scrapes the homepage to discover all internal links (mimicking a sitemap extraction), deduplicates and validates them, separates image assets from textual pages, then fetches and converts non-image page content to clean Markdown. Results are seamlessly appended to Google Sheets for easy analysis, export, or integration into vector databases.
- Automatically discovers and processes subpage links from the homepage
- Filters out duplicates and non-HTTP links for efficient crawling
- Converts scraped content to Markdown for AI-ready formatting
- Categorizes and stores images, links, and full content in a single sheet row per site

## 🔧 Prerequisites
- Google account with Sheets access for data storage
- n8n instance (cloud or self-hosted)
- Basic understanding of URLs and web links

## 🔑 Required Credentials

### Google Sheets OAuth2 API Setup
1. Go to console.cloud.google.com → APIs & Services → Credentials
2. Click "Create Credentials" → Select "OAuth client ID" → Choose "Web application"
3. Add authorized redirect URIs: https://your-n8n-instance.com/rest/oauth2-credential/callback (replace with your n8n URL)
4. Download the client ID and secret, then add to n8n as "Google Sheets OAuth2 API" credential type
5. During setup, grant access to Google Sheets scopes (e.g., spreadsheets) and test the connection by listing a sheet

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance
2. In the "Set Website" node, update the `website_url` value to your target site (e.g., https://example.com)
3. Assign your Google Sheets credential to the three "Add ... to Sheet" nodes
4. Update the `documentId` and `sheetName` in those nodes to your target spreadsheet ID and sheet name/ID
5. Ensure your sheet has columns: "Website", "Links", "Scraped Content", "Images"
6. Activate the workflow and trigger manually to test scraping

## 🎯 Use Cases
- Knowledge base creation: Crawl a company's site to aggregate all content into Sheets, then export to Notion or a vector DB for internal wikis
- AI agent training: Extract structured Markdown from industry sites to fine-tune LLMs on domain-specific data like legal docs or tech blogs
- Competitor intelligence: Build dossiers by crawling rival websites, separating assets and text for SEO audits or market analysis
- Content archiving: Preserve dynamic sites (e.g., news portals) as static knowledge dumps for compliance or historical research

## ⚠️ Troubleshooting
- No links extracted: Verify the homepage has <a> tags; test with a simple site like example.com and check HTTP response in executions
- Sheet update fails: Confirm column names match exactly (case-sensitive) and credential has edit permissions; try a new blank sheet
- Content truncated: Google Sheets limits cells to ~50k chars—adjust the `.slice(0, 50000)` in "Add Scraped Content to Sheet" or split into multiple rows
- Rate limiting errors: Add a "Wait" node after "Scrape Links" with 1-2s delay if the site blocks rapid requests

## 📊 Basic Information

- **Workflow ID:** 9594
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 985
- **Downloads:** 98
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9594)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** 
- **manualTrigger** 
- **httpRequest** (×2)
- **html** 
- **splitOut** 
- **removeDuplicates** 
- **filter** 
- **switch** 
- **aggregate** (×3)
- **markdown** 
- **googleSheets** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
