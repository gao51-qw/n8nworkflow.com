# Send daily Malaysian weather alerts with Perplexity AI, Firecrawl and Telegram

> ## Automated Malaysian Weather Alerts with Perplexity AI, Firecrawl and Telegram

This n8n template automates daily weather monitoring by fetching official government warnings and searching for related news coverage, then delivering comprehensive reports directly to Telegram.

Use cases include monitoring severe weather conditions, tracking flood warnings across Malaysian states, staying updated on weather-related news, and receiving automated daily weather briefings for emergency preparedness.

### Good to know

- Firecrawl free tier allows limited scraping requests per hour. Consider the 3-second interval between requests to avoid rate limits.
- OpenAI costs apply for content summarization - GPT-4.1 mini balances quality and affordability.
- After testing multiple AI models (GPT, Gemini), **Perplexity Sonar Pro Search proved most effective** for finding recent, relevant weather news from Malaysian sources.
- The workflow focuses on major Malaysian news outlets like Utusan, Harian Metro, Berita Harian, and Kosmo.

### How it works

1. Schedule Trigger runs daily at 9 AM to fetch weather warnings from Malaysia's official data.gov.my API.
2. JavaScript code processes weather data to extract warning types, severity levels, and affected locations.
3. Search queries are aggregated and combined with location information.
4. Perplexity Sonar Pro AI Agent searches for recent news articles (within 3 days) from Malaysian news channels.
5. URLs are cleaned and processed one by one through a loop to manage API limits.
6. Firecrawl scrapes each news article and extracts summaries from main content.
7. All summaries and source URLs are combined and sent to OpenAI for final report generation.
8. The polished weather report is delivered to your Telegram channel in English.

### How to use

- The schedule trigger is set for 9 AM but can be adjusted to any preferred time.
- Replace the Telegram chat ID with your channel or group ID.
- The workflow automatically filters out "No Advisory" warnings to avoid unnecessary notifications.
- Modify the search query timeout and batch processing based on your API limits.

### Requirements

- OpenAI API key (get one at [https://platform.openai.com](https://platform.openai.com))
- Perplexity API via OpenRouter (get access at [https://openrouter.ai](https://openrouter.ai))
- Firecrawl API key (get free tier at [https://firecrawl.dev](https://firecrawl.dev))
- Telegram Bot token and channel/group ID

### Customizing this workflow

- **Expand news sources**: Modify the AI Agent prompt to include additional Malaysian news outlets or social media sources.
- **Language options**: Change the final report language from English to Bahasa Malaysia by updating the "Make a summary" system prompt.
- **Alert filtering**: Adjust the JavaScript code to focus on specific warning types (e.g., only severe warnings or specific states).
- **Storage integration**: Connect to Supabase or Google Sheets to maintain a historical database of weather warnings and news.
- **Multi-channel delivery**: Add more notification nodes to send alerts via email, WhatsApp, or SMS alongside Telegram.


## 📊 Basic Information

- **Workflow ID:** 12232
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12232)

## 👤 Author

- **Name:** Wan Dinie
- **Username:** @wandinie

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **telegram** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** 
- **noOp** 
- **code** (×2)
- **aggregate** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
