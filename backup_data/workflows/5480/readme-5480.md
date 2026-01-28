# Automated resume scoring with Gemini LLM, Gmail and Notion job profiles

> **This n8n template demonstrates how to use AI to score the all Resumes by matching it with Job profile**

Problem Statement: A Hr person is flooded with resume and spends hours manually checking each to find most suitable ones.

**How it works**
1. It is linked to Gmail Trigger which upon receving any mail with specific subject will check for the attachment.
2. Attachment will be parsed to understand the resume
3. Candidate informtion will be broken into Personal, Eductional and Professional type
4. Job profile will be pulled from Notion Board
5. A HR expert powered by Gemini LLM will score each profile on basis on its relevancy 
6. Information will be updated back to Gsheet 
7. Message lable will be updated back for clarity

**How to use**
1. The gmail trigger node is used as an example but feel free to replace this with other triggers such as webhook or even a form.


**Requirements**
Gemini account for LLM
Google sheet for upload
Gmail as trigger
Llama parse credentials


## 📊 Basic Information

- **Workflow ID:** 5480
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3416
- **Downloads:** 341
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5480)

## 👤 Author

- **Name:** Agentick AI
- **Username:** @arpanjain29

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×3)
- **wait** 
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×3)
- **merge** (×2)
- **notion** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** 
- **gmail** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
