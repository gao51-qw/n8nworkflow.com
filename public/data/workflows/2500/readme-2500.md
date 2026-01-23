# Create an automated workitem(incident/bug/userstory) in azure devops

> ## Who is this template for?

This template can be used by any automator who wants to **create a workitem(incident/user story/bugs)** in **azure devops** whenever an alert raised by systems.

## How it works

- Each time an alert raised in system( for ex: Elastic raises an alert for missing host or domain).
- Workflow reads an alert and creates a workitem in **azure devops**
- Workflow can be customized to send any required information as possible in **azure devops**

## Setup Instructions
- **Azure DevOps Organization and Project:** Make sure you have access to an Azure DevOps organization and a project where the work item will be created.
- **Personal Access Token (PAT):** You need a Personal Access Token with permissions to create work items. You can generate a PAT from the Azure DevOps user settings.


## 📊 Basic Information

- **Workflow ID:** 2500
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 0
- **Downloads:** 0
- **Created:** 2024/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2500)

## 👤 Author

- **Name:** Aditya Gaur
- **Username:** @autom8r

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **cron** 
- **elasticsearch** 
- **if** 
- **httpRequest** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
