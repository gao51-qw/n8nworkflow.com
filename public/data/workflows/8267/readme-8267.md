# Automate Twitter content with trend analysis using OpenAI GPT & MCP

> ## How it works

This template creates a fully automated Twitter content system that discovers trending topics, analyzes why they're trending using AI, and posts intelligent commentary about them.

The workflow uses **MCP (Model Context Protocol)** with the **twitter154 MCP server** from [MCPHub](https://mcphub.com/mcp-servers/aigeon-ai/twitter154) to connect with Twitter APIs and leverages **OpenAI GPT models** to generate brand-safe, engaging content about current trends.

**Key Features:**
- 🔍 **Smart Trend Discovery**: Automatically finds US trending topics with engagement scoring
- 🤖 **AI-Powered Analysis**: Uses GPT to explain "why it's trending" in 30-60 words  
- 📊 **Duplicate Prevention**: MySQL database tracks posted trends with 3-day cooldowns
- 🛡️ **Brand Safety**: Filters out NSFW content and low-quality hashtags
- ⚡ **Rate Limiting**: Built-in delays to respect API limits
- 🐦 **Powered by twitter154**: Uses the robust "Old Bird" MCP server for comprehensive Twitter data access

## Set up steps

**Setup time: ~10 minutes**

### Prerequisites:
- OpenAI API key for GPT models
- Twitter API access for posting
- MySQL database for trend tracking
- **MCP server access**: twitter154 from [aigeon-ai](https://mcphub.com/mcp-servers/aigeon-ai/twitter154) via MCPHub

### Configuration:
1. **Set up MCP integration** with twitter154 server endpoint: `https://api.mcphub.com/mcp/aigeon-ai-twitter154`
2. **Configure credentials** for OpenAI, Twitter, and MySQL connections
3. **Set up authentication** for the twitter154 MCP server (Header Auth required)
4. **Create MySQL table** for keyword registry (schema provided in workflow)
5. **Test the workflow** with manual execution before enabling automation
6. **Set schedule** for automatic trend discovery (recommended: every 2-4 hours)

### MCP Server Features Used:
- **Search Tweets**: Core functionality for trend analysis
- **Get Trends Near Location**: Discovers trending topics by geographic region
- **AI Tools**: Leverages sentiment analysis and topic classification capabilities

### Customization Options:
- Modify trend scoring criteria in the AI agent prompts
- Adjust cooldown periods in database queries
- Change target locale from US to other regions (WOEID configuration)
- Customize tweet formatting and content style
- Configure different MCP server endpoints if needed

**Perfect for:** Social media managers, content creators, and businesses wanting to stay current with trending topics while maintaining consistent, intelligent posting schedules.

**Powered by:** The twitter154 MCP server ("The Old Bird") provides robust access to Twitter data including tweets, user information, trends, and AI-powered text analysis tools.

## 📊 Basic Information

- **Workflow ID:** 8267
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 594
- **Downloads:** 59
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8267)

## 👤 Author

- **Name:** Dayong Huang
- **Username:** @dayonghuang

## 🏷️ Categories

- Social Media
- AI RAG

## 🔗 Nodes Used

- **function** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **slack** 
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **mySql** (×2)
- **scheduleTrigger** 
- **twitter** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
