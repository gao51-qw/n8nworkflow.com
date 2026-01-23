# Automate LinkedIn contact requests & icebreaker with Unipile and Google sheets

> ### Automate your LinkedIn Contact Requests and send them an Icebreaker

**Disclaimer: this workflow only works on self-hosted instances due to the file system usage.**

## Who is this for?
This n8n template is designed for professionals, recruiters, and marketers who must automate LinkedIn data population and contact request processes. It is particularly useful for those looking to streamline their outreach efforts and manage LinkedIn connections more efficiently.

## What problem is this workflow solving? / Use Case
The workflow addresses the challenge of manually managing LinkedIn connections and sending contact requests. By automating these tasks, users can save time, reduce errors, and ensure consistent follow-ups with potential clients, partners, or candidates.

## What this workflow does
This template automates the process of populating LinkedIn data and sending contact requests. After the connection request has been accepted, it sends a predefined "icebreaker". **Please note that you are limited to 150 invitations per week from a free LinkedIn account, but you can set up to 10 accounts for $55 / month**. 



## Setup
1. **You will have to create an account at Unipile**. You can use this link to create it: [Create your account](https://www.unipile.com/?utm_source=partner&utm_campaign=pollup_data)
2. **Import the Template**: Import the provided template into your n8n instance.
3. **Make a copy of the Google sheet into your Google account**. you can find a template [here](https://docs.google.com/spreadsheets/d/17D1Y-S-4C6iVHZAzlfe-rRvR1prezeLkfCgTfheBxUA/edit?gid=0#gid=0)
4. **Set Up**: Follow the instructions inside the workflow to create and configure the Workflow as needed.
5. **Test the Workflow**: Create a LinkedIn user and run the workflow to ensure it populates data and sends contact requests correctly.
## How to customize this workflow to your needs
- **Customize Contact Messages**: Personalize the contact request or Icebreaker messages to increase engagement.
- **Integrate with Other Tools**: Add additional nodes to integrate with CRM systems or other marketing tools for enhanced functionality.
- **Monitor and Optimize**: Regularly review the workflow's performance and make adjustments to improve efficiency and effectiveness.


By following this setup and customization guide, users can leverage this n8n template to enhance their LinkedIn outreach and connection management processes.

## 📊 Basic Information

- **Workflow ID:** 3258
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 986
- **Downloads:** 98
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3258)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **httpRequest** (×5)
- **stickyNote** (×13)
- **formTrigger** 
- **form** 
- **if** (×2)
- **googleSheets** (×6)
- **webhook** 
- **convertToFile** 
- **extractFromFile** (×3)
- **readWriteFile** (×4)
- **executeWorkflow** (×2)
- **set** (×2)
- **manualTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
