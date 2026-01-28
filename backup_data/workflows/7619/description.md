Automatically clean up Trello boards by deleting any cards labeled **“Mark for Deletion.”**  

This workflow checks all cards on your chosen Trello board, looks for the **Mark for Deletion** label, and removes those cards automatically — keeping your boards tidy without manual effort.  



## ⚙️ Setup Instructions

### 1️⃣ Connect Trello (Developer API)
1. Get your **API key**: https://trello.com/app-key  
2. Generate a **token** (from the same page → **Token**)
3. In n8n → **Credentials → New → Trello API**, paste **API Key** and **Token**, save.  
4. Open each Trello node (**Get Board**, **Get Lists**, **Get Cards**) and select your Trello credential.


### 2️⃣ Add Your Board URL to “Get Board”
1. Copy your Trello board URL (e.g., `https://trello.com/b/DCpuJbnd/administrative-tasks`).  
2. Open the **Get Board** node → **Resource: Board**, **Operation: Get**.  
3. In **ID**, choose **URL** mode and paste the **board URL**.  
   - The node will resolve the board and output its `id` → used by **Get Lists** / **Get Cards**.

## 📬 Contact
📧 [rbreen@ynteractive.com](mailto:rbreen@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)
