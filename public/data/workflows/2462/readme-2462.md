# Angie, personal AI assistant with Telegram voice and text

> **How it works:**

This project creates a personal AI assistant named Angie that operates through Telegram. Angie can summarize daily emails, look up calendar entries, remind users of upcoming tasks, and retrieve contact information. The assistant can interact with users via both voice and text inputs. 

**Step-by-step:**

Telegram Trigger: The workflow starts with a Telegram trigger that listens for incoming message events. The system determines if the incoming message is voice or text. If voice, the voice file is retrieved and transcribed to text using OpenAI's API Speech to Text

AI Assistant: The telegram request is passed to the AI assistant (Angie).

Tools Integration: The AI assistant is equipped with several tools:

- Get Email: Uses Gmail API to fetch recent emails, filtering by date.
- Get Calendar: Retrieves calendar entries for specified dates.
- Get Tasks: Connects to a Baserow (open-source Airtable alternative) database to fetch to-do list items.
- Get Contacts: Also uses Baserow to retrieve contact information.

Response Generation: The AI formulates a response based on the gathered information and sends back to the user on Telegram



## 📊 Basic Information

- **Workflow ID:** 2462
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 248655
- **Downloads:** 24865
- **Created:** 2024/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2462)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegramTrigger** 
- **telegram** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)
- **baserowTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
