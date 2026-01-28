# Automate peer review assignments with GPT-4-nano, Slack and email notifications

> ## Introduction
Automate peer review assignment and grading with AI-powered evaluation. Designed for educators managing collaborative assessments efficiently.
## How It Works
Webhook receives assignments, distributes them, AI generates review rubrics, emails reviewers, collects responses, calculates scores, stores results, emails reports, updates dashboards, and posts analytics to Slack.
## Workflow Template
Webhook → Store Assignment → Distribute → Generate Review Rubric → Notify Slack → Email Reviewers → Prepare Response → Calculate Score → Store Results → Check Status → Generate Report → Email Report → Update Dashboard → Analytics → Post to Slack → Respond to Webhook
## Workflow Steps
1. Receive & Store: Webhook captures assignments, stores data.
2. Distribute & Generate: Assigns peer reviewers, AI creates rubrics.
3. Notify & Email: Alerts via Slack, sends review requests.
4. Collect & Score: Gathers responses, calculates peer scores.
5. Report & Update: Generates reports, emails results, updates dashboard.
6. Analyze & Alert: Posts analytics to Slack, confirms completion.
## Setup Instructions
1. Webhook & Storage: Configure endpoint, set up database.
2. AI Configuration: Add OpenAI key, customize rubric prompts.
3. Communication: Connect Gmail, Slack credentials.
4. Dashboard: Link analytics platform, configure metrics.
## Prerequisites
- OpenAI API key
- Gmail account
- Slack workspace
- Database or storage system
- Dashboard tool
## Use Cases
- University peer review assignments
- Corporate training evaluations
- Research paper assessments
## Customization
- Multi-round review cycles
- Custom scoring algorithms
## Benefits
- Eliminates manual distribution
- Ensures consistent evaluation



## 📊 Basic Information

- **Workflow ID:** 10310
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 41
- **Downloads:** 4
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10310)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **slack** (×2)
- **emailSend** (×2)
- **respondToWebhook** 
- **postgres** 
- **httpRequest** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
