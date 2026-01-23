# Scale deal flow with a Pitch Deck AI vision, chatbot and QDrant vector store

> Are you a popular tech startup accelerator (named after a particular higher order function) overwhelmed with 1000s of pitch decks on a daily basis? Wish you could filter through them quickly using AI but the decks are unparseable through conventional means? Then you're in luck!

This n8n template uses Multimodal LLMs to parse and extract valuable data from even the most overly designed pitch decks in quick fashion. Not only that, it'll also create the foundations of a RAG chatbot at the end so you or your colleagues can drill down into the details if needed. With this template, you'll scale your capacity to find interesting companies you'd otherwise miss!

**Requires n8n v1.62.1+**

## How It Works

* Airtable is used as the pitch deck database and PDF decks are downloaded from it.
* An AI Vision model is used to transcribe each page of the pitch deck into markdown.
* An Information Extractor is used to generate a report from the transcribed markdown and update required information back into pitch deck database.
* The transcribed markdown is also uploaded to a vector store to build an AI chatbot which can be used to ask questions on the pitch deck.

Check out the sample Airtable here: [https://airtable.com/appCkqc2jc3MoVqDO/shrS21vGqlnqzzNUc](https://airtable.com/appCkqc2jc3MoVqDO/shrS21vGqlnqzzNUc)

### How To Use
* This template depends on the availability of the Airtable - make a duplicate of the airtable ([link](https://airtable.com/appCkqc2jc3MoVqDO/shrS21vGqlnqzzNUc)) and its columns before running the workflow.
* When a new pitchdeck is received, enter the company name into the **Name** column and upload the pdf into the **File** column. Leave all other columns blank.
* If you have the Airtable trigger active, the execution should start immediately once the file is uploaded. Otherwise, click the manual test trigger to start the workflow.
* When manually triggered, all "new" pitch decks will be handled by the workflow as separate executions.

## Requirements
* OpenAI for LLM
* Airtable For Database and Interface
* Qdrant for Vector Store

## Customising This Workflow

* Extend this starter template by adding more AI agents to validate claims made in the pitch deck eg. Linkedin Profiles, Page visits, Reviews etc.

## 📊 Basic Information

- **Workflow ID:** 2464
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 7765
- **Downloads:** 776
- **Created:** 2024/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2464)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **sort** 
- **httpRequest** (×3)
- **compression** 
- **code** 
- **stickyNote** (×11)
- **editImage** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **merge** 
- **airtable** (×2)
- **set** 
- **if** 
- **executeWorkflow** 
- **noOp** 
- **executeWorkflowTrigger** 
- **extractFromFile** 
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **airtableTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **airtableTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
