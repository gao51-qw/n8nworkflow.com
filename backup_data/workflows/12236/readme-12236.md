# Run AI-powered market research with Groq, OpenAI, Documentero and Gmail

> ## Description
This n8n template demonstrates how to build an AI-powered Market Research Assistant using a multi-agent workflow.
It helps you get a 360-degree view of a product idea or research topic by analysing:
* Customer insights and pain points
* Market size and macro/micro-economic trends
* Competitive landscape and alternatives
The workflow mirrors how product managers and strategy teams conduct discovery — by breaking down research into parallel workstreams and then synthesizing insights into a single narrative.


## How it works
1. Planner Agent The main agent receives your research topic as input and defines:
    * Research objective
    * Key areas of focus (Customer, Market, Competition)
    * Assumptions and constraints
2. Parallel Research Agents Based on the planner’s output, three specialist agents run in parallel:
    * Customer Insights Agent Researches public sources such as articles and forums to infer customer behaviour, pain points, and existing tools.
    * Market Scan Agent Analyses macro-economic and micro-economic trends, estimates TAM/SAM/SOM, and highlights key risks and assumptions.
    * Competitor Insights Agent Identifies existing competitors and substitutes and summarises how they are positioned in the market.
3. Synthesis Agent The outputs from all research agents are consolidated and analysed by a synthesis agent, which produces a market discovery memo.
4. Final Output The discovery memo is generated as a document and sent to your email.


## How to use
* Trigger the workflow via the chat message node.
* Provide your research topic or product idea, along with optional context such as target market.
* The workflow runs automatically and delivers a structured discovery memo to your inbox.


## Setup Steps
* API credentials for:
    * Groq or OpenAI (LLM)
    * Documentero (document generation)
* A configured Documentero template
* Gmail OAuth or email credentials for delivery of memo


## 📊 Basic Information

- **Workflow ID:** 12236
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 0
- **Downloads:** 0
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12236)

## 👤 Author

- **Name:** Monisha
- **Username:** @mon01

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** (×4)
- **n8n-nodes-preview-documentero.documentero** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
