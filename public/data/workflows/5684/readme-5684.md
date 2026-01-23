# Track WhatsApp group message activity with Airtable database

> ## This n8n workflow tracks user engagement in a specific WhatsApp group by capturing incoming messages via a Whapi webhook. 

It first filters messages to ensure they come from the correct group, then identifies the message type—text, emoji reaction, voice, or image. The workflow searches for the user in an Airtable database using their WhatsApp ID and increments their message count by one. It updates the Airtable record with the new count and the date of the last interaction. 

This automated process helps measure user activity and supports engagement initiatives like weekly raffles or rewards. The system is flexible and can be expanded to include more message types or additional actions. 

## Overall, it provides a seamless way to encourage and track user participation in your WhatsApp community.



## 📊 Basic Information

- **Workflow ID:** 5684
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 392
- **Downloads:** 39
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5684)

## 👤 Author

- **Name:** David w/ SimpleGrow
- **Username:** @davidxai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **if** 
- **noOp** 
- **airtable** (×2)
- **code** 
- **webhook** 
- **stickyNote** (×6)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
