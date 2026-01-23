# HR & IT helpdesk chatbot with audio transcription

> An intelligent chatbot that assists employees by answering common HR or IT questions, supporting both **text** and **audio messages**. This unique feature ensures employees can conveniently ask questions via voice messages, which are transcribed and processed just like text queries.

---

### How It Works
1. **Message Capture**: When an employee sends a message to the chatbot in WhatsApp or Telegram (text or audio), the chatbot captures the input.
2. **Audio Transcription**: For audio messages, the chatbot transcribes the content into text using an AI-powered transcription service (e.g., Whisper, Google Cloud Speech-to-Text).
3. **Query Processing**:
   - The transcribed text (or directly entered text) is sent to an AI service (e.g., OpenAI) to generate embeddings.
   - These embeddings are used to search a vector database (e.g., Supabase or Qdrant) containing the company’s internal HR and IT documentation.
   - The most relevant data is retrieved and sent back to the AI service to compose a concise and helpful response.
4. **Response Delivery**: The chatbot sends the final response back to the employee, whether the input was text or audio.

---

### Set Up Steps
- **Estimated Time**: 20–25 minutes
- **Prerequisites**:
  1. Create an account with an AI provider (e.g., OpenAI).
  2. Connect WhatsApp or Telegram credentials in n8n.
  3. Set up a transcription service (e.g., Whisper or Google Cloud Speech-to-Text).
  4. Configure a vector database (e.g., Supabase or Qdrant) and add your internal HR and IT documentation.
  5. Import the workflow template into n8n and update environment variables for your credentials.

## 📊 Basic Information

- **Workflow ID:** 2752
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 40298
- **Downloads:** 4029
- **Created:** 2025/1/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2752)

## 👤 Author

- **Name:** Felipe Braga
- **Username:** @occult

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **httpRequest** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **telegramTrigger** 
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegram** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
