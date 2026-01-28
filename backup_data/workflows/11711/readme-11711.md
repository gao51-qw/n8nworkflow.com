# AI-powered multi-channel customer journey with email, SMS & retargeting using OpenAI

> ## How It Works
This workflow automates personalized customer journeys by analyzing CRM data, purchase history, chat interactions, and performance metrics to intelligently route customer actions through multiple channels (email, SMS, retargeting) via AI-optimized schemas. A webhook trigger initiates the process by fetching CRM customer data, which is then merged with historical records and interactions. OpenAI builds comprehensive customer state profiles, enabling intelligent routing to appropriate channels using optimized journey logic. The system aggregates performance metrics in real-time and updates the database to maintain synchronized customer information across all systems. 

## Setup Steps
1. Connect CRM credentials (source system)
2. Add OpenAI API key for state builder
3. Configure Gmail/SMS provider credentials
4. Add Google Sheets connection for performance tracking
5. Set Touchpoint Event Webhook URL
6. Map database connection for customer state persistence

## Prerequisites
OpenAI API key, CRM access, Gmail/SMS provider accounts, Google Sheets, database (PostgreSQL/MySQL), n8n instance with webhook enabled.

## Use Cases
E-commerce personalization, SaaS customer retention, multi-touch marketing automation 

## Customization
Modify journey schemas in Journey Optimizer AI, adjust routing rules in Action Type Router 

## Benefits
Reduces manual campaign management 80%, improves conversion via AI personalization 

## 📊 Basic Information

- **Workflow ID:** 11711
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 194
- **Downloads:** 19
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11711)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×7)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **switch** (×2)
- **gmail** 
- **twilio** 
- **googleAds** 
- **aggregate** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
