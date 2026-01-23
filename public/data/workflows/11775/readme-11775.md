# Monitor compliance with GPT-4 analysis of system logs and generate audit reports

> 
## How It Works
This solution centralizes communication data from Slack, Microsoft Teams, Gmail, and GitHub into a unified AI-powered analysis and documentation workflow for teams managing distributed knowledge. Manual aggregation across multiple tools is time-consuming and leads to information silos that obscure key decisions and context. By automating secure data collection and normalization, the workflow enables AI models to analyze conversations, extract decisions, action items, and key themes, and convert these insights into continuously updated documentation such as design notes and knowledge base articles. This improves visibility, preserves organizational knowledge, and supports more effective collaboration and decision-making.

## Setup Steps
* **Connect credentials:** Slack App API, Microsoft Teams credentials, Gmail OAuth, GitHub Personal Access Token, Anthropic API key 
* **Configure monitoring parameters:** Specify channels, repositories, and email labels to track
* **Set schedule triggers: 
 
## Prerequisites
Slack workspace admin, Teams account, Gmail account, GitHub repository access, Anthropic API subscription, Notion workspace, n8n self-hosted or cloud instance.

## Use Cases
Marketing teams aggregating customer feedback across channels; Documentation teams collecting technical updates; 

## Customization
Modify source integrations by adding/removing trigger nodes. Adjust AI prompts in Anthropic node for different analysis types.  

## Benefits
Saves 5+ hours weekly on manual data collection. Ensures no communication missed across platforms.  


 


## 📊 Basic Information

- **Workflow ID:** 11775
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 79
- **Downloads:** 7
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11775)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×3)
- **httpRequest** (×6)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **code** 
- **gmail** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
