# Automate Figma versioning and Jira updates with n8n webhook integration

> **How It Works:**
This n8n template automates the process of tracking design changes in Figma and updating relevant Jira issues. The template is triggered when a new version is created in Figma via a custom plugin. Once the version is committed, the plugin sends the design details to an n8n workflow using a webhook.

**The workflow then performs the following actions:**
Fetches the Jira issue based on the provided issue link from Figma.
Adds the design changes as a comment to the Jira issue.
Updates the status of the Jira issue based on the provided task status (e.g., "In Progress", "Done").
This streamlines the workflow, reducing the need for manual updates and ensuring that both the design team and developers have the latest design changes and task statuses in sync.

**How to Use It:**
Set up the Figma Plugin:

Install the Figma Commit Plugin from GitHub.
In the plugin, fill out the version name, design link, Jira issue link, and the task status.
Commit the changes in Figma, which will trigger the webhook.

**Set Up the n8n Workflow:**
Import this template into your n8n instance.
Connect the Figma Trigger node to capture version updates from Figma.
Configure the Jira nodes to retrieve the issue and update the status/comment based on the data sent from the plugin.

**Automate:**
Once the version is committed in Figma, the workflow will automatically update the Jira issue and keep both your Figma design and Jira tasks in sync!
By integrating Figma, Jira, and n8n through this template, you’ll eliminate manual steps, making collaboration between design and development teams more efficient.

## 📊 Basic Information

- **Workflow ID:** 2991
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 5767
- **Downloads:** 576
- **Created:** 2025/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2991)

## 👤 Author

- **Name:** omid dev
- **Username:** @omiddev

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** 
- **jira** (×2)
- **figmaTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
