# Monitor Furusato Nozei market trends with Google News, AI analysis and Slack reporting

> # Analyze Furusato Nozei trends from Google News to Slack

This workflow acts as a specialized market analyst for Japan's "Furusato Nozei" (Hometown Tax) system. It automates the process of monitoring related news, validating keyword popularity via search trends, and delivering a concise, strategic report to Slack.

By combining RSS feeds, AI agents, and real-time search data, this template helps marketers and municipal researchers stay on top of the highly competitive Hometown Tax market without manual searching.

## 👥 Who is this for?
- **Municipal Government Planners:** To track trending return gifts and competitor strategies.
- **E-commerce Marketers:** To identify high-demand keywords for Furusato Nozei portals.
- **Content Creators:** To find trending topics for blogs or social media regarding tax deductions.
- **Market Researchers:** To monitor the seasonality and shifting interests in the Hometown Tax sector.

## ⚙️ How it works
1. **News Ingestion:** The workflow triggers on a schedule and fetches the latest "Furusato Nozei" articles from Google News via RSS.
2. **AI Analysis & Extraction:** An AI Agent (using OpenRouter) summarizes the news cluster and identifies the most viable search keyword (e.g., "Scallops," "Travel Vouchers," or specific municipalities).
3. **Data Validation:** The workflow queries the Google Trends API (via SerpApi) to retrieve search volume history for the extracted keyword in Japan.
4. **Strategic Reporting:** A second AI Agent analyzes the search trend data alongside the keyword to generate a market insight report.
5. **Delivery:** The final report is formatted and sent directly to a Slack channel.

## 🛠️ Requirements
To use this workflow, you will need:
- **n8n** (Version 1.0 or later recommended).
- **OpenRouter API Key** (or you can swap the model nodes for OpenAI/Anthropic).
- **SerpApi Key** (Required to fetch Google Trends data programmatically).
- **Slack Account** (with permissions to post to a channel).

## 🚀 How to set up
1. **Configure Credentials:**
   - Add your OpenRouter API key to the Chat Model nodes.
   - Add your SerpApi key to the `Google Trends API` node.
   - Connect your Slack account in the `Send a message` node.
2. **Check the RSS Feed:**
   - The `RSS Read` node is pre-configured for "Furusato Nozei" (ふるさと納税). You can leave this as is.
3. **Regional Settings:**
   - The workflow is pre-set for Japan (`jp` / `ja`). If you need to change this, check the `Workflow Configuration` and `Google Trends API` nodes.
4. **Schedule:**
   - Enable the `Schedule Trigger` node to run at your preferred time (default is 9:00 AM JST).

## 🎨 How to customize
- **Change the Topic:** While this is optimized for Furusato Nozei, you can change the RSS feed URL to track other Japanese market trends (e.g., NISA, Inbound Tourism).
- **Swap AI Models:** The template uses OpenRouter, but you can easily replace the "Chat Model" nodes with OpenAI (GPT-4) or Anthropic (Claude) depending on your preference.
- **Adjust AI Prompts:** The AI prompts are currently in Japanese to match the content. You can modify the system instructions in the `AI Agent` nodes if you prefer English reports.

## 📊 Basic Information

- **Workflow ID:** 11128
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 56
- **Downloads:** 5
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11128)

## 👤 Author

- **Name:** 飯盛　正幹
- **Username:** @isakai

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **set** (×3)
- **httpRequest** 
- **aggregate** 
- **scheduleTrigger** 
- **rssFeedRead** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **code** 
- **if** 
- **noOp** 
- **slack** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
