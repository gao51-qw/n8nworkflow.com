# Daily Trello task tracker with Google Sheets history log

> 
This workflow **pulls all tasks from your Trello board** every day and logs them into a **Google Sheet**.  
Use it to track project progress, due dates, and keep a daily snapshot of your board’s status.

---

## ⚙️ Setup Instructions

### 1️⃣ Connect Trello (Developer API)
1. Get your **API key**: [Trello App Key](https://trello.com/app-key)  
2. On the same page, generate a **Token** (click **Token**)  
3. In **n8n** → **Credentials → New → Trello API**, paste your **API Key** + **Token**, then save.  
4. Open each Trello node (**Get Board**, **Get Lists**, **Get Cards**) and select your Trello credential.  

---

## 🧠 How It Works
- **Schedule Trigger**: Runs daily (can be customized).  
- **Get Board → Get Lists → Get Cards**: Pulls every task, its list, due date, and description.  
- **Map Fields**: Normalizes the data (board name, list name, task name, description, due date, URL).  
- **Today's Date Node**: Adds a timestamp column so each run is logged.  
- **Google Sheets (Append)**: Appends all task rows into a sheet → creating a **daily history log**.

---

## 📬 Contact
Need help customizing this (e.g., filtering by list, or sending reports by email/Slack)?  

📧 **rbreen@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7673
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1163
- **Downloads:** 116
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7673)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **trello** (×3)
- **set** 
- **merge** 
- **code** 
- **scheduleTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
