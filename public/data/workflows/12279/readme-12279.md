# Score telematics driving risk with Claude and adjust insurance premiums via HTTP, Gmail, and Slack

> ## How It Works
This workflow automates insurance premium adjustments by analyzing telematics data with AI-driven risk assessment and syncing changes across underwriting systems. Designed for carriers, actuaries, and underwriting teams managing usage-based insurance programs, it eliminates manual review of driving patterns, speed, braking, and mileage while ensuring compliance. Scheduled execution fetches telematics data via HTTP from vehicles or mobile apps. Anthropic Claude analyzes behavior with structured output parsing, generating risk scores from acceleration, harsh braking, speeding, and time-of-day driving. Calculator node applies scores to premiums, and HTTP node updates policy systems. High-risk cases trigger Gmail alerts to underwriting managers and Slack notifications to claims teams. Final HTTP sync ensures compliance across all systems.

## Setup Steps
1. Configure Schedule node for desired analysis frequency 
2. Set up HTTP node with telematics platform API  
3. Add Anthropic API key to Chat Model node for behavioral risk analysis
4. Connect policy management system API credentials in HTTP nodes 
5. Integrate Gmail and Slack with underwriting team addresses  

## Prerequisites
Anthropic API key, telematics data platform API access

## Use Cases
Auto insurance carriers implementing usage-based insurance programs

## Customization
Modify AI prompts to incorporate additional risk factors like weather conditions

## Benefits
Reduces premium calculation time from days to minutes


 





 



## 📊 Basic Information

- **Workflow ID:** 12279
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 5
- **Downloads:** 0
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12279)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **gmail** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
