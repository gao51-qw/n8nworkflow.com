# Organize Email Attachments from Gmail to Structured Google Drive Folders

> # Automated Binary Data Extraction from Gmail to Google Drive Folder


This workflow is designed to automate the process of handling emails with binary attachments. It triggers when a new email arrives in a specified Gmail account (or can be configured with a similar email trigger) and is set to download any binary attachments. The workflow then filters the email to confirm it contains binary data (attachments). If attachments are present, it proceeds to retrieve the full email details, including all binary data.

A crucial step is the creation of a new Google Drive folder. This folder is dynamically named using the email's subject and the current timestamp, for example, "[Email Subject] - [Current Timestamp]". Following this, the workflow separates each individual attachment from the email. Finally, these attachments are uploaded into the newly created Google Drive folder, with their original filenames preserved. The overall purpose of this workflow is to automatically organize and store email attachments into a structured Google Drive folder system. This workflow is compatible with any type of binary data found in an email, as the filter is designed to detect any binary data, not just PDFs.


**How It Works**

1. **Trigger:** The workflow initiates when a new email arrives in a specified Gmail account. Alternatively, it can be configured with a similar email trigger.

2. **Download Attachments:** The workflow is set to automatically download any binary attachments from the incoming email.

3. **Filter Attachments:** The workflow then filters the email to confirm it contains binary data (attachments).

4. **Retrieve Full Email Details:** If attachments are present, the workflow proceeds to retrieve the complete details of the email, including all binary data.

5. **Create Google Drive Folder:** A new folder is created in Google Drive. This folder is dynamically named using the email's subject and the current timestamp (e.g., "[Email Subject] - [Current Timestamp]").

6. **Split Out Attachments:** Each individual binary attachment from the email is separated into its own item within the workflow.

7. **Upload to Google Drive:** Finally, these separated attachments are uploaded into the newly created Google Drive folder, retaining their original filenames.


**Need Help? Have Questions?**
For consulting and support, or if you have questions, please feel free to connect with me on [LinkedIn ](https://www.linkedin.com/in/michael-gullo-46b3b7274/) or email [michael.gullo@outlook.com](michael.gullo@outlook.com). 


## 📊 Basic Information

- **Workflow ID:** 4977
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 5263
- **Downloads:** 526
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4977)

## 👤 Author

- **Name:** Michael Gullo
- **Username:** @mgullo

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **googleDrive** (×2)
- **stickyNote** 
- **filter** 
- **gmail** 
- **merge** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
