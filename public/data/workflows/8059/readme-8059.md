# Auto-create Airtable CRM records for Zoom attendees

> # 🗂️ Auto-Create Airtable CRM Records for Zoom Attendees

This workflow automatically logs every Zoom meeting attendee into an Airtable CRM — capturing their details for sales follow-up, reporting, or onboarding.

---

## ⚙️ How It Works
1. **Zoom Webhook** → Captures participant join event.  
2. **Normalize Data** → Extracts attendee name, email, join/leave times.  
3. **Airtable** → Saves/updates record with meeting + contact info.  

---

## 🛠️ Setup Steps
### 1. Zoom
- Create a Zoom App with **`meeting.participant_joined`** event.  
- Paste workflow webhook URL.

### 2. Airtable
- Create a base called **CRM**.  
- Table: **Attendees**.  
- Columns:  
  - Meeting ID  
  - Topic  
  - Name  
  - Email  
  - Join Time  
  - Leave Time  
  - Duration  
  - Tag  

### 3. n8n
- Replace `YOUR_AIRTABLE_BASE_ID` + `YOUR_AIRTABLE_TABLE_ID` in the workflow.  
- Connect Airtable API key.  

---

## 📊 Example Airtable Row
| Meeting ID | Topic         | Name     | Email              | Join Time            | Duration | Tag      |
|------------|--------------|----------|--------------------|----------------------|----------|----------|
| 999-123-456 | Sales Demo   | Sarah L. | sarah@email.com    | 2025-08-30T10:02:00Z | 45 min   | New Lead |

---

⚡ With this workflow, every Zoom attendee becomes a structured CRM record automatically.


## 📊 Basic Information

- **Workflow ID:** 8059
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 153
- **Downloads:** 15
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8059)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **airtable** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
