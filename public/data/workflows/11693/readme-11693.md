# Scrape LinkedIn profiles into Google Sheets using Google Custom Search

> ## Who’s it for
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

## 📊 Basic Information

- **Workflow ID:** 11693
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 256
- **Downloads:** 25
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11693)

## 👤 Author

- **Name:** Pixcels Themes
- **Username:** @pixcelsthemes

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **httpRequest** 
- **formTrigger** 
- **code** (×2)
- **wait** 
- **set** (×2)
- **if** 
- **googleSheets** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
