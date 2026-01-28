# Export Jamf policies to Slack as CSV for instant auditing

> ## 🧩 Jamf Policies Export to Slack
Quickly export and review your entire Jamf policy configuration—including triggers, frequencies, and scope—directly in Slack.
This enables IT and security teams to audit policy setups without logging into Jamf or generating reports manually.

## ❗The Problem
Jamf Pro lacks a straightforward way to quickly review or share a list of all configured policies, including key attributes like frequency, scope, or triggers. Security teams often need this for audit or compliance reviews, but navigating Jamf’s UI or exporting via the API is time-consuming.

## 🔧 This Fixes It
This workflow fetches all policies, extracts the most relevant fields, compiles them into a csv file, and posts that readble file into a designated Slack channel—automatically or on demand.

## ✅ Prerequisites
• A Jamf Pro API key (OAuth2) with read access to policies
• A Slack app with permission to post files into your chosen channel

## 🔍 How it works
• Manually trigger or use the webhook to initiate the flow
• Retrieve all policies from Jamf via the XML API
• Convert the XML response into JSON
• Split and loop through each policy ID
• Retrieve detailed data for each policy
• Format relevant fields (ID, name, trigger, scope, etc.)
• Convert the final data set into an .csv file
• Upload the file to your Slack channel

## ⚙️ Set up steps
• Takes ~10 minutes to configure
• Set the Jamf BaseURL in the “Jamf Server” node
• Configure Jamf OAuth2 credentials in the HTTP Request nodes
• Adjust the fields for export in the “Set-fields” node
• Set your Slack credentials and target channel in the “Post to Slack” node
• Optional: Customize the exported fields or filename

## 🔄 Automation Ready
Schedule this flow daily/weekly, or tie it to change events to keep your team informed.

## 📊 Basic Information

- **Workflow ID:** 6440
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 103
- **Downloads:** 10
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6440)

## 👤 Author

- **Name:** Jean-Marie Rizkallah 
- **Username:** @mrrobot

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **stickyNote** (×7)
- **manualTrigger** 
- **splitInBatches** 
- **set** (×2)
- **xml** (×2)
- **webhook** 
- **splitOut** 
- **httpRequest** (×2)
- **slack** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
