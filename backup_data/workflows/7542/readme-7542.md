# Generate business lists from Google Maps search to Sheets or Excel with Serper

> ## Who is this for
This workflow is ideal for lead generation agencies, researchers, and small business owners who need to quickly collect and analyze company data from search results and save them into Google Sheets for further use.

## What problem is this workflow solving
Manually searching for companies, compiling them into a list, and formatting them into spreadsheets is time-consuming and error-prone. This workflow automates that process-taking a search request, finding relevant companies, and organizing the data into a ready-to-use format in Google Sheets or downloadable Excel.

## What this workflow does
- Takes a user’s search query via chat
- Scrapes company data from Google Maps based on that query
- Returns the results in a downloadable Excel file
- Saves the same data to a connected Google Sheets document for easy access and sharing.

## Setup
- Add your credentials:
	- Gogle Sheets
	- Serper
- Run the workflow and enter your search request in the chat interface
- Retrieve your results from either:
	- The Get XLSX node as an Excel file
	- The linked Google Sheets file (copy Column Names from XLSX File to Google Sheets)
- Test the bot by sending a search query (e.g., "coffee shops in Berlin") - the bot will return the results automatically.


## 📊 Basic Information

- **Workflow ID:** 7542
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 71
- **Downloads:** 7
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7542)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **splitOut** 
- **httpRequest** 
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
