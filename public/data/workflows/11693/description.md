## Who’s it for
This template is ideal for recruiters, founders, sales teams, and lead-generation specialists who want to quickly collect LinkedIn profiles based on role, industry, and region. It is perfect for users who want profile lists for outreach, research, hiring, or market analysis without manually searching LinkedIn.

## What it does / How it works
This workflow begins with a web form where you enter three inputs: position, industry, and region.  
Once the form is submitted, the workflow performs a Google Custom Search query restricted to LinkedIn profile URLs.  
The results are processed to extract structured profile information such as:

- Name  
- Job title (cleaned using custom logic)  
- LinkedIn profile link  
- Description / bio snippet  
- Profile image URL  

The workflow automatically handles pagination by detecting whether more results are available and continues fetching until the limit is reached.  
All extracted profiles are appended or updated in a Google Sheet so you always maintain an organized and deduplicated list.

## Requirements
- Google Sheets OAuth2 credentials  
- Google Custom Search API key  
- Google CSE (Custom Search Engine) ID  
- A Google Sheet with the required columns (name, title, profile link, description, image link, searched position, searched industry, searched region)

## How to set up
1. Connect your Google Sheets credentials.  
2. Add your Custom Search API key and CSE ID inside the HTTP Request node.  
3. Select your target Google Sheet in the “Append or update row in sheet” node.  
4. Open the form URL and submit your position, industry, and region.  
5. Run the workflow to begin scraping profiles.

## How to customize the workflow
- Modify search query structure for niche industries  
- Add enrichment tools (Hunter.io, Clearbit, People Data)  
- Expand pagination limit beyond the default  
- Add filters to remove non-relevant results  
- Output data to CRM tools like HubSpot, Notion, Airtable, or Sheets  