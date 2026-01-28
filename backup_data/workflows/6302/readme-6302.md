# Store Gmail email details in MySQL database

> ## This workflow processes emails received in Gmail and saves detailed information about each email to a MySQL database.

### Before using, you need to have:
- Gmail credentials
- MySQL database credentials
- A table in your database with the following columns:
  - messageId (Gmail message ID)
  - threadId
  - snippet
  - sender_name (nullable)
  - sender_email
  - recipient_name (nullable)
  - recipient_email
  - subject (nullable)


### How it works:
- The Gmail Trigger listens for new emails (checked every minute).
- A Code Node extracts the following fields from each email:
  - Sender's name and email
  - Recipient's name and email
- The MySQL Node inserts the extracted data into your database.
- If an entry with the same sender email already exists, it updates the record with the new details.

### How to use:
- Make sure your database table has all required columns listed above.
- Select the appropriate table and configure the matching column (e.g., id) to avoid duplicates.

### Customizing this Workflow:
- You can further modify the workflow to store attachments, timestamps, labels, or any other Gmail metadata as needed.


## 📊 Basic Information

- **Workflow ID:** 6302
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 445
- **Downloads:** 44
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6302)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **code** 
- **mySql** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
