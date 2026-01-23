# SERP competitor research with Scrape.do API & Google Sheets

> # 🔍 Extract Competitor SERP Rankings from Google Search to Sheets with [Scrape.do](https://scrape.do/)  
This template requires a self-hosted n8n instance to run.

A complete n8n automation that extracts competitor data from Google search results for specific keywords and target countries using **[Scrape.do](https://scrape.do?fpr=99aed) SERP API**, and saves structured results into Google Sheets for SEO, competitive analysis, and market research.

---

## 📋 Overview
This workflow provides a lightweight competitor analysis solution that identifies ranking websites for chosen keywords across different countries. Ideal for SEO specialists, content strategists, and digital marketers who need structured SERP insights without manual effort.

**Who is this for?**
- SEO professionals tracking keyword competitors  
- Digital marketers conducting market analysis  
- Content strategists planning based on SERP insights  
- Business analysts researching competitor positioning  
- Agencies automating SEO reporting  

**What problem does this workflow solve?**
- Eliminates manual SERP scraping  
- Processes multiple keywords across countries  
- Extracts structured data (position, title, URL, description)  
- Automates saving results into Google Sheets  
- Ensures repeatable & consistent methodology  

---

## ⚙️ What this workflow does
1. **Manual Trigger** → Starts the workflow manually  
2. **Get Keywords from Sheet** → Reads keywords + target countries from a Google Sheet  
3. **URL Encode Keywords** → Converts keywords into URL-safe format  
4. **Process Keywords in Batches** → Handles multiple keywords sequentially to avoid rate limits  
5. **Fetch Google Search Results** → Calls **[Scrape.do](https://scrape.do?fpr=99aed) SERP API** to retrieve raw HTML of Google SERPs  
6. **Extract Competitor Data from HTML** → Parses HTML into structured competitor data (top 10 results)  
7. **Append Results to Sheet** → Writes structured SERP results into a Google Sheet  

---

## 📊 Output Data Points
| Field              | Description                              | Example                                   |
|--------------------|------------------------------------------|-------------------------------------------|
| Keyword            | Original search term                     | digital marketing services                |
| Target Country     | 2-letter ISO code of target region       | US                                        |
| position           | Ranking position in search results       | 1                                         |
| websiteTitle       | Page title from SERP result              | Digital Marketing Software & Tools        |
| websiteUrl         | Extracted website URL                    | https://www.hubspot.com/marketing         |
| websiteDescription | Snippet/description from search results  | Grow your business with HubSpot’s tools…  |

---

## ⚙️ Setup

### Prerequisites
- n8n instance (self-hosted)  
- Google account with Sheets access  
- **[Scrape.do](https://scrape.do?fpr=99aed)** account with **SERP API token**  

### Google Sheet Structure
This workflow uses one Google Sheet with two tabs:  

**Input Tab: "Keywords"**  
| Column   | Type | Description | Example |  
|----------|------|-------------|---------|  
| Keyword  | Text | Search query | digital marketing |  
| Target Country | Text | 2-letter ISO code | US |  

**Output Tab: "Results"**  
| Column             | Type  | Description | Example |  
|--------------------|-------|-------------|---------|  
| Keyword            | Text  | Original search term | digital marketing |  
| position           | Number| SERP ranking | 1 |  
| websiteTitle       | Text  | Title of the page | Digital Marketing Software & Tools |  
| websiteUrl         | URL   | Website/page URL | https://www.hubspot.com/marketing |  
| websiteDescription | Text  | Snippet text | Grow your business with HubSpot’s tools |  

---

## 🛠 Step-by-Step Setup
1. **Import Workflow**: Copy the JSON → n8n → Workflows → + Add → Import from JSON  
2. **Configure **[Scrape.do](https://scrape.do?fpr=99aed)** API**:
   - Endpoint: `https://api.scrape.do/`  
   - Parameter: `token=YOUR_SCRAPEDO_TOKEN`  
   - Add `render=true` for full HTML rendering  
3. **Configure Google Sheets**:
   - Create a sheet with two tabs: **Keywords** (input), **Results** (output)  
   - Set up Google Sheets OAuth2 credentials in n8n  
   - Replace placeholders: `YOUR_GOOGLE_SHEET_ID` and `YOUR_GOOGLE_SHEETS_CREDENTIAL_ID`  
4. **Run & Test**:
   - Add test data in `Keywords` tab  
   - Execute workflow → Check results in `Results` tab  

---

## 🧰 How to Customize
- **Add more fields**: Extend HTML parsing logic in the “Extract Competitor Data” node to capture extra data (e.g., domain, sitelinks).  
- **Filtering**: Exclude domains or results with custom rules.  
- **Batch Size**: Adjust “Process Keywords in Batches” for speed vs. rate-limits.  
- **Rate Limiting**: Insert a **Wait node** (e.g., 10–30 seconds) if API rate limits apply.  
- **Multi-Sheet Output**: Save per-country or per-keyword results into separate tabs.  

---

## 📊 Use Cases
- **SEO Competitor Analysis**: Identify top-ranking sites for target keywords  
- **Market Research**: See how SERPs differ by region  
- **Content Strategy**: Analyze titles & descriptions of competitor pages  
- **Agency Reporting**: Automate competitor SERP snapshots for clients  

---

## 📈 Performance & Limits
- **Single Keyword**: ~10–20 seconds (depends on **[Scrape.do](https://scrape.do?fpr=99aed)** response)  
- **Batch of 10**: 3–5 minutes typical  
- **Large Sets (50+)**: 20–40 minutes depending on API credits & batching  
- **API Calls**: 1 **[Scrape.do](https://scrape.do?fpr=99aed)** request per keyword  
- **Reliability**: 95%+ extraction success, 98%+ data accuracy  

---

## 🧩 Troubleshooting
- **API error** → Check `YOUR_SCRAPEDO_TOKEN` and API credits  
- **No keywords loaded** → Verify Google Sheet ID & tab name = `Keywords`  
- **Permission denied** → Re-authenticate Google Sheets OAuth2 in n8n  
- **Empty results** → Check parsing logic and verify search term validity  
- **Workflow stops early** → Ensure batching loop (`SplitInBatches`) is properly connected  

---

## 🤝 Support & Community
- n8n Forum: [https://community.n8n.io](https://community.n8n.io)  
- n8n Docs: [https://docs.n8n.io](https://docs.n8n.io)  
- [Scrape.do](https://scrape.do/) Dashboard: [https://dashboard.scrape.do](https://dashboard.scrape.do)  

---

## 🎯 Final Notes
This workflow provides a repeatable foundation for extracting **competitor SERP rankings** with **[Scrape.do](https://scrape.do?fpr=99aed)** and saving them to Google Sheets.  
You can extend it with filtering, richer parsing, or integration with reporting dashboards to create a fully automated SEO intelligence pipeline.  


## 📊 Basic Information

- **Workflow ID:** 8917
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 193
- **Downloads:** 19
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8917)

## 👤 Author

- **Name:** Onur
- **Username:** @onurpolat05

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×2)
- **code** (×2)
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
