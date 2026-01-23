**Track NFT market trends, collections, and trades in real time—directly from Telegram!** This master workflow integrates the **OpenSea API**, **GPT-4o-mini AI**, and **Telegram**, allowing users to request natural-language NFT analytics and receive structured insights instantly.

Whether you're an NFT trader, collector, or market analyst, this Telegram-native assistant brings you **on-demand market intelligence—powered by OpenSea and AI.**

&gt; ⚠️ **Important:** This workflow **requires three sub-workflows** to function properly. These must be downloaded and published in your n8n instance.

---

## 🧩 Required Sub-Workflows  
To activate this template, download and publish the following workflows:

1. **[Analyze NFT Market Trends with AI-Powered OpenSea Analytics Agent Tool](https://n8n.io/workflows/3237-analyze-nft-market-trends-with-ai-powered-opensea-analytics-agent-tool)**  
2. **[Get Real-time NFT Insights with OpenSea AI-Powered NFT Agent Tool](https://n8n.io/workflows/3238-get-real-time-nft-insights-with-opensea-ai-powered-nft-agent-tool)**  
3. **[Get Real-time NFT Marketplace Insights with OpenSea Marketplace Agent Tool](https://n8n.io/workflows/3239-get-real-time-nft-marketplace-insights-with-opensea-marketplace-agent-tool)**  

📌 You can also find these by visiting my Creator profile:  
👉 **[https://n8n.io/creators/don-the-gem-dealer/](https://n8n.io/creators/don-the-gem-dealer/)**

---

## **How It Works**  
1. A **Telegram bot** receives a message (e.g., “Top sales for Azuki”).  
2. The AI router in this workflow determines which agent should process the request:  
   - **Marketplace Agent** → Listings, offers, and orders  
   - **Analytics Agent** → Sales volume, price trends, wallet behavior  
   - **NFT Agent** → Metadata, traits, ownership info  
3. The selected agent queries the **OpenSea API** using your API key.  
4. The response is processed using **GPT-4o-mini**, formatted, and sent back via Telegram.

---

## **What You Can Do with This Agent**  
🔹 **Discover undervalued NFTs** based on trait rarity and price  
🔹 **Track market trends** for any collection in real time  
🔹 **Compare collection performance** by volume, sales, and listings  
🔹 **Analyze flipping trends and whale activity** across wallets  
🔹 **Retrieve NFT ownership and metadata** instantly  
🔹 **View trait-specific offers** for insight into rarity-driven demand  

---

## **Example Queries You Can Use**  
✅ _"What are the cheapest NFTs in the Pudgy Penguins collection?"_  
✅ _"Get sales volume for Azuki and CloneX over the last 30 days."_  
✅ _"Who owns Bored Ape #456?"_  
✅ _"Show the best current offers for Moonbirds."_  

---

## **Set Up Steps**  
1. **Create a Telegram Bot**  
   - Use [@BotFather](https://t.me/BotFather) to create your bot and get the API token.  
2. **Get an OpenSea API Key**  
   - Apply for your API key via the [OpenSea Developer Portal](https://docs.opensea.io/reference/api-keys).  
3. **Configure n8n Credentials**  
   - Add your **Telegram Bot** and **OpenSea API Key** under *Credentials* in n8n.  
4. **Download Required Sub-Workflows**  
   - Install and publish the following workflows:  
     - [Analytics Agent Tool](https://n8n.io/workflows/3237-analyze-nft-market-trends-with-ai-powered-opensea-analytics-agent-tool)  
     - [NFT Agent Tool](https://n8n.io/workflows/3238-get-real-time-nft-insights-with-opensea-ai-powered-nft-agent-tool)  
     - [Marketplace Agent Tool](https://n8n.io/workflows/3239-get-real-time-nft-marketplace-insights-with-opensea-marketplace-agent-tool)  
5. **Deploy & Test**  
   - Chat with your Telegram bot. Try: _"Compare BAYC and Azuki volume"_ or _"Show listings for Doodles."_

---

## ✅ Final Notes  
&gt; If your queries don’t respond correctly, make sure all three sub-workflows are installed and **published**, not just saved.

---

🚀 **Dominate the NFT market with AI-powered OpenSea intelligence—right from your Telegram inbox!**
