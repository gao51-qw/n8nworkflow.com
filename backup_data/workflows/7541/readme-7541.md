# Scrape business data from Google Maps via SerpAPI and export to Sheets & Excel

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who is this for
This workflow is perfect for marketers, researchers, and small business owners who need to quickly gather and review company listings from Google Maps. Whether you're building lead lists, scouting competitors, or researching potential partners, this automation speeds up the process by exporting results into a neat Excel or Google Sheet format.

## What problem is this workflow solving
Manually searching Google Maps for companies and copying their data into spreadsheets is time-consuming and error-prone. This workflow automates the search and export process, saving hours of manual effort while improving accuracy and consistency.

## What this workflow does
- Takes a user’s search query via chat
- Scrapes company data from Google Maps based on that query
- Returns the results in a downloadable Excel file
- Saves the same data to a connected Google Sheets document for easy access and sharing

## Setup
- Add your credentials:
	- Google Sheets
	- Serp
- Run the workflow and enter your search request in the chat interface
- Retrieve your results from either:
	- The Get XLSX node as an Excel file
	- The linked Google Sheets file (copy Column Names from XLSX File to Google Sheets)
- Test the bot by sending a search query (e.g., "coffee shops in Berlin") - the bot will return the results automatically.

## 📊 Basic Information

- **Workflow ID:** 7541
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 84
- **Downloads:** 8
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7541)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **splitOut** 
- **n8n-nodes-serpapi.serpApi** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)
- **convertToFile** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
