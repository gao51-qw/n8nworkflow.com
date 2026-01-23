# Chatbot appointment scheduler with Google Calendar for dental assistant

> This workflow template is designed for dental assistants and anyone looking to automate appointment scheduling. It integrates Google Calendar for booking appointments and Google Sheets as a database to store patient information.

# How It Works

The user interacts with the chatbot to schedule an appointment.

The chatbot collects necessary details and checks availability via Google Calendar.
If the requested time is available, the AI books the appointment.

If unavailable, the AI suggests alternative time slots.

Once booked, the AI logs the appointment details into Google Sheets for record-keeping.

# Setup Instructions

📌 Watch this 🎥 [Setup Video](https://youtu.be/FKCmGhdP8oE) for detailed instructions on running and customizing this workflow.

### Step 1: Set Up Credentials

OpenAI API Key (for chatbot functionality).
Google Account (for Google Sheets & Google Calendar integration).

### Step 2: Choose the Right Tools

Select the correct Google Calendar in the Google Calendar tool.
Choose the appropriate Google Sheets file in the Google Sheets tool.

### Step 3: Test 

Run a test to ensure everything works correctly.
Once tested.

#### Example Templates

Below are sample Google Sheets template to help you get started.

![Google sheets TMP.JPG](fileId:1002)

## 📊 Basic Information

- **Workflow ID:** 3131
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 23057
- **Downloads:** 2305
- **Created:** 2025/3/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3131)

## 👤 Author

- **Name:** Zakaria Ben
- **Username:** @nocodeinnovate

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)
- **googleCalendarTool** (×2)
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
