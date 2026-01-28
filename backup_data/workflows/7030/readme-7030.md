# Automate company data enrichment with ZoomInfo, Serper & Oxylabs to Google Sheets

> This workflow automatically enriches company domain lists with comprehensive business information scraped from ZoomInfo, organizing the data in Google Sheets for sales teams and researchers.

## Who's it for
- **Sales teams** building prospect databases with accurate company information
- **Marketing professionals** researching target companies for outreach campaigns  
- **Business development teams** qualifying leads with revenue and employee data
- **Researchers** collecting structured company data for market analysis
- **Lead generation specialists** enriching domain lists with contact details

## How it works
The workflow processes unprocessed domains from a Google Sheet, searches for their ZoomInfo profiles using Serper API, scrapes the company pages through Oxylabs proxy service, and extracts structured business data. Each domain is marked as processed to prevent duplicates, and the workflow includes proper rate limiting to respect API limits.

## What it does
1. **Loads unprocessed domains** from your Google Sheets database
2. **Searches ZoomInfo** using targeted queries via Serper API for each domain
3. **Validates search results** and extracts relevant ZoomInfo profile URLs
4. **Scrapes company pages** using Oxylabs to bypass anti-scraping protection
5. **Extracts structured data** including company details, address, revenue, and employee count
6. **Updates Google Sheets** with enriched company information
7. **Tracks processing status** to prevent reprocessing the same domains

## Requirements
- **Serper API account** with search credits ([Get API key](https://serper.dev/))
- **Oxylabs subscription** for web scraping proxy service ([Sign up here](https://oxylabs.io/))
- **Google Sheets API access** with OAuth2 authentication
- **Google Sheets template** - [Make a copy of this template sheet](https://docs.google.com/spreadsheets/d/1bdK8xskt-qfLlDwdzolM0zFyo9KxZ-HHpTVxcEw3ZMY/edit?usp=sharing) with pre-configured columns

## How to set up
1. **Make a copy of the Google Sheets template** - [Click here to copy the template](https://docs.google.com/spreadsheets/d/1bdK8xskt-qfLlDwdzolM0zFyo9KxZ-HHpTVxcEw3ZMY/edit?usp=sharing) to your Google Drive
2. **Configure API credentials** in the respective HTTP Request nodes:
   - Add Serper API key in the search node
   - Set up Oxylabs username/password in the scraping node
3. **Set up Google Sheets authentication** using OAuth2
4. **Update the Google Sheets document ID** in all Google Sheets nodes to point to your copied template
5. **Add your domain list** to the sheet with 'processed' column empty or false
6. **Run the workflow** using the manual trigger

## How to customize the workflow
- **Search query modification**: Update the search query in the Serper node for different geographic focus (currently set for Czech Republic)
- **Data extraction fields**: Modify the Google Sheets column mapping to include/exclude specific company data points
- **Rate limiting**: Adjust wait times between requests to match your API rate limits
- **Batch processing**: Configure the split batch size for processing domains in smaller groups
- **Error handling**: Customize the continue-on-error settings based on your data quality requirements
- **Scheduling**: Replace Manual Trigger with Schedule Trigger for automated daily/weekly runs

## Output data includes
- Complete company name and official address
- Phone numbers and contact information  
- Revenue figures and employee headcount
- Industry classifications and business categories
- LinkedIn company profile URLs
- Geographic location details (city, state, country, postal code)
- Processing status tracking for workflow management

**Note**: This workflow includes comprehensive error handling to ensure domains are always marked as processed, preventing infinite loops while maintaining data integrity. Rate limiting is built-in to respect API quotas and avoid service interruptions.

## 📊 Basic Information

- **Workflow ID:** 7030
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 525
- **Downloads:** 52
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7030)

## 👤 Author

- **Name:** Naveen Choudhary
- **Username:** @n8nstein

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **splitInBatches** 
- **httpRequest** (×2)
- **if** (×2)
- **code** (×2)
- **html** 
- **wait** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
