# Track AI agent token usage and estimate costs in Google Sheets

> ![image.png](fileId:1659)
### This n8n template demonstrates how to obtain token usage from AI Agents and places the data into a spreadsheet that calculates the estimated cost of the execution.

Obtaining the token usage from AI Agents is tricky, because it doesn't provide all the data from tool calls. This workflow taps into the workflow execution metadata to extract token usage information.

Works well with OpenAI, Google and Anthropic. Other LLM providers might need small tweaks.

### How it works
1. The AI Agent executes and then calls a subworkflow to calculate the token usage.
2. The data is stored in Google Sheets
3. The spreadsheet has formulas to calculate the estimated cost of the execution.

### How to use
- The AI Agent is used as an example. Feel free to replace this with other agents you have.
- Call the subworkflow AFTER all the other branches have finished executing.

### Requirements
- LLM account (OpenAI, Gemini...) for API usage.
- Google Drive and Sheets credentials
- n8n API key of your instance

## 📊 Basic Information

- **Workflow ID:** 5541
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 13899
- **Downloads:** 1389
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5541)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **executeWorkflow** 
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **set** 
- **n8n** 
- **executeWorkflowTrigger** 
- **splitOut** 
- **summarize** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
