# Daily topic news digest with Gemini AI, Decodo MCP and Slack

> ## Try It Out!

This n8n template demonstrates how to build an autonomous AI news agent using Decodo MCP that automatically finds, scrapes, and delivers fresh industry news to your team via Slack. 

Use cases are many – automated news monitoring for your industry, competitive intelligence gathering, startup monitoring, regulatory updates, research automation, or daily briefings for your organization.

### How it works

- Define your news topics using the Set node – AI, MCP, web scraping, whatever matters to your business.
- The AI Agent processes those topics using the Gemini Chat Model, determining which tools to use and when.
- Here's where it gets interesting: Decodo MCP gives your AI agent the tools to search Google, scrape websites, and parse content automatically – all while bypassing geo-restrictions and anti-bot measures.
- The agent hunts for fresh articles from the last 48 hours, extracts clean data, and returns structured JSON results.
- Format Results cleans up the AI's messy output and removes duplicates.
- Your polished news digest gets delivered to Slack with clickable links and summaries.

### How to use

- Schedule trigger runs daily at 9 AM – adjust timing or swap for webhook triggers as needed.
- Customize topics in the Set node to match your industry.
- Scales effortlessly: add more topics, tweak search criteria, done.

### Requirements

- Decodo MCP credentials ([free trial available](https://dashboard.decodo.com/)) – grab the [Smithery connection URL with keys](https://decodo.com/blog/how-to-set-up-mcp-server#h2-step_4:_configure_the_mcp_server_) and paste it straight into your n8n MCP node. Done.
- [Gemini API key](https://aistudio.google.com/app/apikey) for the AI processing – drop it into the Google Gemini Chat Model node and pick whichever [Gemini model](https://ai.google.dev/gemini-api/docs/models) fits your needs.
- Slack workspace for delivery – [n8n's Slack integration docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/) have you covered.

### What the final output looks like

Here's what your team receives in Slack every morning:

![gemini_decodo_mcp_news_automationresults.png](fileId:2663)

### Need help?

Join the [Discord](https://discord.com/invite/gvJhWJPaB4) or email [support@decodo.com](mailto:support@decodo.com) for questions.

Happy Automating!

## 📊 Basic Information

- **Workflow ID:** 8738
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 307
- **Downloads:** 30
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8738)

## 👤 Author

- **Name:** Satyam Tripathi
- **Username:** @triposat

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **splitOut** 
- **slack** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **removeDuplicates** 
- **aggregate** 
- **set** 
- **code** 
- **scheduleTrigger** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
