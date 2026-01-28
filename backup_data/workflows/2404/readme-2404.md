# Arxiv paper trend search using AI, write article, send email

> This workflow gathers papers in Arxiv and specific arxiv category
AI helps to make summarized form of newsletter and send it to subscriber using gmail

## Arxive paper trend newsletter
### Setup
- Supabase
  - Table schema
    - user_email: Text - Mandatory
    - arxiv_cat: [Text]
    - interested_papers: [Text]
    - keyword: [Text]
  - Example
{
  "id": 8,
  "created_at": "2024-09-24T12:31:17.09491+00:00",
  "user_email": "test@test.com",
  "arxiv_cat": 
  [
    "cs.AI",
    "cs.LG,cs.AR"
  ],
  "interested_papers": null,
  "keyword": 
  [
    "AI architecture which includes long context problem"
  ]
}
- Qdrant vector store
  - default setup

## Setup for sub workflows
- Get arxiv category by AI for given keyword
- Get arxiv categories
- Get arxiv papers this week and scoring by AI
- Filter by keyword within given documents
- Extract paper information
- Write newsletter by AI

## 📊 Basic Information

- **Workflow ID:** 2404
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 735
- **Downloads:** 73
- **Created:** 2024/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2404)

## 👤 Author

- **Name:** Jimmy Lee
- **Username:** @jimmy

## 🔗 Nodes Used

- **if** (×3)
- **supabase** (×3)
- **executeWorkflow** (×5)
- **limit** (×2)
- **sort** 
- **removeDuplicates** 
- **scheduleTrigger** 
- **merge** (×2)
- **splitInBatches** 
- **set** (×5)
- **gmail** 
- **stickyNote** (×8)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
