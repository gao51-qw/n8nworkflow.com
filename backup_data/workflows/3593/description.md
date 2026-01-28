### Who is this for?

This workflow is built for marketers, sales teams, agencies, virtual assistants, and anyone who regularly researches or contacts local businesses. It's ideal for building lead lists, tracking competitors, or creating location-specific outreach campaigns.

---

### What problem is this workflow solving?

Instead of manually searching Google Maps and copying business info into spreadsheets, this automation pulls structured business data (e.g. restaurants, gyms, service providers) and logs it directly into Google Sheets. It saves hours of work and ensures cleaner, more usable data.

---

### What this workflow does

The workflow takes a Google Maps search query (like "best restaurants in New York") and sends it to Dumpling AI. It returns a list of places including their name, address, website, phone number, rating, and more. Each result is split into a row and automatically added to a Google Sheet.

---

### Setup

1. **Dumpling AI**  
   - Sign up at [Dumpling AI](https://www.dumplingai.com/)  
   - Generate your API key  
   - In the HTTP Request node, select `Header Auth` and paste your key in the Authorization field

2. **Google Sheets**  
   - Create a sheet with tab name `Leads`  
   - Add the following column headers to row 1:  
     `Name`, `Address`, `Phone number`, `Website`, `Rating`, `Price Level`, `Type`, `Booking Link`, `Position`  
   - Connect your Google Sheets account and link this sheet in the node

3. **Customize the Query**  
   - In the HTTP node, replace the query string (e.g., `"best+restaurants+in+New+York"`) with your own search term

4. **Run It**  
   - Use the manual trigger to test  
   - Optionally swap in a Schedule or Webhook node to run it automatically

---

### How to customize this workflow to your needs

- Change the search query to target different cities or business types  
- Use filters to only save leads with a minimum rating or price level  
- Add GPT to summarize listings or qualify leads  
- Swap Google Sheets for Airtable or a CRM system for deeper integration
