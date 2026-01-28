# Monitor brand reputation with SerpAPI, Azure OpenAI & Asana crisis alerts

> ## 📊 Description
Automate proactive brand reputation monitoring across public platforms using AI-driven risk analysis 🤖. This workflow continuously scans Reddit, Glassdoor, and review sites via SerpAPI to detect negative sentiment, public complaints, and early crisis signals 🔍. Each mention is analyzed with AI to assess risk level and urgency, ensuring no critical issue goes unnoticed. High-risk threats automatically trigger real-time Google Chat alerts and create priority Asana tasks 🚨, enabling fast, coordinated response without manual monitoring.

## 🔍 What This Template Does
- Runs on an hourly schedule ⏰ to continuously track brand mentions online.
- Searches public platforms like Reddit and review sites using SerpAPI 🔍.
- Parses and structures insights from AI-powered search results 📄.
- Analyzes sentiment and crisis risk using Azure OpenAI 🤖.
- Filters high-risk reputation threats automatically ⚠️.
- Sends instant Google Chat alerts for urgent issues 💬.
- Creates priority Asana tasks to ensure fast team action ✅.

## ✅ Key Benefits
✅ Detect brand crises before they escalate publicly
✅ Eliminate manual reputation monitoring across platforms
✅ Get real-time alerts only for high-risk issues
✅ Centralize crisis response with automatic task creation
✅ Improve brand trust and response time
✅ AI-powered, scalable, and always-on monitoring

## ⚙️ Features
- Hourly automated monitoring trigger
- SerpAPI Google AI Mode search integration
- AI-based sentiment and crisis risk classification
- Structured JSON output for reliability
- Google Chat alerts for instant visibility
- Asana task creation for crisis management
- Fail-safe handling for malformed AI responses

## 🔑 Requirements
- SerpAPI account (Google AI Mode search)
- Azure OpenAI credentials
- Google Chat OAuth2 credentials
- Asana OAuth2 credentials
- Brand name or keywords for monitoring

## 🎯 Target Audience
- SaaS founders and startup teams
- Brand, PR, and reputation managers
- Digital agencies managing multiple clients
- Customer support and crisis response teams


## 📊 Basic Information

- **Workflow ID:** 12101
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 60
- **Downloads:** 6
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12101)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **cron** 
- **if** 
- **googleChat** 
- **asana** 
- **n8n-nodes-serpapi.serpApi** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
