# Business AI command center: Modular agents for Google Workspace, vector search & multi-channel reports

> # 🚀 AI OPS Agent for n8n — Stop Doing Busy Work. Start Leading.
*Your AI workforce is ready. Are you?*

## 💰 What You Get: Your ROI in 30 Days

**Replace 10-15 hours/week of manual work** with intelligent automation that actually understands your business. While your competitors copy-paste data between tools, you'll be making strategic decisions.

---

## 🧠 The Powerhouse Stack That Does Everything

| **Module** | **Core Job** | **Your Competitive Edge** |
|------------|-------------|--------------------------|
| **MAIN AGENT** (Grok 4) | Orchestrator & brain | • Reads your message → builds execution plan<br />• Delegates to specialized agents<br />• Delivers results through your preferred channel |
| **Knowledge Agent** | Company-wide research assistant | • Vector-searches your Supabase docs instantly<br />• Runs live SQL queries for real-time numbers<br />• Hunts & parses Drive files automatically<br />• Pulls fresh web intelligence via Perplexity |
| **Google Sheets MCP Toolkit** | Spreadsheet automation | **Natural-language control** over **read/append/update/clear/create/delete** operations on any tab or range |
| **Google Drive MCP Toolkit** | File intelligence pipeline | • Auto-detects file types & extracts text from PDFs/CSVs<br />• Transcribes audio/video content<br />• Describes images with GPT-4o Mini |
| **Vector Store Loader** | Long-term memory system | • Auto-chunks new files<br />• Creates OpenAI embeddings<br />• Stores in Supabase for instant semantic search |
| **Postgres Chat Memory** | Conversation context | Never repeat yourself—every follow-up question builds on previous context |
| **Report Agent** | Executive briefing machine | • Converts raw outputs → clean Markdown → HTML<br />• Auto-emails/Slacks/Telegrams polished reports |
| **LinkedIn Scraper** | Talent & market intelligence | Scrapes full LinkedIn profiles via Apify, delivers structured JSON for analysis |
| **Multi-Channel Triggers** | Meet users where they work | **Slack • Gmail • Telegram • WhatsApp • HTTP Webhooks** |
| **LLM Layer** | Right model, right job | **Grok 4** (reasoning) • **Claude Sonnet 4** (analysis) • **GPT-4o Mini** (speed) • **Perplexity** (live web) |

---

## ⚡ How It Works (The Magic in 5 Steps)

1. **Message arrives** (Slack mention, email, webhook)
2. **MAIN AGENT** analyzes → selects optimal tool chain
3. **Specialized toolkits execute** (Sheets, Drive, SQL, Scraper...)
4. **Knowledge Agent** synthesizes everything using the perfect LLM
5. **Report Agent** packages & delivers results to your chosen channel

---

## 🎯 Real Commands That Save Hours Daily

&gt; **"Update the Marketing-Spend sheet with last week's totals, then email me a chart."**
&gt; 
&gt; **"Find the product-launch PDF from Drive, summarize key risks, post to Slack."**
&gt; 
&gt; **"Scrape this LinkedIn URL, rank the candidate's skills, add them to our CRM sheet."**
&gt; 
&gt; **"Create a new Sprint 11 tab, copy headers from Sprint 10, and ping the team."**

*One command. Multiple systems. Zero manual work.*

---

##  Why Choose This Over Other Products:

### ✅ **All Your Data, One Brain**
No more jumping between 12 different tools. Your AI agent connects everything.

### You can go further
If you want to increase the Agent capabilities or make the more powerfull you can reach the dev.

### ✅ **Vector Search Built-In**
Upload a 100-page document once. Search it forever with natural language.

### ✅ **Executive-Ready Reports**
Your C-suite gets clean HTML briefs, not raw data dumps that waste their time.

### ✅ **Deploy in Minutes**
Plug into your existing n8n setup, add credentials, watch routine ops handle themselves.

---



## 📊 Basic Information

- **Workflow ID:** 7060
- **Complexity:** advanced
- **Node Count:** 80
- **Views:** 303
- **Downloads:** 30
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7060)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **googleSheetsTool** (×6)
- **@n8n/n8n-nodes-langchain.mcpTrigger** (×2)
- **manualTrigger** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **stickyNote** (×22)
- **executeWorkflowTrigger** 
- **switch** (×2)
- **extractFromFile** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **googleDriveTool** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** (×2)
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **postgresTool** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **perplexityTool** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **@n8n/n8n-nodes-langchain.agentTool** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequestTool** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **markdown** 
- **telegram** 
- **whatsApp** 
- **slack** 
- **slackTrigger** 
- **telegramTrigger** 
- **gmailTrigger** 
- **whatsAppTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 80 nodes with 46 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
