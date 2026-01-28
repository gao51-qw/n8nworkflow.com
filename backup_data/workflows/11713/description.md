 

## How It Works
Schedules automated vendor pricing analysis across multiple sources. Fetches delivery reliability and contract data, analyzes vendor performance using Claude AI, then distributes consolidated reports via Gmail and creates Google Sheets summaries. Target audience: procurement teams and business analysts managing multi-vendor relationships. Solves vendor evaluation bottlenecks by automating data collection, AI-driven analysis, and report distribution.

## Workflow Steps
**What:** Trigger → Scrapes vendor data (pricing, reliability, contracts) → Sends to vendor analysis agent → Branches to multiple outputs (Gmail notification, Google Sheets archive, Data parser).  

## Setup Steps
1. Configure Schedule Trigger timing. 2. Add scraper credentials (Vendor Pricing, Delivery Reliability, Contract Data nodes). 3. Connect Claude/OpenAI API key in Vendor Analysis Agent. 4. Authenticate Gmail account for notifications. 5. Link Google Sheets API for data storage.

## Prerequisites
OpenAI/Claude API key, Gmail credentials, Google Sheets API access, Vendor data sources (web scrapers or direct APIs).

## Use Cases
Automate weekly vendor performance reviews, generate compliance reports for procurement teams 

## Customization
Modify trigger schedule, add/remove scraper nodes for new vendors, adjust Claude prompt for different analysis criteria 

## Benefits
Eliminates manual data gathering (hours to minutes), ensures consistent vendor evaluation criteria 


