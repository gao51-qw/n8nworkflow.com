# Automated stock analysis reports with technical & news sentiment using GPT-4o

> Stock Analysis Agent (Hebrew, RTL, GPT-4o)


### Overview ###

Get comprehensive stock analysis with this AI-powered workflow that provides actionable insights for your investment decisions. On a weekly basis, this workflow:

- Analyzes stock data from multiple sources (Chart-img, Twelve Data API, Alphavantage)
- Performs technical analysis using advanced indicators (RSI, MACD, Bollinger Bands, Resistance and Support Levels)
- Scans financial news from Alpha Vantage to capture market sentiment
- Uses OpenAI's GPT-4o to identify patterns, trends, and trading opportunities
- Generates a fully styled, responsive HTML email (with proper RTL layout) in Hebrew
- Sends detailed recommendations directly to your inbox

**Perfect for investors, traders, and financial analysts who want data-driven stock insights - combining technical indicators with news sentiment for more informed decisions.**

### Setup Instructions ###

**Estimated setup time:**
- 15 minutes

**Required credentials:**
- OpenAI API Key
- Chart-img API Key (free tier)
- Twelve Data API Key (free tier)
- Alpha Vantage API Key (free tier)
- SMTP credentials (for email delivery)

**Steps:**

1. Import this template into your n8n instance.
2. Add your API keys under credentials.
3. Configure the SMTP Email node with: Host (e.g., smtp.gmail.com), Port (465 or 587), Username (your email), Password (app-specific password or login).
4. Activate the workflow.
5. Fill in the Form.
6. **Enjoy!** (Check your Spam mailbox)

### Customization Tips ###

- Modify the analysis timeframe (daily, weekly, monthly)
- Add integrations with trading platforms or portfolio management tools
- Adjust the recommendation criteria based on your risk tolerance

### Why Use This? ###
This is more than just stock data. It's an intelligent financial assistant that combines technical analysis with market sentiment to provide actionable recommendations - automatically.

### Important Note: ###
This report is being generated automatically and does not constitute an investment recommendation. **Please consult a licensed investment advisor before making any investment decisions.**

## 📊 Basic Information

- **Workflow ID:** 3790
- **Complexity:** advanced
- **Node Count:** 45
- **Views:** 73353
- **Downloads:** 7335
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3790)

## 👤 Author

- **Name:** Elay Guez
- **Username:** @elay96

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **html** 
- **emailSend** 
- **code** (×6)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **set** (×4)
- **httpRequest** (×6)
- **executeWorkflowTrigger** 
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 45 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
