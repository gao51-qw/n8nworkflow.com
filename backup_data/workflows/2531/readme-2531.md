# Save Qualys reports to TheHive

> ![n8n](https://uploads.n8n.io/templates/n8n.png)

# Automate Report Generation with n8n & Qualys

## Introducing the Save Qualys Reports to TheHive Workflow—a robust solution designed to automate the retrieval and storage of Qualys reports in TheHive.

This workflow fetches reports from Qualys, filters out already processed reports, and creates cases in TheHive for the new reports. It runs every hour to ensure continuous monitoring and up-to-date vulnerability management, making it ideal for Security Operations Centers (SOCs).

**How It Works:**

- **Set Global Variables:** Initializes necessary global variables like `base_url` and `newtimestamp`. This step ensures that the workflow operates with the correct configuration and up-to-date timestamps. Ensure to change the `Global Variables` to match your environment. 
  
- **Fetch Reports from Qualys:** Sends a GET request to the Qualys API to retrieve finished reports. Automating this step ensures timely updates and consistent data retrieval.
  
- **Convert XML to JSON:** Converts the XML response to JSON format for easier data manipulation. This transformation simplifies further processing and integration into TheHive.
  
- **Filter Reports:** Checks if the reports have already been processed using their creation timestamps. This filtering ensures that only new reports are handled, avoiding duplicates.
  
- **Process Each Report:** Loops through the list of new reports, ensuring each is processed individually. This step-by-step handling prevents issues related to bulk processing and improves reliability.
  
- **Create Case in TheHive:** Generates a new case in TheHive for each report, serving as a container for the report data. Automating case creation improves efficiency and ensures that all relevant data is captured.
  
- **Download and Attach Report:** Downloads the report from Qualys and attaches it to the respective case in TheHive. This automation ensures that all data is properly archived and easily accessible for review.


**Get Started:**

- Ensure your [Qualys](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-creds-base.qualysApi) and [TheHive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehiveproject/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.theHiveProject) integrations are properly set up.
- Customize the workflow to fit your specific vulnerability management needs.


**Need Help?**

- Join the discussion on our Forum or check out resources on Discord!


Deploy this workflow to streamline your vulnerability management process, improve response times, and enhance the efficiency of your security operations.

## 📊 Basic Information

- **Workflow ID:** 2531
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1148
- **Downloads:** 114
- **Created:** 2024/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2531)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **filter** 
- **if** 
- **splitInBatches** 
- **wait** 
- **n8n** 
- **executeWorkflow** 
- **xml** 
- **splitOut** 
- **theHiveProject** (×2)
- **scheduleTrigger** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
