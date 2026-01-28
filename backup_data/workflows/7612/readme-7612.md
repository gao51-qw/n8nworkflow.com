# Automated Trello Board Summarization with GPT-5-Nano

> This workflow pulls a Trello **board → lists → cards**, maps key fields (board, list, task names/descriptions), and asks OpenAI to **summarize the board**.

---

## ⚙️ Setup Instructions

### 1️⃣ Connect Trello (Developer API)
1. Get your **API key**: https://trello.com/app-key  
2. Generate a **token** (from the same page → **Token**), or use:  
   `https://trello.com/1/authorize?expiration=never&name=n8n&scope=read,write&response_type=token&key=YOUR_API_KEY`  
3. In n8n → **Credentials → New → Trello API**, paste **API Key** and **Token**, save.  
4. Open each Trello node (**Get Board**, **Get Lists**, **Get Cards**) and select your Trello credential.

### 2️⃣ Set Up OpenAI
1. Create an API key: https://platform.openai.com/api-keys  
2. (If needed) Add billing: https://platform.openai.com/settings/organization/billing/overview  
3. In n8n → **Credentials → New → OpenAI**, paste your key, save.  
4. In the **OpenAI Chat Model** node, pick your credential and model (e.g., `gpt-5-nano`).

### 3️⃣ Add Your Board URL to “Get Board”
1. Copy your Trello board URL (e.g., `https://trello.com/b/DCpuJbnd/administrative-tasks`).  
2. Open the **Get Board** node → **Resource: Board**, **Operation: Get**.  
3. In **ID**, choose **URL** mode and paste the **board URL**.  
   - The node will resolve the board and output its `id` → used by **Get Lists** / **Get Cards**.

---

## ▶️ Run
- Click **Execute Workflow**.  
- The final **Summarize Tasks** step returns a concise board summary.

---

## 📬 Contact
📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)


## 📊 Basic Information

- **Workflow ID:** 7612
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 371
- **Downloads:** 37
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7612)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)
- **trello** (×3)
- **set** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
