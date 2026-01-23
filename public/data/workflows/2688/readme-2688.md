# Hacker News throwback machine - see what was hot on this day, every year!

> This is a simple workflow that grabs HackerNews front-page headlines from *today's date across every year since 2007* and uses a little AI magic (Google Gemini) to sort 'em into themes, sends a neat Markdown summary on Telegram.

**How it works**

1.  Runs daily, grabs Hacker News front page for *this day* across every year since 2007.
2.  Pulls headlines & dates.
3.  Uses Google Gemini to sort headlines into topics & spot trends.
4.  Sends a Markdown summary to Telegram.

**Set up steps**

1.  Clone the workflow.
2.  Add your Google Gemini API key.
3.  Add your Telegram bot token and chat ID.

**Built on Day-01 as part of the [#100DaysOfAgenticAi](https://github.com/ibrhdotme/100DaysOfAgenticAi/)
Fork it, tweak it, have fun!**



## 📊 Basic Information

- **Workflow ID:** 2688
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 5428
- **Downloads:** 542
- **Created:** 2025/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2688)

## 👤 Author

- **Name:** ibrhdotme
- **Username:** @ibrhdotme

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **code** 
- **set** (×3)
- **splitOut** 
- **httpRequest** 
- **html** 
- **merge** 
- **aggregate** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
