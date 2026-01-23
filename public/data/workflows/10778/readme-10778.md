# Build Gmail contact database with GPT-5 Nano, Brave Search & Google Sheets

> ## Overview

Transform your Gmail sent folder into a comprehensive, enriched contact database automatically. This workflow processes hundreds or thousands of sent emails, extracting and enriching contact information using AI and web search – saving days of manual work.

## What This Workflow Does

1. **Loads sent Gmail messages** and extracts basic contact information
2. **Deduplicates contacts** against your existing Google Sheets database
3. **Searches for email conversation history** with each contact
4. **AI-powered extraction** from email threads (phone, socials, websites)
5. **Fallback web search** via Brave API when no email history exists
6. **Saves enriched data** to Google Sheets with all discovered contact details

## Perfect For

- **Musicians & bands** organizing booker/venue contacts  
- **Freelancers & agencies** building client databases
- **Sales teams** enriching prospect lists from outbound campaigns
- **Consultants** creating structured contact databases from years of emails

## Key Features

### Intelligent Two-Path Enrichment
- **Path A (Email History)**: Analyzes existing email threads to extract contact details from signatures and message content
- **Path B (Web Search)**: Falls back to Brave API search + HTML scraping when no email history exists

### AI-Powered Data Extraction
Uses GPT-5 Nano to intelligently parse:
-  Phone numbers  
-  Website URLs
-  LinkedIn profiles
-  Instagram, Twitter, Facebook, Youtube, TikTok, LinkTree, BandCamp...
-  Alternative email addresses

### Built-in Deduplication
Prevents duplicate entries by checking existing Google Sheets records before processing.

### Free-Tier Friendly
Runs entirely on free tiers:
- Gmail API (free)
- OpenAI GPT-5 Nano (cost-effective)
- Brave Search API (2,000 free searches/month)
- Google Sheets (free)

## Setup Requirements

### Required Accounts & Credentials
1. **Gmail Account** - OAuth2 credentials for Gmail API access
2. **OpenAI API Key** - For GPT-5 Nano model
3. **Brave Search API Key** - Free tier (2,000 searches/month)
4. **Google Sheets** - OAuth2 credentials

### Google Sheets Structure
Create a Google Sheet with these columns (see template link):


**Template Sheet**: [Make a copy here](https://docs.google.com/spreadsheets/d/1ox0cP_v8UuonAFr3eXkOFRlBb_P86NRedEaK4fss5cA/edit?usp=sharing)

## How to Use

1. **Clone this workflow** to your n8n instance
2. **Configure credentials** for Gmail, OpenAI, Brave Search, and Google Sheets
3. **Create/connect your Google Sheet** using the template structure
4. **Run manually** to process all sent emails and build your initial database
5. **Review results** in Google Sheets - enriched with discovered contact info

### First Run Tips
- Start with a smaller Gmail query (e.g., last 6 months) to test
- Check Brave API quota before processing large volumes
- Manual trigger means you control when processing happens
- Processing time varies based on email volume (typically 2-5 seconds per contact)

## Customization Ideas

### Extend the Enrichment
- Include company information parsing
- Extract job titles from email signatures

### Automate Regular Updates
- Convert manual trigger to scheduled trigger
- Process only recent sent emails for incremental updates
- Add email notification when new contacts are added

### Integration Options
- Push enriched contacts to CRM (HubSpot, Salesforce)
- Send Slack notifications for high-value contacts
- Export to Airtable for relational database features

### Improve Accuracy
- Add human-in-the-loop review for uncertain extractions
- Implement confidence scoring for AI-extracted data
- Add validation checks for phone numbers and URLs

## Use Case Example

**Music Promoter Building Venue Database:**
- Processed 1,835 sent emails to bookers and venues
- AI extracted contact details from 60% via email signatures
- Brave search found websites for remaining 40%
- Final database: 1,835 enriched contacts ready for outreach
- Time saved: ~40 hours of manual data entry

## Technical Notes

- **Rate Limiting**: Brave API free tier = 2,000 searches/month
- **Duplicates**: Handled at workflow start, not during processing
- **Empty Results**: Stores email + name even when enrichment fails
- **Model**: Uses GPT-5 Nano for cost-effective parsing
- **Gmail Scope**: Reads sent emails only (not inbox)

## Cost Estimate

For processing 1,000 contacts:
- **Gmail API**: Free
- **GPT-5 Nano**: ~$0.50-2 (depending on email length)
- **Brave Search**: Free (within 2K/month limit)
- **Google Sheets**: Free
- **Total**: Under $2 for 1,000 enriched contacts

## Template Author:
Questions or need help with setup?
📧 Email:[xciklv@gmail.com](mailto:xciklv@gmail.com)
💼 LinkedIn:[https://www.linkedin.com/in/vaclavcikl/](https://www.linkedin.com/in/vaclavcikl/)


## 📊 Basic Information

- **Workflow ID:** 10778
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10778)

## 👤 Author

- **Name:** Václav Čikl
- **Username:** @venca

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** (×2)
- **removeDuplicates** 
- **noOp** (×2)
- **wait** 
- **httpRequest** 
- **code** (×5)
- **@brave/n8n-nodes-brave-search.braveSearch** 
- **if** (×3)
- **gmail** (×2)
- **set** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **aggregate** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
