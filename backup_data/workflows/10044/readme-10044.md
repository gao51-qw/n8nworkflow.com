# AI multi-agent executive team for entrepreneurs with Gemini, Perplexity and WhatsApp

> **This workflow is an AI-powered multi-agent system built for startup founders and small business owners who want to automate decision-making, accountability, research, and communication, all through WhatsApp.**

The “virtual executive team,” is designed to help small teams to work smarter. This workflow sends you market analysis, market and sales tips, It can also monitor what your competitors are doing using perplexity (Research agent) and help you stay a head, or make better decisions. And when you feeling stuck with your start-up accountability director is creative enough to break the barrier

**🎯 Core Features**
**🧑‍💼 1. President (Super Agent)**

Acts as the main controller that coordinates all sub-agents.
Routes messages, assigns tasks, and ensures workflow synchronization between the AI Directors.

**📊 2. Sales & Marketing Director**

Uses SerpAPI to search for market opportunities, leads, and trends.

Suggests marketing campaigns, keywords, or outreach ideas.

Can analyze current engagement metrics to adjust content strategy.

**🕵️‍♀️ 3. Business Research Director**

Powered by Perplexity AI for competitive and market analysis.

Monitors competitor moves, social media engagement, and product changes.

Provides concise insights to help the founder adapt and stay ahead.

**⏰ 4. Accountability Director**

Keeps the founder and executive team on track.

Sends motivational nudges, task reminders, and progress reports.

Promotes consistency and discipline — key traits for early-stage success.

**🗓️ 5. Executive Secretary**

Handles scheduling, email drafting, and reminders.

Connects with Google Calendar, Gmail, and Sheets through OAuth.

Automates follow-ups, meeting summaries, and notifications directly via WhatsApp.

**💬 WhatsApp as the Main Interface**

Interact naturally with your AI team through WhatsApp Business API.

All responses, updates, and summaries are delivered to your chat.

Ideal for founders who want to manage operations on the go.

### ⚙️ How It Works

Trigger: The workflow starts from a WhatsApp Trigger node (via Meta Developer Account).

Routing: The President agent analyzes the incoming message and determines which Director should handle it.

Processing:

Marketing or sales queries go to the Sales & Marketing Director.

Research questions are handled by the Business Research Director.

Accountability tasks are assigned to the Accountability Director.

Scheduling or communication requests are managed by the Secretary.

Collaboration: Each sub-agent returns results to the President, who summarizes and sends the reply back via WhatsApp.

Memory: Context is maintained between sessions, ensuring personalized and coherent communication.

🧩 Integrations Required

Gemini API – for general intelligence and task reasoning

Supabase- for RAG and postgres persistent memory

Perplexity API – for business and competitor analysis

SerpAPI – for market research and opportunity scouting

Google OAuth – to connect Sheets, Calendar, and Gmail

WhatsApp Business API – for message triggers and responses

**🚀 Benefits**

Acts like a team of tireless employees available 24/7.

Saves time by automating research, reminders, and communication.

Enhances accountability and strategy consistency for founders.

Keeps operations centralized in a simple WhatsApp interface.

🧰 Setup Steps

Create API credentials for:

WhatsApp (via Meta Developer Account)

Gemini, Perplexity, and SerpAPI

Google OAuth (Sheets, Calendar, Gmail)

Create a supabase account at [supabase ](https://supabase.com/)

Add the credentials in the corresponding n8n nodes.

Customize the system prompts for each Director based on your startup’s needs.

Activate and start interacting with your virtual executive team on WhatsApp.

### Use Case
You are a small organisation or start-up that can not afford hiring; marketing department, research department and secretar office, then this workflow is for you

💡 Need Customization?

Want to tailor it for your startup or integrate with CRM tools like Notion or HubSpot?
You can easily extend the workflow or contact the creator for personalized support.

Consider adjusting the system prompt to suite your business

## 📊 Basic Information

- **Workflow ID:** 10044
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 274
- **Downloads:** 27
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10044)

## 👤 Author

- **Name:** Shadrack
- **Username:** @shadrack

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **whatsApp** 
- **perplexityTool** 
- **@n8n/n8n-nodes-langchain.agentTool** (×4)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsCohere** 
- **@n8n/n8n-nodes-langchain.agent** 
- **whatsAppTrigger** 
- **googleSheetsTool** 
- **gmailTool** 
- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
