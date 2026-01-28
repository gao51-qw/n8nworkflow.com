# Business lead generation with Apify web scraping and Google Sheets storage

> ## This flexible template scrapes business listings for any industry and location, perfect for sales teams, marketers, and researchers.


### Good to know
- Works with any business category (restaurants, contractors, retailers, etc.)
- Fully customizable search parameters
- Results automatically organized in Google Sheets
- Built-in delay ensures scraping completes before data collection

## How it works

1. Trigger: Manual or scheduled start
2.  Apify Configuration: Sets scraping parameters (industry, location, data fields)
3. Scraping Execution: Runs the web scraping job
4. Data Processing: Cleans and structures the raw data
5. Storage: Saves results to your Google Sheets

### What is Apify?
Apify is a webscraping tool, in this workflow the data is scraped from a google maps scraper:

**https://apify.com/compass/crawler-google-places**


## How to use

### Apify Small # Lead Generation (Purple)

**https://apify.com/compass/crawler-google-places**

#### 
1. Add location and industry to scrape (Apify)
2. Add the number of leads to output (Apify)
3. Copy over the JSON file into N8N
4. Copy & paste API endpoint "Get Run URL" in N8N

### Apify Large # Lead Generation (Grey)

#### Configure the Manual Trigger

When clicking 'Execute workflow' node is ready to use as-is
This triggers the entire lead generation process

#### Setup "Start Results (Apify)" Node
Get Your Apify API Information

#### Go to Apify.com and create a free account
Navigate to Settings → Integrations → API tokens
Copy your API token
Find the Google Maps scraper actor ID:

#### Configure the HTTP Request (start results)

Method: POST
URL: Replace "enter apify (get run)" with:
https://api.apify.com/v2/acts/nwua9Gu5YrADL7ZDj/runs?token=YOUR_API_TOKEN


C. Customize the JSON Body Parameters
In the JSON body, modify these key fields:
Location & Search:

"locationQuery": Change "Toronto" to your target city
"searchStringsArray": Change ["barber"] to your business type

Examples: ["restaurants"], ["dentists"], ["contractors"]

#### Configure the HTTP Request (start results)
Method : Get
Url: enter the get dataset URL from Apify


#### Split Out Node
Select fields to append in the google sheet


#### Test the Configuration

Click Execute workflow to test
Check that the Apify job starts successfully
Note the job ID returned for the next section

This section initiates the scraping process and should complete in 30-60 seconds depending on your lead count.

#### Setup Google Sheets

Create a new Google Sheet with these columns:

title (business name)
address (full address)
state (state/province)
neighborhood (area/district)
phone (contact number)
emails (email addresses)


Copy your Google Sheets document ID for workflow configuration

## Requirements
- Apify account
- Google Sheets document
- Google OAuth credentials

## Customization Options
### For different use cases:

- Lead Gen: Get business leads
- Local SEO: Collect competitor data
- Market Research: Analyze industry trends

### Advanced mofications:
- Add email enrichment
- Integrate with CRM systems
- Set up automatic daily runs

## 📊 Basic Information

- **Workflow ID:** 5555
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 6530
- **Downloads:** 653
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5555)

## 👤 Author

- **Name:** Jordan Lee
- **Username:** @jordanlee

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** 
- **splitOut** 
- **googleSheets** 
- **stickyNote** (×5)
- **httpRequest** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
