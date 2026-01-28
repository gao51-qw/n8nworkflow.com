# Capture website form submissions to Notion CRM database

> ## ⚡️ How It Works

This workflow captures form submissions from your website, formats the data, and automatically creates a new entry in your Notion CRM database. It eliminates manual copy-pasting and keeps your leads or requests organised in one place.



## 🛠 Setup Steps
	1.	Webhook Node
	•	Create a webhook in n8n.
	•	Connect your website form to POST submissions to this webhook URL.
	2.	Code Node
	•	Formats the incoming data to match your Notion database structure.
	•	You can customise the fields in the code to suit your specific form inputs.
	3.	Notion Node (Create Page)
	•	Connect your Notion account.
	•	Choose your target database.
	•	Map each field from the Code node output to your Notion database properties.
	4.	Test
	•	Submit a test form entry.
	•	Confirm the data appears correctly in Notion.

⸻

## 👥 Who It’s For

✅ Freelancers collecting project inquiries
✅ Agencies managing client onboarding forms
✅ Business owners wanting organised lead capture
✅ Teams that use Notion as their central CRM or task manager
✅ Anyone tired of manually transferring form data into Notion


## 📊 Basic Information

- **Workflow ID:** 5505
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1064
- **Downloads:** 106
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5505)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **notion** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
