# Daily validated business ideas using n8n and Upwork

> **How it works**
- Runs at set times to fetch new Upwork job listings.
- Checks each job’s total or hourly budget and keeps only higher-budget ones.
- Extracts the job description for those selected jobs.
- Uses AI to identify the core business idea from each description.
- Records the idea and job details into a Google Sheet.
- Can also be triggered manually to process a single job description.

**Set up steps**

- **Required:** Upwork API key, AI service key, and a Google Sheet.
- **Import:** Bring the JSON into n8n.
- **Configure:** Enter your API keys and connect to your Google Sheet.
- **Time:** About 25–35 minutes to complete all steps.
- **Notes:** Detailed setup instructions are added as sticky notes inside the workflow.

## 📊 Basic Information

- **Workflow ID:** 4715
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 755
- **Downloads:** 75
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4715)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **set** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **switch** 
- **filter** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
