# Quick HubSpot contact lookup in Slack for sales & support teams

> ## How it works
This workflow starts when a user triggers a custom slash command in Slack. The workflow checks if a valid message (email address or HubSpot contact ID) was provided. Based on the input, it searches HubSpot for the contact either by email or by ID. Once the contact is found, the workflow formats the details into a clean, Slack-friendly message card and posts it back into the Slack channel.

## Step-by-step

**Start with Slack Slash Command**
- The workflow is triggered whenever someone uses a custom slash command in Slack.

- It checks if the user actually entered something (email or ID). If nothing is entered, the workflow stops with an error.

**Parse Search Input**
- The workflow cleans up the user’s input and determines whether it’s an email address or a HubSpot contact ID.

- This ensures the correct HubSpot search method is used.

**Search in HubSpot**

- If the input is an email → the workflow searches HubSpot by email.

- If the input is an ID → the workflow retrieves the contact directly using the HubSpot contact ID.

**Format Contact Info**
- The retrieved HubSpot contact details (name, email, phone, company, deal stage, etc.) are formatted into a Slack-friendly message card.

**Send Contact Info to Slack**
- Finally, the formatted contact information is posted back into the Slack channel, making it instantly visible to the user and team.

## Why use this?

- Quickly look up HubSpot contacts directly from Slack without switching tools.

- Works with both email addresses and HubSpot IDs.

- Provides a clean, structured contact card in Slack with key details.

- Saves time for sales and support teams by keeping workflows inside Slack.

- Runs automatically once set up — no extra clicks or manual searches.

## 📊 Basic Information

- **Workflow ID:** 8108
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8108)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **if** (×2)
- **stopAndError** 
- **code** (×3)
- **hubspot** (×2)
- **slack** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
