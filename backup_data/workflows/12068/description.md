## What Problem Does It Solve?
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