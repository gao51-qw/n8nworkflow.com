## 📘 Description
This workflow enables on-demand social lead discovery using a chat-based interface. When a user submits a lead discovery query, the workflow searches Twitter and Instagram for posts where people are actively asking for tools, recommendations, or help solving real problems. An AI agent filters out spam and promotions, extracts only genuine buying-intent posts, and classifies each lead as Low, Medium, or High intent.
Qualified leads are converted into two outputs: a human-readable Slack summary for quick review and a structured, CRM-ready Notion record for tracking and follow-ups. Short-term conversation memory is maintained to improve relevance across follow-up queries. Built-in error handling ensures failures are reported immediately.
⚠️ Deployment Disclaimer
 This template can only be used on self-hosted n8n installations.
 It relies on external MCP tools and custom AI orchestration not supported on n8n Cloud.

## ⚙️ What This Workflow Does (Step-by-Step)
💬 Receive User Lead Discovery Query (Chat Trigger)
 Accepts a natural-language lead discovery request from a user.
🧠 Maintain Short-Term Conversation Context
 Keeps recent query context to improve follow-up accuracy.
🔎 Discover Buying-Intent Leads from Social Platforms (AI)
 Searches Twitter and Instagram for posts indicating real buying or problem-solving intent and extracts structured lead data.
🌐 External Social Search & Enrichment (MCP Tool)
 Fetches relevant social posts from external platforms.
🧠 AI Lead Qualification
 Classifies intent (Low / Medium / High), summarizes the problem, and filters noise.
🧩 Generate Slack & Notion Lead Insight Summary (AI)
 Creates a concise Slack summary and a clean, structured Notion record.
📣 Send Lead Discovery Summary to Slack
 Delivers a skimmable summary for immediate team visibility.
🗂 Store Lead Discovery Insight in Notion CRM
 Logs search query, themes, and overall intent for tracking.
🚨 Error Handler → Email Alert
 Sends an alert if the workflow fails at any step.

## 🧩 Prerequisites
 • Self-hosted n8n instance
 • Azure OpenAI API credentials
 • MCP bearer authentication for social search
 • Slack API credentials
 • Notion API credentials
🛠 Setup Instructions
Deploy the workflow on a self-hosted n8n instance
Connect Azure OpenAI, MCP, Slack, and Notion credentials
Enable the chat trigger
Test with a sample lead discovery query
🛠 Customization Tips
 • Adjust intent classification rules in the AI prompt
 • Modify output fields to match your CRM schema
 • Extend discovery to additional platforms via MCP tools

## 💡 Key Benefits
 ✔ On-demand social lead discovery via chat
 ✔ Filters only real buying-intent signals
 ✔ Produces Slack-ready summaries and CRM-ready records
 ✔ Maintains context across follow-up queries
 ✔ Eliminates manual social media scanning

## 👥 Perfect For
-  Sales teams
-  Growth teams
-  Founders
-  Agencies sourcing leads from social platforms