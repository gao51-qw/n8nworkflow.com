# Generate Dream 100 prospect lists with Perplexity AI research and Google Sheets

> ## Overview
Send an AI a few details about your "Dream Customer" in normal english, then have it search the web and give you a "Dream 100" - 100 ideal prospects to connect with in your industry.  

Great for stress-testing a product idea or giving you a start for networking in an industry.

## How it works

- Send the AI agent information about your business + ideal customer.  It will ask you to clarify any additional info.
- The agent will use an LLM to turn your criteria into specific prompts for an internet search
- Perplexity will use those prompts to identify ideal customers
- An LLM will format those Perplexity results, then they'll be added to a Google sheet.


## Set up steps

1. Copy the provided google sheets template into your Google Drive
2. Connect your Google Drive/Sheets to the workflow
3. Connect OpenRouter and Perplexity to the workflow (Just paste in your API key!)
4. If desired, connect the Slack trigger/response nodes to control the agent from Slack.


## 📊 Basic Information

- **Workflow ID:** 8466
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 470
- **Downloads:** 47
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8466)

## 👤 Author

- **Name:** Brandon True
- **Username:** @brandonius

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×4)
- **switch** 
- **googleSheets** (×2)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.chat** (×2)
- **stickyNote** (×9)
- **slackTrigger** 
- **slack** (×2)
- **perplexityTool** 
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
