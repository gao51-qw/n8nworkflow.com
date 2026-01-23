# AI-powered cover letter generator with resume matching & Google Docs

> This workflow generates a tailored cover letter using a provided resume and job description.

Users submit a job description via form (or workflow input), the workflow uses an LLM to write a professional, casual cover letter, then creates and populates a Google Doc and redirects the user to download or review it.

---

## What You Must Update Before Running

### 1. Resume Content
Update the **Configuration** node to include your own resume text.  
This resume is injected directly into the prompt and used as the sole source of experience and qualifications.

### 2. LLM Credentials
The workflow uses **OpenRouter** with an OpenAI-compatible model.

You must:
- Add your own OpenRouter API credentials
- Optionally change the model selection if desired

### 3. Google Docs Credentials
This workflow creates and edits Google Docs.

You must:
- Connect your own Google Docs OAuth credentials
- Update the destination folder ID if you want files saved elsewhere

---

## What You Can Configure

### 1. Prompt Tone & Constraints
Edit the **Write Cover Letter** agent system prompt to adjust:
- Tone (more formal or more casual)
- Length
- Writing style constraints

### 2. Execution Method
The workflow supports:
- Manual execution via form submission
- Execution as a sub-workflow via workflow inputs


## 📊 Basic Information

- **Workflow ID:** 11840
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 108
- **Downloads:** 10
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11840)

## 👤 Author

- **Name:** Joel Gamble
- **Username:** @joelgamble

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDocs** (×2)
- **form** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
