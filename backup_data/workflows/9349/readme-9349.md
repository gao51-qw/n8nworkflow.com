# AI-Powered Lead Qualification & Routing with OpenAI, Slack, and Airtable

> # **AI Lead Qualifier & Router**

An intelligent lead management system that automatically captures incoming leads via webhook, uses AI to analyze and score each prospect, then routes them to the appropriate team or campaign based on qualification score—delivering hot leads to sales instantly while nurturing others on autopilot.

## **What It Does**

This workflow eliminates the manual process of:

• Daily lead review and qualification
• Manual scoring and prioritization
• Lead assignment and routing decisions
• Follow-up email composition
• CRM data entry and updates
• Sales team notifications for hot prospects

Instead, it delivers **qualified, routed leads with AI insights in under 30 seconds**—complete with structured scoring, personalized responses, and organized data storage for tracking.

## **Key Features**

• **Webhook Lead Capture** - Accepts leads from any source (forms, landing pages, APIs)
• **AI-Powered Qualification** - Analyzes budget, timeline, message quality, and fit using OpenAI
• **Structured Scoring** - Generates 0-100 scores with reasoning, strengths, and concerns
• **Intelligent Routing** - Automatically directs hot leads (70+) to sales, others to nurture
• **Instant Notifications** - Slack alerts for high-priority prospects with full context
• **Dual Email Flows** - Personalized responses based on lead quality and urgency
• **Airtable Storage** - Organized tracking with qualification data and timestamps


## 📊 Basic Information

- **Workflow ID:** 9349
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 305
- **Downloads:** 30
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9349)

## 👤 Author

- **Name:** Xavier Tai
- **Username:** @xaviertai

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **airtable** (×2)
- **slack** 
- **emailSend** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
