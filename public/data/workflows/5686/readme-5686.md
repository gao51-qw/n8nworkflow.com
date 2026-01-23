# WhatsApp group onboarding with automated welcome messages & Airtable point system

> ## Receive Webhook Notification
The workflow starts when a webhook receives a POST request from Whapi, notifying that a new participant has joined a WhatsApp group.

## Filter the Event
The workflow checks two conditions:

The event is for the correct WhatsApp group (matching the specific group ID).

The action type is "add" (meaning a user was added to the group).

## Send Welcome Message
If both conditions are met, the workflow sends a personalized welcome message to the new participant via Whapi.
The message explains the group rules and how the user can earn points and participate in weekly raffles.

## Create Airtable Record
After sending the welcome message, the workflow creates a new record in the Airtable database for the new participant.
The record includes:

The participant’s WhatsApp ID

An initial engagement count of 100 points

The date of the last interaction (set to today)

## Result
Every new group member is automatically welcomed and registered in your engagement database with starter points, ready to participate in your group’s activities and rewards.

This workflow ensures new users are greeted, informed, and instantly included in your engagement tracking system.

## 📊 Basic Information

- **Workflow ID:** 5686
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 444
- **Downloads:** 44
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5686)

## 👤 Author

- **Name:** David w/ SimpleGrow
- **Username:** @davidxai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×5)
- **httpRequest** 
- **filter** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
