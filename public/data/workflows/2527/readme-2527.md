# SharePoint list fetch with OAuth token

> ## Who is this template for?

This template is designed for teams who need to automate data retrieval from SharePoint lists using n8n. It is ideal for users who want to authenticate via OAuth and then use the token to access SharePoint API endpoints, pulling in list data directly into n8n.

## How it works

The template first generates an OAuth token using the Microsoft OAuth API. This token is then used to authenticate requests to the SharePoint List API, allowing the workflow to fetch data from a specified SharePoint list. By following the n8n workflow, the user can configure the necessary credentials and endpoints to automate SharePoint data access securely.

## Setup steps

**Step 1:** Replace {tenant_id}, {client_id}, and {client_secret} with your Azure AD details for OAuth authentication.

**Step 2:** Specify the SharePoint list API endpoint in the template (under "SharePoint List Fetch" node).

**Step 3:** Configure the SharePoint list URL and make adjustments for specific data fields if necessary.

## 📊 Basic Information

- **Workflow ID:** 2527
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 4293
- **Downloads:** 429
- **Created:** 2024/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2527)

## 👤 Author

- **Name:** Aditya Gaur
- **Username:** @autom8r

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **httpRequest** (×2)
- **scheduleTrigger** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
