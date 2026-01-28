# Automate screenshots with URLbox & analyze them with AI

> In this automation we first make a screenshot with a screenshot API called URLbox and then send this screenshot into the OpenAI API and analyze it.

You can extend this automation by the way you want to ingest the website url's & names into this workflow. 

Options as data source:
- Postgres
- Google Sheets
- Your CRM
- ...

**Setup:**
- Replace Website & URL in Setup Node
- Put in your URLbox API Key
- Put in your OpenAI credentials


[**Click here for a blog article with more information on the automation.**](https://n8n-automation.com/2024/01/11/open-ai-vision-api/)

## 📊 Basic Information

- **Workflow ID:** 2207
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 4290
- **Downloads:** 429
- **Created:** 2024/3/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2207)

## 👤 Author

- **Name:** Bela
- **Username:** @bwiertz

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
