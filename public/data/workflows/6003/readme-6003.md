# Build a multi-modal Telegram AI assistant with Gemini, voice & image generation

> ## How it works

This workflow creates a multi-talented AI assistant named Simran that interacts with users via Telegram. It can handle text and voice messages, understand the user's intent, and perform various tasks.
Step 1: Receive & Transcribe Input
The workflow triggers on any new Telegram message. If it's a voice message, it uses AssemblyAI to transcribe it into text; otherwise, it processes the incoming text directly.
Step 2: Understand User Intent
Using a Large Language Model (LLM), the workflow analyzes the user's message to determine their goal, categorizing it as a general chat, a request to generate an image, a command to set a reminder, or a request to remember a specific piece of information.
Step 3: Fetch Context & Route
The assistant retrieves past conversation summaries from a MongoDB database to maintain context. Based on the user's intent, the workflow routes the task to the appropriate path.
Step 4: Execute the Task
Chat: Generates a response using an AI agent whose personality can be toggled between a standard assistant and a "Girlfriend Mode." It also analyzes the user's mood to tailor the response.
Generate Image: Creates a detailed prompt and uses an image generation API to create and send a picture.
Set Reminder: Parses the natural language request, creates an event in Google Calendar and a task in Google Tasks, and sends a confirmation.
Remember Info: Saves specific user-provided information to a dedicated memory collection in MongoDB.
Step 5: Respond and Save Memory
The final output (text, voice message, or image) is sent back to the user on Telegram. The workflow then summarizes the interaction and saves it to the database to ensure continuity in future conversations.
## Set up steps
Estimated Set up time: 20 - 30 minutes.
1. Configure Credentials: You will need to add credentials for several services in your n8n instance:
Telegram (Bot API Token)
AssemblyAI (API Key)
MongoDB
Google (for Calendar, Tasks, Sheets, and Natural Language API)
A Large Language Model (the workflow uses Google Gemini but can be adapted)
An image generation service (the workflow uses the Together.xyz API)
2. Set up External Services:
Ensure your MongoDB instance has two collections: user_memory and memory_auto.
Create a Google Sheet to manage the "Girlfriend Mode" status for different users.
Ensure edge-tts is installed on the machine running your n8n instance for the text-to-speech functionality.
3. Customize Nodes:
Review the nodes with hardcoded IDs, such as Google Tasks and Google Sheets, and update them with your specific Task List ID and Sheet ID.
The sticky notes inside the workflow provide more detailed instructions for specific nodes and segments.

## 📊 Basic Information

- **Workflow ID:** 6003
- **Complexity:** advanced
- **Node Count:** 95
- **Views:** 2537
- **Downloads:** 253
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6003)

## 👤 Author

- **Name:** Iniyavan JC
- **Username:** @netwithjc

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **mongoDb** (×7)
- **@n8n/n8n-nodes-langchain.chainLlm** (×8)
- **code** (×13)
- **if** (×6)
- **switch** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.memoryMongoDbChat** 
- **set** (×10)
- **convertToFile** 
- **httpRequest** (×5)
- **telegramTrigger** 
- **telegram** (×7)
- **googleTasks** 
- **googleCalendar** 
- **wait** 
- **merge** (×3)
- **googleCloudNaturalLanguage** 
- **executeCommand** 
- **readBinaryFile** 
- **googleSheets** (×3)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 95 nodes with 74 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
