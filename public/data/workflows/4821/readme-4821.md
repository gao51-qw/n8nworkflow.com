# DNB company search & extract with Bright Data and OpenAI 4o mini

> ![DNB Company Search  Extract with Bright Data and Open AI 4o mini.png](fileId:1468)

### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for

The DNB Company Search & Extract workflow is designed for professionals who need to gather structured business intelligence from Dun & Bradstreet (DNB). 

It is ideal for:

- Market Researchers

- B2B Sales & Lead Generation Experts

- Business Analysts

- Investment Analysts

- AI Developers Building Financial Knowledge Graphs

### What problem is this workflow solving?

Gathering business information from the DNB website usually involves manual browsing, copying company details, and organizing them in spreadsheets. 

This workflow automates the entire data collection pipeline — from searching DNB via Google, scraping relevant pages, to structuring the data and saving it in usable formats.

### What this workflow does
This workflow performs automated search, scraping, and structured extraction of DNB company profiles using Bright Data’s MCP search agents and OpenAI’s 4o mini model. 

Here's what it includes:

**Set Input Fields**: 
Provide search_query and webhook_notification_url.

**Bright Data MCP Client (Search)**: 
Performs Google search for the DNB company URL.

**Markdown Scrape from DNB**: 
Scrapes the company page using Bright Data and returns it as markdown.

**OpenAI LLM Extraction**:

Transforms markdown into clean structured data.

Extracts business information (company name, size, address, industry, etc.)

**Webhook Notification**: 
Sends structured response to your provided webhook.

**Save to Disk**: 
Persists the structured data locally for logging or auditing.

### Pre-conditions

1. Knowledge of Model Context Protocol (MCP) is highly essential. Please read this blog post - [model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
2. You need to have the [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the **Setup** section below.
3. You need to have the Google Gemini API Key. Visit [Google AI Studio](https://aistudio.google.com/)
3. You need to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)
4. You need to install the [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)

### Setup

1. Please make sure to setup n8n locally with MCP Servers by navigating to [n8n-nodes-mcp](https://github.com/nerding-io/n8n-nodes-mcp)
2. Please make sure to install the Bright Data MCP Server [@brightdata/mcp](https://www.npmjs.com/package/@brightdata/mcp)  on your local machine.
2. Sign up at [Bright Data](https://brightdata.com/).
3. Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
4. Create a Web Unlocker proxy zone called mcp_unlocker on Bright Data control panel.
5. In n8n, configure the OpenAi account credentials.
6. In n8n, configure the credentials to connect with MCP Client (STDIO) account with the Bright Data MCP Server as shown below.

![MCPClientAccount.png](fileId:1467)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;.
7. Update the Set input fields for search_query and webhook_notification_url.
8. Update the file name and path to persist on disk.


### How to customize this workflow to your needs

- **Search Engine**: 
Default is Google, but you can change the MCP client engine to Bing, or Yandex if needed.

- **Company Scope**: 
Modify search query logic for niche filtering, e.g., "biotech startups site:dnb.com".

- **Structured Fields**: 
Customize the LLM prompt to extract additional fields like CEO name, revenue, or ratings.

- **Integrations**: 
Push output to Notion, Airtable, or CRMs like HubSpot using additional n8n nodes.

- **Formatting**: 
Convert output to PDF or CSV using built-in File and Spreadsheet nodes.

## 📊 Basic Information

- **Workflow ID:** 4821
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 380
- **Downloads:** 38
- **Created:** 2025/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4821)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **set** 
- **n8n-nodes-mcp.mcpClient** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **function** 
- **readWriteFile** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
