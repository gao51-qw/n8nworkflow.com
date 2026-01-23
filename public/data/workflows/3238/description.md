**Instantly access NFT metadata, collections, traits, contracts, and ownership details from OpenSea!** This workflow integrates **GPT-4o-mini AI**, **OpenSea API**, and **n8n automation** to provide **structured NFT data** for traders, collectors, and investors.  

## **How It Works**  
1. **Receives user queries** via Telegram, webhooks, or another connected interface.  
2. **Determines the correct API tool** based on the request (e.g., user profile, NFT metadata, contract details).  
3. **Retrieves data from OpenSea API** *(requires API key)*.  
4. **Processes the information** using an AI-powered NFT insights engine.  
5. **Returns structured insights** in an easy-to-read format for quick decision-making.  

## **What You Can Do with This Agent**  
🔹 **Retrieve OpenSea User Profiles** → Get **user bio, links, and profile info**.  
🔹 **Fetch NFT Collection Details** → Get **collection metadata, traits, fees, and contract info**.  
🔹 **Analyze NFT Metadata** → Retrieve **ownership, rarity, and trait-based pricing**.  
🔹 **Monitor NFTs Owned by a Wallet** → Track **all NFTs under a specific account**.  
🔹 **Retrieve Smart Contract Data** → Get **blockchain contract details for an NFT collection**.  
🔹 **Identify Valuable Traits** → Fetch **NFT trait insights and rarity scores**.  

## **Example Queries You Can Use**  
✅ _"Get OpenSea profile for `0xA5f49655E6814d9262fb656d92f17D7874d5Ac7E`."_  
✅ _"Retrieve details for the 'Azuki' NFT collection."_  
✅ _"Fetch metadata for NFT #5678 from 'Bored Ape Yacht Club'."_  
✅ _"Show all NFTs owned by `0x123...` on Ethereum."_  
✅ _"Get contract details for NFT collection 'CloneX'."_  

## **Available API Tools & Endpoints**  
1️⃣ **Get OpenSea Account Profile** → `/api/v2/accounts/{address_or_username}` _(Retrieve user bio, links, and image)_  
2️⃣ **Get NFT Collection Details** → `/api/v2/collections/{collection_slug}` _(Get collection-wide metadata)_  
3️⃣ **Get NFT Metadata** → `/api/v2/chain/{chain}/contract/{address}/nfts/{identifier}` _(Retrieve individual NFT details)_  
4️⃣ **Get NFTs Owned by Account** → `/api/v2/chain/{chain}/account/{address}/nfts` _(List all NFTs owned by a wallet)_  
5️⃣ **Get NFTs by Collection** → `/api/v2/collection/{collection_slug}/nfts` _(Retrieve all NFTs from a specific collection)_  
6️⃣ **Get NFTs by Contract** → `/api/v2/chain/{chain}/contract/{address}/nfts` _(Retrieve all NFTs under a contract)_  
7️⃣ **Get Payment Token Details** → `/api/v2/chain/{chain}/payment_token/{address}` _(Fetch info on payment tokens used in NFT transactions)_  
8️⃣ **Get NFT Traits** → `/api/v2/traits/{collection_slug}` _(Retrieve collection-wide trait data)_  

## **Set Up Steps**  
1. **Get an OpenSea API Key**  
   - Sign up at [OpenSea API](https://docs.opensea.io/reference/api-keys) and request an API key.  
2. **Configure API Credentials in n8n**  
   - Add your OpenSea API key under **HTTP Header Authentication**.  
3. **Connect the Workflow to Telegram, Slack, or Database (Optional)**  
   - Use **n8n integrations** to send alerts to **Telegram, Slack, or save results to Google Sheets, Notion, etc.**  
4. **Deploy and Test**  
   - Send a query (e.g., `"Azuki latest sales"`) and receive instant NFT market insights!  

**Unlock powerful NFT analytics with AI-powered OpenSea insights—start now!**  
