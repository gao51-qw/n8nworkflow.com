# Grade and deliver multi-course assignment feedback with GPT-4o, Google Drive, Slack, and Gmail

> ## How It Works
This workflow automates business intelligence reporting by aggregating data from multiple sources, processing it through AI models, and delivering formatted dashboards via email. Designed for business analysts, operations managers, and executive teams, it solves the challenge of manually compiling metrics from disparate systems into coherent reports. The system triggers on schedule or webhook, extracting data from Google Sheets, databases, and APIs. Raw data flows through transformation nodes that calculate KPIs, generate trend analyses, and create visualizations. AI models (OpenAI) provide natural language insights and anomaly detection. Results populate multiple dashboard templates—executive summary, departmental metrics, and detailed analytics—each tailored to specific stakeholder needs. Formatted reports are automatically distributed via Gmail with embedded charts and actionable recommendations. This eliminates hours of manual data gathering, reduces reporting errors, and ensures stakeholders receive timely, consistent insights.

## Setup Steps
1. Configure Google Sheets credentials and specify source spreadsheet IDs
2. Set up database connections (PostgreSQL, MySQL) with read-only access
3. Add OpenAI API key for GPT-4 analytics and narrative generation
4. Set Gmail OAuth credentials for automated email delivery
5. Define recipient lists for each dashboard type (executive, departmental, detailed)
6. Customize dashboard templates with company branding and preferred KPIs

## Prerequisites
Active Google Workspace account with Sheets and Gmail access. 
## Use Cases
Automated weekly executive dashboards with YoY comparisons.
## Customization
Modify dashboard templates to match corporate branding standards.
## Benefits
Reduces report preparation time by 80% through full automation. 

## 📊 Basic Information

- **Workflow ID:** 12731
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12731)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **scheduleTrigger** 
- **set** (×4)
- **httpRequest** (×2)
- **merge** 
- **code** (×2)
- **if** (×2)
- **postgres** (×4)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **switch** 
- **html** 
- **slack** (×4)
- **gmail** (×2)
- **wait** 
- **respondToWebhook** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
