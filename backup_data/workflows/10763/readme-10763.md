# Real-time oil price crisis detection with Qwq-32b AI and multi-channel alerts

> ## How It Works
Scheduled runs collect data from oil markets, global shipping movements, news sources, and official reports. The system performs statistical checks to detect anomalies and volatility shifts. An AI-driven geopolitical model evaluates emerging risks and assigns a crisis score. Based on severity thresholds, results are routed to the appropriate alert channels for rapid response.

## Setup Steps

1. **Data Sources:** Connect the oil price API, OPEC report feeds, shipping databases, and news sources.
2. **AI Model:** Configure the OpenRouter ChatGPT model for geopolitical and risk analysis.
3. **Alerts:** Define severity rules and route alerts to Email, Slack, or Dashboard APIs.
4. **Storage:** Configure a database for historical records, audit logging, and trend tracking.

## Prerequisites
Oil market API credentials; news feed access; OPEC data source; OpenRouter API key; Slack/email/dashboard integrations

## Use Cases
Supply chain risk monitoring; energy market crisis detection; geopolitical threat assessment; trader decision support; operational risk management

## Customization
Adjust risk thresholds; add market data sources; modify alert routing rules 

## Benefits
Reduces crisis detection lag 90%; consolidates fragmented data; enables proactive response 

 

## 📊 Basic Information

- **Workflow ID:** 10763
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 92
- **Downloads:** 9
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10763)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×4)
- **httpRequest** (×5)
- **merge** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** 
- **gmail** 
- **slack** 
- **postgres** 
- **stickyNote** (×14)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
