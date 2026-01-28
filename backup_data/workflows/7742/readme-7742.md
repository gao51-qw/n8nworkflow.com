# Daily financial markets summaries with SerpAPI and OpenAI GPT

> This workflow fetches **live financial data** from SerpApi and generates a **daily market recap** using OpenAI.  

---

## ⚙️ Setup Instructions  

### 1️⃣ Set Up SerpApi Connection  
1. Create a free account at [SerpApi](https://serpapi.com/)  
2. Copy your **API Key** from the SerpApi dashboard  
3. In **n8n** → **Credentials → New → SerpApi**  
   - Paste your API Key → **Save**  
4. In the workflow, select your SerpApi credential in the **Finance Search** node.  

---

### 2️⃣ Set Up OpenAI Connection  
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

## 🧠 How it works  
- **SerpApi Finance Search** → pulls market data (example: S&P 500, ticker `^GSPC`)  
- **OpenAI Model** → summarizes into a daily report with a paragraph + key bullet points  

---

## 📬 Contact  
Need help customizing (e.g., pulling multiple tickers, exporting to Google Sheets, or sending Slack/Email updates)?  

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7742
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 241
- **Downloads:** 24
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7742)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **stickyNote** (×4)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
