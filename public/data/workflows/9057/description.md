# Apollo Lead Scraper to Airtable CRM

Automate your lead generation by scraping targeted prospects from Apollo.io, enriching with contact details, and seamlessly syncing to Airtable for organized outreach—all without manual data entry.

## What It Does

This workflow pulls search URLs from Airtable, uses Apify to scrape Apollo leads (up to 50k), enriches with emails and LinkedIn profiles, removes duplicates, filters valid entries, and categorizes contacts into Airtable tables based on email availability for efficient CRM management.

## Key Features

- **Apify Apollo Scraper** - Extracts up to 50k leads with personal/work emails
- **Smart Deduplication** - Removes duplicates based on key fields like email and name
- **Email Categorization** - Separates contacts with/without emails into dedicated tables
- **Field Mapping** - Customizable data transformation for Airtable compatibility
- **Configurable Limits** - Adjust total records and memory for optimal performance
- **Error Handling** - Built-in troubleshooting for common issues like invalid URLs

## Perfect For

- **Sales Teams**: Build targeted B2B pipelines for email campaigns
- **Recruiters**: Source candidates by job title, location, and skills
- **Marketers**: Create datasets for market research and analysis
- **Agencies**: Automate client prospecting from custom filters
- **Researchers**: Collect professional data for industry studies
- **CRM Managers**: Maintain clean, enriched contact databases

## Technical Highlights

Leveraging n8n's Airtable and Apify integrations, this workflow showcases:
- Dynamic data fetching from Airtable tables
- Actor-based web scraping with custom parameters
- Conditional branching for data routing
- Efficient data processing with set, filter, and if nodes
- Scalable design for large datasets with memory optimization

Ideal for automating lead workflows and scaling prospecting efforts. No advanced coding needed—just set up credentials and run!
