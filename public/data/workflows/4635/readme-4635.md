# Extract & enrich LinkedIn comments to leads with Apify → Google Sheets/CSV

> # 🚀 LinkedIn Comments to Leads Extractor & Enricher (Apify) → Google Sheets / CSV

## Overview

**Automate LinkedIn lead generation by scraping comments from targeted posts and enriching profiles with detailed data**

This n8n workflow automatically extracts leads from LinkedIn post comments using Apify's powerful scrapers (no LinkedIn login required), enriches the data with additional profile information, and exports everything to Google Sheets or CSV format.

---

## ✨ Key Features

- 🔍 **No Login Required**: Scrape LinkedIn data without sharing credentials
- 💰 **Cost-Effective**: First 1,000 comments are free with Apify
- 📊 **Data Enrichment**: Enhance basic comment data with full profile details
- 📈 **Export Options**: Choose between Google Sheets or CSV output
- 🎯 **Targeted Scraping**: Focus on specific posts for quality leads

---

## 🛠️ Apify Scrapers Used

### 1. LinkedIn Post Comments Scraper
- **Tool**: [LinkedIn Post Comments, Replies, Engagements Scraper | No Cookies](https://apify.com/apimaestro/linkedin-post-comments-replies-engagements-scraper-no-cookies/api/python)
- **Pricing**: $5.00 per 1,000 results
- **Function**: Extracts all comments and engagement data from specified LinkedIn posts

### 2. LinkedIn Profile Batch Scraper
- **Tool**: [LinkedIn Profile Details Batch Scraper (No Cookies Required)](https://apify.com/apimaestro/linkedin-profile-batch-scraper-no-cookies-required)
- **Pricing**: $5.00 per 1,000 results
- **Function**: Enriches scraped profiles with detailed information

&gt; 💡 **Free Tier**: Apify provides 1,000 free scraped comments to get you started!

---

## 📋 Prerequisites

### Required API Credentials

1. **Apify Token**
   - Add your `APIFY_TOKEN` to the workflow credentials
   - [Get your token from Apify Console](https://apify.com/account#/integrations)

2. **Google Sheets Credentials** *(if using Sheets export)*
   - Configure OAuth credentials for Google Sheets integration
   - [Follow n8n's Google Sheets setup guide](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal)

---

## 🔄 Workflow Process

### Default Mode: Form-Based Execution

1. **Manual Trigger** → Launches the workflow
2. **Form Submission** → User-friendly form for inputting LinkedIn post URLs
3. **Comment Scraping** → Apify extracts all comments from specified posts
4. **Profile Enrichment** → Additional profile data gathered for each commenter
5. **Data Processing** → Creates unique, enriched lead list
6. **Google Sheets Export** → Automatically populates your spreadsheet

**Result**: You'll be redirected to a Google Sheets document containing all enriched leads

### Alternative Mode: CSV Export

For users preferring CSV output:

1. **Disable**: Form trigger nodes
2. **Enable**: Manual trigger node
3. **Disable**: Google Sheets export nodes
4. **Enable**: CSV download nodes
5. **Configure**: Add post IDs/URLs in "Set manual fields" node
6. **Execute**: Run workflow and download CSV from the CSV node

---

## 📊 Output Data Structure

Your exported data will include:

- **Basic Info**: Name, headline, location
- **Profile Details**: Company, position, industry
- **Engagement Data**: Comment content, engagement metrics
- **Contact Info**: Available profile links and connections
- **Enriched Data**: Additional profile insights from Apify

---

## 💡 Pro Tips

- **Quality over Quantity**: Target posts with high-quality, relevant engagement
- **Monitor Costs**: Track your Apify usage to stay within budget
- **Data Hygiene**: Regularly clean and deduplicate your lead lists
- **Compliance**: Ensure your scraping activities comply with LinkedIn's terms of service

---

## 🆘 Troubleshooting

**Common Issues:**
- **Authentication Errors**: Verify your Apify token is correctly configured
- **Empty Results**: Check that your LinkedIn post URLs are valid and public
- **Export Failures**: Ensure Google Sheets credentials are properly set up

**Need Help?** Contact [Saverflow.ai](https://saverflow.ai) for support and custom workflow development.

---

## 📊 Basic Information

- **Workflow ID:** 4635
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 15387
- **Downloads:** 1538
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4635)

## 👤 Author

- **Name:** Saverflow AI
- **Username:** @saverflowai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×11)
- **formTrigger** 
- **set** (×4)
- **if** 
- **code** (×5)
- **splitOut** (×2)
- **aggregate** (×5)
- **httpRequest** (×3)
- **splitInBatches** (×2)
- **convertToFile** 
- **googleSheets** (×2)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
