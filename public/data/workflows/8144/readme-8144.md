# Scrape LinkedIn job listings with Phantombuster & save to Google Sheets

> ## How it works
This workflow automatically scrapes LinkedIn job postings for a list of target companies and organizes the results in Google Sheets. Every Monday morning, it checks your company list, runs a LinkedIn job scrape using Phantombuster, waits for the data to be ready, and then fetches the results. Finally, it formats the job postings into a clean structure and saves them into a results sheet for easy analysis.

## Step-by-step

**Start with Scheduled Trigger**
- The workflow runs automatically at 9:00 AM every Monday.
- It reads your “Companies Sheet” in Google Sheets and filters only those marked with Status = Pending.

**Scrape LinkedIn Jobs**
- The workflow launches your Phantombuster agent with the LinkedIn profile URLs from the sheet.
- It waits 3 minutes to let the scraper finish running.
- Then it fetches the output CSV link containing the job posting results.

**Format the Data**
- The scraped data is cleaned and structured into fields like:

  - Company Name

  - Job Title

  - Job Description

  - Job Link

  - Date Posted

  - Location

   - Employment Type

**Save Everything in Google Sheets**
- The formatted job data is appended into your “Job Results” Google Sheet.

- Each entry includes a scrape date so you can track when the data was collected.

## Why use this?

- Automates job market research and competitive hiring analysis.

- Collects structured job posting data from multiple companies at scale.

- Saves time by running on a schedule with no manual effort.

- Keeps all results organized in Google Sheets for easy review and sharing.

- Helps HR and recruitment teams stay ahead of competitors’ hiring activity.

## 📊 Basic Information

- **Workflow ID:** 8144
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 573
- **Downloads:** 57
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8144)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **httpRequest** (×2)
- **wait** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **set** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
