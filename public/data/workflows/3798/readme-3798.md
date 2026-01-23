# Create a session-based Telegram chatbot with GPT-4o-mini and Google Sheets

> ### **How It Works**  
This workflow creates an **AI-powered Telegram chatbot** with **session management**, allowing users to:  
- **Start new conversations** (`/new`).  
- **Check current sessions** (`/current`).  
- **Resume past sessions** (`/resume`).  
- **Get summaries** (`/summary`).  
- **Ask questions** (`/question`).  

**Key Components**:  
- **Session Management**:  
  - Uses **Google Sheets** to track active/expired sessions (storing `SESSION` IDs and `STATE`).  
  - `/new` creates a session; `/resume` reactivates past ones.  
- **AI Processing**:  
  - **OpenAI GPT-4** generates responses with **contextual memory** (via `Simple Memory` node).  
  - **Summarization**: Condenses past conversations when requested.  
- **Data Logging**:  
  - All interactions (prompts/responses) are saved to Google Sheets for audit and retrieval.  
- **User Interaction**:  
  - Telegram commands trigger specific actions (e.g., `/question [query]` fetches answers from session history).  

---

### Main Advantages

**1. Multi-session Handling**  
Each user can create, manage, and switch between multiple sessions independently, perfect for organizing different conversations without confusion.

**2. Persistent Memory**  
Conversations are stored in Google Sheets, ensuring that chat history and session states are preserved even if the server or n8n instance restarts.

**3. Commands for Full Control**  
With intuitive commands like `/new`, `/current`, `/resume`, `/summary`, and `/question`, users can manage sessions easily without needing a web interface.

**4. Smart Summarization and Q&A**  
Thanks to OpenAI models, the workflow can **summarize** entire conversations or **answer specific questions** about past discussions, saving time and improving the chatbot’s usability.

**5. Easy Setup and Scalability**  
By using Google Sheets instead of a database, the workflow is easy to clone, modify, and deploy — ideal for quick prototyping or lightweight production uses.

**6. Modular and Extensible**  
Each logical block (new session, get current session, resume, summarize, ask question) is modular, making it easy to **extend** the workflow with additional features like analytics, personalized greetings, or integrations with CRM systems.

---

### **Setup Steps**  

##### **Prerequisites**:  
- **Telegram Bot Token**: Create via [BotFather](https://core.telegram.org/bots#botfather).  
- **Google Sheets**:  
  - Duplicate [this template](https://docs.google.com/spreadsheets/d/1MCJLAqKP0Y7Qr68ZYoSSBeEVyKI1QgAAZnlEiyqkzXo/edit).  
  - Two sheets: `Session` (active/inactive sessions) and `Database` (chat logs).  
- **OpenAI API Key**: For GPT-4 responses.  

##### **Configuration**:  
1. **Telegram Integration**:  
   - Add your bot token to the **Telegram Trigger** and **Telegram Send** nodes.  

2. **Google Sheets Setup**:  
   - Authenticate the **Google Sheets nodes** with OAuth.  
   - Ensure sheet names (`Session`, `Database`) and column mappings match the template.  

3. **OpenAI & Memory**:  
   - Add your API key to the **OpenAI Chat Model** nodes.  
   - Adjust `contextWindowLength` in the **Simple Memory** node for conversation history length.  

4. **Testing**:  
   - Use Telegram commands to test:  
     - `/new`: Starts a session.  
     - `/question [query]`: Tests AI responses.  
     - `/summary`: Checks summarization.  

5. **Deployment**:  
   - Activate the workflow; the bot will respond to Telegram messages in real-time.  


---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 3798
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 12858
- **Downloads:** 1285
- **Created:** 2025/4/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3798)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegramTrigger** 
- **switch** 
- **googleSheets** (×8)
- **telegram** (×7)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** (×2)
- **if** 
- **code** (×4)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
