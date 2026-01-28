**Gain full visibility into decentralized exchanges using CoinMarketCap’s DEXScan API—powered by AI.**  

This workflow is part of the **CoinMarketCap AI Analyst system** and delivers real-time and historical insights on spot trading pairs, DEX liquidity, trading activity, and OHLCV data across chains like Ethereum, Polygon, Solana, and more.

Use this workflow as a sub-agent triggered by a parent supervisor workflow, or run it manually with inputs `sessionId` and `message`.

---

## 🔧 Supported Tools (8 Total)

1. **DEX Metadata** → Static info (name, launch date, logo, URLs)  
2. **DEX Networks List** → All supported DEX chains + network metadata  
3. **DEX Listings Quotes** → Ranked list of DEXs with live trading volume, market share  
4. **DEX Pair Quotes (Latest)** → Real-time liquidity, price, and buy/sell stats  
5. **DEX OHLCV Historical** → Time-series data (daily/hourly/1m)  
6. **DEX OHLCV Latest** → Today’s price, volume, open/close for pairs  
7. **DEX Trades Latest** → Up to 100 recent trades for any DEX pair  
8. **DEX Spot Pairs Latest** → Active token pairs across DEXs + filters (volume, liquidity, volatility)

---

## Agent Architecture  
- **AI Model**: `gpt-4o-mini`  
- **Context Memory**: `Window buffer using sessionId`  
- **Trigger Input**: `message`, `sessionId`  
- **Execution**: Via `Execute Workflow` or parent AI supervisor  
- **Design**: Tool-based LangChain agent with CMC DEXScan endpoints  

---

## 💡 Use Cases  
🔹 Find top DEXs by 24h volume  
🔹 Get spot pairs with highest liquidity on a specific network  
🔹 Track historical OHLCV for Uniswap pairs  
🔹 View latest trades for SOL/USDC pool  
🔹 Analyze tax, pooled % and holders for specific pairs  
🔹 Filter pairs by 24h volume, percent change, liquidity, or number of transactions  

---

## ✅ Example Queries  
✅ _"Top 5 DEXs by 24h volume on Ethereum"_  
✅ _"Get historical OHLCV for SOL-USDC on Solana"_  
✅ _"Latest trades for a PancakeSwap pair"_  
✅ _"Show all spot pairs with over $500K in liquidity on Polygon"_  
✅ _"Retrieve metadata for Uniswap and SushiSwap"_  

---

## 🛠️ Setup Instructions  
1. **Get a CoinMarketCap API Key**  
   - Sign up at: [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/)  
2. **Add API Key to Credentials in n8n**  
   - Use `HTTP Header Auth` method  
3. **Trigger from Parent Workflow (Optional)**  
   - Use `Execute Workflow` and pass `message` and `sessionId`  
4. **Test Prompt Ideas**  
   - Try: _"Compare liquidity of Uniswap and Curve pairs on Ethereum"_

---

## Sticky Notes Included  

**DEXScan Agent Guide** – Workflow architecture + supported tools  

**Usage & API Call Examples** – Prompts, test inputs, setup flow  

**Error Codes + Licensing** – 400/401/429/500 troubleshooting, IP rights

---

## ✅ Final Notes  
This agent is part of the **CoinMarketCap AI Analyst System**, which includes multiple specialized agents for cryptocurrencies, exchanges, and community data. Visit [my Creator profile](https://n8n.io/creators/don-the-gem-dealer/) to find the full suite of tools.

---

**Master DEX analytics with AI—get powerful liquidity, trading, and pair insights in seconds.**

