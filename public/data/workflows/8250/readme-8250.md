# Scrape jobs from Indeed, LinkedIn & more with RapidAPI to Google Sheets

> ## Active Job Scraper Workflow Using RapidAPI Jobs Search Realtime Data API

This powerful **Active Job Scraper** workflow uses the [**RapidAPI Jobs Search Realtime Data API**](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data) to fetch real-time job listings from leading job boards like **Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**.

---

## Overview

Leverage the [**Jobs Search Realtime Data API on RapidAPI**](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data) to gather fresh job data from **Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**. This n8n workflow lets you:

- Search jobs by location, keywords, job type, and remote options across these major platforms.
- Collect detailed job information including descriptions and metadata.
- Automatically save the scraped results into Google Sheets for easy tracking and analysis.

---

## Why Choose This Workflow?

By integrating the [**RapidAPI Jobs Search Realtime Data API**](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data), you can scrape job listings from the most popular job sites—**Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**—all in one place. Customize your search parameters and get results tailored to your needs.

---

## Workflow Components

| Node             | Description                                                     |
|------------------|-----------------------------------------------------------------|
| Form Trigger     | Collects input such as location, search term, job type, and remote status. |
| HTTP Request    | Calls the RapidAPI Jobs Search Realtime Data API to fetch jobs from **Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**. |
| Code Node       | Processes and formats the API response data.                    |
| Google Sheets   | Appends the extracted job listings to your spreadsheet.         |
---
### 🔑 How to Get API Key from RapidAPI [Jobs Search Realtime Data API](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-datao)

Follow these steps to get your API key and start using it in your workflow:

1. **Visit the API Page**  
   [👉 Click here to open Jobs Search Realtime Data API on RapidAPI](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data)

2. **Log in or Sign Up**  
   - Use your **Google**, **GitHub**, or email account to sign in.  
   - If you're new, complete a quick sign-up.

3. **Subscribe to a Pricing Plan**  
   - Go to the **Pricing** tab on the API page.  
   - Select a plan (free or paid, depending on your needs).  
   - Click **Subscribe**.

4. **Access Your API Key**  
   - Navigate to the **Endpoints** tab.  
   - Look for the `X-RapidAPI-Key` under **Request Headers**.  
   - Copy the value shown — this is your API key.

5. **Use the Key in Your Workflow**  
   - In your n8n workflow (HTTP Request node), replace:
     ```text
     "x-rapidapi-key": "your key"
     ```
     with:
     ```text
     "x-rapidapi-key": "YOUR_ACTUAL_API_KEY"
     ```

---




## 📊 Basic Information

- **Workflow ID:** 8250
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1698
- **Downloads:** 169
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8250)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **code** 
- **googleSheets** 
- **formTrigger** 
- **httpRequest** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
