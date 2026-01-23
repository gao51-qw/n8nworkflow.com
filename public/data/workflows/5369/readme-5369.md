# Automated stock sentiment analysis with Google Gemini and EODHD News API

> Stay ahead of the market with this powerful, automated workflow that performs real-time sentiment analysis on stock market news. By leveraging the advanced capabilities of Google Gemini, this solution provides you with actionable insights to make informed investment decisions.

This workflow is designed for investors, traders, and financial analysts who want to automate the process of monitoring news and gauging market sentiment for specific stocks. It seamlessly integrates with Google Sheets for input and output, making it easy to track a portfolio of stocks.

### **Key Features & Benefits**

  * **Automated Daily Analysis:** The workflow is triggered daily, providing you with fresh sentiment analysis just in time for the market open.
  * **Dynamic Stock Tracking:** Easily manage your list of tracked stocks from a simple Google Sheet.
  * **AI-Powered Insights:** Utilizes Google Gemini's sophisticated language model to analyze news content for its potential impact on stock prices, including a sentiment score and a detailed rationale.
  * **Comprehensive News Aggregation:** Fetches the latest news articles from EODHD for each of your specified stock tickers.
  * **Error Handling & Validation:** Includes built-in checks for invalid stock tickers and formats the AI output for reliable data logging.
  * **Centralized Reporting:** Automatically logs the sentiment score, rationale, and date into a Google Sheet for easy tracking and historical analysis.

### **How It Works**

This workflow follows a systematic process to deliver automated sentiment analysis:

1.  **Scheduled Trigger:** The workflow begins each day at a specified time.
2.  **Fetch Stock Tickers:** It reads a list of stock tickers from your designated Google Sheet.
3.  **Loop and Fetch News:** For each ticker, it retrieves the latest news articles using the EODHD API.
4.  **AI Sentiment Analysis:** The collected news articles are then passed to a Google Gemini-powered AI agent. The agent is prompted to act as a stock sentiment analyzer, evaluating the news and generating:
      * A **sentiment score** from -1 (strong negative) to 1 (strong positive).
      * A detailed **rationale** explaining the basis for the score.
5.  **Data Formatting & Validation:** The AI's output is parsed and validated to ensure it is in the correct JSON format.
6.  **Log to Google Sheets:** The final sentiment score and rationale are appended to your Google Sheet, alongside the corresponding stock ticker and the current date.

### **Nodes Used**

  * Schedule Trigger
  * Google Sheets
  * SplitInBatches
  * HttpRequest (EODHD)
  * If
  * Code (JavaScript)
  * AI Agent (LangChain)
  * Google Gemini Chat Model

This workflow is a valuable tool for anyone looking to harness the power of AI for financial market analysis. Deploy this automated solution to save time, gain a competitive edge, and make more data-driven trading decisions.


## 📊 Basic Information

- **Workflow ID:** 5369
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 6973
- **Downloads:** 697
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5369)

## 👤 Author

- **Name:** Raz Hadas
- **Username:** @raz-hadas

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **httpRequest** 
- **splitInBatches** 
- **googleSheets** (×3)
- **if** (×2)
- **code** (×2)
- **scheduleTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
