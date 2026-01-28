# Manage Webflow form submissions in Airtable

> **What this does**
This automation will create tables in your Airtable base and send Webflow form submissions as records in those tables. It keeps track of your Webflow forms with a Form Index table to ensure that form content does not get sent to the wrong table if you have Webflow forms with identical names.

**This is useful for**
Enhancing your Webflow form submission management. By sending structured data to your Airtable base you can do more with your Webflow forms.

**Usage guide**
[Full written and video guide](https://blog.kreonovo.co.za/create-tables-in-airtable-with-webflow-form-submissions/)

This automation is made to be as low effort as possible to start enhancing your Webflow forms.

Simply create credentials for Webflow and a Personal Access Token for your Airtable base and connect them to the relevant nodes. The guide demonstrates a realworld example using a Webflow template and breaksdown the flow and logic for all the nodes.

## 📊 Basic Information

- **Workflow ID:** 2057
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1049
- **Downloads:** 104
- **Created:** 2024/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2057)

## 👤 Author

- **Name:** kreonovo
- **Username:** @kreonovo

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **webflowTrigger** 
- **set** 
- **code** (×3)
- **if** (×2)
- **httpRequest** (×2)
- **airtable** (×4)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
