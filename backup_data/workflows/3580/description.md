LinkedIn Hiring Signal Scraper — Jobs & Prospecting Using Bright Data

## Purpose:
Discover recent job posts from LinkedIn using Bright Data's Dataset API, clean the results, and log them into Google Sheets — for both job hunting **and** identifying high-intent B2B leads based on hiring activity.

## Use Cases:
- **Job Seekers** – Spot relevant openings filtered by role, city, and country.  
- **Sales & Prospecting** – Use job posts as buying signals.  
  If a company is hiring for a role you support (e.g. marketers, developers, ops) —  
  it's the perfect time to reach out and offer your services.

## Tools Needed:
- **n8n Nodes:**
  - Form Trigger  
  - HTTP Request  
  - Wait  
  - If  
  - Code  
  - Google Sheets  
  - Sticky Notes (for embedded guidance)
- **External Services:**
  - [Bright Data](https://brightdata.com) (Dataset API)  
  - [Google Sheets](https://docs.google.com/spreadsheets/d/1_jbr5zBllTy_pGbogfGSvyv1_0a77I8tU-Ai7BjTAw4/edit?usp=sharing)

## API Keys & Authentication Required:
- **Bright Data API Key**  
  → Add in the HTTP Request headers:  
  `Authorization: Bearer YOUR_BRIGHTDATA_API_KEY`

- **Google Sheets OAuth2**  
  → Connect your account in n8n to allow read/write access to the spreadsheet.

## General Guidelines:
- Use descriptive names for all nodes.  
- Include retry logic in polling to avoid infinite loops.  
- Flatten nested fields (like `job_poster` and `base_salary`).  
- Strip out HTML tags from job descriptions for clean output.

## Things to be Aware Of:
- Bright Data snapshots take ~1–3 minutes — use a Wait node and polling.  
- Form filters affect output significantly:  
  🔍 We recommend filtering by **"Last 7 days"** or **"Past 24 hours"** for fresher data.  
- Avoid hardcoding values in the form — leave optional filters empty if unsure.

## Post-Processing & Outreach:
- After data lands in Google Sheets, you can use it to:  
  - Personalize cold emails based on job titles, locations, and hiring signals.  
  - Send thoughtful LinkedIn messages (e.g., "Saw you're hiring a CMO...")  
  - Prioritize outreach to companies actively growing in your niche.

## Additional Notes:
- 📄 Copy the Google Sheet Template:  
  [Click here to make your copy](https://docs.google.com/spreadsheets/d/1_jbr5zBllTy_pGbogfGSvyv1_0a77I8tU-Ai7BjTAw4/edit?usp=sharing)  
  → Rename for each campaign or client.

- Form fields include:  
  - Job Location (city or region)  
  - Keyword (e.g., CMO, Backend Developer)  
  - Country (2-letter code, e.g., US, UK)

---

This workflow gives you a competitive edge —  
📌 For candidates: Be first to apply.  
📌 For sellers: Be first to pitch.  
All based on live hiring signals from LinkedIn.

---

## STEP-BY-STEP WALKTHROUGH

### Step 1: Set up your Google Sheet
1. Open this [template](https://docs.google.com/spreadsheets/d/1_jbr5zBllTy_pGbogfGSvyv1_0a77I8tU-Ai7BjTAw4/edit?usp=sharing)
2. Go to `File → Make a copy`
3. You'll use this copy as the destination for the scraped job posts

### Step 2: Fill out the Input Form in n8n
The form allows you to define what kind of job posts you want to scrape.

**Fields:**
- **Job Location** → e.g. `New York`, `Berlin`, `Remote`  
- **Keyword** → e.g. `CMO`, `AI Architect`, `Ecommerce Manager`  
- **Country Code (2-letter)** → e.g. `US`, `UK`, `IL`

**💡 Pro Tip:**  
For best results, set the filter inside the workflow to:  
`time_range = "Past 24 hours"` or `"Last 7 days"`  
This keeps results relevant and fresh.

### Step 3: Trigger Bright Data Snapshot
The workflow sends a request to Bright Data with your input.

Example API Call Body:
```json
[
  {
    "location": "New York",
    "keyword": "Marketing Manager",
    "country": "US",
    "time_range": "Past 24 hours",
    "job_type": "Part-time",
    "experience_level": "",
    "remote": "",
    "company": ""
  }
]
```

Bright Data will start preparing the dataset in the background.

### Step 4: Wait for the Snapshot to Complete
The workflow includes a Wait Node and Polling Loop that checks every few minutes until the data is ready.

You don't need to do anything here — it's all automated.

### Step 5: Clean Up the Results
Once Bright Data responds with the full job post list:

✔️ Nested fields like job_poster and base_salary are flattened  
✔️ HTML in job descriptions is removed  
✔️ Final data is formatted for export

### Step 6: Export to Google Sheets
The final cleaned list is added to your Google Sheet (first tab).

Each row = one job post, with columns like:

job_title, company_name, location, salary_min, apply_link, job_description_plain

### Step 7: Use the Data for Outreach or Research
#### Example for Job Seekers:
You search for:

- Location: Berlin
- Keyword: Product Designer
- Country: DE
- Time range: Past 7 days

Now you've got a live list of roles — with salary, recruiter info, and apply links.
→ Use it to apply faster than others.

#### Example for Prospecting (Sales / SDR):
You search for:

- Location: London
- Keyword: Growth Marketing
- Country: UK

And find companies hiring growth marketers.
→ That's your signal to offer help with media buying, SEO, CRO, or your relevant service.

Use the data to:
- Write personalized cold emails ("Saw you're hiring a Growth Marketer…")
- Start warm LinkedIn outreach
- Build lead lists of companies actively expanding in your niche

## API Credentials Required:
- **Bright Data API Key**  
  Used in HTTP headers: `Authorization: Bearer YOUR_BRIGHTDATA_API_KEY`

- **Google Sheets OAuth2**  
  Allows n8n to read/write to your spreadsheet

## Adjustments & Customization Tips:
- Modify the HTTP Request body to add more filters (e.g. job_type, remote, company)
- Increase or reduce polling wait time depending on Bright Data speed
- Add scoring logic to prioritize listings based on title or location

## Final Notes:
- 📄 Google Sheet Template:  
  [Make your copy here](https://docs.google.com/spreadsheets/d/1_jbr5zBllTy_pGbogfGSvyv1_0a77I8tU-Ai7BjTAw4/edit?usp=sharing)

- ⚙️ Bright Data Dataset API:  
  Visit [BrightData.com](https://get.brightdata.com/1tndi4600b25)

- 📬 Personalization works best when you act quickly.  
  Use the freshest data to reach out with context — not generic pitches.

---

This workflow turns LinkedIn job posts into sales insights and job leads.
All in one click. Fully automated. Ready for your next move.