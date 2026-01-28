**Analyze exchange data, market indexes, and community sentiment from CoinMarketCap—powered by AI.**  

This sub-agent provides access to exchange listings, token holdings, metadata, and high-level metrics like the **CMC 100 Index** and the **Fear & Greed Index**. It’s designed for use within your larger CoinMarketCap AI Analyst system or as a standalone workflow.

This agent can be triggered by a supervisor or manually used with `message` and `sessionId` inputs.

---

## Supported Tools (5 Total)

### 🔍 Exchange Map  
- Get CoinMarketCap IDs, names, and slugs for exchanges (used as lookup before deeper queries).  

### 🧾 Exchange Info  
- Metadata including launch date, social links, country, and operational status.  

### 💰 Exchange Assets  
- Token balances, wallet addresses, and total USD value held by a specific exchange.

### 📈 CoinMarketCap 100 Index  
- Constituents and weights of the CMC 100 Index, updated live.

### 😱 Fear & Greed Index  
- Market sentiment score updated daily, ranging from Extreme Fear to Extreme Greed.

---

## **What You Can Do with This Agent**  
🔹 **Map exchanges** to retrieve their ID and slug  
🔹 **Analyze exchange holdings** by token and blockchain  
🔹 **Pull metadata for major CEXs like Binance or Coinbase**  
🔹 **Compare global sentiment** using the Fear & Greed Index  
🔹 **Access index data** to understand CMC’s top 100 crypto asset breakdown

---

## **Example Queries You Can Use**  
✅ _"What is the latest Fear and Greed Index reading?"_  
✅ _"Get a list of all exchanges on CoinMarketCap."_  
✅ _"What tokens are held by Binance?"_  
✅ _"Retrieve metadata for Coinbase."_  
✅ _"Show me the top assets in the CMC 100 Index."_  

---

## Agent Architecture  
- **AI Brain**: GPT-4o-mini  
- **Memory**: Window buffer memory using `sessionId`  
- **Tools**: 5 API-connected nodes  
- **Trigger**: External input via `message` and `sessionId`  

---

## **Setup Instructions**  
1. **Get a CoinMarketCap API Key**  
   - Apply here: [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/)  
2. **Configure n8n Credentials**  
   - Use `HTTP Header Auth` to store your CoinMarketCap API key.  
3. **Optional: Trigger from a Supervisor**  
   - Connect to a parent agent using `Execute Workflow` with `message` and `sessionId` inputs.  
4. **Test Sample Prompts**  
   - _“Get all exchanges”_, _“Fetch CMC index”_, _“Show Binance token holdings”_

---

##  Sticky Notes Included  

**Exchange & Community Guide** – Explains agent purpose and component connections  

**Usage & Examples** – Walkthrough for sample use cases  

**Error Handling & Licensing** – Includes API error code reference and licensing details

---

## ✅ Final Notes  
This agent is part of a broader **CoinMarketCap AI Analyst System**. Visit [my Creator profile](https://n8n.io/creators/don-the-gem-dealer/) to download all available sub-agents and supervisor flows.

---

**Understand exchange behavior and community sentiment—automated with AI and CoinMarketCap.**