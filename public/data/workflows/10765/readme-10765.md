# Market intelligence engine with AI sentiment detection & competitor analysis

> ## How It Works
A scheduled process aggregates content from eight distinct data sources and standardizes all inputs into a unified format. AI models perform sentiment scoring, detect conspiracy or misinformation signals, and generate trend analyses across domains. An MCDN routing model prioritizes and channels insights to the appropriate workflows. Dashboards visualize real-time analytics, trigger KPIs based on thresholds, and compile comprehensive market-intelligence reports for stakeholders.

## Setup Steps
1. **Data Sources:** Connect news APIs, social media platforms, academic databases, code repositories, and documentation feeds.
2. **AI Analysis:** Configure OpenAI models for sentiment analysis, conspiracy detection, and trend scoring.
3. **Dashboards:** Integrate analytics platforms and enable automated email or reporting outputs.
4. **Storage:** Configure a database for historical records, trend archives, and competitive-intelligence storage.


## Prerequisites
Multi-source API credentials; OpenAI API key; dashboard platform access; email service; code repository access; academic database credentials

## Use Cases
Competitive intelligence monitoring; market trend analysis; technology landscape tracking; product strategy research; misinformation filtering

## Customization
Adjust sentiment thresholds; add/remove data sources; modify analysis rules; extend AI models

## Benefits
Reduces research time 80%; consolidates market intelligence; improves decision accuracy



## 📊 Basic Information

- **Workflow ID:** 10765
- **Complexity:** advanced
- **Node Count:** 46
- **Views:** 230
- **Downloads:** 23
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10765)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×8)
- **merge** (×2)
- **code** (×9)
- **removeDuplicates** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **postgres** (×4)
- **if** 
- **slack** 
- **gmail** 
- **stickyNote** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 46 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
