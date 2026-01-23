# Gmail attachment backup to Google Drive

> # 📥 Gmail Attachment Backup to Google Drive — n8n Workflow

This n8n workflow automatically backs up email attachments from a specific sender in Gmail to a designated folder in Google Drive. It polls Gmail every minute and uploads any new attachments from matching emails to the specified Google Drive folder with a timestamped filename.

---

## 📌 Use Case

**Primary Purpose**:
- Automatically archive and back up attachments from a specific sender (e.g., `test@gmail.com`) to Google Drive for safekeeping, audit, or processing.

**Ideal For**:
- Automating invoice/receipt collection from a vendor
- Archiving reports from a monitored email address
- Creating a searchable historical log of attachments for compliance

---

## 🧭 Workflow Overview

Here’s how the workflow operates:

1. **🔔 Gmail Trigger**  
   Polls Gmail every minute for new messages from a specific sender (`test@gmail.com`).

2. **📩 Gmail Get Message**  
   Retrieves the full contents (including attachments) of the matched email.

3. **🧠 Code (JS)**  
   Iterates over all binary attachments in the email and restructures them as individual binary items to upload separately.

4. **📤 Google Drive**  
   Uploads each attachment to a target Google Drive folder (`DOcs`) with a timestamp and unique name.

5. **📍 Replace Me (NoOp)**  
   Placeholder node to indicate workflow completion. You can replace this with Slack notifications, logs, or alerts.

---

## 🔧 How to Use

### Prerequisites

- An [n8n](https://n8n.io/) instance (self-hosted or cloud)
- A connected Gmail account with OAuth2 credentials
- A connected Google Drive account with OAuth2 credentials
- Permissions for n8n to access your Gmail and Google Drive

### Setup Instructions

1. **Import the Workflow**  
   Copy and paste the workflow JSON into your n8n editor.

2. **Set Up Credentials**  
   Ensure the following credentials exist and are authorized:
   - `Gmail (for Gmail nodes)
   - `Google Drive (for Google Drive node)

3. **Configure the Folder**  
   Update the `folderId` in the Google Drive node if you want to use a different target folder.

4. **Activate the Workflow**  
   Enable the workflow in n8n. It will start polling Gmail every minute.

---

## ✏️ How to Customize

| Task | How to Customize |
|------|------------------|
| Change sender filter | Modify the `sender` field in the **Gmail Trigger** node |
| Adjust polling frequency | Change the `pollTimes` configuration in the trigger node |
| Change destination folder | Update `folderId` in the **Google Drive** node |
| Modify filename format | Edit the `name` expression in the **Google Drive** node |
| Add post-upload logic | Replace or extend the **Replace Me** node with notifications, logs, etc. |
| Process only specific attachments | Add logic in the **Code** node to filter by filename or MIME type |

---

## 📂 Filename Format Example

```
[MessageID]_[Timestamp]_backup_attachment
```

This naming convention ensures uniqueness and traceability back to the original message.

---

## ✅ Future Improvements

- **Email subject filtering** to narrow down the match
- **Slack/Email notifications** after upload
- **Deduplication check** to avoid reuploading the same files
- **Virus scan or file validation** before upload

---

## 💬 Support

For any issues using this workflow:
- Double-check your credential permissions
- Review n8n logs for Gmail or Google Drive errors
- Visit the [n8n community forums](https://community.n8n.io)

## 📊 Basic Information

- **Workflow ID:** 4243
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2968
- **Downloads:** 296
- **Created:** 2025/5/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4243)

## 👤 Author

- **Name:** Akhil Varma Gadiraju
- **Username:** @akhilv7

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **gmail** 
- **noOp** 
- **googleDrive** 
- **code** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
