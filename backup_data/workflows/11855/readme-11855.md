# MCP employee performance & productivity insights engine with automated manager

> ## How It Works
This workflow automates performance monitoring by aggregating data from PM tools, code repositories, meeting logs, and CRM systems. It processes team metrics using AI-powered analysis via OpenAI, identifies bottlenecks and workload issues, then creates manager follow-ups and tasks. The system runs weekly, collecting 4 data sources, combining them, analyzing trends, evaluating team capacity, and routing alerts to managers via Gmail. Managers receive structured summaries highlighting performance gaps and required actions. Target audience: Engineering managers and team leads monitoring team velocity, code quality, and capacity planning.

## Setup Steps
1. Configure credentials: PM Tool API key, Code Repo token, and CRM API key.
2. Set the OpenAI API key.
3. Connect your Gmail account via OAuth.
4. In the Workflow Configuration node, adjust API endpoints and polling intervals.
5. Map data field names to match your tools.
6. Test data fetch nodes using sample queries before deployment.

## Prerequisites
PM tool API access, GitHub/GitLab token, CRM credentials, OpenAI API key, Gmail OAuth connection 

## Use Cases
Track engineering team productivity weekly; identify code review bottlenecks;  

## Customization
Replace PM tool with Jira/Linear; swap OpenAI for Claude/Gemini;  

## Benefits
Reduces manual performance tracking by 6+ hours weekly; provides real-time visibility into team capacity; 

## 📊 Basic Information

- **Workflow ID:** 11855
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 49
- **Downloads:** 4
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11855)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×5)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **if** 
- **gmail** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
