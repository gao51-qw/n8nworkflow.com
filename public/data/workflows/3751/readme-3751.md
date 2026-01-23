# Real-time crypto news & sentiment analysis via Telegram with GPT-4o

> **Stay on top of the latest crypto news and market sentiment instantly, all inside Telegram!**  
This workflow aggregates articles from the top crypto news sources, filters for your topic of interest, and summarizes key news and market sentiment using **GPT-4o AI**. Ideal for **crypto traders, investors, analysts**, and **market watchers** needing fast, intelligent news briefings.

&gt; 💬 Just type a coin name (e.g., "Bitcoin", "Solana", "DeFi") into your Telegram AI Agent—and get a smart news digest.

---

## How It Works

1. **Telegram Bot Trigger**  
   - User sends a keyword (e.g., "Ethereum") of questions to the Telegram AI Agent.

2. **Keyword Extraction (AI-Powered)**  
   - An AI agent identifies the main topic for better targeting.

3. **News Aggregation**  
   - Pulls articles from 9 major crypto news RSS feeds:  
   
     - Cointelegraph  
     - Bitcoin Magazine  
     - CoinDesk  
     - Bitcoinist  
     - NewsBTC  
     - CryptoPotato  
     - 99Bitcoins  
     - CryptoBriefing  
     - Crypto.news  

4. **Filtering**  
   - Finds and merges articles relevant to the user's keyword.

5. **AI Summarization**  
   - **GPT-4o** generates a 3-part summary:
     1. News Summary  
     2. Market Sentiment Analysis  
     3. List of Article Links

6. **Telegram Response**  
   - Sends a structured, easy-to-read digest back to the user.

---

## 🔍 What You Can Do with This Workflow

🔹 Summarize breaking news for any crypto project or keyword  
🔹 Monitor real-time market sentiment on Bitcoin, DeFi, NFTs, and more  
🔹 Stay ahead of FUD, bullish trends, and major news events  
🔹 Quickly brief yourself or your team via Telegram  
🔹 Use it as a foundation for more advanced crypto alert bots

---

## ✅ Example User Inputs

✅ _"Bitcoin"_ → Latest Bitcoin news and sentiment summary  
✅ _"Solana"_ → Updates on Solana projects, price movements, and community trends  
✅ _"NFT"_ → Aggregated news about NFT markets and launches  
✅ _"Layer 2"_ → Insights on Optimism, Arbitrum, and other L2s  

---

## 🛠️ Setup Instructions

1. **Create a Telegram Bot**  
   - Use [@BotFather](https://t.me/BotFather) and obtain the Bot Token.

2. **Configure Telegram Credentials in n8n**  
   - Add your bot token under **Telegram API Credentials**.

3. **Configure OpenAI API**  
   - Add your OpenAI credentials for GPT-4o access.

4. **Update Telegram Send Node**  
   - In the **Telegram Send** node, replace the placeholder `chatId` with your real Telegram user or group chat ID.

5. **Deploy and Test**  
   - Start chatting with your bot: e.g., _"Ethereum"_ or _"DeFi"_.

---

## 📌 Workflow Highlights

- **9 major crypto news sources combined**
- **Smart keyword matching** with AI query parsing
- **Summarized insights** in human-readable format
- **Reference links** included for deeper reading
- **Instant delivery** via Telegram

---

🚀 **Get ahead of the crypto market—automate your news and sentiment monitoring with AI inside Telegram!**

## 📊 Basic Information

- **Workflow ID:** 3751
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 13401
- **Downloads:** 1340
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3751)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **rssFeedRead** (×9)
- **merge** 
- **code** (×2)
- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegram** 
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
