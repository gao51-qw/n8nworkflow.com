# Analyze documents & web content with GPT-4o Q&A assistant

> # Document Analyzer and Q&A Workflow

AI-powered document and web page analysis using n8n and GPT model. Ask questions about any local file or web URL and get intelligent, formatted answers.

## Who's it for

Perfect for researchers, developers, content analysts, students, and anyone who needs quick insights from documents or web pages without uploading files to external services.

## What it does

- **Analyzes local files**: PDF, Markdown, Text, JSON, YAML, Word docs
- **Fetches web content**: Documentation sites, blogs, articles
- **Answers questions**: Using GPT model with structured, well-formatted responses

**Input format:** `path_or_url | your_question`

**Examples:**
```
/Users/docs/readme.md | What are the installation steps?
https://n8n.io | What is n8n?
```

## Setup

1. Import workflow into n8n
2. Add your OpenAI API key to credentials
3. Link the credential to the "OpenAI Document Analyzer" node
4. Activate the workflow
5. Start chatting!

## Customize

**Change AI model** → Edit "OpenAI Document Analyzer" node (switch to `gpt-4o-mini` for cost savings)

**Adjust content length** → Modify `maxLength` in "Process Document Content" node (default: 15000 chars)

**Add file types** → Update `supportedTypes` array in "Parse Document & Question" node

**Increase timeout** → Change timeout value in "Fetch Web Content" node (default: 30s)

---

## 📊 Basic Information

- **Workflow ID:** 9651
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 360
- **Downloads:** 36
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9651)

## 👤 Author

- **Name:** Aadarsh Jain
- **Username:** @aadarsh-jain

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **code** (×2)
- **if** (×2)
- **readBinaryFile** 
- **httpRequest** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
