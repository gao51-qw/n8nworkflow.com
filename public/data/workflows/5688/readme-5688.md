# Send weekly engagement stats & raffle updates via WhatsApp using Airtable

> ## Scheduled Trigger:
Every X day at Y pm, the workflow is automatically triggered.

## Fetch User Data:
The workflow retrieves all user records from the "WhatsApp Engagement Database" in Airtable. Each record contains the user’s WhatsApp ID, current points, and the number of raffle vouchers.

## Personalized Message Preparation:
For each user, a personalized WhatsApp message is prepared. The message includes:

The user’s current point total

The number of raffle vouchers they have for the week

Encouragement to keep engaging for more chances to win

Information about the weekly raffle and available prizes

## Send WhatsApp Message:
The workflow sends this personalized message to each user via the Whapi API, using their WhatsApp ID.

## Result:
Every active user receives a weekly update about their engagement status, raffle tickets, and a motivational message to encourage further participation. This helps boost engagement and keeps users informed about their progress and chances in the weekly raffle.

## 📊 Basic Information

- **Workflow ID:** 5688
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 221
- **Downloads:** 22
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5688)

## 👤 Author

- **Name:** David w/ SimpleGrow
- **Username:** @davidxai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **httpRequest** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
