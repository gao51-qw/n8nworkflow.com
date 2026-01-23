# Monitor security advisories

> This n8n workflow automates the monitoring and notification of Palo Alto Networks security advisories. It is triggered manually from within the n8n UI or scheduled to run daily at midnight using the Schedule Trigger. The workflow begins by fetching the latest security advisories from Palo Alto Networks' RSS feed.

Each advisory is then processed, and relevant information is extracted and categorized, including the advisory type, subject, and severity. The workflow checks the publication date of each advisory to ensure that it was posted within the last 24 hours, filtering out older advisories.

The workflow then splits into two paths based on the advisory type: GlobalProtect and Traps. In the GlobalProtect path, advisories related to GlobalProtect are identified and used to create Jira issues. The Jira issues include a summary with the advisory title and a description that provides details about the advisory, its severity, link, and publication date.

In the Traps path, advisories related to Traps are recognized, and dummy data (which should be replaced with logic to retrieve valid user emails) is generated for sample purposes. These email addresses are then used to send email notifications using the Gmail node. Each email's subject includes the type of advisory, while the body contains the advisory title and a link for more information.

Potential issues when setting up this workflow for the first time might involve configuring the Schedule Trigger to match the desired time zone. Additionally, ensuring that the Jira and Gmail nodes are configured correctly with the required credentials and email addresses is crucial. The placeholder for generating dummy data for email recipients should be replaced with logic to retrieve valid user emails. Proper error handling and testing with real and sample advisories can help identify and resolve any potential issues during setup.

## 📊 Basic Information

- **Workflow ID:** 1974
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 6579
- **Downloads:** 657
- **Created:** 2023/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1974)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **rssFeedRead** 
- **filter** (×2)
- **jira** 
- **n8nTrainingCustomerDatastore** 
- **stickyNote** (×6)
- **gmail** 
- **set** 
- **if** 
- **noOp** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
