# Invoice data extraction with LlamaParse and OpenAI

> This n8n workflow automates the process of parsing and extracting data from PDF invoices. With this workflow, accounts and finance people can realise huge time and cost savings in their busy schedules.

**Read the Blog**: [https://blog.n8n.io/how-to-extract-data-from-pdf-to-excel-spreadsheet-advance-parsing-with-n8n-io-and-llamaparse/](https://blog.n8n.io/how-to-extract-data-from-pdf-to-excel-spreadsheet-advance-parsing-with-n8n-io-and-llamaparse/)

## How it works

* This workflow will watch an email inbox for incoming invoices from suppliers
* It will download the attached PDFs and processing them through a third party service called LlamaParse.
* LlamaParse is specifically designed to handle and convert complex PDF data structures such as tables to markdown.
* Markdown is easily to process for LLM models and so the data extraction by our AI agent is more accurate and reliable.
* The workflow exports the extracted data from the AI agent to Google Sheets once the job complete.

## Requirements

* The criteria of the email trigger must be configured to capture emails with attachments.
* The gmail label "invoice synced" must be created before using this workflow.
* A LlamaIndex.ai account to use the LlamaParse service.
* An OpenAI account to use GPT for AI work.
* Google Sheets to save the output of the data extraction process although this can be replaced for whatever your needs.

## Customizing this workflow

This workflow uses Gmail and Google Sheets but these can easily be swapped out for equivalent services such as Outlook and Excel.

Not using Excel? Simple redirect the output of the AI agent to your accounting software of choice.  


## 📊 Basic Information

- **Workflow ID:** 2320
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 44297
- **Downloads:** 4429
- **Created:** 2024/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2320)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×3)
- **stickyNote** (×9)
- **gmailTrigger** 
- **googleSheets** 
- **wait** 
- **switch** 
- **gmail** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** 
- **splitOut** 
- **aggregate** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
