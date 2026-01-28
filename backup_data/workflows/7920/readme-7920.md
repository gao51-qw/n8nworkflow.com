# Full blog content automation with GPT-4, Claude & Ghost CMS publisher

> ## 🌟 Complete Workflow Overview
**The Full Blogging Automation Journey**
This N8N workflow transforms a simple topic request into a fully published, SEO-optimized blog post through a seamless 7-phase process. Starting with your topic idea, the system automatically researches, creates, optimizes, edits, and publishes professional content to your Ghost CMS website. Think of it as having an entire content team working 24/7 - from initial research to final publication, all orchestrated by AI agents working in perfect harmony. No more writer's block, no more SEO guesswork, just high-quality content that ranks and engages your audience

## 📋 Requirements & Setup
**What You Need to Get Started**
- **OpenAI API Key** - For GPT models (content generation)
- **Anthropic API Key** - For Claude models as failover model
- **Brave Search API Key** - For comprehensive research
- **Ghost CMS Admin API Access** - For direct publishing
- **Existing Blog Content** - Optional but recommended for better research

## 🔧 Workflow Architecture & Process
**How the AI Agents Work Together**
This N8N workflow implements a sophisticated multi-agent system where specialized AI agents collaborate through structured data exchange. The workflow uses HTTP Request nodes to communicate with OpenAI and Anthropic APIs, integrates with Brave Search for real-time research, and connects to Ghost CMS via REST API calls. Each agent operates independently but shares data through N8N's workflow context, ensuring seamless information flow from research to publication. The system includes error handling, retry logic, and quality gates at each stage to maintain content standards.



## 📊 Basic Information

- **Workflow ID:** 7920
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 1009
- **Downloads:** 100
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7920)

## 👤 Author

- **Name:** Christian Mendieta
- **Username:** @cmendieta

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×4)
- **@brave/n8n-nodes-brave-search.braveSearchTool** (×5)
- **ghostTool** (×4)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×6)
- **@n8n/n8n-nodes-langchain.agentTool** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
