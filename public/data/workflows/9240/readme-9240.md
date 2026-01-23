# Daily LinkedIn job alerts with Apify scraper, Google Sheets & Gmail

> ## Overview
Every day, this workflow scrapes LinkedIn jobs based on your keywords, saves them in a Google Sheet, and sends them by email.

## How it works
- The workflow runs every day at noon.
- The Apify node sends a request to a LinkedIn scraper actor on Apify, which scrapes and returns the data.
- The code node formats the data we want and builds the HTML needed to make the emails look good. We use inline if statements for cases where the salary isn't listed or the job doesn’t say if it’s on-site, remote, or hybrid.
- At the same time, we add the LinkedIn jobs we scraped to a Google Sheet so we can check them later.
- We combine everything into one list.
- The Gmail node uses the `map()` function to list all the items we scraped and formatted. It customizes the subject line and heading of the email to include the current date.

## Setup steps
1. Create a new Google Sheet and add the headers you want. Adjust the Google Sheets node to use your newly created Sheet.
2. Customize the JSON in the `Get LinkedIn jobs` node. Note that this workflow currently uses the [`LinkedIn Jobs Scraper - No Cookies`](https://apify.com/apimaestro/linkedin-jobs-scraper-api) actor on Apify.  
   - Leave `date_posted` as is.  
   - Adjust `keywords` to change the job you want to scrape. You can use Boolean operators like AND or NOT in your search.  
   - Adjust `limit` to the number of jobs you want to scrape.  
   - Adjust `location` to match your location.  
   - Leave `sort` as is to get the most recent jobs first.  
3. *(Optional)* Edit the HTML in the code node to change how the listings will look in the email.  
4. Add your email to the Gmail node.

## Requirements
- [Apify account](https://apify.com/)  
- Apify community node installed. If you don’t want to install the community node, you can use a regular HTTP node and call the HTTP directly. Check [their API docs](https://docs.apify.com/api/v2) to see what endpoint to call.  
- Google Sheets API enabled in Google Cloud Console and credentials added to n8n
- Gmail API enabled in Google Cloud Console credentials added to n8n

## Possible customizations
- Add full job descriptions to the Google Sheet and email  
- Continue the flow to create a tailored CV for each job  
- Use AI to read the job descriptions and pull out the key skills the job posting is asking for  


## 📊 Basic Information

- **Workflow ID:** 9240
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1001
- **Downloads:** 100
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9240)

## 👤 Author

- **Name:** Robin Geuens
- **Username:** @robingeuens

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **gmail** 
- **@apify/n8n-nodes-apify.apify** 
- **code** 
- **aggregate** 
- **stickyNote** (×6)
- **scheduleTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
