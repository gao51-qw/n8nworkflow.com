# Detect multi-source transaction fraud and reconcile finances with OpenAI, Nvidia NIM, Gmail, Slack and Google Sheets

> ## How It Works
This workflow automates financial transaction surveillance by monitoring multiple payment systems, analyzing transaction patterns with AI, and triggering instant fraud alerts. Designed for finance teams, compliance officers, and fintech operations, it solves the challenge of real-time fraud detection across high-volume transaction streams without manual oversight. The system continuously fetches transactions from banking APIs and payment gateways via scheduled triggers or webhooks. Each transaction flows through validation layers checking for irregular amounts, velocity patterns, and geolocation anomalies. AI models analyze transaction metadata against historical patterns to calculate fraud risk scores. High-risk transactions trigger immediate alerts to designated teams via Gmail and Slack, while audit trails are logged to Google Sheets for compliance documentation. Approved transactions proceed to reconciliation, aggregating financial reports automatically. This eliminates delayed fraud discovery, reduces false positives through intelligent scoring, and ensures regulatory compliance through comprehensive audit logging.

## Setup Steps
1. Configure banking API credentials for transaction access
2. Set up webhook endpoints for real-time transaction notifications
3. Add OpenAI API key for fraud pattern analysis and risk scoring
4. Configure NVIDIA NIM API for advanced anomaly detection models
5. Set Gmail OAuth credentials for automated fraud alert delivery
6. Connect Slack workspace and specify alert channels for urgent notifications
7. Link Google Sheets for transaction logging and compliance audit trails

## Prerequisites
Active accounts for payment processors (Stripe, PayPal) or banking APIs (Plaid)
## Use Cases
Real-time credit card transaction monitoring with instant fraud blocks
## Customization
Adjust fraud risk scoring thresholds based on business risk tolerance
## Benefits
Reduces fraud detection time from hours to seconds through real-time monitoring. 

## 📊 Basic Information

- **Workflow ID:** 12732
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12732)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **webhook** 
- **set** (×3)
- **httpRequest** (×3)
- **merge** 
- **filter** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **postgres** (×2)
- **slack** (×2)
- **gmail** 
- **aggregate** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
