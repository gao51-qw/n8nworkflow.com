# Error monitor: AI-powered resolution [Context7, Supabase]

> ## Never miss a workflow failure

Automatically capture, analyze, and debug n8n workflow errors using Claude Sonnet 4 with real-time documentation lookup via Context7 MCP server.

![Screenshot 20251122 at 23.45.22.png](fileId:3468)

## Why this works better

**Documentation-first AI analysis**

Context7 searches official n8n docs before diagnosing. Claude Sonnet 4 only responds after finding relevant documentation—no hallucinations.

**Complete error intelligence**

Every error stored in Supabase with full context: stack traces, execution data, workflow structure, AI analysis. Track patterns across all workflows.

**Production-ready emails**

Professional HTML with inline code snippets, proper formatting, and one-click execution links.

## What happens

**Root cause** - Plain English explanation  
**Specific fix** - Exact field names and values  
**Prevention tip** - Avoid future errors  
**Execution link** - One-click debug access  
**Statistics** - Error frequency tracking

## How it works

1. **Error** → Your workflow fails
2. **Capture** → Full context retrieved
3. **Research** → Context7 searches n8n
4. **Analysis** → AI diagnoses with context
5. **Email** → Formatted alert delivered
6. **Record** → Error stored in database

## Requirements

- **Supabase** - Free tier works
- **OpenRouter** - $5 credit
- **Context7** - Free API available
- **SMTP** - For email delivery
- **n8n API** - Must be enabled

**Setup:** 15 minutes

## Overview

Complete instructions with SQL script included in workflow sticky notes.

**Activate:** Settings → Error Workflow → Select this workflow

## Customize

**Reduce cost:** Remove `workflow_json` and `execution_data` from prompt

**Change output:** Swap email node for Telegram/Slack/Discord—expressions provided in notes

## FAQ

**Works with community nodes?**  
Yes. Context7 searches all n8n documentation.

**Handles sensitive data?**  
Remove `workflow_json` and `execution_data` from prompt to exclude content.

**Customizable design?**  
Yes. HTML template in "Build HTML" node is fully editable.

## 📊 Basic Information

- **Workflow ID:** 11219
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 56
- **Downloads:** 5
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11219)

## 👤 Author

- **Name:** Kelsey Brown
- **Username:** @kzdev

## 🏷️ Categories

- Support

## 🔗 Nodes Used

- **n8n** (×2)
- **supabase** (×6)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **code** (×3)
- **errorTrigger** 
- **splitInBatches** 
- **emailSend** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
