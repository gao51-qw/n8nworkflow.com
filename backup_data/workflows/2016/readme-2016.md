# Batch verify emails in Google Sheet with Icypeas

> This template can be used to verify email addresses with [Icypeas](https://www.icypeas.com/). Be sure to have an active account to use this template. 


**How it works**
This workflow can be divided into four steps :

    1. The workflow initiates with a manual trigger (On clicking ‘execute’).
    2. It reads your Google Sheet file.
    3. It converts your file to an array.
    4. It connects to your Icypeas account.
    5. It performs an HTTP request to verify the emails.

**Set up steps**
    1. You will need a formated Google sheet file with email addresses. 
    2. You will need a working icypeas account to run the workflow and get your API Key, API Secret and User ID.
    3. You will need email addresses to verify them.

## 📊 Basic Information

- **Workflow ID:** 2016
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 928
- **Downloads:** 92
- **Created:** 2023/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2016)

## 👤 Author

- **Name:** Corentin Ribeyre
- **Username:** @corentinribeyre

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **code** 
- **googleSheets** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
