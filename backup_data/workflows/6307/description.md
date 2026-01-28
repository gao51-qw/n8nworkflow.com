## 🧠 What It Does
This n8n workflow collects **leads** from **Google Maps**, scrapes their websites via direct **HTTP requests**, and extracts **valid email addresses** — all while mimicking real user behavior to improve scraping reliability. It rotates User-Agent headers, introduces randomized delays, and refines URLs by removing only query parameters and fragments to preserve valid page paths (like social media links).
The workflow blends **Apify actors, raw HTTP requests, HTML-to-Markdown** conversion, and **smart email extraction** to deliver clean, actionable lead data — ready to be sent to **Airtable**, Google Sheets, or any CRM. 
Perfect for lean, scalable B2B lead generation using n8n’s native logic and no external scrapers.

## 💡Why this workflow
Modest lead scrapers rely on heavy tools or APIs like Firecrawl. This workflow:
- Uses lightweight HTTP requests (with randomized user-agents) to scrape websites.
- Adds natural wait times to avoid rate limits and IP bans.
- Avoid full-page crawlers, yet still pulls emails effectively.
- Works great for freelancers, marketers, or teams targeting niche B2B leads.
- Designed for stealth and resilience.

## 👤 Who it’s for
- Lead generation freelancers or consultants.
- B2B marketers looking to extract real contact info.
- Small businesses doing targeted outreach.
- Developers who want a fast, low-footprint scraper.
- Anyone who wants **email + website leads** from **Google Maps.**


## ⚙️ How It Works
#### 1. 📥 Form Submission (Lead Input)
A Form Trigger collects:
     - **Keyword**
     - **Location**     
     - **No. of Leads** (defaults to 10)

This makes the workflow dynamic and user-friendly — ready for multiple use cases and teams.

#### 2. 📊 Scrape Business Info (via Apify)
- Apify’s Google Maps Actor searches for matching businesses.
- The Dataset Node fetches all relevant business details.
- A Set Node parses key fields like name, phone, website, and category.
- A Limit Node ensures the workflow only processes the desired number of leads.

#### 3. 🔁 First Loop – Visit & Scrape Website
Each business website is processed in a loop.
- A Code Node cleans the website URL by removing only query parameters/fragments — keeping full paths like /contact.
- A HTTP Request Node fetches the raw HTML of the site:
     - Uses randomized User-Agent headers (5 variants) to mimic real devices and browsers. This makes requests appear more human and reduces the risk of detection or blocking.
- HTML is converted to Markdown using the Markdown Node, making it easier to scan for text patterns.
- A Wait Node introduces a random delay between 2-7 seconds:
     - Helps avoid triggering rate limits,
     - Reduces likelihood of being flagged as a bot.
- A Merge Node combines scraped markdown + lead info for use in the second loop.

#### 4. 🔁 Second Loop – Extract Emails
In this second loop, the markdown data is processed.
- A Code Node applies regex to extract the first valid email address.
- If no email is found, "N/A" is returned.
- A brief 1 second Wait Node simulates realistic browsing time.
- Another Merge Node attaches the email result to the original lead data.

#### 5. ✅ Filter, Clean & Store
- A Filter Node removes all entries with "N/A" or invalid email results.
- A Set Node ensures only required fields (like website, email, and company name) are passed forward.
- The clean leads are saved to **Airtable** (or optionally, Google Sheets) using an upsert-style insert to avoid duplicates.

## 🛡️ Anti-Flagging Design
This workflow is optimized for stealth:
- No scraping tools or headless browsers (like Puppeteer or Firecrawl).
- Direct HTTP requests with rotating User-Agents.
- Randomized wait intervals (2-7s).
- Only non-intrusive parsing — no automation footprints.

## 🛠 How to Set It Up
**Open n8n** (Cloud or Self-Hosted).
**Install Apify node**
  - search **Apify** and click on **Install**. Do this before importing your file.
  
**Import the provided .json file** into your n8n editor.
**Set up the required credentials:**
- **🔑 Apify API Key** (used for Google Maps scraping)
- **🔑 Airtable API Key** (or connect Google Sheets instead)

#### Recommended 
- Prepare your Airtable base or Google Sheet with fields like: Email, Website, Phone, Company Name.
- Review the Set node if you'd like to collect more fields from Apify (e.g., Ratings, Categories, etc.).

## 🔁 Customization Tips
- The Apify scraper returns rich business data. By default, this workflow collects name, phone, and website — but you can add more in the **"Grab Desired Fields"** node.
- Need safer scraping at scale? Swap the HTTP Request for Firecrawl’s Single URL scraper (or any headless service like Browserless, Oxylabs, Bright Date, or ScrapingBee) — they handle rendering and IP rotation.
- Want to extract from internal pages (like /contact or /about)? Use Firecrawl’s async crawl mode — just note it takes longer.
- For speed and efficiency, this built-in **HTTP + Markdown** setup is usually the fastest way to grab emails.
