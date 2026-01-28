# Export search console results to Google Sheets

> ## How it works

This workflow gets the search console results data and exports this to google sheets. This makes it easier to visualize and do other SEO related tasks and activities without having to log into Search Console

## Setup and use

1. Set your desired schedule
2. Enter your desired domain
3. Connect to your Google sheets or make a copy of this sheet. 

## Detailed Setup

- **Inputs and Outputs:**
- Input: API response from Google Search Console regarding keywords, page data, and date data.
- Output: Entries written to Google Sheets containing keyword data, clicks, impressions, CTR, and positions.

2. **Setup Instructions:**
- **Prerequisites:**
- An n8n instance set up and running.
- Active Google Account with access to Google Search Console and Google Sheets.
- Google OAuth 2.0 credentials for API access.

- **Step-by-Step Setup:**
1. Open n8n and create a new workflow.
2. Add the nodes as described in the JSON.
3. Configure the **Google OAuth2** credentials in n8n to enable API access.
4. Set your domain in the **Set your domain** node.
5. Customize the Google Sheets document URLs to your personal sheets.
6. Adjust the schedule in the **Schedule Trigger** node as per your requirements.
7. Save the workflow.

- **Configuration Options:**
- You can customize the date ranges in the body of the **HttpRequest** nodes.
- Adjust any fields in the **Edit Fields** nodes based on different data requirements.

3. **Use Case Examples:**
- Useful in tracking website performance over time using Search Console metrics.
- Ideal for digital marketers, SEO specialists, and web analytics professionals.
- Offers value in compiling performance reports for stakeholders or team reviews.

4. **Running and Troubleshooting:**
- **Running the Workflow:**
- Trigger the workflow manually or wait for the schedule to run it automatically.

- **Monitoring Execution:**
- Check the execution logs in n8n's dashboard to ensure all nodes complete successfully.

- **Common Issues:**
- Invalid OAuth credentials – ensure credentials are set up correctly.
- Incorrect Google Sheets URLs – double-check document links and permissions.
- Scheduling conflicts – make sure the schedule set does not overlap with other workflows.


## 📊 Basic Information

- **Workflow ID:** 2613
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 23193
- **Downloads:** 2319
- **Created:** 2024/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2613)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **splitOut** (×3)
- **set** (×4)
- **httpRequest** (×3)
- **scheduleTrigger** 
- **stickyNote** (×4)
- **googleSheets** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
