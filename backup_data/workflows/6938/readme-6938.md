# Automatically save & organize Outlook email attachments in OneDrive folders

> # Outlook to OneDrive
This workflow automates the process of saving binary attachments from Outlook emails into newly created folders in OneDrive. It's ideal for users who regularly receive files and need them organized into separate folders without manual intervention. Each folder is automatically named based on the email subject and the current timestamp, allowing all attachments from that email to be stored inside the corresponding folder. This is particularly useful for streamlining document workflows, improving file traceability, and reducing the time spent on repetitive tasks like organizing client submissions, invoices, or internal reports.

The configuration and setup of the workflow can be customized to meet the business or personal needs of the user. Its purpose is to automatically process binary attachments from Outlook emails and upload them to dynamically created folders in OneDrive.

# Overview
1. **Microsoft Outlook Trigger** – Monitors your inbox for new emails.
2. **Filter** – Ensures only emails with binary attachments proceed.
3. **Get Outlook Message** – Retrieves the full email and downloads attachments.
4. **Create Folder** – Makes a new folder in OneDrive based on the email subject and time.
5. **Split Out** – Extracts each binary attachment.
6. **Merge**– Combines folder and file data before upload.
7. **Upload File OneDrive** – Uploads each binary file into the new folder.

# Need Help? Have Questions?
For consulting and support, or if you have questions, please feel free to connect with me on [LinkedIn](www.linkedin.com/in/michael-gullo-46b3b7274) or [via email](michael.gullo@outlook.com). 


## 📊 Basic Information

- **Workflow ID:** 6938
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 7578
- **Downloads:** 757
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6938)

## 👤 Author

- **Name:** Michael Gullo
- **Username:** @mgullo

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **microsoftOutlookTrigger** 
- **filter** 
- **splitOut** 
- **microsoftOneDrive** (×2)
- **merge** 
- **stickyNote** (×2)
- **microsoftOutlook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
