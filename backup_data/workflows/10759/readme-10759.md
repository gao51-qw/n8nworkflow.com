# Real-time IoT anomaly detection with MQTT, GPT-4o-mini AI, and multi-channel alerts

>  
## How It Works

MQTT ingests real-time sensor data from connected devices. The workflow normalizes the values and trains or retrains machine learning models on a defined schedule. An AI agent detects anomalies, validates the results for accuracy, and ensures reliable alerts. Detected issues are then routed to dashboards for visualization and sent via email notifications to relevant stakeholders, enabling timely monitoring and response.

## Setup Steps

1. **MQTT:** Configure broker connection, set topic subscriptions, and verify data flow.
2. **ML Model:** Define retraining schedule and specify historical data sources for model updates.
3. **AI Agent:** Connect Claude or OpenAI APIs and configure anomaly validation prompts.
4. **Alerts:** Set dashboard URL and email recipients to receive real-time notifications.

## Prerequisites
MQTT broker credentials; historical training data; OpenAI/Claude API key; dashboard access; email service

## Use Cases
IoT sensor monitoring; server performance tracking; network traffic anomalies; application log analysis; predictive maintenance alerts

## Customization
Adjust sensitivity thresholds; swap ML models; modify notification channels; add Slack/Teams integration; customize validation rules

## Benefits
Reduces detection latency 95%; eliminates manual monitoring; prevents false alerts; enables rapid incident response; improves system reliability
 

## 📊 Basic Information

- **Workflow ID:** 10759
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 130
- **Downloads:** 13
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10759)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **mqttTrigger** 
- **set** (×2)
- **code** (×2)
- **postgres** (×3)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **httpRequest** (×2)
- **slack** 
- **emailSend** 
- **scheduleTrigger** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
