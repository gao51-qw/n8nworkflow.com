# Extract structured data from Brave Search with Bright Data MCP & Google Gemini

> ![BraveSearchWithBrightDataMCP.png](fileId:1418)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for
The Brave Search Structured Data Extractor workflow is designed for professionals and teams that need high-quality, structured insights from Brave search results in real time. Whether you're performing market research, tracking competitors, training AI models, or powering content engines, this workflow offers a robust and automated solution.

This workflow is tailored for:

**Market Researchers** - Who analyze trends across multimedia channels

**AI Developers** - Who require clean, structured datasets for model fine-tuning

**SEO & Content** - Analysts looking to monitor visibility across news, images, and videos

**Media Researchers** - Curating timely and relevant information across formats

**Automation Engineers** - Integrating search insights into downstream workflows

### What problem is this workflow solving?
Traditional web scraping and search result parsing is fragmented, inconsistent, and prone to errors, especially when dealing with multimedia (images, videos, news) data from search engines. This workflow provides:

- Centralized Brave search data extraction across all content types. Switches the search execution based upon the type of search that is being set. ex: news, images, videos, all

- Automated structured data transformation using Google Gemini

- Unified output persistence and notification across disk, webhook, and Google Sheets

### What this workflow does

**Input Configuration**

- Define your Brave search query

- Set the search type: videos, images, news, or all

- Configure your Bright Data MCP zone

**Bright Data MCP Search Execution**

- Initiates a Brave search via Bright Data MCP using the correct URL pattern for each search type

- Returns raw HTML of search results

**Google Gemini LLM** 

- Structured Data Extraction

- Transforms raw results into structured data (e.g., title, URL, source, snippet)

**Output Handling**

- Save to disk (e.g., JSON or CSV file)

- Send Webhook notification with structured data (e.g., Slack, internal dashboards)

- Store in Google Sheets for team-wide access or dashboarding

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

![MCPClientAccount.png](fileId:1417)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

**Enhance Output Analysis**
Add additional LLM prompts for topic classification, sentiment scoring, or trend forecasting.

**Output Format Options**
Choose to output CSV, Markdown, or HTML reports based on your integration target.

**Schedule Automation**
Trigger the workflow on a schedule (daily/weekly) to keep monitoring topical content.





## 📊 Basic Information

- **Workflow ID:** 4497
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 327
- **Downloads:** 32
- **Created:** 2025/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4497)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **n8n-nodes-mcp.mcpClient** (×4)
- **switch** 
- **stickyNote** (×5)
- **googleSheets** 
- **function** 
- **readWriteFile** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
