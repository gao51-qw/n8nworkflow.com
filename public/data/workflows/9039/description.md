## 🔐 Human-in-the-Loop Approval Flow (n8n + Postgres + Telegram)

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
