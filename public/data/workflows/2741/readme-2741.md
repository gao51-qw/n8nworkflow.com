# AI-powered RAG workflow for stock earnings report analysis

> This n8n workflow creates a financial analysis tool that generates reports on a company's quarterly earnings using the capabilities of OpenAI GPT-4o-mini, Google's Gemini AI and Pinecone's vector search. By analyzing PDFs of any company's earnings reports from their Investor Relations page, this workflow can answer complex financial questions and automatically compile findings into a structured Google Doc.

## How it works:
1. Data loading and indexing
* Fetches links to PDF earnings document from a Google Sheet containing a list of file links.
* Downloads the PDFs from Google Drive.
* Parses the PDFs, splits the text into chunks, and generates embeddings using the Embeddings Google AI node (text-embedding-004 model).
* Stores the embeddings and corresponding text chunks in a Pinecone vector database for semantic search.

2. Report generation with AI agent
* Utilizes an AI Agent node with a specifically crafted system prompt. The agent orchestrates the entire process.
* The agent uses a Vector Store Tool to access and retrieve information from the Pinecone database.
3. Report delivery
* Saves the generated report as a Google Doc in a specified Google Drive location.

## Set up steps
1. Google Cloud Project & Vertex AI API:
	* Create a Google Cloud project.
	* Enable the Vertex AI API for your project.
2. Google AI API key:
	* Obtain a Google AI API key from Google AI Studio.
3. Pinecone account and API key:
	* Create a free account on the Pinecone website.
	* Obtain your API key from your Pinecone dashboard.
	* Create an index named company-earnings in your Pinecone project.
4. Google Drive - download and save financial documents:
	* Go to a company you want to analize and download their quarterly earnings PDFs
	* Save the PDFs in Google Drive
	* Create a Google Sheet that stores a list of file URLs pointing to the PDFs you downloaded and saved to Google Drive
5. Configure credentials in your n8n environment for:
	* Google Sheets OAuth2
	* Google Drive OAuth2
	* Google Docs OAuth2
	* Google Gemini(PaLM) Api (using your Google AI API key)
	* Pinecone API (using your Pinecone API key)
6. Import and configure the workflow:
	* Import this workflow into your n8n instance.
	* Update the List Of Files To Load (Google Sheets) node to point to your Google Sheet.
	* Update the Download File From Google Drive to point to the column where the file URLs are
	* Update the Save Report to Google Docs node to point to your Google Doc where you want the report saved.

## 📊 Basic Information

- **Workflow ID:** 2741
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 17606
- **Downloads:** 1760
- **Created:** 2025/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2741)

## 👤 Author

- **Name:** Mihai Farcas
- **Username:** @mihailtd

## 🏷️ Categories

- Crypto Trading
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **splitInBatches** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDocs** 
- **googleSheets** 
- **googleDrive** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
