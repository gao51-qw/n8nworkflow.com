# Automate LLM testing with GPT-4 judge & Google Sheets tracking

> ## How it works
- The workflow loads a list of test cases from a Google Sheet (previous results stored from an LLM)
- For each test case, we execute a call to an LLM judge in parallel (using HTTP Request + Webhook nodes)
- The judge uses the Input, Output, and Reference Answer fields from the spreadsheet to mark each LLM response as Pass/Fail
- The results are logged into a separate sheet in the same Sheets file.

## Set up steps:
- Add your credentials for Google Sheets and OpenRouter (or replace the OpenRouter node with your favourite chat model).
- Make a copy of the example Sheet to populate it with you own test data.
- Run the workflow with the Execute Workflow button next to the Manual Trigger node.

## 📊 Basic Information

- **Workflow ID:** 6041
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 538
- **Downloads:** 53
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6041)

## 👤 Author

- **Name:** Adam Janes
- **Username:** @adamjanes

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **stickyNote** (×5)
- **limit** 
- **set** (×2)
- **httpRequest** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
