# Scrape Airbnb listings with pagination & store in Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Description
This n8n workflow automatically **scrapes Airbnb listings** from a specified location and **saves the data to a Google Sheet**. It performs pagination to collect listings across multiple pages, extracts detailed information for each property, and organizes the data in a structured format for easy analysis.

# How it Works
The workflow operates through these high-level steps:

- Search Initialization: Starts with an Airbnb search for a specific location (London) with defined check-in/check-out dates and guest count
- Pagination Loop: Automatically processes multiple pages of search results using cursor-based pagination
- Data Extraction: Parses listing information including names, prices, ratings, reviews, and URLs
- Detail Enhancement: Fetches additional details for each listing (house rules, highlights, descriptions, amenities)
- Data Storage: Saves all collected data to a Google Sheet with proper formatting
- Loop Control: Continues until reaching the page limit (2 pages) or no more results are available

# Setup Steps
- Prerequisites
n8n instance with MCP (Model Context Protocol) support
Google Sheets API credentials configured
Airbnb MCP client properly set up

- Configuration Steps
--- Configure MCP Client
Set up the Airbnb MCP client with credential ID:
Ensure the client has access to airbnb_search and airbnb_listing_details tools
--- Google Sheets Setup
Create a Google Sheet with ID: 15IOJquaQ8CBtFilmFTuW8UFijux10NwSVzStyNJ1MsA
Configure Google Sheets OAuth2 credentials (ID: 6YhBlgb8cXMN3Ra2)
Ensure the sheet has these column headers:
"id, name, url, price_per_night, total_price, price_details
beds_rooms, rating, reviews, badge, location
houseRules, highlights, description, amenities"




- Search Parameters
Location: "London" (can be modified in the "Airbnb Search" node)
Adults: 7
Children: 1
Check-in: "2025-08-14"
Check-out: "2025-08-17"
Page limit: 2 (can be adjusted in the "If1" condition node)


- Execution
Use the manual trigger "When clicking 'Execute workflow'" to start the process
Monitor the workflow execution through the n8n interface
Check the Google Sheet for populated data after completion



- Key Features
Automatic Pagination: Processes multiple pages without manual intervention
Comprehensive Data: Extracts both basic listing info and detailed property information
Error Handling: Includes JSON parsing error handling and data validation
Batch Processing: Uses split batches for efficient processing of individual listings
Real-time Updates: Appends new data to existing Google Sheet records

## Output Data Structure
Each listing contains:

- Basic info: ID, name, URL, pricing details, room/bed count
- Ratings: Average rating and review count
Location: Latitude and longitude coordinates
- Enhanced details: House rules, highlights, descriptions, amenities
- Metadata: Page number, check-in/out dates, badges


## 📊 Basic Information

- **Workflow ID:** 5981
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1162
- **Downloads:** 116
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5981)

## 👤 Author

- **Name:** Alex Huy
- **Username:** @alexhuy

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **code** (×4)
- **googleSheets** (×2)
- **n8n-nodes-mcp.mcpClient** (×2)
- **set** (×2)
- **splitInBatches** 
- **manualTrigger** 
- **if** 
- **merge** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
