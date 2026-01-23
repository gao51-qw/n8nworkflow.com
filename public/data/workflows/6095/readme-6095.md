# Daily AI news summaries with Gemini 2.5 Flash to Telegram

> ## Get Daily AI News Briefings in Telegram with Gemini & n8n

Tired of sifting through endless articles to stay updated on Artificial Intelligence? This workflow transforms you into an intelligence analyst by automatically fetching the latest AI news, using Google's Gemini to create a professional summary, and delivering a polished briefing directly to your Telegram chat.

Stop chasing news and let the insights come to you\! 🚀

### 🚀 What this workflow does

  * **📰 Monitors an RSS Feed:** Automatically triggers whenever a new article is published on the specified AI news feed (`artificialintelligence-news.com`).
  * **🧠 Scrapes Article Content:** Uses [Jina AI](https://jina.ai/) to read and extract the full, clean text from the article link.
  * **🤖 Generates an AI Report:** Leverages the power of the **Google Gemini 2.5 Flash** model to analyze the article and generate a structured, insightful intelligence briefing based on a specialized prompt.
  * **📨 Delivers to Telegram:** Sends the final, perfectly formatted markdown report as a message to your chosen Telegram chat.

### 🛠️ What you'll need to get started

  * An **[n8n](https://n8n.io/)** instance (cloud or self-hosted).
  * **[Jina AI](https://jina.ai/) Credentials**: You will need an API key from Jina AI. You can get one from the [Jina AI website](https://jina.ai/).
  * **[Google Gemini](https://ai.google.dev/) Credentials**: You'll need an API key for the Gemini model. You can generate one for free from [Google AI Studio](https://aistudio.google.com/app/apikey).
  * **[Telegram Bot](https://www.google.com/search?q=https://n8n.io/integrations/n8n-nodes-base.telegram/) Credentials**: You will need a Telegram Bot Token and your destination Chat ID. You can learn how to get these from the [n8n Telegram documentation](https://docs.n8n.io/integrations/credentials/telegram/).

### ⚙️ How to use this workflow

1.  **Copy the workflow**: Click "Use template" to import this workflow into your n8n canvas.
2.  **Configure Jina AI Node**:
      * Select the "Read News from AI News Website" node.
      * In the "Credentials" section, add your Jina AI API key.
3.  **Configure Gemini Node**:
      * Select the "Gemini 2.5 Flash" node on the canvas.
      * In the "Credentials" section, add your Google Gemini API key.
4.  **Configure Telegram Node**:
      * Select the "Send a text message" node.
      * Add your Telegram API credentials.
      * In the "Chat ID" field, enter the specific chat, group, or channel ID where you want to receive the news briefings.
5.  **Activate the workflow**: Hit the "Activate" toggle in the top right corner. Your automated AI analyst is now live\!

### ✨ Bonus: Expand your intelligence briefing

The prompt in the "Generate Report" node is designed to synthesize information from multiple sources. You can easily expand this workflow to create even more comprehensive reports:

1.  **Add another RSS Feed**: Copy the "AI-News Feed" node and change the `Feed URL` to another source.
2.  **Connect the Nodes**: Drag the output of the new RSS feed node to the "Read News from AI News Website" node.
3.  **That's it\!** The workflow will now process articles from both feeds and the Gemini node will automatically identify common themes and unique stories as instructed in the prompt.


## 📊 Basic Information

- **Workflow ID:** 6095
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1669
- **Downloads:** 166
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6095)

## 👤 Author

- **Name:** Harsh Maniya
- **Username:** @harshmaniya1

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** 
- **rssFeedReadTrigger** 
- **jinaAi** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
