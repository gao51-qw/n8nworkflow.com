# Create AI-powered WhatsApp quiz bot with GPT-4o-mini and Supabase storage

> ## Quiz Assistant via WhatsApp with Supabase and OpenAI

Create a **quiz assistant** that helps users study a topic of their choice through **WhatsApp**. Using **Supabase** and **OpenAI**, this workflow captures missing user data, stores it, and delivers dynamic quizzes tailored to each topic.

---

## Main Use Cases

* Guide users through personalized study sessions
* Collect and store user preferences (name + topic)
* Automate quiz creation with AI
* Deliver interactive content via WhatsApp

---

## How It Works

This workflow is composed of three main paths:

---

### 1. User Info Collection

* Triggered by an incoming WhatsApp message
* Retrieves existing user data from Supabase
* Checks if the **name** and **topic** are already defined
* If not, sends WhatsApp prompts to collect missing info
* Updates Supabase with new entries

---

### 2. AI Quiz Generation

* Once name and topic are confirmed, the **Merge node** consolidates all inputs
* Data is sent to the **AI Agent** (OpenAI Chat + Memory)
* The agent generates a quiz based on the selected topic

---

### 3. Response Delivery

* The quiz is sent back to the user via WhatsApp
* Flow ends, ready to restart with the next interaction

## 📊 Basic Information

- **Workflow ID:** 4114
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1406
- **Downloads:** 140
- **Created:** 2025/5/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4114)

## 👤 Author

- **Name:** Danielle Gomes
- **Username:** @daniellegomes

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **merge** 
- **webhook** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **supabase** (×3)
- **httpRequest** (×3)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
