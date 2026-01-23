# Automatically send daily sales summary reports from Square via Microsoft Outlook

> ## Automatically Send Square Summary Report for Yesterday's Sales via Microsoft Outlook

## What It Does  
This workflow automatically connects to the Square API and generates a daily sales summary report for all your Square locations. The report matches the figures displayed in **Square Dashboard &gt; Reports &gt; Sales Summary**.

It's designed to run daily and pull the previous day's sales into a CSV file, which is then sent to a manager/finance team for analysis.

This workflow builds on my previous template, which allows users to automatically pull data from the Square API into n8n for processing. (See here: https://n8n.io/workflows/6358)

## Prerequisites  
To use this workflow, you'll need:
- A Square API credential (configured as a Header Auth credential)
- A Microsoft Outlook credential

## How to Set Up Square Credentials:  
- Go to **Credentials &gt; Create New**  
- Choose **Header Auth**  
- Set the **Name** to `Authorization`  
- Set the **Value** to your Square Access Token (e.g., `Bearer &lt;your-api-key&gt;`)

## How It Works  
1. **Trigger:** The workflow runs every day at 4:00 AM  
2. **Fetch Locations:** An HTTP request retrieves all Square locations linked to your account  
3. **Fetch Orders:** For each location, an HTTP request pulls completed orders for the specified report_date  
4. **Filter Empty Locations:** Locations with no sales are ignored  
5. **Aggregate Sales Data:** A Code node processes the order data and produces a summary identical to Square’s built-in Sales Summary report  
6. **Create CSV File:** A CSV file is created containing the relevant data  
7. **Send Email:** An email is sent to the chosen third party  

## Example Use Cases  
- Automatically send Square sales data to management to improve the quality of planning and scheduling decisions  
- Automatically send data to an external third party, such as a landlord or agent, who is paid via commission  
- Automatically send data to a bookkeeper for entry into QuickBooks  

## How to Use  
- Configure both HTTP Request nodes to use your Square API credential  
- Set the workflow to **Active** so it runs automatically  
- Enter the email address of the person you want to send the report to and update the message body  
- If you want to remove the n8n attribution, you can do so in the last node  

## Customization Options  
- Add pagination to handle locations with more than 1,000 orders per day
- Instead of a daily summary, you can modify this workflow to produce a weekly summary once a week  

## Why It's Useful  
This workflow saves time, reduces manual report pulling from Square, and enables smarter automation around sales data — whether for operations, finance, or performance monitoring.


## 📊 Basic Information

- **Workflow ID:** 7080
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 175
- **Downloads:** 17
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7080)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** (×2)
- **splitOut** 
- **if** 
- **code** 
- **stickyNote** (×7)
- **scheduleTrigger** 
- **convertToFile** 
- **microsoftOutlook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
