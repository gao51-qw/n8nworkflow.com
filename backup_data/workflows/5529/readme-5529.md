# Monitor software compliance with Jamf patch summaries in Slack

> 🧩 Jamf Patch Summary to Slack
Stay on top of software patch compliance by automatically posting Jamf patch summaries to Slack.
This helps IT and security teams quickly identify outdated installs and take action—without logging into Jamf.

✅ Prerequisites
• A Jamf Pro API key with permissions to read software titles and patch summary
• A Slack app or incoming webhook URL with permission to post messages to your desired channel

🔍 How it works
• Manually trigger the flow or Add a webhook
• Fetch a list of software titles from Jamf Pro
• Filter to select the software you're tracking (e.g. Chrome, Edge)
• Retrieve the patch summary for that software (latest version, up-to-date, out-of-date counts)
• Format the summary into Slack Block Kit
• Post the formatted summary into a Slack channel

⚙️ Set up steps
• Takes ~5–10 minutes to configure
• Set your server BaseURL variable in the Set Node
• Add your Jamf Pro API credentials in the HTTP Request nodes (Get & Retrieve)
• Set the target software ID in the Filter node
• Add your Slack webhook URL or token in the final HTTP node
• Optional: Adjust Slack formatting inside the Function node

## 📊 Basic Information

- **Workflow ID:** 5529
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1444
- **Downloads:** 144
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5529)

## 👤 Author

- **Name:** Jean-Marie Rizkallah 
- **Username:** @mrrobot

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **httpRequest** (×2)
- **filter** 
- **stickyNote** (×7)
- **set** (×2)
- **code** 
- **manualTrigger** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
