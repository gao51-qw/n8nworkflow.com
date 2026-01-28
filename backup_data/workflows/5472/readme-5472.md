# Multi-platform UAE real estate lead generation with GPT-4 analysis

> ## Who's it for
Real estate agents, property investment companies, and relocation services operating in the UAE market who want to automate their lead generation and find qualified prospects 24/7.

## How it works
This workflow automatically searches 6 major platforms (Reddit, Facebook, LinkedIn, Twitter, Bayut, PropertyFinder, and news sites) every 6 hours for people looking to buy, sell, or invest in UAE properties. An AI agent then analyzes all results to extract qualified leads with contact information, scores them based on intent and availability, and saves everything to Google Sheets for follow-up.

## What it does
- **Multi-platform search**: Finds prospects across social media, property portals, and news sites
- **AI-powered qualification**: Distinguishes real customers from competitors and low-quality leads  
- **Contact extraction**: Automatically pulls emails, phone numbers, and WhatsApp contacts
- **Lead scoring**: Rates prospects 1-100 based on buying intent and contact quality
- **Automated organization**: Saves all data to Google Sheets with follow-up priorities

## Setup requirements
- Serper.dev API key (2,500 free searches/month)
- OpenAI API key for AI analysis
- Google Sheets account for lead storage
- 10 minutes initial configuration

## How to customize
- **Target markets**: Adjust search terms for luxury, commercial, or specific emirates
- **Search frequency**: Change from 6 hours to your preferred schedule  
- **Additional platforms**: Add more sources by duplicating HTTP request nodes
- **Lead criteria**: Modify AI scoring based on your qualification requirements
- **CRM integration**: Connect output to Salesforce, HubSpot, or other systems

## Expected results
Generate 10-50 qualified leads daily with contact information, saving 5+ hours of manual research while improving lead quality through AI-powered analysis and scoring.

## 📊 Basic Information

- **Workflow ID:** 5472
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 348
- **Downloads:** 34
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5472)

## 👤 Author

- **Name:** papcy
- **Username:** @papcy

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×6)
- **merge** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×2)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
