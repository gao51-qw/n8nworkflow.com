# Real-time currency conversion via webhook & Google search parsing

> This automated n8n workflow provides real-time currency conversion by capturing GET requests via a webhook, parsing exchange rate data from Google Search, and returning a formatted response. The system handles query parameter validation and error cases to ensure reliable conversions.

## What is Real-Time Currency Conversion?
Real-time currency conversion involves fetching the latest exchange rates from Google Search via HTTP requests, processing the data, and delivering a user-friendly conversion result based on a provided query parameter.

## Good to Know
- The workflow requires a valid query parameter (q) for conversion requests
- Google Search parsing depends on the availability and structure of search results
- Error handling is included for missing query parameters
- Responses are formatted for easy integration

## How It Works
- **Webhook** - Captures GET requests with query parameter **q**
- **Check Query Parameter** - Validates that the required query parameter exists
- **Fetch Exchange Rate** - Makes HTTP request to Google search for exchange rates
- **Error Response** - Handles missing query parameter errors
- **Extract Conversion Data** - Processes HTML response to extract conversion data
- **Format Currency Response** - Formats the result into a user-friendly response
- **Send Conversion Response** - Returns the formatted response

## How to Use
- Import the workflow into n8n
- Configure the webhook to receive GET requests with a query parameter (q)
- Test the workflow with sample conversion queries (e.g., "1 USD to INR")
- Monitor for error responses and adjust query handling if needed

## Requirements
- Webhook configuration
- Internet access for Google Search requests

## Customizing This Workflow
- Adjust the query parameter validation in the Check Query Parameter node to support additional formats
- Modify the Format Currency Response node to change the output format based on user needs

## 📊 Basic Information

- **Workflow ID:** 6123
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 320
- **Downloads:** 32
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6123)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **httpRequest** 
- **code** (×2)
- **respondToWebhook** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
