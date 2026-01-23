# Create secure human-in-the-loop approval flows with Postgres and Telegram

> ## 🔐 Human-in-the-Loop Approval Flow (n8n + Postgres + Telegram)

### 👥 Who’s it for  
Teams that need a **manager approval step** before a ticket or request can change status. Great for internal ops, IT requests, or any workflow where “a human must sign off.”

### ⚡ What it does  
- 📨 Manager receives approval/reject link  
- 🔑 Link is signed with HMAC + expiry (secure & tamper-proof)  
- 🗄️ Postgres updates the ticket status  
- 📝 Audit trail records every decision  
- 📲 Telegram notifies both manager and requester  
- ⏰ Expired or invalid links trigger alerts and logs  

### 🛠 Requirements  
- n8n instance (self-hosted)  
- Postgres database (with `tickets`, `ticket_audit`, `workflow_errors`)  
- Telegram bot token  
- One environment variable set: `SECRET_KEY`  

### ⚙️ How to set up  
1. Set `SECRET_KEY` in `.env`  
2. Create Postgres tables (SQL provided)  
3. Add Telegram + Postgres credentials in n8n  
4. Import the workflow JSON  
5. Test by opening an approval/reject link in your browser  

### 🎨 How to customize  
- Change who the “manager” is (currently hardcoded in the Code node).  
- Swap Telegram for Slack or email notifications.  
- Extend the audit schema to include more metadata (IP, username).  


## 📊 Basic Information

- **Workflow ID:** 9039
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 278
- **Downloads:** 27
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9039)

## 👤 Author

- **Name:** Mohammad
- **Username:** @mohammad-1378

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **postgres** (×8)
- **if** (×4)
- **telegram** (×6)
- **switch** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
