# Weekly website link checker with Slack alerts for broken URLs

> ## Description
- Automates weekly checks for broken links on a website.
- Scans the site using HTTP requests and filters broken links.
- Sends Slack alerts for detected broken URLs and creates a list for tracking.

## Essential Information
- Runs weekly to monitor website link integrity.
- Identifies broken links and notifies the team via Slack.
- Generates a list of broken links for further action.

## System Architecture
- **Link Checking Pipeline**:
  - **Weekly Cron Trigger**: Schedules the workflow to run weekly.
  - **Scan Blog with HTTP**: Performs HTTP GET requests to check website links.
- **Alert and Tracking Flow**:
  - **Filter Broken Links**: Identifies and separates broken links.
  - **Send Slack Alert**: Notifies the team via Slack about broken URLs.
  - **Create Broken Links List**: Compiles a list of broken links.
- **Non-Critical Handling**:
  - **No Action for Valid Links**: Skips valid links with no further action.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure the HTTP node with the target website URL (e.g., https://yourblog.com).
- Set up Slack credentials for alerts.
- Test the workflow with a sample website scan.
- Monitor link checking accuracy and adjust HTTP settings if needed.

## Technical Dependencies
- HTTP request capability for link scanning.
- Slack API for team notifications.
- n8n for workflow automation and scheduling.

## Database & Sheet Structure
- No specific database or sheet required; relies on HTTP response data.
- Example payload: `{"url": "https://yourblog.com/broken", "status": 404, "time": "2025-07-29T20:21:00Z"}`

## Customization Possibilities
- Adjust the Cron trigger to run at a different frequency (e.g., daily).
- Customize HTTP node to scan specific pages or domains.
- Modify Slack alert messages in the `Send Slack Alert` node.
- Enhance the `Create Broken Links List` node to save results to a Google Sheet or Notion.
- Add email notifications for additional alert channels.

## 📊 Basic Information

- **Workflow ID:** 6647
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 531
- **Downloads:** 53
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6647)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **if** 
- **function** 
- **slack** 
- **noOp** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
