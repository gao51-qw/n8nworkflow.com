# Personalized follow-up emails for Zoom attendees with GPT-4 and Gmail

> # 📧 Auto-Send AI Follow-Up Emails to Zoom Attendees

This workflow automatically emails personalized follow-ups to every Zoom meeting participant once the meeting ends.

---

## ⚙️ How It Works
1. **Zoom Webhook** → Captures meeting.ended event + participant list.  
2. **Normalize Data** → Extracts names, emails, and transcript (if available).  
3. **AI (GPT-4)** → Drafts short, professional follow-up emails.  
4. **Gmail** → Sends thank-you + recap email to each participant.

---

## 🛠️ Setup Steps
### 1. Zoom App
- Enable **`meeting.ended`** event.  
- Include participant email/name in webhook payload.  
- Paste workflow webhook URL.

### 2. Gmail
- Connect Gmail OAuth in n8n.  
- Emails are sent automatically per participant.

### 3. OpenAI
- Add your OpenAI API key.  
- Uses **GPT-4** for personalized drafting.

---

## 📊 Example Output
**Email Subject:**  
Follow-Up: Marketing Strategy Session

**Email Body:**  
Hi Sarah,
Thank you for joining our Marketing Strategy Session today.
Key points we discussed:

Campaign launch next Monday
Budget allocation approved
Need design assets by Thursday
Next steps: I'll follow up with the creative team and share the updated timeline.
Best,
David


---

⚡ With this workflow, every attendee feels valued and aligned after each meeting.


## 📊 Basic Information

- **Workflow ID:** 8058
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 190
- **Downloads:** 19
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8058)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **openAi** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
