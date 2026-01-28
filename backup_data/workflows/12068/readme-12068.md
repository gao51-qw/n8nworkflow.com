# Aggregate web product reviews and sentiment with Decodo and Google Gemini

> ## What Problem Does It Solve?
- Brands and marketers spend hours manually searching Google for product reviews.
- Reading through multiple websites to gauge general sentiment is tedious and inefficient.
- It is difficult to spot recurring customer complaints or praises without aggregating data.
- This workflow solves these by:
  - Instantly searching and scraping review content from the web.
  - Using AI to read and score the sentiment of every review found.
  - Generating a consolidated "Executive Summary" with key quotes and actionable advice.

## How to Configure It
**Telegram Setup**
- Connect your Telegram Bot credentials in n8n.
- Set the **Get Message** node to watch for text messages.

**Search & Scraping (Decodo)**
- Connect your **Decodo** credentials (requires a Web Scraping API plan).
- This handles both the Google Search and the content extraction.

**AI Setup**
- Add your **Google Gemini** API key.
- The prompts are pre-configured to act as a "Strict Data Analyst," but you can edit the system prompt in the AI Agent node to match your preferred tone.

## How It Works
- **Trigger:** You send a company or product name (e.g., "XQ Pharma") to your Telegram bot.
- **Search:** The workflow uses Decodo to Google search for "[Name] reviews" and extracts the top URL results.
- **Scrape:** It visits the review pages and strips away the HTML code to get clean text.
- **Analyze (Loop):** The first AI Agent reads the text and determines the sentiment (Positive/Neutral/Negative) and key topics.
- **Report:** A second AI Agent collects all the analysis pieces and writes a final summary containing a **Sentiment Score**, **Customer Voice** (direct quotes), and an **Actionable Verdict**.
- **Delivery:** The final report is sent back to you as a Telegram message.

## Customization Ideas
- **Change the Source:** Modify the search query to target specific platforms (e.g., "site:reddit.com [Product] reviews").
- **Change the Output:** Send the final report to a **Slack channel** or **Email** for your team to see.
- **Database Logging:** Save the "Actionable Verdict" and sentiment scores into **Notion** or **Airtable** to track brand reputation over time.
- **Competitor Analysis:** Use it to research competitor products instead of your own to find their weaknesses.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 12068
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2
- **Downloads:** 0
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12068)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **splitInBatches** 
- **stickyNote** (×5)
- **telegramTrigger** 
- **set** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **telegram** 
- **@decodo/n8n-nodes-decodo.decodo** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
