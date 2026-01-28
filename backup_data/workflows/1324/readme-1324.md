# Find emails with Dropcontact on Typeform submission

> This workflow automatically finds verified and nominative email and all information (with Dropcontact) to prospect properly from a Typeform.

![workflow-screenshot](fileId:563)

- **Typeform Trigger**: This node triggers the workflow when a new Typeform is submitted.

- **Dropcontact**: This node fetches the new contact information and returns the data of the person and the company associated with the email address, job function, and all legal information.
- **Airtable - List**: This will list all the entries from your table in order to check if the subscriber is new or not.
- **If**: Does the contact exist in your Airtable yet?
- **Set**: Set values on the Airtable values
- **Airtable Update**: This node updates your record with new and up-to-date data
- **Airtable - Create**: This node creates a new record when the subscriber is a new lead
- **Slack**: This node sends an alert when the record is added or updated

## 📊 Basic Information

- **Workflow ID:** 1324
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 600
- **Downloads:** 60
- **Created:** 2021/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1324)

## 👤 Author

- **Name:** Pauline
- **Username:** @pauline

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **typeformTrigger** 
- **slack** (×2)
- **airtable** (×3)
- **set** (×2)
- **dropcontact** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
