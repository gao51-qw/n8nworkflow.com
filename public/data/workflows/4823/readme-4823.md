# Extract & search ProductHunt data with Bright Data MCP and Google Gemini AI

> ![AI Agent Driven ProductHunt Data Extract  Search with Bright Data  Google Gemini.png](fileId:1470)
### Notice
Community nodes can only be installed on self-hosted instances of n8n.

### Who this is for?

This workflow template enables intelligent data extraction from ProductHunt using Bright Data’s Model Context Protocol (MCP) and processes search results with Google Gemini.

This workflow is designed for individuals and teams who need automated, intelligent discovery and analysis of new tech products. It's especially valuable for:

- Startup Analysts & VC Researchers
- Growth Hackers & Marketers
- Recruiters & Tech Scouts
- Product Managers & Innovation Teams
- AI & Automation Enthusiasts

### What problem is this workflow solving?

Traditional product discovery on ProductHunt is constrained by limited descriptions and requires repeated manual validation through web searches. Manually extracting and enriching this data is slow, repetitive, and error-prone.

This workflow solves the problem by:

- Extracting real-time ProductHunt data using Bright Data’s MCP infrastructure to mimic real-user behavior and avoid blocks.

- Performing contextual searches on Google for a specific product on ProductHunt to gather use cases, reviews, and related information.

- Structuring results using Google Gemini LLM to provide human-readable insights and reduce noise.

- Delivering results seamlessly by saving output to disk, updating Google Sheets, and sending Webhook alerts.

### What this workflow does

**Input Field Node**

Define the ProductHunt category with the search term(s) you want to target. This is used to drive extraction and search operations.

**Agent Operation Node**

The agent performs two major tasks:

- Extract from ProductHunt
Retrieves trending products from ProductHunt using Bright Data MCP

- Contextual Google Search for the product the agent searches Google for deeper context, including:

	- Reviews

	- Competitor mentions

	- Real-world usage examples

**LLM Node (Google Gemini)**

- Analyzes and summarizes extracted web content

- Removes noise (ads, menus, etc.)

- Structures content into bullet points, insights, or JSON objects

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

![MCPClientAccount.png](fileId:1469)

Make sure to copy the Bright Data API_TOKEN within the Environments textbox above as API_TOKEN=&lt;your-token&gt;

### How to customize this workflow to your needs

This workflow is flexible and modular, allowing you to adapt it for various research, product discovery, or trend analysis use cases. Below are the key customization points and how to modify them.

**Define Your Target Products or Topics**: 

Change the input parameter to a specific ProductHunt category, tag, or keyword (e.g., "AI tools", "SaaS", "DevOps")

**Change Output Destinations** : 
- **Save to Disk**: Change the file format (.json, .csv, .md) or directory path

- **Google Sheet**: Modify sheet name, structure (columns like Product, Summary, Link)

- **Webhook Notification**: Point to a Slack/Discord/CRM/Webhook URL with payload mapping


## 📊 Basic Information

- **Workflow ID:** 4823
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 472
- **Downloads:** 47
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4823)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n-nodes-mcp.mcpClient** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **n8n-nodes-mcp.mcpClientTool** (×2)
- **function** 
- **readWriteFile** 
- **httpRequest** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
