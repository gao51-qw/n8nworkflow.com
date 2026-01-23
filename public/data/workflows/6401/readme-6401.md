# Document-based AI chatbot with RAG, OpenAI and Cohere reranker

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Build intelligent AI chatbot with RAG and Cohere Reranker

## Who is it for?

This template is perfect for developers, businesses, and automation enthusiasts who want to create intelligent chatbots that can answer questions based on their own documents. Whether you're building customer support systems, internal knowledge bases, or educational assistants, this workflow provides a solid foundation for document-based AI conversations.

## How it works

This workflow creates an intelligent AI assistant that combines RAG (Retrieval-Augmented Generation) with Cohere's reranking technology for more accurate responses:

1. **Chat Interface**: Users interact with the AI through a chat interface
2. **Document Processing**: PDFs from Google Drive are automatically extracted and converted into searchable vectors
3. **Smart Search**: When users ask questions, the system searches through vectorized documents using semantic search
4. **Reranking**: Cohere's reranker ensures the most relevant information is prioritized
5. **AI Response**: OpenAI generates contextual answers based on the retrieved information
6. **Memory**: Conversation history is maintained for context-aware interactions

## Setup steps

### Prerequisites
- n8n instance (self-hosted or cloud)
- OpenAI API key
- Supabase account with vector extension enabled
- Google Drive access
- Cohere API key

### 1. Configure Supabase Vector Store

First, create a table in Supabase with vector support:

```sql
CREATE TABLE cafeina (
  id SERIAL PRIMARY KEY,
  content TEXT,
  metadata JSONB,
  embedding VECTOR(1536)
);

-- Create a function for similarity search
CREATE OR REPLACE FUNCTION match_cafeina(
  query_embedding VECTOR(1536),
  match_count INT DEFAULT 10
)
RETURNS TABLE(
  id INT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    cafeina.id,
    cafeina.content,
    cafeina.metadata,
    1 - (cafeina.embedding &lt;=&gt; query_embedding) AS similarity
  FROM cafeina
  ORDER BY cafeina.embedding &lt;=&gt; query_embedding
  LIMIT match_count;
END;
$$;
```

### 2. Set up credentials

Add the following credentials in n8n:

- **OpenAI**: Add your OpenAI API key
- **Supabase**: Add your Supabase URL and service role key
- **Google Drive**: Connect your Google account
- **Cohere**: Add your Cohere API key

### 3. Configure the workflow

1. In the "Download file" node, replace `URL DO ARQUIVO` with your Google Drive file URL
2. Adjust the table name in both Supabase Vector Store nodes if needed
3. Customize the agent's tool description in the "searchCafeina" node

### 4. Load your documents

1. Execute the bottom workflow (starting with "When clicking 'Execute workflow'")
2. This will download your PDF, extract text, and store it in Supabase
3. You can repeat this process for multiple documents

### 5. Start chatting

Once documents are loaded, activate the main workflow and start chatting with your AI assistant through the chat interface.

## How to customize

- **Different document types**: Replace the Google Drive node with other sources (Dropbox, S3, local files)
- **Multiple knowledge bases**: Create separate vector stores for different topics
- **Custom prompts**: Modify the agent's system message for specific use cases
- **Language models**: Switch between different OpenAI models or use other LLM providers
- **Reranking settings**: Adjust the top-k parameter for more or fewer search results
- **Memory window**: Configure the conversation memory buffer size

## Tips for best results

- Use high-quality, well-structured documents for better search accuracy
- Keep document chunks reasonably sized for optimal retrieval
- Regularly update your vector store with new information
- Monitor token usage to optimize costs
- Test different reranking thresholds for your use case

## Common use cases

- **Customer Support**: Create bots that answer questions from product documentation
- **HR Assistant**: Build assistants that help employees find information in company policies
- **Educational Tutor**: Develop tutors that answer questions from course materials
- **Research Assistant**: Create tools that help researchers find relevant information in papers
- **Legal Helper**: Build assistants that search through legal documents and contracts

## 📊 Basic Information

- **Workflow ID:** 6401
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1332
- **Downloads:** 133
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6401)

## 👤 Author

- **Name:** Anderson Adelino
- **Username:** @andersonadelino

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **manualTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
