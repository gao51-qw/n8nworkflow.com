# Extract Amazon product data to Sheets with Olostep API

> # Olostep Amazon Products Scraper  

This n8n template automates Amazon product scraping using the Olostep API.  
Simply enter a **search query**, and the workflow scrapes multiple Amazon search pages to extract product titles and URLs.  
Results are cleaned, normalized, and saved into a Google Sheet or Data Table.

## Who’s it for  
- E-commerce analysts researching competitors and pricing  
- Product sourcing teams  
- Dropshippers and Amazon sellers  
- Automation builders who want quick product lists without manual scraping  
- Growth hackers collecting product data at scale  

## How it works / What it does  
1. **Form Trigger**  
   - User enters a search query (e.g., “wireless bluetooth headphones”).  
   - The query is used to build the Amazon search URL.

2. **Pagination Setup**  
   - A list of page numbers (1–10) is generated automatically.  
   - Each number loads the corresponding Amazon search results page.

3. **Scrape Amazon with Olostep**  
   - For each page, Olostep scrapes Amazon search results.  
   - Olostep’s LLM extraction returns:  
     - **title** — product title  
     - **url** — product link  

4. **Parse & Split Results**  
   - The JSON output is decoded and turned into individual product items.

5. **URL Normalization**  
   - If the product URL is relative, it is automatically converted into a full Amazon URL.

6. **Conditional Check (IF node)**  
   - Ensures only valid product URLs are stored.  
   - Helps avoid scraping Amazon navigation links or invalid items.

7. **Insert into Sheet / Data Table**  
   - Each valid product is saved in:  
     - title  
     - url  

8. **Automatic Looping & Rate Management**  
   - A wait step ensures API rate limits are respected while scraping multiple pages.

This workflow gives you a complete, reliable Amazon scraper with no browser automation and no manual copy/paste — everything runs through the Olostep API and n8n.

## How to set up  
1. Import this template into your n8n account.  
2. Add your **Olostep API key**.  
3. Connect your **Google Sheets** or **Data Table**.  
4. Deploy the form and start scraping with any Amazon search phrase.

## Requirements  
- Olostep API key  
- Google Sheets or Data Table  
- n8n cloud or self-hosted instance  

## How to customize the workflow  
- Add more product fields (price, rating, number of reviews, seller name, etc.).  
- Extend pagination range (1–20 or more pages).  
- Add filtering logic (e.g., ignore sponsored results).  
- Send scraped results to Notion, Airtable, or a CRM.  
- Trigger via Telegram bot instead of a form.  

---

👉 This workflow is perfect for e-commerce research, competitive analysis, or building Amazon product datasets with minimal effort.  

## 📊 Basic Information

- **Workflow ID:** 11158
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 786
- **Downloads:** 78
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11158)

## 👤 Author

- **Name:** Yasser Sami
- **Username:** @yassersami

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **set** (×3)
- **splitOut** (×2)
- **splitInBatches** 
- **if** 
- **wait** 
- **dataTable** 
- **formTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
