# Google Maps business scraper & lead enricher with Bright Data & Google Gemini

> ![Google Maps Business Scraper  Lead Enricher with Bright Data  Google Gemini.png](fileId:1629)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Description

This workflow automates the process of scraping local business data from Google Maps and enriching it using AI to generate lead profiles. It's designed to help sales, marketing, and outreach teams collect high-quality B2B leads from Google Maps and enrich them with contextual insights without manual data entry.

### Overview

This workflow scrapes business listings from Google Maps, extracts critical information like name, category, phone, address, and website using Bright Data, and passes the results to Google Gemini to generate enriched summaries and lead insights such as company description, potential services offered, and engagement score. The data is then structured and stored in spreadsheets for outreach.

### Tools Used

**n8n**: The core automation engine to manage flow and trigger actions.

**Bright Data**: Scrapes business information from Google Maps at scale with proxy rotation and CAPTCHA-solving.

**Google Gemini**: Enriches the raw scraped data with smart business summaries, categorization, and lead scoring.

**Google Sheets** : For storing and acting upon the enriched leads.

### How to Install

**Import the Workflow**: Download the .json file and import it into your n8n instance.

**Set Up Bright Data**: Insert your Bright Data credentials and configure the Google Maps scraping proxy endpoint.

**Configure Gemini API**: Add your Google Gemini API key (or use via Make.com plugin).

**Customize the Inputs**: Choose your target location, business category, and number of results per query.

**Choose Storage**: Connect to your preferred storage like Google Sheets.

**Test and Deploy**: Run a test scrape and enrichment before deploying for bulk runs.

### Use Cases

**Sales Teams**: Auto-generate warm B2B lead lists with company summaries and relevance scores.

**Marketing Agencies**: Identify local business prospects for SEO, web development, or ads services.

**Freelancers**: Find high-potential clients in specific niches or cities.

**Business Consultants**: Collect and categorize local businesses for competitive analysis or partnerships.

**Recruitment Firms**: Identify and score potential company clients for talent acquisition.

### Connect with Me

**Email**: ranjancse@gmail.com

**LinkedIn**: https://www.linkedin.com/in/ranjan-dailata/

**Get Bright Data**: [Bright Data](https://get.brightdata.com/5blibaeyszij ) (Supports free workflows with a small commission)

#n8n #automation #leadscraping #googlemaps #brightdata #leadgen #b2bleads #salesautomation #nocode #leadprospecting #marketingautomation #googlemapsdata #geminiapi #googlegemini #aiworkflow #scrapingworkflow #businessleads #datadrivenoutreach #crm #workflowautomation #salesintelligence #b2bmarketing



## 📊 Basic Information

- **Workflow ID:** 5443
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 5755
- **Downloads:** 575
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5443)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **stickyNote** (×9)
- **function** (×2)
- **readWriteFile** (×2)
- **googleSheets** 
- **code** 
- **splitInBatches** 
- **wait** 
- **n8n-nodes-mcp.mcpClient** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
