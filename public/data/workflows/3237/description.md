**Get deep insights into NFT market trends, sales data, and collection statistics—all powered by AI and OpenSea!** This workflow connects **GPT-4o-mini**, **OpenSea API**, and **n8n automation** to provide **real-time analytics** on NFT collections, wallet transactions, and market trends. It is ideal for **NFT traders, collectors, and investors** looking to make informed decisions based on structured data.  

## **How It Works**  
1. **Receives user queries** via Telegram, webhooks, or another connected interface.  
2. **Determines the correct API tool** based on the request (e.g., collection stats, wallet transactions, event tracking).  
3. **Retrieves data from OpenSea API** (requires API key).  
4. **Processes the information** using an AI-powered analytics agent.  
5. **Returns structured insights** in an easy-to-read format for quick decision-making.  

## **What You Can Do with This Agent**  
🔹 **Retrieve NFT Collection Stats** → Get **floor price, volume, sales data, and market cap**.  
🔹 **Track Wallet Activity** → Analyze **transactions for a given wallet address**.  
🔹 **Monitor NFT Market Trends** → Track **historical sales, listings, bids, and transfers**.  
🔹 **Compare Collection Performance** → View **side-by-side market data** for different NFT projects.  
🔹 **Analyze NFT Transaction History** → Check **real-time ownership changes** for any NFT.  
🔹 **Identify Market Shifts** → Detect **sudden spikes in demand, price changes, and whale movements**.  

## **Example Queries You Can Use**  
✅ _"Get stats for the Bored Ape Yacht Club collection."_  
✅ _"Show me all NFT sales from the last 24 hours."_  
✅ _"Fetch all NFT transfers for wallet 0x123...abc on Ethereum."_  
✅ _"Compare the last 3 months of sales volume for Azuki and CloneX."_  
✅ _"Track the top 10 wallets making the most NFT purchases this week."_  

## **Available API Tools & Endpoints**  
1️⃣ **Get Collection Stats** → `/api/v2/collections/{collection_slug}/stats` _(Retrieve NFT collection-wide market data)_  
2️⃣ **Get Events** → `/api/v2/events` _(Fetch global NFT sales, transfers, listings, bids, redemptions)_  
3️⃣ **Get Events by Account** → `/api/v2/events/accounts/{address}` _(Track transactions by wallet)_  
4️⃣ **Get Events by Collection** → `/api/v2/events/collection/{collection_slug}` _(Get sales activity for a collection)_  
5️⃣ **Get Events by NFT** → `/api/v2/events/chain/{chain}/contract/{address}/nfts/{identifier}` _(Retrieve historical transactions for a specific NFT)_  

## **Set Up Steps**  
1. **Get an OpenSea API Key**  
   - Sign up at [OpenSea API](https://docs.opensea.io/reference/api-keys) and request an API key.  
2. **Configure API Credentials in n8n**  
   - Add your OpenSea API key under **HTTP Header Authentication**.  
3. **Connect the Workflow to Telegram, Slack, or Database (Optional)**  
   - Use **n8n integrations** to send alerts to **Telegram, Slack, or save results to Google Sheets, Notion, etc.**  
4. **Deploy and Test**  
   - Send a query (e.g., `"Azuki latest sales"`) and receive instant NFT market insights!  

**Stay ahead in the NFT market—get real-time analytics with OpenSea’s AI-powered analytics agent!**  
