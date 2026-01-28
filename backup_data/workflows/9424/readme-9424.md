# Extract & approve tasks from Telegram to Notion with Gemini AI & voice support

> This workflow automatically converts Telegram text or voice messages into Notion tasks by using AI to extract the task name and due date, allowing users to approve or decline tasks directly in Telegram before they are created. It is designed for students managing assignments, professionals tracking tasks from messaging apps, productivity enthusiasts looking to automate task entry, and teams using Notion for organized task management.

---

## Detailed Use Case

This template turns casual Telegram messages and voice notes into confirmed Notion tasks by handling transcription, AI extraction, validation, and user approval. Typical scenarios include:

- **Students:** Record or type assignment details after class → transcribe, extract title + due date → confirm → save to Notion.  
- **Managers:** Capture meeting action items in chat → extract tasks and deadlines → verify with one tap → add to project database.  
- **Freelancers:** Log client requests by voice → confirm parsed due date → create a tracked task in Notion.  
- **Productivity users / teams:** Quickly funnel ad-hoc requests from Telegram into a single Notion workspace without manual copy/paste.

Key benefits: automated transcription, structured extraction (TaskName + TaskDue), quick user approval in Telegram, and reliable Notion mapping for immediate tracking.

---

## Prerequisites for this Workflow

- **n8n instance**  
  - Active and publicly reachable for webhook triggers.

- **Telegram bot**  
  - Create via **BotFather**, copy **Bot Token**, and get **chat ID**.

- **Transcription API**  
  - I use **Google Gemini Free Tier**, but you can use **Groq, OpenAI**, or any other provider.  
  - Add your API key / credentials in n8n.

- **Notion integration & database**  
  - Integration token added to n8n.  
  - Database structure must include:  
    - **Title** (Title property) → Task Name  
    - **Date** (Date property) → Task Due Date  
  - Share the database with the integration and copy the **Database ID**.

- **n8n node setup basics**  
  - Telegram Trigger node for messages.  
  - Telegram Get File node (**Download = true**) for voice notes.  
  - Transcription node connected to your chosen provider.  
  - AI Extractor node to get `TaskName` and `TaskDue`.  
  - Notion node with mapped properties (TaskName → Title, TaskDue → Date).

---

For any doubts or questions, contact: `contact@abhiman.io` or connect on LinkedIn: `https://www.linkedin.com/in/abhimangs/`

## 📊 Basic Information

- **Workflow ID:** 9424
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 430
- **Downloads:** 43
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9424)

## 👤 Author

- **Name:** Abhiman
- **Username:** @abhimangs

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** (×2)
- **telegramTrigger** 
- **switch** 
- **set** (×2)
- **telegram** (×5)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **notion** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
