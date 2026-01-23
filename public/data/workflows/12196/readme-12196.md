# Generate SEO landing page content with GPT-4, Reddit, YouTube and Google Sheets

> ## How It Works
This workflow automates SEO content creation by aggregating multi-source research and generating optimized articles. Designed for content marketers, SEO specialists, and digital agencies, it solves the time-consuming challenge of researching trending topics and crafting search-optimized content at scale. The system pulls discussions from Reddit, videos from YouTube, and industry news via APIs, then combines this data into comprehensive insights. An AI agent analyzes aggregated research, performs Google Search SEO analysis, consults Wikipedia for accuracy, and generates structured, SEO-optimized HTML content. The final output saves automatically to Google Sheets for easy management and publishing workflows.

## Setup Steps
1. Configure Reddit, YouTube, and industry news API credentials in fetch nodes
2. Add OpenAI API key for GPT-4 agent and Google API key for search analysis
3. Connect Google Sheets with write permissions for content storage

## Prerequisites
Reddit API access, YouTube Data API key, industry news API

## Use Cases
Blog content automation, competitive content analysis, trending topic research

## Customization
Modify research sources, adjust AI prompts for brand voice, customize SEO parameters

## Benefits
10x faster content production, multi-platform research coverage



## 📊 Basic Information

- **Workflow ID:** 12196
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 63
- **Downloads:** 6
- **Created:** 2025/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12196)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **markdown** 
- **reddit** 
- **youTube** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **merge** 
- **code** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
