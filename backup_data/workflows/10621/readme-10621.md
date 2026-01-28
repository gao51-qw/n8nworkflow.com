# Flight deal analyzer with weather data using GPT, Google Flights & WordPress

> ## Introduction
Automates flight deal discovery and intelligent analysis for travel bloggers and deal hunters. Scrapes live pricing, enriches with weather data, applies AI evaluation, and auto-publishes to WordPress—eliminating manual research and accelerating content delivery.

## How It Works
User submits route via form, scrapes real-time flight prices and weather data, AI analyzes deal quality considering weather conditions, formats results, publishes to WordPress, sends Slack notification—fully automated from input to publication.

## Workflow Template
Form Input → Extract Data → Scrape Flight Prices → Extract Pricing → Fetch Weather → Parse Weather → Prepare AI Input → AI Analysis → Parse Output → Format Results → Publish WordPress → Slack Alert → User Response

## Setup Instructions
1. **Form Setup:** Configure user input fields for flight routes and preferences
2. **APIs:** Connect Google Flights scraping endpoint, weather API credentials, OpenAI/Chat Model API key
3. **Publishing:** Set WordPress credentials, target blog category, Slack webhook URL
4. **AI Configuration:** Define analysis prompts, output structure, parser rules

## Workflow Steps
1. **Data Collection:** Form captures route, scrapes Google Flights pricing, fetches destination weather via API
2. **AI Processing:** Enriches flight data with weather context, analyzes deal quality using OpenAI/Chat Model with structured output parsing
3. **Publishing:** Formats analysis results, creates WordPress post, sends Slack notification, delivers response to user


## Prerequisites
n8n instance, Google Flights access, weather API key, OpenAI/compatible AI service, WordPress site with API access, Slack workspace

## Use Cases
Travel blog automation, flight deal newsletters, price comparison services, seasonal travel planning, destination weather analysis, automated social media content

## Customization
Modify AI analysis criteria, adjust weather impact weighting, customize WordPress post templates, add email distribution, integrate additional data sources, expand to hotel/rental deals

## Benefits
Eliminates manual price checking, combines multiple data sources automatically, delivers AI-enhanced insights, accelerates publishing workflow, scales across unlimited routes, provides weather-aware recommendations


## 📊 Basic Information

- **Workflow ID:** 10621
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 300
- **Downloads:** 30
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10621)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×5)
- **httpRequest** (×2)
- **html** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **wordpress** 
- **respondToWebhook** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
