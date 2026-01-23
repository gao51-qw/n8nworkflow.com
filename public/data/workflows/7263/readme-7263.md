# Automate JotForm submissions to Google Sheets

> 
This workflow is a simple example showing how to fetch submissions from JotForm using its API and then use that data in another service — in this case, Google Sheets.

## It demonstrates the basics of:

- Connecting to an API

- Parsing the response

- Looping through results

- Sending processed data to another app

## How It Works

1. Manual Trigger
Starts the workflow manually.
(Can be replaced with a schedule or webhook trigger for automation.)

2. HTTP Request – Get Submissions from JotForm
Fetches all submissions for a specific form from the JotForm API.

3. Code Node – Parse API Response
Converts the API’s JSON response into individual submission items.

4. Split In Batches – Loop Through Each Submission
Processes submissions one at a time to avoid hitting API rate limits.

5. Wait Node
Adds a short delay before sending data to the next API.

6. Google Sheets – Append Submission Data
Sends the selected fields from each JotForm submission into a Google Sheet:



## Adaptations
You can modify this workflow to:

Send JotForm results to CRM systems like HubSpot or Pipedrive

Trigger email or Slack notifications for each new submission

Store submissions in a database for reporting and analytics

## 📊 Basic Information

- **Workflow ID:** 7263
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7263)

## 👤 Author

- **Name:** moosa
- **Username:** @moosa

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** 
- **manualTrigger** 
- **splitInBatches** 
- **noOp** 
- **googleSheets** 
- **code** 
- **wait** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
