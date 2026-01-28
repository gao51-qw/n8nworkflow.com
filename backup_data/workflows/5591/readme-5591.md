# Daily website data extraction with Firecrawl and Telegram alerts

> 🔥 Automated Daily Firecrawl Scraper with Telegram Alerts
Get structured insights scraped daily from the web using Firecrawl’s AI extraction engine — then send them directly to your Telegram chat.

🧰 What this workflow does:
This workflow automatically scrapes specific structured data from any webpage every day at a scheduled time using the Firecrawl API, checks if results are returned, and then sends the formatted results to Telegram.

For step-by-step video tutorials of n8n builds, check out my channel:
https://www.youtube.com/@Automatewithmarc

🧭 How It Works:
🕐 Schedule Trigger (Daily at 6PM)
Starts the workflow every day at a set time.

🌐 Firecrawl POST Request
Sends a custom extraction prompt and schema to Firecrawl, targeting any list of URLs you provide.

⏳ 30 Seconds Wait
Waits to give Firecrawl enough time to complete processing.

📥 GET Firecrawl Result
Fetches the extraction results using the request ID.

🔁 Loop with IF Node
Checks whether data is returned. If not, waits another 15 seconds and retries.

🧹 Format & Clean (Set Node)
Prepares and formats the extracted result into a readable message.

📲 Telegram Message Node
Delivers the structured data directly to your Telegram channel or group.

🔧 Requirements:
✅ Firecrawl API Key (Header Auth)

✅ Telegram Bot Token & Chat ID

💡 Use Cases:
Extract structured data (like product info or events) from niche websites
Automate compliance monitoring or intelligence gathering
Create market alert bots with real-time info delivery

🛠 Customization Ideas:
Swap Telegram with Gmail, Discord, or Slack

Expand schema to include more complex nested fields

Add a Google Sheet node to log daily scraped data

Integrate with a summarizer or language model for intelligent summaries

Ready to automate your web intelligence gathering?
🧠 Let Firecrawl do the scraping — and let this workflow do the rest.

## 📊 Basic Information

- **Workflow ID:** 5591
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2199
- **Downloads:** 219
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5591)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **set** 
- **scheduleTrigger** 
- **if** 
- **wait** (×2)
- **stickyNote** (×6)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
