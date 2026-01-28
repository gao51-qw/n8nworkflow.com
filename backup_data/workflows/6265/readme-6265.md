# Automated gold price threshold alerts via LINE with web scraping

> ## Gold Price Alert
This workflow template, "Gold Price Alert," is designed to monitor gold prices at regular intervals and send real-time notifications via LINE when the price exceeds a specified threshold. By leveraging the power of web scraping and automated alerts, this template ensures you stay informed about significant changes in gold prices without manual intervention.

Whether you're an investor, trader, or simply someone interested in tracking gold prices, this workflow provides a reliable and customizable solution for staying updated.

## Who Is This Template For?
- Investors & Traders: Who want to monitor gold prices and receive alerts when the price reaches a specific threshold.
- Financial Analysts: Looking for automated tools to track commodity prices.
Businesses: Operating in industries where gold prices impact operations or profitability.
- Automation Enthusiasts: Seeking to build workflows that combine web scraping, data processing, and messaging platforms.

## What Problem Does This Workflow Solve?
Tracking gold prices manually can be time-consuming and prone to oversight, especially if you’re monitoring multiple sources or need alerts for specific thresholds. 

## This workflow solves that problem by:

- Automatically checking gold prices every 6 hours using a schedule trigger.
- Extracting the latest price from a trusted source (e.g., Gold Traders Association ).
- Sending instant notifications via LINE when the price exceeds a predefined threshold (e.g., 52,300 THB).
- Reducing the need for constant manual checks while ensuring timely updates.

## What This Workflow Does
1) Scheduled Trigger:
The workflow is triggered every 6 hours to check the current gold price.
2) Fetch Webpage Content:
It retrieves the HTML content of the webpage displaying the latest gold prices.
3) Extract Price Data:
Using CSS selectors, the workflow extracts the relevant price data (e.g., buying price) from the HTML content.
4) Filter Prices:
The extracted price is converted into a numeric format and compared against a predefined threshold (e.g., 52,300 THB). Alerts are only sent if the price exceeds this value.
5) Send Notification via LINE:
If the condition is met, the workflow sends a notification to your LINE account with the current gold price.

## Setup Guide
Pre-Requisites
- Access to the LINE Developers Console to configure your API Access Token
- Basic knowledge of HTML and CSS selectors for extracting data from webpages.
- Familiarity with n8n workflows and JSON formatting.

Step-by-Step Setup
1) Configure the Schedule Trigger:
Set the interval to 6 hours or adjust it based on your preference.
2) Set Up Webpage Fetching:
Update the URL in the HTTP Request node to point to the webpage containing the gold price data.
3) Extract Price Data:
Use the HTML Extractor node to specify the CSS selector for the price element (e.g., #DetailPlace_uc_goldprices1_lblBLBuy).
4) Set Price Threshold:
Modify the threshold value in the If node to match your desired alert level (e.g., 52,300 THB).
5) Configure LINE Push API:
Replace the placeholder to field in the Send Line Message node with your LINE user ID to ensure notifications are sent to the correct account.

Test the Workflow:
- Run the workflow manually to verify that it fetches the price, evaluates the condition, and sends notifications correctly.

## How to Customize This Workflow to Your Needs
- Change the Interval: Adjust the schedule trigger to check prices more or less frequently (e.g., hourly or daily).
- Monitor Multiple Prices: Extend the workflow to extract and compare additional price points (e.g., selling price, international rates).
- Integrate Other Platforms: Replace the LINE notification with integrations for Telegram, email, or SMS.
- Expand Use Cases: Adapt the workflow to track other commodities or financial indicators by modifying the webpage URL and CSS selectors.

## Why Use This Template?
- Real-Time Alerts: Stay informed about significant changes in gold prices without manual intervention.
- Customizable Thresholds: Set your own price thresholds to receive alerts tailored to your needs.
- Easy Integration: Seamlessly integrates with LINE for quick setup and minimal maintenance.
- Scalable: Easily extend the workflow to monitor multiple data points or integrate with other platforms.

## 📊 Basic Information

- **Workflow ID:** 6265
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1066
- **Downloads:** 106
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6265)

## 👤 Author

- **Name:** lin@davoy.tech
- **Username:** @linlinmhee

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** 
- **stickyNote** (×5)
- **httpRequest** (×2)
- **html** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
