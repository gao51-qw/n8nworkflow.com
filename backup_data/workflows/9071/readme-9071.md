# Find internal linking opportunities with SerpAPI and Google Sheets

> ## Overview

Use this workflow to spot internal linking ideas on your site and improve your search performance. It takes your target URLs and keywords, finds related pages, and suggests where to add links. Strong internal linking helps search engines understand your site.

## How it works
- You provide a list of target URLs and the keywords you want to rank for
- The workflow uses the SERP API to search your site for related pages, skipping the target URL
- It filters the results and pulls relevant URLs
- It writes the suggestions to a Google Sheet, and adds “N/A” if no good matches are found

## Setup steps
1. Turn on the Google Sheets API and create a sheet with your domain, target URLs, and keywords
2. Create a SERP API account and get an API key
3. Optional: Set up a Google Programmable Search Engine if you prefer not to use the SERP API
4. Add your SERP API key and Google Sheets credentials to n8n.
5. Run the workflow to generate internal link suggestions in your Google Sheet

## 📊 Basic Information

- **Workflow ID:** 9071
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 248
- **Downloads:** 24
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9071)

## 👤 Author

- **Name:** Robin Geuens
- **Username:** @robingeuens

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **splitInBatches** 
- **httpRequest** 
- **set** 
- **googleSheets** (×2)
- **stickyNote** (×6)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
