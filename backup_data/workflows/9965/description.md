Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

Automatically scrape, structure, and log forum or news content using Decodo and Google Gemini AI. This workflow extracts key details like titles, URLs, authors, and engagement stats, then appends them to a Google Sheet for tracking and analysis.

## Who’s it for?
Ideal for data journalists, market researchers, or AI enthusiasts who want to monitor trending topics across specific domains.

## How it works
1. **Trigger:** Workflow runs on schedule.  
2. **Data Setup:** Defines forum URLs and geolocation.  
3. **Scraping:** Extracts raw text data using the Decodo API.  
4. **AI Extraction:** Gemini parses and structures the scraped text into clean JSON.  
5. **Data Storage:** Each news item is appended or updated in Google Sheets.  
6. **Logging:** Records scraping results for monitoring and debugging.

## How to set up
- Add your **Decodo**, **Google Gemini**, and **Google Sheets** credentials in n8n.  
- Adjust the **forum URLs**, **geolocation**, and **Google Sheet ID** in the `Workflow Config` node.  
- Set your preferred trigger interval in `Schedule Trigger`.  
- Activate and monitor from the n8n dashboard.