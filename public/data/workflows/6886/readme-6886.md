# Skip tracing: Extract phones & emails from TruePeopleSearch with Zyte API

> # TruePeopleSearch Scraper for Skip Tracers

Enrich any list of people with verified contact info using this workflow.  
This n8n automation scrapes **TruePeopleSearch** using **Zyte's extraction API** to safely bypass bot protection and extract detailed profiles. It’s built for **data brokers, skip tracers, and real estate professionals** who need clean contact data (phone, email, address) from names alone — even when the main profile is empty.  

If the original profile lacks a phone number, the workflow intelligently scrapes one of their listed relatives instead — giving you the **best possible chance of finding a valid number**.

---

## What this workflow does

- Pulls lead data (first name, last name, and custom search URL) from a **Google Sheet**
- Sends the TruePeopleSearch search URL to **Zyte’s Scraping API** to retrieve search results HTML
- Parses the first matching profile link from the results (by full name &gt; first name &gt; last name)
- Visits that profile page and extracts:
  - Full Name
  - Age / Date of Birth
  - Primary Phone Number
  - Other Phone Numbers
  - Email Addresses
  - Current Address
- If no phone numbers are found:
  - Detects a **relative's profile link**
  - Scrapes the relative’s profile for fallback contact data
- Writes all scraped information (or empty fields) back into the **same row** in Google Sheets

---

## You’ll need

- **n8n (self-hosted or cloud)**  
  To run and automate the workflow

- **Zyte Scraping API**  
  A [Zyte](https://www.zyte.com/) account + API key to access their `/extract` endpoint  
  _(Use HTTP Basic Auth in the HTTP Request node)_

- **Google Sheets integration**  
  Your own lead sheet with headers like:
  - `row_number` (used to write back to the correct row)
  - `First Name`
  - `Last Name`
  - `SearchURL` (Search by Address)

- **Basic JavaScript familiarity (optional)**  
  To tweak the HTML parsing logic for profile structure changes

---

## Example Google Sheet  
Use this Google Sheet as a template for your inputs and outputs:  
👉 [TruePeopleSearch Lead Template (Google Sheet)](https://docs.google.com/spreadsheets/d/1CkMMdoIYNTaA8tIvAXzjw9YeqkXfYD8qfkeACosuibo/edit#gid=1416164772)

---

## Disclaimer  
- TruePeopleSearch may change its structure or block heavy scraping — always test at small scale first  
- This workflow is built to **simulate human behavior** via Zyte’s smart rendering — scraping is still subject to site limitations  
- Use ethically and within your local data usage laws

---

## Categories  
`Data Enrichment` · `Scraping Automation` · `Lead Generation` · `Skip Tracing`

---

*Feel free to drop me an email if you need help with building a custom scraping automation for your business at* [*sajid@marketingbyprof.com*](mailto:sajid@marketingbyprof.com)


## 📊 Basic Information

- **Workflow ID:** 6886
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 677
- **Downloads:** 67
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6886)

## 👤 Author

- **Name:** Muhammad Sajid
- **Username:** @msajid

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **code** (×15)
- **webhook** 
- **stickyNote** (×4)
- **googleSheets** (×10)
- **filter** 
- **limit** 
- **httpRequest** (×3)
- **if** (×3)
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
