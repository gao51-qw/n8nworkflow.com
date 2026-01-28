# Monitor competitor SEO changes with CustomJS Scraper, Google Sheets & Slack alerts

> &gt; ⚠️ **Notice:**  
&gt; Community nodes like **@custom-js/n8n-nodes-pdf-toolkit** can only be installed on self-hosted instances of n8n.  

---

![Screenshot from 20250911 001042.png](fileId:2349) 

This n8n workflow demonstrates how to **monitor competitor websites for SEO changes** by scraping content and updating a Google Sheet. It uses the **Scraper node from [customjs.space](https://www.customjs.space)** to extract HTML content and parse key SEO elements like `title`, `<h1>`, `<h2>`, and meta description.  

---

## What this workflow does

- Reads a list of competitor websites from a **Google Sheet**.  
- Uses the **CustomJS Scraper node** to fetch raw HTML for each website.  
- Extracts important SEO data:  
  - Page `title`  
  - `<h1>` headings  
  - `<h2>` headings  
  - Meta description  
- Updates the Google Sheet with the latest scraped values and a timestamp.  
- Compares the new values with the previous ones:  
  - If changes are detected, a **Slack notification** is sent.  

---

## Requirements

- Self-hosted n8n instance.  
- CustomJS API key for the Scraper node.  
- A Google Sheet containing competitor website URLs.  
- Slack workspace (optional, for notifications).  

---

## Workflow Steps

1. **Schedule Trigger**  
   Runs automatically (weekly by default, adjustable as needed).  

2. **Google Sheets – Get Competitor URLs**  
   Reads competitor website URLs from the configured sheet.  

3. **CustomJS Scraper – Fetch HTML**  
   - Inputs each website URL.  
   - Returns raw HTML text for analysis.  

4. **Code – Extract SEO Elements**  
   Parses the HTML to extract:  
   - Title  
   - H1s  
   - H2s  
   - Meta description  

5. **Google Sheets – Update SEO Data**  
   Updates the sheet with the new SEO data and a current date.  

6. **If – Check for SEO Changes**  
   Compares old vs. new values.  

7. **Slack Notification – Alert on Changes**  
   Sends a message to Slack when updates are detected.  

---

## Usage

1. **Get API key from CustomJS**  
   - Sign up on the [CustomJS platform](https://www.customjs.space).  
   - Navigate to your profile page.  
   - Click “Show” to reveal your API key.  

2. **Set Credentials for CustomJS API in n8n**  
   - Copy your API key into a new `CustomJS` credential.  

3. **Prepare your Google Sheet**  
   - Create a sheet with a column named **Websites**.  
   - Enter competitor URLs (must start with `https://`).  

4. **Run or schedule the workflow**  
   - The workflow will scrape competitor sites, update the sheet, and notify you of any SEO changes.  

---

## Example Output

**Google Sheet after update:**  

| Websites             | Title                  | Meta Description         | H1s                | H2s         | Date                |
|----------------------|------------------------|--------------------------|--------------------|-------------|---------------------|
| https://example.com  | Example Title          | Example meta description | Example H1 Heading | Example H2s | 2025-09-07 12:00:00 |


## Slack Notification Example

&gt; ⚠️ **Competitor SEO Change Detected!**

**Website:** https://example.com  

**Title**  
- Old: Example Title  
- New: New Example Title  

**Meta Description**  
- Old: Example meta description  
- New: Updated example meta description  

**H1s**  
- Old: Example Heading  
- New: Updated Heading  

**H2s**  
- Old: Example Subheading  
- New: Updated Subheading  

**Date:** 2025-09-07 12:00:00  


---

## Customization Tips

- **Change scraping frequency** in the **Schedule Trigger** (daily, weekly, etc.).  
- **Track additional elements** by extending the regex in the **Code Node**.  
- **Send alerts to other platforms** (e.g., Email, Microsoft Teams, Discord) by swapping the Slack node.  
- **Store results in a database** instead of Google Sheets if long-term history is required.  


## 📊 Basic Information

- **Workflow ID:** 5203
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 166
- **Downloads:** 16
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5203)

## 👤 Author

- **Name:** CustomJS
- **Username:** @customjs

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **@custom-js/n8n-nodes-pdf-toolkit.scraper** 
- **code** 
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
