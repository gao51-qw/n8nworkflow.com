# Scrape physician profiles from BrowserAct into Google Sheets and notify Slack

> # Scrape physician profiles from BrowserAct to Google Sheets

This workflow automates the process of building a targeted database of healthcare providers by scraping physician details for a specific location and syncing them to your records. It leverages BrowserAct to extract data from healthcare directories and ensures your database stays clean by preventing duplicate entries.

## Target Audience
Medical recruiters, pharmaceutical sales representatives, lead generation specialists, and healthcare data analysts.

## How it works
1. **Define Location**: The workflow starts by setting the target `Location` and `State` in a Set node.
2. **Scrape Data**: A **BrowserAct** node executes a task (using the "Physician Profile Enricher" template) to search a healthcare directory (e.g., Healow) for doctors matching the criteria.
3. **Parse JSON**: A **Code** node takes the raw string output from the scraper and parses it into individual JSON objects.
4. **Update Database**: The workflow uses a **Google Sheets** node to append new records or update existing ones based on the physician's name, preventing duplicates.
5. **Notify Team**: A **Slack** node sends a message to a specific channel to confirm the batch job has finished successfully.

## How to set up
1. **Configure Credentials**: Connect your **BrowserAct**, **Google Sheets**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Physician Profile Enricher** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a new Google Sheet with the required headers (listed below).
4. **Select Spreadsheet**: Open the **Google Sheets** node and select your newly created file and sheet.
5. **Set Variables**: Open the **Define Location** node and input your target `Location` (City) and `State`.
6. **Configure Notification**: Open the **Slack** node and select the channel where you want to receive alerts.

## Google Sheet Headers
To use this workflow, create a Google Sheet with the following headers:
* Name
* Specialty
* Address

## Requirements
* **BrowserAct** account with the **Physician Profile Enricher** template.
* **Google Sheets** account.
* **Slack** account.

## How to customize the workflow
1. **Change the Data Source**: Modify the BrowserAct template to scrape a different directory (e.g., Zocdoc or WebMD) and update the Google Sheet columns accordingly.
2. **Switch Notifications**: Replace the Slack node with a **Microsoft Teams**, **Discord**, or **Email** node to suit your team's communication preferences.
3. **Enrich Data**: Add an **AI Agent** node after the Code node to format addresses or research the specific clinics listed.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://docs.browseract.com)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automate Medical Lead Gen: Scrape Healow to Google Sheets & Slack](https://www.youtube.com/watch?v=DZ_Jq_b2-Ww)

## 📊 Basic Information

- **Workflow ID:** 12345
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 138
- **Downloads:** 13
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12345)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **code** 
- **set** 
- **stickyNote** (×5)
- **googleSheets** 
- **slack** 
- **n8n-nodes-browseract.browserAct** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
