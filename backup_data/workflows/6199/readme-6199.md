# Automate client project onboarding with Google Drive, Gmail, and Slack notifications

> ## ⚙️ How it works
1. Workflow starts from a manual trigger or form submission with project details.
2. It extracts key input data like client name, email, project type, deadline, and brand folder (optional).
3. A Google Drive folder is automatically created inside a designated parent folder.
4. The shareable link of the newly created folder is generated.
5. A personalized email is composed and sent to the client using Gmail, including project details and folder link.

## 🛠️ Set up steps
1. **Google Drive Setup**:  
   - Connect your Google Drive credentials in n8n.  
   - Set the parent folder ID where all project folders should be created.

2. **Gmail Setup**:  
   - Connect a Gmail account with proper access.  
   - Customize the subject and message template in the Gmail node.

3. **Input Data Preparation**:  
   - Ensure the following input fields are provided:  
     - `client_name`  
     - `contact_email`  
     - `project_type`  
     - `deadline`  
     - `brand_drive_folder` (optional)

4. **Test & Deploy**:  
   - Use mock data or a test trigger to validate the workflow.  
   - Once confirmed, deploy it with the actual trigger (e.g. webhook, form submission).


## 📊 Basic Information

- **Workflow ID:** 6199
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 351
- **Downloads:** 35
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6199)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **googleDrive** 
- **stickyNote** (×3)
- **slack** 
- **gmail** 
- **set** 
- **googleSheetsTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
