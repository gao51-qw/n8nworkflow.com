
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
