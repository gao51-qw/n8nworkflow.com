# Automate restaurant sales & inventory forecasting with Gemini AI & Google Sheets

> This automated n8n workflow performs weekly forecasting of restaurant sales and raw material requirements using historical data from Google Sheets and AI predictions powered by Google Gemini. The forecast is then emailed to stakeholders for efficient planning and waste reduction.

## **What is Google Gemini AI?**
Google Gemini is an advanced AI model that analyzes historical sales data, seasonal patterns, and market trends to generate accurate forecasts for restaurant sales and inventory requirements, helping optimize purchasing decisions and reduce waste.

## **Good to Know**
* Google Gemini AI forecasting accuracy improves over time with more historical data
* Weekly forecasting provides better strategic planning compared to daily predictions
* Google Sheets access must be properly authorized to avoid data sync issues
* Email notifications ensure timely review of weekly forecasts by stakeholders
* The system analyzes trends and predicts upcoming needs for efficient planning and waste reduction

## **How It Works**
1. **Trigger Weekly Forecast** - Automatically starts the workflow every week at a scheduled time
2. **Load Historical Sales Data** - Pulls weekly sales and material usage data from Google Sheets
3. **Format Input for AI Agent** - Transforms raw data into a structured format suitable for the AI Agent
4. **Generate Forecast with AI** - Uses Gemini AI to analyze trends and predict upcoming needs
5. **Interpret AI Forecast Output** - Parses the AI's response into readable, usable JSON format
6. **Log Forecast to Google Sheets** - Stores the new forecast data back into a Google Sheet
7. **Email Forecast Summary** - Sends a summary of the forecast via Gmail for stakeholder review

## **Data Sources**
The workflow utilizes Google Sheets as the primary data source:

1. **Historical Sales Data Sheet** - Contains weekly sales and inventory data with columns:
   - Week/Date (date)
   - Menu Item (text)
   - Sales Quantity (number)
   - Revenue (currency)
   - Raw Material Used (number)
   - Inventory Level (number)
   - Category (text)

2. **Forecast Output Sheet** - Contains AI-generated predictions with columns:
   - Forecast Week (date)
   - Menu Item (text)
   - Predicted Sales (number)
   - Recommended Inventory (number)
   - Material Requirements (number)
   - Confidence Level (percentage)
   - Notes (text)

## **How to Use**
* Import the workflow into n8n
* Configure Google Sheets API access and authorize the application
* Set up Gmail credentials for forecast report delivery
* Create the required Google Sheets with the specified column structures
* Configure Google Gemini AI API credentials
* Test with sample historical sales data to verify predictions and email delivery
* Adjust forecasting parameters based on your restaurant's specific needs
* Monitor and refine the system based on actual vs. predicted results

## **Requirements**
1. Google Sheets API access
2. Gmail API credentials
3. Google Gemini AI API credentials
4. Historical sales and inventory data for initial training

## **Customizing This Workflow**
Modify the Generate Forecast with AI node to focus on specific menu categories, seasonal adjustments, or local market conditions. Adjust the email summary format to match your restaurant's reporting preferences and add additional data sources like supplier information, weather data, or special events calendar for more accurate predictions.

## 📊 Basic Information

- **Workflow ID:** 5983
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1890
- **Downloads:** 189
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5983)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **scheduleTrigger** 
- **googleSheets** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
