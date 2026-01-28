# Monitor brand reputation and detect crises with GPT-4, Slack and Gmail

> ## How It Works
This workflow automates brand reputation monitoring by analyzing sentiment across news, social media, reviews, and forums using AI-powered trend detection. Designed for PR teams, brand managers, marketing directors, and crisis communication specialists requiring real-time awareness of reputation threats before they escalate.The template solves the challenge of manually tracking brand mentions across fragmented channels—news outlets, Twitter, Instagram, review sites, Reddit, industry forums—then identifying emerging crises hidden in sentiment shifts and volume spikes.Scheduled execution triggers four parallel HTTP nodes fetching data from news APIs, social media monitoring services, review aggregators, and forum discussion platforms. Merge node combines all sources, then normalization ensures consistent data structure. OpenAI GPT-4 with structured output parsing performs sophisticated sentiment analysis and trend detection, identifying sudden negative sentiment surges, coordinated criticism patterns, and viral complaint escalation. 

## Setup Steps
1. Configure HTTP nodes with API credentials for news monitoring service 
2. Add OpenAI API key to Chat Model node for sentiment and trend analysis
3. Connect Slack workspace and specify crisis response team channel 
4. Integrate Gmail account with PR leadership distribution list  
5. Set up Google Sheets connection and create monitoring dashboard  

## Prerequisites
OpenAI API key, news monitoring API access

## Use Cases
Consumer brands monitoring product launch reception and identifying quality issues early

## Customization
Modify AI prompts for industry-specific crisis indicators

## Benefits
Reduces crisis detection time from hours to minutes enabling damage control before viral spread









 





## 📊 Basic Information

- **Workflow ID:** 12283
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12283)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** (×4)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **slack** 
- **gmail** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
