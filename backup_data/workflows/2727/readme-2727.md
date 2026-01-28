# Display ServiceNow incident details in Slack using slash commands

> #### **Who is this for?**
This workflow is designed for teams using Slack for communication and ServiceNow for incident management. It simplifies incident lookup by enabling team members to fetch incident details directly within Slack via a Slash Command.

#### **What problem is this workflow solving?**
Manually switching between Slack and ServiceNow to retrieve incident details can be time-consuming and disrupt workflow efficiency. This workflow bridges the two platforms, providing instant access to critical incident information in Slack, saving time, and improving response efficiency.

#### **What this workflow does?**
The workflow listens for a Slash Command in Slack that includes an incident ID, extracts the ID from the incoming payload, queries ServiceNow for the corresponding incident details, and sends a formatted response back to Slack. Depending on the query result, it can:
- Display incident details (e.g., ID, description, severity, and priority).
- Notify the user if no matching incident is found.
- Alert the user if there’s an issue connecting to ServiceNow.

#### **Setup**
1. **Slack Setup:**
   - Create a Slash Command in Slack with the appropriate endpoint URL.
   - Configure the command to send a POST request to the webhook endpoint of this workflow.
   - For details on how to setup the Slack app using Slash commands and n8n, [check out this video](https://youtu.be/z4JuK4qPJ1E). 

2. **ServiceNow Setup:**
   - Create or use an existing account with the necessary permissions to access incident data.
   - Configure the `ServiceNow` node with your ServiceNow credentials.

3. **n8n Workflow Activation:**
   - Deploy and activate the workflow in your n8n instance.
   - Ensure all nodes are properly configured and connected.

#### **How to customize this workflow to your needs**
- **Modify Incident Query Parameters:** Adjust the query logic in the `Search For Incident in ServiceNow` node to include additional filters or data points based on your organization’s needs.
- **Slack Response Customization:** Customize the Slack response template to display additional incident details or to match your team’s tone and style.
- **Error Handling:** Enhance the error handling nodes to include more detailed logs or send alerts to a dedicated Slack channel.

## 📊 Basic Information

- **Workflow ID:** 2727
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1076
- **Downloads:** 107
- **Created:** 2025/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2727)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **serviceNow** 
- **respondToWebhook** (×3)
- **stickyNote** (×3)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
