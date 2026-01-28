# Monitor stuck tasks in Monday.com with automated Slack alerts

> ## 🧑‍💻 Description
This workflow checks a Monday.com board/group for items with **Status = "Stuck"** and sends a Slack alert (e.g., to a user or channel). Great for nudging owners on blocked work without manual chasing.

---

## ⚙️ Setup Instructions

### 1️⃣ Connect Monday.com Node
1. In **Monday.com** → go to your **Admin → API**  
   - Copy your **Personal API Token**  
   - Docs: [Generate Monday API Token](https://developer.monday.com/api-reference/docs/authentication)  
2. In **n8n** → **Credentials → New → Monday.com API**  
   - Paste your token and save.  
3. Open the **Get many items** node → choose your credential → set your **Board ID** and **Group ID** (these must match where your items live).

### 2️⃣ Connect Slack API
1. Create an app → [https://api.slack.com/apps](https://api.slack.com/apps)  
2. **OAuth & Permissions** → add scopes:  
   - `chat:write` (send messages)  
   - `channels:read`, `groups:read`, `users:read` (to look up channels and users)  
3. **Install** the app to your workspace → copy the **Bot User OAuth Token**  
4. In **n8n** → **Credentials → New → Slack OAuth2 API** → paste token and save  
5. In the **Slack** node (“Alert Team”), select your Slack credential and pick a **user** or **channel**.

---

## 🧠 How it works
- **Get many items** (Monday.com): pulls items from your board/group  
- **Set Columns**: maps item fields (Name, Status, Due Date)  
- **Filter for Stuck Items**: keeps only items where `Status = "Stuck"`  
- **Alert Team** (Slack): posts a message like `"&lt;Item Name&gt; task is stuck"`

---

## ✅ Tips
- Adjust the **Status** column index/field mapping if your board uses a different column order or a custom status label.  
- Point the Slack node to a **channel** (for team visibility) or a **user** (for direct nudges).  
- Add a **Schedule Trigger** if you want automatic daily/weekly checks.

---

## 📬 Contact
Need help mapping custom columns or routing alerts by owner?

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7737
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 157
- **Downloads:** 15
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7737)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **mondayCom** 
- **stickyNote** (×4)
- **set** 
- **filter** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
