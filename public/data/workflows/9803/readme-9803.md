# Automate lead qualification with AI voice calls using GPT-3.5, Notion and Vapi

> # Website Leads to Voice Demo and Scheduling
Creator: [Summer Chang](https://www.youtube.com/channel/UCAdp-nOSH-jcrwXkLlUMyXQ)

## AI Booking Agent Setup Guide
Overview
This automation turns your website into an active booking agent. When someone fills out your form, it automatically:

Adds their information to Notion
AI researches their business from their website
Calls them immediately with a personalized pitch
Updates Notion with call results

Total setup time: 30-45 minutes

## What You Need
Before starting, create accounts and gather these:

n8n account (cloud or self-hosted)
Notion account - Free plan works [duplicate my notion template](https://summerchangco.notion.site/websiteinbound?v=28e2d5cd4ef481a78864000c6a5459a7&source=copy_link)
OpenRouter API key - Get from openrouter.ai
Vapi account - Get from vapi.ai

Create an AI assistant
Set up a phone number
Copy your API key, Assistant ID, and Phone Number ID

## How It Works
The Complete Flow

Visitor fills form on your website
Form submission creates new record in Notion with Status = "New"
Notion Trigger detects new record (checks every minute)
Main Workflow executes:

Fetches lead's website
AI analyzes their business
Updates Notion with analysis
Makes Vapi call with personalized intro


Call happens between your AI agent and the lead
When call ends, Vapi sends webhook to n8n
Webhook Workflow executes:

Fetches call details from Vapi
AI generates call summary
Updates Notion with results and recording

## 📊 Basic Information

- **Workflow ID:** 9803
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 832
- **Downloads:** 83
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9803)

## 👤 Author

- **Name:** Summer
- **Username:** @summerchang

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×14)
- **httpRequest** (×3)
- **code** (×5)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **notion** (×3)
- **webhook** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **notionTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
