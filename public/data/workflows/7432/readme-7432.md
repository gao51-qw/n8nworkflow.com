# Instant Gmail notifications for Google Form submissions

> ## Description
Get a single Gmail notification immediately whenever someone submits your Google Forms. The workflow watches the Form-linked Google Sheets for new rows and sends a clean, readable email within about a minute—perfect for time-sensitive workflows.

## Context
Stay responsive to urgent requests without inbox overload. Get notified immediately when new submissions arrive, with all key details in one clean email.


## Who is this for?

- Teams collecting support requests, project inputs, or approvals.

- Anyone who needs to respond quickly to new form submissions.

- Perfect for time-sensitive workflows.

## Requirements

- Google account

- A Google Forms linked to a Google Sheets (Responses → “Link to Sheet”)

- Gmail account connected to n8n (OAuth)

## Steps
![image.png](fileId:2116)

🗒️ Use the sticky notes in the n8n canvas to:

- Create a Google Forms and link it to a Google Sheets.

- **Credentials**: Add/verify Google (Sheets) and Gmail credentials in n8n.


- Add Google Sheets Trigger node.


- Spreadsheet: your Form-linked sheet.

- **Polling interval**: every 1 minute (or adjust as needed).

- **Send Gmail**: Add Gmail node and set up recipient team inbox or on-call email.


- **Test & Activate**: Submit a sample form, wait 1 minute, confirm the email.

- **Make sure the workflow is always activated**

You’ll get this:
![image.png](fileId:2115)

A Gmail message with key details (requester, summary, priority, link to the sheet), easy to scan and act on.

## Tutorial video
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=kO7GdPOJMus)

## How it works

⏰ Trigger: workflow runs every time you get a request from the form (trigger checks every minute)

📝 Prepare: Format the submission into a concise message.


📨 Notify: Sends one Gmail email per submission


## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)



## 📊 Basic Information

- **Workflow ID:** 7432
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 657
- **Downloads:** 65
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7432)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **code** 
- **googleSheetsTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
