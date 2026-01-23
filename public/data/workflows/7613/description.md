Automatically pulls tasks from your Trello board and sends a daily summary to Slack.  
Perfect for staying on top of admin tasks, due dates, and project updates without leaving Slack.  


## ⚙️ Setup Instructions

### 1️⃣ Connect Trello (Developer API)
1. Get your **API key** here → [Trello App Key](https://trello.com/app-key)  
2. On the same page, generate a **Token** (click **Token**).  
3. In n8n → **Credentials → New → Trello API** → paste **API Key** + **Token**, then save.  
4. Open each Trello node (**Get Board**, **Get Lists**, **Get Cards**) and select your Trello credential.  

---

### 2️⃣ Connect Slack
1. Go to [Slack API Apps](https://api.slack.com/apps) and create a new app.  
2. Add **OAuth & Permissions** → include scopes like:  
   - `chat:write` (to send messages)  
   - `users:read` (if targeting specific users)  
3. Install the app to your workspace → copy the **Bot User OAuth Token**.  
4. In n8n → **Credentials → New → Slack OAuth2 API** → paste the token and save.  
5. In your **Slack node** (e.g., *Send a message*), select your Slack credential, and choose whether to send messages to a **channel** or a **user**.  

---

### 3️⃣ Add Your Board URL to “Get Board”
1. Copy your Trello board URL (e.g. `https://trello.com/b/DCpuJbnd/administrative-tasks`).  
2. Open the **Get Board** node → set:  
   - **Resource**: `Board`  
   - **Operation**: `Get`  
   - **ID** → choose **URL mode** and paste the board link.  
3. This node will return the board `id` → used by **Get Lists** / **Get Cards** nodes.  

---

## 📬 Contact
Need help customizing this workflow or building automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)  
