# Get Colombian peso to USD exchange rate with Telegram bot and AI date recognition

> # 📌 Request TRM (Colombian Peso to US Dollar exchange rate)

## 🎯 Objective

Retrieve the TRM (Colombian Peso to US Dollar exchange rate) for a specific date provided by the user via Telegram.

## 🔄 Summary Flow

1. 📨 **Telegram Message**  
   The user sends a text or audio message  to the Telegram Bot.

2. 🧠 **Date Extraction**  
   AI (OpenAI) is used to identify the date in `YYYY-MM-DD` format.

3. 📅 **Validation**  
   If the date is in the future, the user is notified that it is not valid.

4. 📡 **TRM Query**  
   The bot queries the open data API from the Colombian government.

5. 📥 **Result**  
   - ✅ If TRM data exists for that date → The bot replies to the user.  
   - ❌ If not → It searches up to 10 previous days for available data.

6. 📤 **Final Response**  
   The most recent available value is sent, or a message indicating no information is available.

## 🔗 Data Source

**datos.gov.co** – [TRM](https://www.datos.gov.co/)

## 📊 Basic Information

- **Workflow ID:** 4246
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 327
- **Downloads:** 32
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4246)

## 👤 Author

- **Name:** Juan Sanchez
- **Username:** @juansave

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegramTrigger** 
- **code** (×3)
- **if** (×3)
- **telegram** (×5)
- **httpRequest** (×2)
- **splitOut** 
- **splitInBatches** 
- **stickyNote** (×2)
- **filter** 
- **sort** 
- **limit** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
