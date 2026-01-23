# Doctor appointment scheduler with Telegram, Gemini AI, and Google Sheets

> ## AI Doctor’s Appointment Scheduler – Process Flow

### User Interaction via Telegram:
The user sends a text or voice message through Telegram requesting a doctor’s appointment.

### Input Processing:
The AI agent receives and interprets the user’s message to identify the doctor’s name, preferred date, and time.

### Doctor Information Retrieval:
The agent accesses the doctor’s details stored in Google Sheets (or an Excel file).

### Schedule Verification:
It checks the doctor’s availability for the requested date and time using the doctor’s schedule ledger or database.

### Availability Response:
If the doctor is already booked, the agent informs the user and suggests alternative available slots.

If the doctor is available, the agent proceeds to confirm the appointment details with the user.

### Appointment Confirmation & Booking:
Once the user confirms, the agent records the appointment details in the Excel sheet (or Google Sheet).

### Confirmation Notification:
The agent sends a confirmation message to the user through Telegram, summarizing the appointment details (doctor name, date, and time).

## 📊 Basic Information

- **Workflow ID:** 9984
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 945
- **Downloads:** 94
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9984)

## 👤 Author

- **Name:** Abdul Matheen
- **Username:** @matheen

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** (×5)
- **telegram** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **set** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
