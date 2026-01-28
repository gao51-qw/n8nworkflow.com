# Generate complete SEO strategy reports with SerpAPI data and GPT-4 Agent team

> ## Overview
This workflow deploys a fully autonomous "AI SEO Agency" inside your n8n instance.

Unlike simple chatbots, this is a **hierarchical agent swarm**. A "Director" agent acts as the project manager, using live market data to orchestrate a team of 6 specialized AI workers. It takes a single user prompt and turns it into a comprehensive, professional-grade SEO strategy report.

## Key Features
* **Hierarchical Architecture:** A "Manager" agent delegates tasks to "Worker" agents.
* **Live Market Research:** Uses **SerpApi** to fetch real-time Google Search results and competitor data.
* **Conversational Memory:** Remembers business details across the chat session.
* **6 Expert Specialists:** Includes dedicated agents for Keyword Research, Technical SEO, Link Building, Analytics, Local SEO, and Content Writing.

## How it works
1.  **Analysis:** The **SEO Director Agent** receives your request and consults its memory.
2.  **Live Research:** The Director uses the **SerpApi** tool to perform live Google searches on the target website and niche to gather context.
3.  **Delegation:** Based on the research, the Director dynamically assigns tasks to the relevant **Specialist Agents** (e.g., calling the "Technical Specialist" for site speed issues or the "Keyword Specialist" for content ideas).
4.  **Synthesis:** The Director compiles the outputs from all specialists into one cohesive, actionable strategy report.

## Set up steps
**Estimated time: 5 minutes**

1.  **OpenAI Keys:** Add your OpenAI API Key to all 7 "OpenAI Chat Model" nodes (1 for the Director, 6 for the Specialists).
2.  **SerpApi Key:** Open the "SEO Director Agent" node. Under "Tools" &gt; "SerpApi," add your SerpApi Key (free tier available). This enables the live Google Search capability.
3.  **Run:** Toggle the workflow to "Active" and start chatting!

## About the Creator
Built by **Pixril**. We specialize in building advanced, production-ready AI agents for n8n.
Find more professional workflows in our shop: **https://pixril.etsy.com**

## 📊 Basic Information

- **Workflow ID:** 11109
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1749
- **Downloads:** 174
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11109)

## 👤 Author

- **Name:** Pixril
- **Username:** @tani07

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×7)
- **@n8n/n8n-nodes-langchain.agentTool** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.chat** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
