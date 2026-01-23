# Scrape Google Maps leads to Google Sheets via Apify

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## ## Scrape Google Maps leads to Google Sheets via Apify

## Who's it for
This workflow is ideal for marketers, sales professionals, and solo entrepreneurs who want to collect local leads based on Google Maps search terms. For example, restaurants in North Holland.

## What it does
This workflow uses an Apify actor to scrape business details from Google Maps and automatically appends them to a Google Sheet with the following fields:

- Business name
- Street
- Postal code
- City
- Website
- Phone number

## How it works
1. The workflow starts with a manual trigger (you can replace it with any other trigger).
2. The Google Maps Scraper Apify actor is launched.
3. A short wait ensures the actor completes the task (you can increase the wait time for more extensive outputs).
4. The resulting dataset is retrieved from Apify.
5. Data is mapped and added into a connected Google Sheet.

## How to set up
Step 1: Configure the “Run Apify scraper” node
Go to the Google Maps Scraper actor on Apify.
Create a new Task with your search term.
Find your actor from list.

Step 2: Edit the “Find your last run” node
Select the correct actor (Google Maps Scraper) from the dropdown in this node.

Step 3: Fetch the dataset
In the “Get the data from Apify” node, use {{$json.defaultDatasetId}} to dynamically pull the correct dataset.

Step 4: Connect your Google Sheet
Link your Google account and select the desired spreadsheet and tab (for example, Leads).
Make sure the column headers match the data fields.

Current column headers:
Title	Street	Postcode	City	Website	Phone

If you have any questions, feel free to reach out to info@ai-amigos.com

## 📊 Basic Information

- **Workflow ID:** 6634
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1238
- **Downloads:** 123
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6634)

## 👤 Author

- **Name:** Bedrijfautomatiseren.nl
- **Username:** @webshopautomatiseren

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheets** 
- **@apify/n8n-nodes-apify.apify** (×3)
- **wait** 
- **manualTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
