# Extract, summarize & analyze Amazon price drops with Bright Data & Google Gemini

> ![Extract, Summarize, Sentiment Analysis of Price Drops for Amazon Products via Bright Data.png](fileId:1435)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for
This n8n-powered automation uses Bright Data's MCP Client to extract real-time data from a price drop site listing the amazon products, including price changes and related product details. 

The extracted data is enriched with structured data transformation, content summarization, and sentiment analysis using Google Gemini LLM.

The Amazon Price Drop Intelligence Engine is designed for:

- **Ecommerce Analysts** who need timely updates on competitor pricing trends

- **Brand Managers** seeking to understand consumer sentiment around pricing

- **Data Scientists** building pricing models or enrichment pipelines

- **Affiliate Marketers** looking to optimize campaigns based on dynamic pricing

- **AI Developers** automating product intelligence pipelines


### What problem is this workflow solving?

This workflow solves several key pain points:

**Reliable Scraping**: Uses Bright Data MCP, a managed crawling platform that handles proxies, captchas, and site structure changes automatically.

**Insight Generation**: Transforms unstructured HTML into structured data and then into human-readable summaries using Google Gemini LLM.

**Sentiment Context**: Goes beyond raw pricing data to reveal how customers feel about the price change, helping businesses and researchers measure consumer reaction.

**Automated Reporting**: Aggregates and stores data for easy access and downstream automation (e.g., dashboards, notifications, pricing models).

### What this workflow does

**Scrape price drop site with Bright Data MCP**

The workflow begins by scraping targeted price drop site for Amazon listings using Bright Data's Model Context Protocol (MCP). 

You can configure this to target:

**Structured Data Extraction**

Once the HTML content is retrieved, Google Gemini is employed to:

- Parse and structure the product information (title, price, discount, brand, ratings)

**Summarization & Sentiment Analysis**

The extracted data is passed through an LLM chain to:

- Generate a concise summary of the product and its recent price movement

- Perform sentiment analysis on user reviews and public perception

**Store the Results**

- Save to disk for archiving or bulk processing

- Updated in a Google Sheet, making it instantly shareable with your team or integrated into a BI dashboard


### Pre-conditions

1. Knowledge of Model Context Protocol (MCP) is highly essential. Please read this blog post - [model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
2. You need to have the [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the **Setup** section below.
3. You need to have the Google Gemini API Key. Visit [Google AI Studio](https://aistudio.google.com/)
3. You need to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)
4. You need to install the [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)

### Setup
1. Please make sure to setup n8n locally with MCP Servers by navigating to [n8n-nodes-mcp](https://www.youtube.com/watch?v=NUb73ErUCsA)
2. Please make sure to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)  on your local machine.
3. Sign up at [Bright Data](https://brightdata.com/).
4. Create a Web Unlocker proxy zone called mcp_unlocker on Bright Data control panel.
5. Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
6. In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
7. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.

![MCPClientAccount.png](fileId:1434)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

- **Target different platforms**: Switch Amazon for Walmart, eBay, or any ecommerce source using Bright Data’s flexible scraping infrastructure.

- **Enrich with more LLM tasks**: Add brand tone analysis, category classification, or competitive benchmarking using Gemini prompts.

- **Visualize output**: Pipe the Google Sheet to Looker Studio, Tableau, or Power BI.

- **Notification integrations**: Add Slack, Discord, or email notifications for price drop alerts.

## 📊 Basic Information

- **Workflow ID:** 4611
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 984
- **Downloads:** 98
- **Created:** 2025/6/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4611)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n-nodes-mcp.mcpClient** (×3)
- **set** 
- **stickyNote** (×6)
- **splitOut** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **merge** 
- **googleSheets** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
