# Create daily task status snapshots from Monday.com to Google Sheets

> This workflow pulls all tasks from your **Monday.com board** each day and logs them into a **Google Sheet**.  
It creates a daily snapshot of your project’s progress and statuses for reporting, tracking, or analysis.

---

## ⚙️ Setup Instructions  

### 1️⃣ Connect Monday.com API  
1. In **Monday.com** → go to **Admin → API**  
2. Copy your **Personal API Token**  
   - Docs: [Generate Monday API Token](https://developer.monday.com/api-reference/docs/authentication)  
3. In **n8n → Credentials → New → Monday.com API** → paste your token and save  

---

### 2️⃣ Prepare Your Google Sheet  
- Copy this template to your own Google Drive: [Google Sheet Template](https://docs.google.com/spreadsheets/d/1KRiAUbZP77dC_9x5pqrvcQvaAkUsoPXkZOZvfU69ILM/edit?gid=876214427#gid=876214427)  
- Add your data in rows 2–100.  
- Make sure each new task row starts with `Added = No`.  

#### Connect Google Sheets in n8n  
1. Go to **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Log in with your Google account and grant access  
3. In the workflow, select your **Spreadsheet ID** and the correct **Sheet Name**  

---

## 🧠 How it works  
- **Trigger**: Runs on click or via schedule (e.g., daily at 9 AM).  
- **Get many items (Monday.com)**: Fetches all tasks and their current status.  
- **Today's Date Node**: Adds the current date for snapshot logging.  
- **Map Fields**: Normalizes task name and status.  
- **Google Sheets (Append)**: Saves all tasks with status + date into your sheet for historical tracking.  

---

## 📬 Contact  
Need help customizing this (e.g., filtering by status, emailing daily reports, or adding charts)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7739
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 321
- **Downloads:** 32
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7739)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **set** 
- **merge** 
- **code** 
- **googleSheets** 
- **mondayCom** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
