# Generate a personal newsfeed using Bright Data web scraping and GPT-4.1

> ![Personal newsfeed Bright Data MCP  OpenAI.png](fileId:1360)

## How it Works

**Disclaimer: This template is for self-hosted n8n instances only.**

This workflow is designed for developers, data analysts, and automation enthusiasts seeking to automate personalized news collection and delivery. It seamlessly combines n8n, OpenAI (e.g., GPT-4.1), and [Bright Data’s Model Context Protocol (MCP)](https://github.com/luminati-io/brightdata-mcp) to collect, extract, and email the latest global news headlines.  
On a schedule or via a manual trigger, the workflow prompts an AI agent to gather fresh news. The agent leverages context-aware memory and integrated MCP tools to conduct both search engine queries and direct web page scraping in real time, delivering more than just meta search results—it extracts actual on-page headlines and trusted links. Results are formatted and delivered automatically by email via your SMTP provider, requiring zero manual effort once configured.

---

## Who is this for?

- Developers, data engineers, or automation pros wanting an AI-powered, fully automated newsfeed
- Teams needing up-to-date news digests from trusted global sources
- Anyone self-hosting n8n who wishes to combine advanced LLMs with real-time web data

---

## Setup Steps

- Setup time: Approx. 15–30 minutes (n8n install, API configuration, node setup)
- Requirements:
    - Self-hosted n8n instance
    - OpenAI API key
    - Bright Data MCP account credentials
    - SMTP/email provider details
- Install the community MCP node (`n8n-nodes-mcp`) for n8n and set up Bright Data MCP access.
- Configure these nodes:
    - **Schedule Trigger:** For automated delivery at your chosen interval.
    - **Edit Fields:** To inject your AI news collection prompt.
    - **AI Agent:** Connects to OpenAI and MCP, enabled with memory for context.
    - **OpenAI Chat Model:** Connects via your OpenAI credentials.
    - **MCP Clients:** Configure at least two—one for search (e.g. `search_engine`) and one for scraping (e.g. `scrape_as_markdown`).
    - **Send Email:** Set up with recipient and SMTP information.
- Credentials must be entered into their respective nodes for successful execution.

---

## Customization Guidance

- **Prompt Tweaks:** Refine your AI news prompt to target specific genres, regions, or sources, or broaden/narrow the coverage as needed.
- **Tool Configuration:** Carefully define tool descriptions and parameters in MCP client nodes so the agent can pick the best tool for each step (e.g., only scrape real news sites).
- **Delivery Settings:** Adjust email recipient(s) and SMTP details as needed.
- **Workflow Enhancements:** Use sticky notes in n8n for extended documentation, alternate prompts, or troubleshooting tips.
- **Run Frequency:** Set schedule as needed—from hourly to daily updates.

---

Once configured, this workflow will automatically gather, extract, and email curated news headlines and links—no manual curation required!



## 📊 Basic Information

- **Workflow ID:** 4272
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1445
- **Downloads:** 144
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4272)

## 👤 Author

- **Name:** Daniel Shashko
- **Username:** @tomax

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **n8n-nodes-mcp.mcpClientTool** (×3)
- **emailSend** 
- **set** 
- **stickyNote** (×5)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
