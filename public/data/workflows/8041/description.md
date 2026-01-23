# 💼 Auto-Sync LinkedIn Connections to Google Sheets (Apify + n8n)

This workflow automatically **scrapes your LinkedIn connections using Apify**, processes the data, and logs it into a structured **Google Sheet** every week. It also generates a summary of top companies, locations, and industries across your network.

---

## ⚙️ How It Works

1. **Weekly Sync (Sunday 2 AM)**  
   - A **Cron node** triggers the workflow weekly (default: Sunday at 2 AM).  
   - Frequency can be adjusted.  

2. **Start LinkedIn Scrape**  
   - Calls the **Apify LinkedIn Scraper Actor** with your credentials.  
   - Initiates a scraping run for all your LinkedIn connections.  

3. **Extract Run ID & Wait**  
   - Extracts the scrape run ID from Apify’s response.  
   - Waits 30 seconds before checking status (retries every 60s until completed).  

4. **Check Scrape Status**  
   - Confirms if the scrape has finished successfully.  
   - If not completed, waits and retries until done.  

5. **Get Scraped Data**  
   - Fetches scraped connection data from the Apify dataset.  
   - Includes fields like name, title, company, location, industry, mutual connections, and profile URL.  

6. **Process Connections Data**  
   - A **Code node** cleans and normalizes the scraped data.  
   - Removes incomplete profiles, trims whitespace, merges duplicate fields.  

7. **Save to Google Sheets**  
   - Clears existing data and appends the latest connections to your Google Sheet.  
   - Headers include:  
     ```
     Name | Title | Company | Location | Profile URL 
     Connection Date | Industry | Mutual Connections
     ```  

8. **Generate Sync Summary**  
   - Analyzes all saved connections.  
   - Produces quick stats:  
     - Total connections synced  
     - Top 5 companies  
     - Top 5 locations  
     - Industry breakdown  

---

## 🛠️ Setup Steps

### 1. Apify Setup
- Sign up at [apify.com](https://apify.com).  
- Get your **API token** from account settings.  
- Use the **LinkedIn Scraper Actor**.  
- Add your **LinkedIn session cookies** for stable results.  

⚠️ Respect LinkedIn’s Terms of Service.  

### 2. Google Sheets
- Create a Google Sheet with headers:  
Name | Title | Company | Location | Profile URL | Connection Date | Industry | Mutual Connections
- Copy the **Sheet ID** from the URL.  
- Replace `YOUR_GOOGLE_SHEET_ID` in the workflow.  

### 3. Credentials
- Add **Apify API Token** as an HTTP header credential in n8n.  
- Connect your Google Sheets OAuth account.  

### 4. Scheduling
- Default: runs every **Sunday at 2 AM**.  
- Modify the Cron node to adjust frequency.  

---

## 📊 Example Output (Google Sheets Row)

| Name        | Title                  | Company       | Location      | Profile URL              | Connection Date | Industry   | Mutual Connections |
|-------------|------------------------|---------------|--------------|--------------------------|----------------|------------|--------------------|
| Jane Smith  | Marketing Director     | Acme Corp     | New York, US | linkedin.com/in/janesmith | 2025-08-25     | Marketing  | 12                 |

---

## 📈 Example Sync Summary

✅ LinkedIn sync completed: 248 connections saved
🏢 Top companies: Acme Corp, Deloitte, Google, Meta, Amazon
🌍 Top locations: New York, San Francisco, London, Berlin, Toronto
📌 Industries: Marketing (32), Tech (45), Finance (28), Consulting (20)

---

⚡ With this workflow, your LinkedIn connections stay automatically logged and analyzed — ready for outreach, reporting, or CRM import.
