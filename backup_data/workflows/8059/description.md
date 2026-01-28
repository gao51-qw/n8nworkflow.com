# 🗂️ Auto-Create Airtable CRM Records for Zoom Attendees

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
