# Predict customer churn risk & create interventions with GPT-4, Zendesk & HubSpot

> How it works
This AI Customer Success Risk Prediction workflow revolutionizes customer retention by predicting churn risk 30-90 days before it happens. Here's the high-level flow:
Daily Data Collection → AI Multi-Signal Analysis → Risk Scoring & Prediction → Smart Risk Routing → AI-Generated Personalized Interventions → CRM Updates & Team Alerts
The system automatically gathers data from your product analytics, support system, billing platform, and email tools, then uses GPT-4 to analyze patterns and predict which customers are at risk. It creates personalized intervention strategies and routes them based on urgency level.
Set up steps
Time to set up: Approximately 45 minutes
Prerequisites: Active accounts with your analytics platform, support system, billing provider, CRM, and AI provider
Step 1: Import & Configure Workflow (5 minutes)

Import the workflow JSON into your n8n instance
Review the 3 comprehensive sticky notes for context
Understand the AI analysis logic and intervention strategies

Step 2: Set Environment Variables (10 minutes)
Configure these critical variables:

ANALYTICS_API_URL and ANALYTICS_API_KEY
HIGH_RISK_SLACK_CHANNEL (for critical alerts)
CS_TEAM_EMAIL (intervention sender)
CRM_BASE_URL and CALENDAR_BOOKING_URL

Step 3: Configure API Credentials (20 minutes)
Set up secure credential connections for:

OpenAI/Anthropic API (AI analysis engine)
Analytics platform (Mixpanel/Amplitude/GA)
Support system (Zendesk/Intercom)
Billing platform (Stripe/Chargebee)
HubSpot CRM (risk data storage)
Slack API (team notifications)
SMTP/SendGrid (email delivery)

Step 4: Customize AI Prompts & Risk Thresholds (8 minutes)

Review and adjust the AI analysis prompts for your business
Modify risk score thresholds (Critical 90+, High 70-89, Medium 40-69)
Customize intervention email templates and tone
Set your specific risk factors (usage patterns, support indicators)

Step 5: Test & Activate (2 minutes)

Run a test execution with sample customer data
Verify AI analysis generates appropriate risk scores
Check that interventions are routed correctly
Activate the daily cron schedule

## 📊 Basic Information

- **Workflow ID:** 7344
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 354
- **Downloads:** 35
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7344)

## 👤 Author

- **Name:** shae
- **Username:** @senshae

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **cron** 
- **httpRequest** 
- **zendesk** 
- **stripe** 
- **merge** 
- **aiTransform** (×4)
- **if** (×2)
- **slack** 
- **emailSend** 
- **hubspot** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
