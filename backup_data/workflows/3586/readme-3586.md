# AI-powered WhatsApp chatbot 🤖📲 for text, voice, images & PDFs with memory 🧠

> This workflow is a highly advanced **multimodal AI assistant** designed to operate through **WhatsApp**. It can **understand and respond** to text, images, voice messages, and PDF documents by combining **OpenAI models** with smart logic to adapt to the content received.

---

### 🎯 **Core Features**

#### 📥 1. **Automatic Message Type Detection**
Using the `Input type` node, the bot detects whether the user has sent:
- Text
- Voice messages
- Images
- Files (PDF)
- Other unsupported content

#### 💬 2. **Smart Text Message Handling**
- Text messages are processed by an **OpenAI GPT-4o-mini agent** with a customized system prompt.
- Replies are concise, accurate, and formatted for mobile readability.

#### 🖼️ 3. **Image Analysis & Description**
- Images are downloaded, converted to base64, and analyzed by an **image-aware AI model**.
- The output is a rich, structured description, designed for visually impaired users or visual content interpretation.

#### 🎙️ 4. **Voice Message Transcription & Reply**
- Audio messages are downloaded and transcribed using OpenAI Whisper.
- The transcribed text is analyzed and answered by the AI.
- Optionally, the AI reply can be **converted back to voice** using **OpenAI's text-to-speech**, and sent as an audio message.

#### 📄 5. **PDF Document Extraction & Summary**
- Only PDFs are allowed (filtered via MIME type).
- The document’s content is extracted and combined with the user's message.
- The AI then provides a relevant summary or answer.

#### 🧠 6. **Contextual Memory**
- Each user has a personalized session ID with a memory window of 10 interactions.
- This ensures a more natural and contextual conversation flow.


---

### **How It Works**  

Thisworkflow is designed to handle incoming WhatsApp messages and process different types of inputs (**text, audio, images, and PDF documents**) using **AI-powered analysis**. Here’s how it functions:  

- **Trigger**: The workflow starts with the **WhatsApp Trigger** node, which listens for incoming messages (text, audio, images, or documents).  
- **Input Routing**: The **Input type** (Switch node) checks the message type and routes it to the appropriate processing branch:  
  - **Text**: Directly forwards the message to the AI agent for response generation.  
  - **Audio**: Downloads the audio file, transcribes it using OpenAI, and sends the transcription to the AI agent.  
  - **Image**: Downloads the image, analyzes it with OpenAI’s GPT-4 model, and generates a detailed description.  
  - **PDF Document**: Downloads the file, extracts text, and processes it with the AI agent.  
  - **Unsupported Formats**: Sends an error message if the input is not supported.  
- **AI Processing**: The **AI Agent1** node, powered by OpenAI, processes the input (text, transcribed audio, image description, or PDF content) and generates a response.  
- **Response Handling**:  
  - For **audio inputs**, the AI’s response is converted back into speech (using OpenAI’s TTS) and sent as a voice message.  
  - For **other inputs**, the response is sent as a text message via WhatsApp.  
- **Memory**: The **Simple Memory** node maintains conversation context for follow-up interactions.  

###  **Setup Steps**  
To deploy this workflow in n8n, follow these steps:  

1. **Configure WhatsApp API Credentials**:  
   - Set up **WhatsApp Business API** credentials (Meta Developer Account).  
   - Add the credentials in the **WhatsApp Trigger**, **Get Image/Audio/File URL**, and **Send Message** nodes.  

**Set Up OpenAI Integration**:  
   - Provide an **OpenAI API key** in the **Analyze Image**, **Transcribe Audio**, **Generate Audio Response**, and **AI Agent1** nodes.  

 **Adjust Input Handling (Optional)**:  
   - Modify the **Switch node ("Input type")** to handle additional message types if needed.  
   - Update the **"Only PDF File" IF node** to support other document formats.  

**Test & Deploy**:  
   - Activate the workflow and test with different message types (text, audio, image, PDF).  
   - Ensure responses are correctly generated and sent back via WhatsApp.  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 3586
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 122473
- **Downloads:** 12247
- **Created:** 2025/4/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3586)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **whatsApp** (×7)
- **if** (×2)
- **code** 
- **set** (×4)
- **stickyNote** (×6)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
