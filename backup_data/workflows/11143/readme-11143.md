# Send personalized occasion wishes with AI, Google Sheets and Gmail

> ## Overview: Automated Occasion Wisher 
**How it works** 
- Runs daily to check if today matches any birthday, anniversary, or special occasion in your Google Sheet
- AI Agent reads the sheet and returns a list of users having a special occasion to wish with details and a personalized wishing message
- If there is no one to wish, no email is sent. If there are multiple people to wish, multiple personalized emails are sent

**Setup steps** 

- Connect your Google Sheet containing columns as: Name, Occasion_Date, Email,	Occasion_Type, Relationship, Personal_Note
- Insert the AI prompt ensuring strict JSON output (list format only)
- Configure the Email node for sending the final message

**Customization**

- Edit AI prompt to change message tone, length, or emojis
- Add support for multiple reminder styles (e.g., early notification)
- Extend with logging, Slack alerts, or saving sent email history


## 📊 Basic Information

- **Workflow ID:** 11143
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 137
- **Downloads:** 13
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11143)

## 👤 Author

- **Name:** Arbaz Asif
- **Username:** @arbaz

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **dateTime** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTool** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
