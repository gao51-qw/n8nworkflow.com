# Scrape business leads from Google Maps and extract decision-maker info with Olostep

> # Olostep Google Maps Lead Generation Automation  

This n8n template automates lead generation by scraping Google Maps using the Olostep API.  
It extracts **business names, locations, websites, phone numbers, and decision-maker names** (CEO, Founder, etc.) directly from the business website — and saves everything into a Google Sheet.

## Who’s it for  
- Marketers and agencies doing local business outreach.  
- SaaS founders looking for prospects.  
- Freelancers and growth hackers scraping Google Maps leads.  
- Anyone who wants automated business research without manual data entry.

## How it works / What it does  
1. **Form Trigger:**  
   - User submits a form with: **City** + **Business Type** (e.g., "Dentist in Miami").

2. **Google Maps Scraping:**  
   - The workflow sends the query to the Olostep scraping API.  
   - Extracts:  
     - Business name  
     - Location  
     - Website  
     - Phone number  

3. **Clean the Data:**  
   - Parsed JSON is split into items.  
   - A Remove Duplicates node ensures only unique leads continue.

4. **Loop Through Each Business:**  
   - For every business, the workflow triggers a second Olostep scrape — this time on the **business’s website**.  
   - It extracts:  
     - First name of decision-maker  
     - Last name of decision-maker  
     - (Optional) general contact email found on the website

5. **Store the Lead:**  
   - The final combined lead is appended to a Google Sheet with these fields:  
     - Business Name  
     - Location  
     - Website  
     - Phone Number  
     - Decision-Maker Name  
     - Contact Email (if found)  

6. **Loop & Wait:**  
   - A wait step ensures you stay within rate limits while scraping multiple websites.

This produces a clean, enriched list of leads ready for outreach or CRM import.

## How to set up  
1. Import the template into your n8n workspace.  
2. Add your **Olostep API key**.  
3. Connect **Google Sheets** for output storage.  
4. Publish your form to collect search requests.  
5. Run the workflow — leads will appear automatically in your sheet.

## Requirements  
- Olostep API key.  
- Google Sheets account.  
- n8n account or self-hosted instance.

## How to customize the workflow  
- Add CRM destinations (HubSpot, Airtable, Notion).  
- Expand LLM-extraction to capture: social links, descriptions, ratings, etc.  
- Add validation rules before saving a lead.  
- Enable notification steps (Telegram, Slack) when batches finish.  
- Add additional enrichment steps (e.g., scrape About pages, contact pages, multiple URLs).

---

👉 This workflow gives you a complete lead generation system from Google Maps + business website analysis — with no manual scraping needed.  


## 📊 Basic Information

- **Workflow ID:** 11086
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 437
- **Downloads:** 43
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11086)

## 👤 Author

- **Name:** Yasser Sami
- **Username:** @yassersami

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **set** (×2)
- **splitOut** 
- **removeDuplicates** 
- **splitInBatches** 
- **googleSheets** 
- **wait** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
