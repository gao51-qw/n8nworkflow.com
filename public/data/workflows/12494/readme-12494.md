# Automate actuarial premium adjustments and claims reporting with GPT-4.1, Gmail and Slack

> ## How It Works
This workflow automates insurance claims processing by deploying specialized AI agents to analyze actuarial data, draft claim memos, and perform risk assessments. Designed for insurance adjusters, underwriters, and claims managers handling high claim volumes, it solves the bottleneck of manual claim review that delays settlements and increases operational costs. The system ingests new claims data via scheduled triggers, then routes information to an actuarial analysis agent that calculates loss ratios and risk scores. A memo writer agent generates detailed claim summaries with recommendations, while a risk assessment agent evaluates fraud indicators and coverage implications. An orchestrator agent coordinates these specialists, ensuring consistent analysis standards. Final reports are automatically distributed via email to product teams and Slack notifications to risk management, creating transparent workflows while reducing claim processing time from days to hours with standardized, comprehensive evaluations.

## Setup Steps
1. Configure claims database API credentials in "Fetch New Claims Data" node
2. Input NVIDIA API key for all OpenAI Model nodes  
3. Add OpenAI API key in Orchestrator Agent configuration
4. Set up Calculator Tool parameters for premium adjustment calculations
5. Configure Gmail credentials and recipient addresses for product team  
6. Connect Slack workspace and specify risk team channel for alerts
 
## Prerequisites
NVIDIA API access, OpenAI API key, claims management system API
## Use Cases
Auto insurance claim triage, property damage assessment automation
## Customization
Adjust risk scoring thresholds, add industry-specific analysis criteria
## Benefits
Reduces claim processing time by 85%, ensures consistent evaluation standards

## 📊 Basic Information

- **Workflow ID:** 12494
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12494)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **code** 
- **@n8n/n8n-nodes-langchain.agentTool** (×2)
- **gmail** 
- **slack** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
