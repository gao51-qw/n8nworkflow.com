# Create unique Jira tickets from Splunk alerts

> The workflow is an automated process designed for incident management and tracking, specifically by integrating Splunk alerts with a Jira ticketing system using n8n. The initial step in the workflow is a Webhook Trigger, which is set up to receive POST requests with data from Splunk to initiate the workflow. Once the workflow is triggered, the "Set Host Name" node cleans up the hostname received from Splunk, ensuring that it is alphanumeric for consistency and security purposes.

Subsequently, the "Search Ticket" node interacts with Jira through a Jira Query Language (JQL) request to locate any existing issues that match the sanitized hostname. The workflow splits at the "IF Ticket Not Exists" node, which checks for the presence of a key indicating a matching issue.

If an issue exists, the workflow proceeds to add a comment to the identified issue, and if not, it creates a new Jira issue. At the false path, the "Add Ticket Comment" node appends a new comment to the existing Jira issue, encapsulating details from the Splunk alert, such as the timestamp and the alert description.



## 📊 Basic Information

- **Workflow ID:** 1970
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 2647
- **Downloads:** 264
- **Created:** 2023/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1970)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** 
- **jira** (×3)
- **set** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
