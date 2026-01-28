# Multi-channel customer sentiment tracker with real-time analytics and alerting

> ## How It Works
Scheduled processes retrieve customer feedback from multiple channels. The system performs sentiment analysis to classify tone, then uses OpenAI models to extract themes, topics, and urgency indicators. All processed results are stored in a centralized database for trend tracking. Automated rules identify high-risk or negative sentiment items and trigger alerts to the relevant teams. Dashboards and workflow automation then visualize insights and support follow-up actions.

## Setup Instructions
1. **Data Sources:** Connect social media APIs, survey tools, and customer support platforms.
2. **AI Analysis:** Configure the OpenAI API with sentiment and theme-extraction prompts.
3. **Database:** Set up a feedback storage schema in your utility database.
4. **Alerts:** Configure email notifications and CRM triggers for priority issues.
5. **Dashboards:** Link your analytics and reporting tools for real-time insights.


## Prerequisites
Social media/survey API credentials; OpenAI API key; database access; CRM system credentials; email notification setup

## Use Cases
Customer sentiment tracking; product feedback aggregation; support ticket prioritization; brand monitoring; trend identification

## Customization
Adjust sentiment thresholds; add new feedback sources; modify categorization rules 

## Benefits
Reduces analysis time 85%; captures actionable insights; enables rapid response to issues 



## 📊 Basic Information

- **Workflow ID:** 10762
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 93
- **Downloads:** 9
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10762)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** (×7)
- **merge** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **postgres** 
- **aggregate** 
- **if** (×2)
- **slack** 
- **emailSend** 
- **googleSheets** 
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
