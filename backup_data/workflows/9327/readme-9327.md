# Extract attendance from Google Drive images to sheets with VLM run AI & Gmail alerts

> ## 🧾 Attendance Extraction & Notification Pipeline (Google Drive + VLM Run + Google Sheets + Gmail)

### ⚙️ What This Workflow Does

This workflow automates daily attendance tracking by analyzing uploaded attendance images, extracting participant names via **VLM Run’s Execute Agent**, appending the structured data into **Google Sheets**, and emailing a formatted attendance summary through **Gmail**.

### 🧩 Requirements

- A Google Drive account with a designated folder for attendance image uploads.

- A VLM Run API account and your Execute Agent URL or API credentials.

- A Gmail account connected to n8n for sending notification emails.

- An n8n instance with the following credentials configured: **Google Drive, Google Sheets, Gmail, VLM Run (HTTP API Credential)**

### ⚡Quick Setup
1. Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard) for image parsing.
3. Link your Google Drive, Google Sheets and Gmail accounts in the credentials section.
4. In the “Google Drive Trigger” node, select the folder where attendance images will be uploaded.

5. In the “Append Row” node, connect your Google Sheet and map columns manually (e.g., Date, Total, Names…).
6. Add VLM Run execute agent endpoint.
7. Upload an image (whiteboard attendance photo or scanned sheet) to your Drive folder.
8. Wait for the automation to process and check your Google Sheet for results.
9. After each extraction and logging step, the Gmail Node sends an automated summary email. Email includes: 

	📅 Date of attendance
👥 Total participants detected
🧍 List of extracted names

### ⚙️ How It Works
1. **Monitor List Uploads** – Watches a Google Drive folder for new attendance images (e.g., whiteboard snapshots, scanned sheets).  
2. **Download List** – Downloads each new image automatically for AI processing.  
3. **VLM Run for Extraction** sends the image to **VLM Run Execute Agent**, which uses an AI model to detect and extract attendee names from the image.  
4. **Receive Attendance Data** – The **Webhook node (`check-attendance`)** receives structured JSON data from VLM Run in the format:  
   ```json
   {
     "majorDimension": "ROWS",
     "values": [
       ["2025-10-03", "6", "Camila Torres Rivera", "Mellissa Richmond", "Captioner Javier", "Siobhan", "Catherine Soler", "Anisah Anif"]
     ]
   }

5. The Google Sheets Node appends the structured attendance data to the selected sheet, maintaining a daily log for future reference.

6. The Gmail Node sends an automatic email summarizing attendance.

### 💡Why Use This Workflow

🔄 **Fully Automated:** No manual data entry required.

🧠 **AI-Powered Extraction:** Uses VLM Run to read and parse images with handwritten or typed text.

📊 **Centralized Logging:** Attendance data neatly organized in Google Sheets for future analysis.

📬 **Instant Notification:** Keeps stakeholders informed automatically after each session.

⚡ **Scalable:** Works with multiple folders, daily batches, or parallel sessions.


### 🛠️ How to Customize

You can tailor this workflow to match your organization’s needs:

| Area                     | Customization Options                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Drive Folder**         | Point to a different upload folder for each department or class.                                           |
| **Google Sheet Mapping** | Add more columns (e.g., “Class Name,” “Supervisor”) and map them in the Append Row node.                   |
| **Email Template**       | Modify the Gmail node’s subject and body to include custom formatting or logos.                            |
| **Trigger Schedule**     | Replace Google Drive Trigger with a **Cron Node** if you prefer scheduled checks instead of live watching. |
| **Data Validation**      | Add a **Function Node** to filter duplicates or incorrect entries before appending to Sheets.              |
| **Notification Options** | Send alerts via Slack, Telegram, or Microsoft Teams instead of Gmail if desired.                           |

### ⚠️ Community Node Disclaimer

This workflow uses community nodes (VLM Run) that may need additional permissions and custom setup.

## 📊 Basic Information

- **Workflow ID:** 9327
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 13
- **Downloads:** 1
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9327)

## 👤 Author

- **Name:** Shahrear
- **Username:** @shahrear

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **stickyNote** (×5)
- **webhook** 
- **googleDriveTrigger** 
- **googleDrive** 
- **httpRequest** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
