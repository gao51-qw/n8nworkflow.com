# Build a RAG chat system using Aryn DocParse, AWS S3, Pinecone and GPT-4o

> ### How it works
1. Provide your S3 bucket containing documents such as PDFs and MS Word in the "Get Files from S3" node.  You will need to provide AWS credentials that will allow the node to access the bucket and download the files in the specified location.
2. Choose document processing options in the Aryn node.  The main options are for text and table extraction.  You can also provide a JSON schema for property extraction.  You can refer to https://docs.aryn.ai/docparse/processing_options for details on these options.  You will also need an Aryn API key which you can obtain by going to https://aryn.ai/signup.  Please note that use of vision models for OCR and table extraction is restricted to paid tiers.
3. The resulting content of parsing and extraction is then chunked and ingested into Pinecone.
4. Once at least one document has been ingested into a Pinecone index, you can start asking questions about anything that may be found in ingested documents in the chat box.

### Setup steps
1. For data retrieval, you will need a "folder" in a bucket on AWS S3 as well as valid AWS credentials with permission to fetch those files.
2. For document parsing, you will need to obtain an Aryn API key.  You can sign up for free at https://aryn.ai/signup.
3. For the Pinecone vector database, head over to https://pinecone.io and create an account and create a sample index for free.  You will also need to generate an API key.
4. For the AI agent and RAG, you will also need an OpenAI API key.  Please go to https://openai.com and get a free API key.

## 📊 Basic Information

- **Workflow ID:** 12531
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 7
- **Downloads:** 0
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12531)

## 👤 Author

- **Name:** Austin Lee
- **Username:** @austin-aryn-ai

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **awsS3** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@aryn-ai/n8n-nodes-aryn.aryn** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
