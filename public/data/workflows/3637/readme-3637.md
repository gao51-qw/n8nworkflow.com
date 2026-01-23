# Build your own Youtube MCP server

> ### This n8n demonstrates how to build a simple Youtube MCP server to look up videos on Youtube and download their transcripts for research purposes.

Youtube videos are a great source of new and updated information on a variety of cutting edge developments but they''re are not always simple to understand and lengthy videos may take too much time. Using this MCP server, you extract and feed their transcripts for your AI agents which then allows it to breakdown the content into manageble learnings and insights.

### How it works
* A MCP server trigger is used and connected to 3 custom workflow tools: Youtube Search, Youtube Transcripts and Usage Reports.
* Both Youtube tools use an external scraping service called [APIFY.com](https://www.apify.com?fpr=414q6). This is my preference as it's a much simpler interface and there are no rate limits.  
* The Youtube Search fetches 10 results based on the user's query.
* The Youtube Transcripts downloads the subtitles from one or more given URL.
* The usage reports pulls in your monthly [APIFY.com](https://www.apify.com?fpr=414q6) monthly spending and limits as a way to check your account.

### How to use
* This Apify Youtube MCP server allows any compatible MCP client to research YouTube videos for any desired topic. An Apify account is required however to connect and use the service.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Alternatively, connect any n8n AI agent with the MCP client tool.
* Try the following queries in your MCP client:
  * "what is MCP?"
  * "How can I use MCP in n8n?"
  * "How can I use Apify's official MCP server?"

### Requirements
* [APIFY.com](https://www.apify.com?fpr=414q6) for Youtube Scraping. This is a paid service but there is a $5 free tier which is ample for this template.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Add as many [APIFY.com](https://www.apify.com?fpr=414q6) actors as required for your use-case or users. Consider using Apify's official MCP server for 4000+ available tools.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 📊 Basic Information

- **Workflow ID:** 3637
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 3488
- **Downloads:** 348
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3637)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **switch** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **httpRequest** (×4)
- **set** (×3)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
