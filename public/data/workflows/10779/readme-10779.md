# 👲 Monitor & debug n8n workflows with Claude AI assistant and MCP server

> ***Tags**: AI Agent, MCP Server, n8n API, Monitoring, Debugging, Workflow Analytics, Automation*

### Context

Hi! I’m [Samir](https://samirsaci.com) — a Supply Chain Engineer and Data Scientist based in Paris, and founder of [LogiGreen Consulting](https://logi-green.com).

This workflow is part of my latest project: an **AI assistant that automatically analyses n8n workflow executions, detects failures, and identifies root causes** through natural conversation with Claude Desktop.

[![Concept](https://www.samirsaci.com/content/images/2025/11/image-2.png)](https://youtu.be/oJzNnHIusZs)

&gt; Turn your automation logs into intelligent conversations with an AI that understands your workflows.

The idea is to use *Claude Desktop* to help monitor and debug your workflows deployed in production.

The workflow shared here is part of the setup.

📬 For business inquiries, you can find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This template is designed for **automation engineers**, **data professionals**, and **AI enthusiasts** who manage multiple workflows in **n8n** and want a smarter way to track errors or performance without manually browsing execution logs.

If you’ve ever discovered a failed workflow hours after it happened — this is for you.


### What does this workflow do?

This workflow acts as the **bridge** between your n8n instance and the **Claude MCP Server**.

[![Principle](https://www.samirsaci.com/content/images/size/w1000/2025/11/image-1.png)](https://youtu.be/oJzNnHIusZs)

It exposes three main routes that can be triggered via a webhook:

1. `get_active_workflows` → Fetches all currently active workflows  
2. `get_workflow_executions` → Retrieves the latest executions and calculates health KPIs  
3. `get_execution_details` → Extracts detailed information about failed executions for debugging  

Each request is automatically routed and processed, providing Claude with structured execution data for real-time analysis.

### How does it fit in the overall setup?

Here’s the complete architecture:
```
Claude Desktop ←→ 
   MCP Server ←→ 
      n8n Monitor Webhook ←→
         n8n API
```

- The **MCP Server** (Python-based) communicates with your n8n instance through this workflow.  
- The **Claude Desktop app** can then query workflow health, execution logs, and error patterns using natural language.  
- The **n8n workflow** aggregates, cleans, and returns the relevant metrics (failures, success rates, timing, alerts).

📘 The full concept and architecture are explained in my article published on my blog:  
👉 [Deploy your AI Assistant to Monitor and Debug n8n Workflows using Claude and MCP](https://towardsdatascience.com/deploy-your-ai-assistant-to-monitor-and-debug-n8n-workflows-using-claude-and-mcp)

### 🎥 Tutorial

The full setup tutorial (with source code and demo) is available on YouTube:

[![Tutorial + Demo](https://www.samirsaci.com/content/images/2025/11/temp-8.png)](https://youtu.be/oJzNnHIusZs)

### How does it work?

- 🌐 Webhook Trigger receives the MCP server requests  
- 🔀 Switch node routes actions based on `"action"` parameter  
- ⚙️ HTTP Request nodes fetch execution and workflow data via the n8n API  
- 🧮 A Code node calculates KPIs (success/failure rates, timing, alerts)  
- 📤 The processed results are returned as JSON for Claude to interpret

### Example use cases

Once connected, you can ask Claude questions like:
- “Show me all workflows that failed in the last 25 executions.”  
- “Why is my `Bangkok Meetup Scraper` workflow failing?”  
- “Give me a health report of my n8n instance.”  

[![Example](https://www.samirsaci.com/content/images/size/w1000/2025/11/image-3.png)](https://youtu.be/oJzNnHIusZs)

Claude will reply with structured insights, including failure patterns, node diagnostics, and health status indicators (🟢🟡🔴).

### What do I need to get started?

You’ll need:
- A **self-hosted n8n instance**
- **Claude Desktop** app installed
- The **MCP server source code** (shared in the tutorial description)
- The **webhook URL** from this workflow is configured in your `.env` file  

Follow the tutorial for more details, don't hesitate to leave your questions in the comment section.

### Next Steps

🗒️ Use the sticky notes inside the workflow to:
- Replace &lt;YOUR_N8N_INSTANCE&gt; with your own URL  
- Test the webhook routes individually using the “Execute Workflow” button  
- Connect the MCP server and Claude Desktop to start monitoring  

*This template was built using n8n v.116.2*  
*Submitted: November 2025*




## 📊 Basic Information

- **Workflow ID:** 10779
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 3396
- **Downloads:** 339
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10779)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **switch** 
- **splitOut** (×3)
- **httpRequest** (×3)
- **set** 
- **webhook** 
- **respondToWebhook** 
- **code** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
