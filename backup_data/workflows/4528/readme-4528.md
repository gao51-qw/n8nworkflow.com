# Transcribe voice messages from Telegram using OpenAI Whisper-1

> This n8n workflow processes incoming Telegram messages, differentiating between text and voice messages.

### How it works:
1.  **Message Trigger**: The workflow initiates when a new message is received via the Telegram "Message Trigger" node.
2.  **Switch Node**: This node acts as a router. It examines the incoming message:
    * If the message is `text`, it directs the flow along the "text" branch.
    * If the message contains `voice`, it directs the flow along the "voice" branch.
3.  **Get Audio File**: For audio messages, this node downloads the audio file from Telegram.
4.  **Transcribe Audio**: The downloaded audio file is then sent to an "OpenAI Transcribe Recording" node, which uses OpenAI's `whisper-1` speech-to-text model to convert the audio into a text transcript.
5.  **Send Transcription Message**: Regardless of whether the original message was text or transcribed audio, the final text content is then passed to a "Send transcription message" node.

### Setup Requirements:
* **Telegram Bot Token**: You will need a Telegram bot token configured in the "Message Trigger" node to receive messages.
* **OpenAI API Key**: An OpenAI API key is required for the "Transcribe audio" node to perform speech transcription.

### Additional Notes:
This workflow provides a foundational step for building more complex AI-driven applications. The transcribed text or original text message can be easily piped into an AI agent (e.g., a large language model) for analysis, response generation, or interaction with other tools, extending the bot's capabilities beyond simple message reception and transcription.

### 👉 Need Help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 📊 Basic Information

- **Workflow ID:** 4528
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 7099
- **Downloads:** 709
- **Created:** 2025/5/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4528)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegramTrigger** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
