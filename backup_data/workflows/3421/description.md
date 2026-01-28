## What does this template do?

This workflow automates the process of retrieving all Google Docs from a specified Google Drive folder, extracting their content, and structuring the data into a unified key-value dictionary, where:
- Key = The file name
- Value = The content of the document (with normalized newlines)

This is ideal for use cases such as knowledge ingestion, prompt context preparation, or populating a RAG (Retrieval-Augmented Generation) system with reference documents.


## Use Case

Perfect for teams or individuals who maintain prompts, content, or reference material in Google Docs and want to integrate that data dynamically into automation or AI workflows.


## What the Workflow Does

- ⚡ Triggered via Execute Workflow Trigger from another workflow
- 📁 Retrieves all files from a specified Google Drive folder
- 📄 Downloads the full content of each Google Docs file
- 🧩 Maps each file name to its content using a Set node
- 🧠 Aggregates all entries into a single dictionary with Code node
- 🧾 Outputs a JSON object like:
```json
{
  "Doc1": "content of doc 1",
  "Doc2": "content of doc 2"
}
```


## Apps & Services Used
- Google Drive
- Google Docs
- n8n Code node


## Pre-requisites
- A connected Google account with access to the target Drive folder
- OAuth2 credentials for both:
- Google Drive
- Google Docs


## Customization Tips
- Change Folder: Update the Google Drive node to select a specific folder rather than root
- Support Other File Types: Replace or complement the Google Docs node to handle other formats (e.g., PDFs or text files)
- Data Cleaning: Modify the Code node to adjust text normalization to your needs


## Additional Use Cases

#### 🧠 Prompt Management for AI Workflows
- Centralize your GPT prompt templates in Google Docs instead of hardcoding them in n8n
- Easily manage prompt versions and edits directly from Google Drive
- Dynamically load prompts into downstream nodes (like OpenAI or Hugging Face) without redeploying workflows

#### 📚 Knowledge Base Loader for RAG Systems
- Aggregate internal knowledge, FAQs, SOPs, or policy docs from Google Docs into a structured dictionary
- Use the resulting object as the context source for Retrieval-Augmented Generation models

#### 🎛️ Dynamic Form Inputs or Question Sets
- Maintain forms, surveys, or interview questions in Google Docs
- Load the content into n8n for form generation, chatbot interaction, or customer intake flows

#### 📄 Client-Specific Config or Script Templates
- For client onboarding workflows, load client-specific scripts or prompts from individual docs named after each client
- Helps automate client-facing document generation or AI interactions

#### 📋 Content Ingestion for Translation, Summarization, or Sentiment Analysis
- Batch process internal documentation or user-submitted Google Docs
- Trigger summarization, translation, or classification pipelines using the document contents

#### 🔄 Document-to-Database Import
- Automatically fetch and normalize Google Docs contents, ready to push into a database (e.g., Notion, Airtable, PostgreSQL)

