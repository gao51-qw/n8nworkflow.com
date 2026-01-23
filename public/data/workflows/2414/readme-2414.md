# Extract spending history from gmail to google sheet

> ## How it works
1. Fetch transaction notification emails (including attachments)
2. Clean up data
3. Let AI (Basic LLM Chain node) generate bookkeeping item
4. Send to Google sheet

## Details
1. The example fetch email from Gmail lables, suggested using filters to automatically orgianize email into the labels
2. Data will send to "raw data" sheet
3. Example google sheet:
https://docs.google.com/spreadsheets/d/1_IhdHj8bxtsfH2MRqKuU2LzJuzm4DaeKSw46eFcyYts/edit?gid=1617968863#gid=1617968863

## 📊 Basic Information

- **Workflow ID:** 2414
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 2822
- **Downloads:** 282
- **Created:** 2024/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2414)

## 👤 Author

- **Name:** hana
- **Username:** @hanamizuki

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** (×2)
- **extractFromFile** (×2)
- **html** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** (×2)
- **set** (×5)
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **merge** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
