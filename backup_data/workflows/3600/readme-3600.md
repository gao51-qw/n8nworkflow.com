# Line chatbot with Google Sheets memory and Gemini AI

> ### Main Use Case
This workflow enables automated, AI-assisted replies to users messaging a LINE Official Account, while storing and referencing chat history from Google Sheets to maintain context. Ideal for businesses or support teams that want to provide smart, personalized customer interactions using AI with memory.

### How It Works (Step-by-Step)
1. Connect to LINE Official Account's API
* A Webhook listens for incoming messages from users on LINE.
* When a message is received, it triggers the workflow.

2. Prepare the Data
* An Edit Fields module structures incoming data (e.g. extracts user ID, message content).
* This ensures data is clean and usable downstream.

3. Retrieve Chat History
* The user’s previous conversations are fetched from a Google Sheet.
* This ensures the AI has memory and can continue conversations contextually.

4. Prepare Prompt
* The retrieved chat history is combined with the new message to form a complete prompt for the AI.
* Example format: “User previously said X. Now they said Y. How should we respond?”

5. AI Agent: Google Gemini
* The formatted prompt is passed to an AI Agent (Google Gemini Chat Model).
* The AI generates a response based on the message + history.
* Tools used: Chat ModeMemory, ToolOutputParser for accurate replies.

6. Split & Clean History
* The conversation history is split into smaller chunks for cleaning and storage.
* This ensures the Google Sheet remains readable and manageable over time.

7. Save Chat History
* The cleaned new message and AI reply are saved to Google Sheets.
* This updates the chat history for future context.

8. Send Reply to LINE
* The AI-generated reply is sent back to the user via a POST HTTP Request to the LINE Messaging API.

### How to Set Up
Prerequisites:
* LINE Official Account
* Google Sheet to store chat history
* Google Gemini API or AI agent with context memory
* Automation platform (e.g., n8n, as this seems visually similar)

### Step-by-Step:
1. Create a Webhook on LINE:
* Set the webhook URL to your automation service.
* Enable webhook events.

2. Design Your Google Sheet:
* Create a sheet with columns: User ID, Timestamp, Message, AI Reply.

3. Set Up Modules in Automation Platform:
* Webhook: receives user messages.
* Edit Fields: extract user ID and message.
* Google Sheets Read: fetch message history.
* Prompt Composer: format prompt using past history + new message.
* AI Agent: connect to Google Gemini for smart replies.
* Split & Clean: clean and chunk history if needed.
* Google Sheets Write: save the updated conversation.
* HTTP Request: send reply to LINE via Messaging API.

4. Test Your Workflow:
* Send a message from LINE.
* Watch the full loop: receive → process → AI → store → reply.

5. Deploy & Monitor:
* Ensure error handling is in place (e.g., for blank messages or failed API calls).
* Regularly check your Google Sheets for storage limits. (If limits reached, you can increase the history row.)

📦 Benefits
* Maintains context in conversations
* Personalized, AI-driven responses
* Easy history tracking via Google Sheets
* Fully automated and scalable

## 📊 Basic Information

- **Workflow ID:** 3600
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4858
- **Downloads:** 485
- **Created:** 2025/4/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3600)

## 👤 Author

- **Name:** Jakkrapat Ampring
- **Username:** @guitarpmacc

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **set** (×2)
- **httpRequest** 
- **googleSheets** (×2)
- **stickyNote** (×8)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
