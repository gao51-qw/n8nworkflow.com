# Automated property lead generation with BatchData and CRM integration

> How It Works
-
This N8N workflow creates an automated system for discovering high-potential real estate investment opportunities. The workflow runs on a customizable schedule to scan the market for properties that match your specific criteria, then alerts your team about the most promising leads.

The process follows these steps:

- Connects to BatchData API on a regular schedule to search for properties matching your parameters
- Compares new results with previous scans to identify new listings and property changes
- Applies intelligent filtering to focus on high-potential opportunities (high equity, absentee owners, etc.)
- Retrieves comprehensive property details and owner information for qualified leads
- Delivers formatted alerts through multiple channels (email and Slack/Teams)

Each email alert includes detailed property information, owner details, equity percentage, and a direct Google Maps link to view the property location. The workflow also posts concise notifications to your team's communication channels for quick updates.

Who It's For
-
This workflow is designed for:

- Real Estate Investors: Find off-market properties with high equity and motivated sellers
- Real Estate Agents: Identify potential listing opportunities before they hit the market
- Property Acquisition Teams: Streamline the lead generation process with automated scanning
- Real Estate Wholesalers: Discover properties with significant equity spreads for potential deals
- REITs and Property Management Companies: Monitor market changes and expansion opportunities

The workflow is especially valuable for professionals who want to:

- Save hours of manual market research time
- Get early notifications about high-potential properties
- Access comprehensive property and owner information in one place
- Focus their efforts on the most promising opportunities

About BatchData
-
BatchData is a powerful property data platform for real estate professionals. Their API provides access to comprehensive property and owner information across the United States, including:

- Property details (bedrooms, bathrooms, square footage, year built, etc.)
- Valuation and equity estimates
- Owner information (name, mailing address, contact info)
- Transaction history and sales data
- Foreclosure and distressed property status
- Demographic and neighborhood data

The platform specializes in providing accurate, actionable property data that helps real estate professionals make informed decisions and identify opportunities efficiently. BatchData's extensive database covers millions of properties nationwide and is regularly updated to ensure data accuracy.
The API's flexible search capabilities allow you to filter properties based on numerous criteria, making it an ideal data source for automated lead generation workflows like this one.

## 📊 Basic Information

- **Workflow ID:** 3665
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2477
- **Downloads:** 247
- **Created:** 2025/4/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3665)

## 👤 Author

- **Name:** Preston Zeller
- **Username:** @zellerhaus

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **httpRequest** (×2)
- **set** 
- **code** (×2)
- **spreadsheetFile** 
- **hubspot** 
- **emailSend** 
- **stickyNote** (×5)
- **filter** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
