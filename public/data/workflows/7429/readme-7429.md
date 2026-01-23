# Automate meeting minutes distribution with Google Sheets and Gmail

> ## Description
This workflow sends a summary of your meeting minutes via Gmail, directly from the notes stored in your Google Sheet.

## Context
Taking notes during meetings is important, but sharing them with the team can be time-consuming. This workflow makes it simple: just write down your meeting minutes in a Google Sheets, and n8n will automatically send them by email after each meeting.

## Who is this for?
Perfect for anyone who:

- Uses Google Sheets to keep track of meeting notes.

- Wants to automatically share minutes with teammates or stakeholders.

- Values speed, productivity, and automation.

## Requirements

- Google account.

- Google Sheets (with your meeting minutes).  You will need to setup  the required columns first : Topic, Status, Owner, Next Step.

- Gmail.

## How it works

⏰ Trigger starts after a new row is added in your Google Sheet.

📑 The meeting minutes are retrieved from the sheet.

📨 Gmail automatically sends the minutes to the configured recipients.

## Steps
🗒️ Use the sticky notes in the n8n canvas to:

![image.png](fileId:2137)
- Add your Google credentials (Sheets + Gmail).

- Define your sheet and recipient email addresses.

- Test the workflow to check if the minutes are sent.

- You’ll get this: An email containing your full meeting minutes, straight from your notes.

![image.png](fileId:2111)

## Tutorial video
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=AbnZSf19UHw)

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 📊 Basic Information

- **Workflow ID:** 7429
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 525
- **Downloads:** 52
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7429)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **manualTrigger** 
- **gmail** 
- **code** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
