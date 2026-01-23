# Export Jamf smart group membership to Slack as viewable CSV reports

> 🧩 Jamf Smart Group Membership to Slack
Automatically export Jamf smart group membership to Slack in CSV format.
Perfect for IT and security teams who need fast visibility into device grouping—without manually logging into Jamf.

Slack automatically parses the CSV, making it viewable directly in the chat—no download required.

✅ Prerequisites
• A Jamf Pro API key with permissions to read smart groups and computer details
• A Slack app or incoming webhook URL with permission to post messages to your desired channel

🔍 How it works
• Manually trigger the flow or connect it to a webhook
• Fetch the list of smart group IDs (set manually in the workflow)
• Loop over each group to get its members
• Use a sub-workflow to fetch detailed info for each device
• Convert the member list to CSV
• Post the CSV file to a Slack channel

⚙️ Set up steps
• Takes ~5–10 minutes to configure
• Set your Jamf BaseURL and group IDs in the Set nodes
• Add your Jamf Pro API credentials to the HTTP Request nodes
• Provide your Slack webhook token or channel ID in the Slack node
• Optional: Customize CSV fields or formatting as needed

## 📊 Basic Information

- **Workflow ID:** 6040
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 104
- **Downloads:** 10
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6040)

## 👤 Author

- **Name:** Jean-Marie Rizkallah 
- **Username:** @mrrobot

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **httpRequest** 
- **splitOut** 
- **code** 
- **webhook** 
- **convertToFile** 
- **set** (×3)
- **stickyNote** (×9)
- **executeWorkflow** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
