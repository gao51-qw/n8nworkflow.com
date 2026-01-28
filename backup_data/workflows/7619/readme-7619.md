# Automatic Trello board cleanup by removing cards with specific labels

> Automatically clean up Trello boards by deleting any cards labeled **“Mark for Deletion.”**  

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


## 📊 Basic Information

- **Workflow ID:** 7619
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 183
- **Downloads:** 18
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7619)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **trello** (×4)
- **splitOut** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
