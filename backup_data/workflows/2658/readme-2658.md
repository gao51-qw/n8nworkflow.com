# Api schema extractor

> This workflow automates the process of discovering and extracting APIs from various services, followed by generating custom schemas. It works in three distinct stages: research, extraction, and schema generation, with each stage tracking progress in a Google Sheet.

🙏 [Jim Le](https://n8n.io/creators/jimleuk/) deserves major kudos for helping to build this sophisticated three-stage workflow that cleverly automates API documentation processing using a smart combination of web scraping, vector search, and LLM technologies.

## How it works
### Stage 1 - Research:
- Fetches pending services from a Google Sheet
- Uses Google search to find API documentation
- Employs Apify for web scraping to filter relevant pages
- Stores webpage contents and metadata in Qdrant (vector database)
- Updates progress status in Google Sheet (pending, ok, or error)

### Stage 2 - Extraction:
- Processes services that completed research successfully
- Queries vector store to identify products and offerings
- Further queries for relevant API documentation
- Uses Gemini (LLM) to extract API operations
- Records extracted operations in Google Sheet
- Updates progress status (pending, ok, or error)

### Stage 3 - Generation:
- Takes services with successful extraction
- Retrieves all API operations from the database
- Combines and groups operations into a custom schema
- Uploads final schema to Google Drive
- Updates final status in sheet with file location

## Ideal for:
- Development teams needing to catalog multiple APIs
- API documentation initiatives
- Creating standardized API schema collections
- Automating API discovery and documentation

## Accounts required:
- Google account (for Sheets and Drive access)
- Apify account (for web scraping)
- Qdrant database
- Gemini API access

## Set up instructions:
- Prepare your Google Sheets document with the services information. [Here's an example of a Google Sheet](https://docs.google.com/spreadsheets/d/1UJtksHQV0NRNhsDdVdkdIoNssuvoTWso/edit?usp=sharing&ouid=108234606433343029350&rtpof=true&sd=true) – you can copy it and change or remove the values under the columns. Also, make sure to update Google Sheets nodes with the correct Google Sheet ID. 
- Configure Google Sheets OAuth2 credentials, required third-party services (Apify, Qdrant) and Gemini.
- Ensure proper permissions for Google Drive access.


## 📊 Basic Information

- **Workflow ID:** 2658
- **Complexity:** advanced
- **Node Count:** 88
- **Views:** 28472
- **Downloads:** 2847
- **Created:** 2024/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2658)

## 👤 Author

- **Name:** Polina Medvedieva
- **Username:** @polina-n8n

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **splitOut** (×3)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **set** (×17)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **executeWorkflowTrigger** 
- **executionData** 
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **filter** (×2)
- **splitInBatches** (×6)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **wait** (×3)
- **removeDuplicates** (×2)
- **executeWorkflow** (×3)
- **if** (×7)
- **aggregate** (×2)
- **code** (×2)
- **googleSheets** (×14)
- **googleDrive** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 88 nodes with 75 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
