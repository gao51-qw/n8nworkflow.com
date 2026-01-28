# Extract business data from Google Maps via chat to Excel & Google Sheets

> ## Who is this for
This workflow is designed for marketers, researchers, and business owners who need to quickly find and export company data from Google Maps into a structured table format.

## What problem is this workflow solving
Manually collecting business contact information from Google Maps is time-consuming and error-prone. This workflow automates the process, allowing users to instantly extract company data and export it to Excel or Google Sheets for further use. For example, title, rating, reviews, address, operating hours, phone, website, type, gps coordinates.

## What this workflow does
- Takes a user’s search query via chat
- Scrapes company data from Google Maps based on that query
- Returns the results in a downloadable Excel file
- Saves the same data to a connected Google Sheets document for easy access and sharing

## Setup
1. Add your credentials:
   - Google Sheets API
   - Google Maps API
2. Run the workflow and enter your search request in the chat interface
3. Retrieve your results from either:
   - The Get XLSX node as an Excel file
   - The linked Google Sheets file

## 📊 Basic Information

- **Workflow ID:** 6249
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6249)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** (×5)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **convertToFile** 
- **googleSheets** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
