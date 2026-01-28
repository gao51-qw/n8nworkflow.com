# IPL cricket rules Q&A chat bot using RAG and Google Gemini API

> ## This workflow has 2 Broad Steps
## Step 1 - Vector store creation with set of ipl rules using Google Gemini Embedding. This will we used to drive RAG for model grouding    
## Step 2 - Connecting the vector store with google gemini API model and enabling a chat interface to drive the chat bot

## Step 1
## Load the reference material (run once via the Manual Trigger)
## 1.1 Manual Trigger → HTTP Request downloads the IPL “Match Playing Conditions” PDF. 
## 1.2 Default Data Loader extracts text from the PDF.
   **Type of data is binary
## 1.3 Recursive Character Text Splitter breaks the text into overlapping chunks.
   **This step ensures that the data chunks that are created in vector store have some overlap and hence less chance of hallucination
   **Chunk size and chunk overlap are 2 variables to manage this 
## 1.4 Embeddings Google Gemini (1) converts each chunk to a vector.
   **Connect the model with google gemini model. You will need your own api key for this
   **Make note of the embedding model also since the same embedding model has to be selected in Step 2
## 1.5 Simple Vector Store 1 inserts those vectors into an in-memory store under key
   **Make note of the vector store name since it is same vector store you will have to use in Step 2


## Note: Google gemini API key credential needed
##Using Vector store nodes provided by n8n is the best way to get started to test out the workflow before you switch to more enterprise grade vector store nodes

## Step 2
## 2.1 Chat Trigger to initiate n8n native chat interface
## 2.2 Simple Memory keeps the last 20 chat turns for context. This value can be edited within the node
## 2.3 Simple Vector Store (retrieve-as-tool mode) receives the user’s query embedding, 
## finds the top-10 most relevant chunks stored in step 1, and supplies them as tool output. This will drive RAG
**The name of vector store should match from Step 1, the embedding rule should match step 1
## 2.4 Google Gemini Chat Model is the language model that is used as the llm model
## 2.5 AI Agent orchestrates everything:
** Uses the system prompt (“You are a cricket expert… If info is missing, say ‘Sorry I don’t know’”). to prompt the model
** Has access to the memory (2.2) and the RAG tool (2.3).
** Generates the final response with Google Gemini, strictly limited to the retrieved IPL cricket rules data.






## Note: Google gemini API key credential needed
##Using simple memory store nodes provided by n8n is the best way to get started to test out the workflow before you switch to more enterprise grade vector store nodes

## 📊 Basic Information

- **Workflow ID:** 7413
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 966
- **Downloads:** 96
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7413)

## 👤 Author

- **Name:** Sidd
- **Username:** @p10siddarthap

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **httpRequest** 
- **manualTrigger** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
