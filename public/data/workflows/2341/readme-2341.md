# Build a tax code assistant with Qdrant, Mistral.ai and OpenAI

> This n8n workflows builds another example of creating a knowledgebase assistant but demonstrates how a more deliberate and targeted approach to ingesting the data can produce much better results for your chatbot.

In this example, a government tax code policy document is used. Whilst we could split the document into chunks by content length, we often lose the context of chapters and sections which may be required by the user.

Our approach then is to first split the document into chapters and sections before importing into our vector store. Additionally, using metadata correctly is key to allow filtering and scoped queries.

## Example

**Human**: "Tell me about what the tax code says about cargo for intentional commerce?"

**AI**: "Section 11.25 of the Texas Property Tax Code pertains to "MARINE CARGO CONTAINERS USED EXCLUSIVELY IN INTERNATIONAL COMMERCE." In this section, a person who is a citizen of a foreign country or an en..."

## How it works

* The tax code policy document is downloaded as a zip file from the government website and its pages are extracted as separate chapters.
* Each chapter is then parsed and split into its sections using data manipulation expressions.
* Each section is then inserted into our Qdrant vector store tagged with its source, chapter and section numbers as metadata.
* When our AI Agent needs to retrieve data from our vector store, we use a custom workflow tool to perform the query to Qdrant.
* Because we're relying on Qdrant's advanced filtering capabilities, we perform the search using the Qdrant API rather than the Qdrant node.
* When the AI Agent, needs to pull full wording or extracts, we can use Qdrant's scroll API and metadata filtering to do so. This makes Qdrant behave like a key-value store for our document.

## Requirements
* A Qdrant instance is required for the vector store and specifically for it's filtering functionality.
* Mistral.ai account for Embeddings and AI models.

## Customising this workflow

Depending on your use-case, consider returning actual PDF pages (or links) to the user for the extra confirmation and to build trust.

Not using Mistral? You are able to replace but note to match the distance and dimension size of Qdrant collection to your chosen embedding model.

## 📊 Basic Information

- **Workflow ID:** 2341
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 10412
- **Downloads:** 1041
- **Created:** 2024/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2341)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsMistralCloud** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **httpRequest** (×4)
- **compression** 
- **splitOut** (×3)
- **extractFromFile** 
- **set** (×5)
- **executeWorkflowTrigger** 
- **splitInBatches** 
- **filter** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **wait** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
