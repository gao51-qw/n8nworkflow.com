This n8n template creates an intelligent **Ideation Agent** 🤖 that captures your ideas from text and voice notes sent via Telegram. The assistant automatically transcribes your voice memos, analyzes the content with a powerful AI, and organizes it into a structured Google Sheet database. It's the perfect workflow for capturing inspiration whenever it strikes, just by talking or typing 💡.

### **Use Cases:**
*   🗣️ **Text-Based Capture:** Send any idea as a simple text message to your Telegram bot for instant processing.
*   🎙️ **Voice-to-Idea:** Record voice notes on the go. The workflow transcribes them into text and categorizes them automatically.
*   📂 **Automated Organization:** The AI agent intelligently structures each idea with a title, description, score, category, and priority level without any manual effort.
*   📊 **Centralized Database:** Build a comprehensive and well-organized library of all your ideas in Google Sheets, making it easy to search, review, and act upon them.

### **How it works:**
1.  **Multi-Modal Input:** The workflow starts with a `Telegram Trigger` that listens for incoming text messages and voice notes.
2.  **Content-Based Routing:** A `Switch` node detects the message type. Text messages are sent directly for processing, while audio files are routed for transcription.
3.  **Voice Transcription:** Voice messages are sent to the **ElevenLabs API**, which accurately converts the speech into text.
4.  **Unified Input:** Both the original text and the transcribed audio are passed to the AI Agent in a consistent format.
5.  **AI Analysis & Structuring:** An `AI Agent`, receives the text. It follows a detailed system prompt to analyze the idea and structure it into predefined fields: Idea, Idea Description, Idea Type, Score, Category, Priority, Status, and Complexity.
6.  **Data Storage:** The agent uses the **Google Sheets Tool** (`add_row_tool`) to seamlessly add the fully structured idea as a new row in your designated spreadsheet.
7.  **Instant Confirmation:** Once the idea is saved, the workflow sends a confirmation message back to you on Telegram, summarizing the captured idea.

### **Requirements:**
*   🌐 A **Telegram Bot API** token.
*   🤖 An **AI provider** with API access (the template uses Azure OpenAI, but can be adapted).
*   🗣️ An **ElevenLabs API** key for voice-to-text transcription.
*   📝 **Google Sheets API** credentials to connect to your database.

### **Good to know:**
*   ⚠️ Before you start, make sure your Google Sheet has columns that exactly match the fields defined in the Agent's system prompt (e.g., `"Idea "`, `"Idea Description "`, `"Idea Type"`, etc.). Note that some have a trailing space in the template.
*   🎤 The quality of the voice transcription is dependent on the clarity of your recorded audio.
*   ✅ You can completely customize the AI's behavior, including all the categories, types, and scoring logic, by editing the system prompt in the `Agent` node.

### **Customizing this workflow:**
*   ✏️ **Modify Categories:** To change the available `Idea Type`, `Category/Domain`, or `Priority Level` options, simply edit the list within the `Agent` node's system prompt.
*   🔄 **Swap LLM:** You can easily change the AI model by replacing the `Azure OpenAI Chat Model` node with another one, such as the standard OpenAI node or a local AI model.
*   🔗 **Change Database:** To save ideas to a different platform, just replace the `add_row_tool1` (Google Sheets Tool) with a tool for another service like Notion, Airtable, or a database.
