# Collect viral Instagram AI art with GPT-4 analysis and Telegram delivery

> ## Who is this for?

This template is perfect for:
- **AI art enthusiasts** who want to stay updated on trending AI-generated artwork
- **Content curators** looking to automate art discovery
- **Japanese-speaking users** who want translated captions
- **Social media managers** tracking AI art trends across platforms

## What this workflow does

This workflow automatically collects viral AI art posts from Instagram and delivers them to your Telegram with Japanese translations. It runs daily and filters only high-engagement posts to ensure quality content.

**Key Features:**
- 📸 Collects from 4 AI art hashtags (#AIart, #midjourney, #stablediffusion, #aiartwork)
- 🔥 Filters viral posts only (100+ likes threshold)
- 🇯🇵 Auto-translates captions to Japanese via DeepL
- ⚠️ Sends error alerts to Telegram if something goes wrong
- ⏱️ Built-in rate limiting to avoid API blocks

## How it works

1. **Schedule Trigger** - Runs daily at 18:00
2. **Instagram Scraping** - Apify collects posts from multiple AI art hashtags
3. **Viral Filter** - Only posts with 100+ likes and valid captions pass through
4. **Translation** - DeepL translates captions from English to Japanese
5. **Image Download** - Fetches the post image
6. **Telegram Delivery** - Sends photo with translated caption, likes count, and source link
7. **Rate Limiting** - 3-second delay between posts to avoid API limits

## Setup Requirements

- **Apify account** - Sign up at [apify.com](https://apify.com) for Instagram scraping
- **DeepL API key** - Get free API access at [deepl.com/pro-api](https://www.deepl.com/pro-api)
- **Telegram Bot** - Create via [@BotFather](https://t.me/botfather) and get your Chat ID

## How to set up

1. Import this workflow into n8n
2. Set up credentials:
   - Connect your Apify account
   - Add your DeepL API key
   - Configure Telegram Bot token
3. Replace `YOUR_TELEGRAM_CHAT_ID` with your actual Chat ID in both Telegram nodes
4. (Optional) Adjust the viral threshold in the Filter node
5. (Optional) Modify hashtags in the Apify node
6. Activate the workflow

## How to customize

- **Change hashtags:** Edit the `directUrls` array in the Apify node
- **Adjust viral threshold:** Change the `100` value in the Filter node
- **Change schedule:** Modify the trigger time in the Schedule Trigger node
- **Change language:** Update the `translateTo` parameter in the DeepL node
- **Modify caption format:** Edit the caption template in the Telegram node
```



## 📊 Basic Information

- **Workflow ID:** 11421
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 41
- **Downloads:** 4
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11421)

## 👤 Author

- **Name:** suzuki
- **Username:** @kaori

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **@apify/n8n-nodes-apify.apify** 
- **googleSheets** (×4)
- **merge** 
- **if** (×3)
- **set** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **code** (×2)
- **deepL** 
- **httpRequest** 
- **slack** (×2)
- **wait** 
- **telegram** (×3)
- **errorTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
