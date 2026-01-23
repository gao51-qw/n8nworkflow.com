# Scrape & summarize industry news with Bright Data & OpenAI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically scrapes and summarizes the latest industry news, delivering a curated digest to your team. Stay informed without sifting through countless articles.

## Overview

Bright Data scrapes top news sites, blogs, and press release feeds relevant to your sector. OpenAI summarizes each article and tags it by topic. The daily digest is compiled into Markdown and sent via Slack and email, while full summaries are archived in Notion.

## Tools Used

- **n8n** – Automation framework
- **Bright Data** – Scrapes news sources reliably
- **OpenAI** – Generates concise summaries and tags
- **Slack & Gmail** – Distributes daily digest
- **Notion** – Stores detailed article notes

## How to Install

1. **Import the Workflow** into n8n.
2. **Configure Bright Data** credentials.
3. **Set Up OpenAI** API key.
4. **Authorize Slack, Gmail, and Notion**.
5. **Customize Source List & Keywords** in the Set node.

## Use Cases

- **Executive Briefings**: Keep leadership updated.
- **Product Teams**: Track competitor announcements.
- **Marketing**: Identify content trends quickly.
- **Investors**: Monitor sector developments.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #industrynews #webscraping #brightdata #openai #newsdigest #n8nworkflow #nocode

## 📊 Basic Information

- **Workflow ID:** 5977
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1385
- **Downloads:** 138
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5977)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **n8n-nodes-mcp.mcpClientTool** 
- **gmail** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
