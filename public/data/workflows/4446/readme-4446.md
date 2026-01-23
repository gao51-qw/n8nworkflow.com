# Schedule appointments via Telegram with GPT-4o & Google Calendar

> 🔧 How It Works
Telegram Trigger – Listens for incoming messages from users via your Telegram bot.

Watch Full Step-by-step Guide Video here:
https://www.youtube.com/watch?v=GzWO7_1lyI8

AI Agent – Processes the message to determine the user's intent (booking or canceling) and extracts necessary details like date, time, and participant names.

Google Calendar Node – Depending on the intent:

Booking: Creates a new event in Google Calendar with the extracted details.

Canceling: Searches for the specified event and deletes it from the calendar.

Telegram Node – Sends a confirmation message back to the user, informing them of the successful booking or cancellation.

🧠 Why This is Useful
Managing appointments can be time-consuming. This workflow automates the process, allowing users to schedule or cancel meetings effortlessly through a simple chat interface. It's ideal for:

Solopreneurs managing their own schedules.

Small businesses coordinating meetings with clients.

Anyone looking to streamline their appointment management process.

🪜 Setup Instructions
Set Up Telegram Bot:

Create a new bot using BotFather on Telegram.
Obtain the API token and set up the Telegram Trigger node in n8n with this token.

OpenAI Platform API required for OpenAI Chat Model

Connect to Google Calendar

For the full video tutorial, watch here:
https://youtu.be/GzWO7_1lyI8

## 📊 Basic Information

- **Workflow ID:** 4446
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3089
- **Downloads:** 308
- **Created:** 2025/5/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4446)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTool** 
- **telegramTrigger** 
- **telegram** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
