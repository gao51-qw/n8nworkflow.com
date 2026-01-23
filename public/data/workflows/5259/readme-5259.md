# 💰 Financial AI agent Telegram and WhatsApp

> ### 📌 About this workflow

Hi! I'm Bruno, and I'm here to help you automate your finances intelligently. This workflow has been carefully developed to transform the way you manage your money, using the power of artificial intelligence and the flexibility of n8n. With a focus on usability and innovation, this financial agent is the perfect solution for anyone seeking control and insights into their personal or business finances.

This ready-to-use workflow acts as a powerful AI financial assistant, capable of recording your transactions (income and expenses), categorizing them, and providing personalized advice and tips. It is designed to be highly extensible and adaptable to your needs, using cutting-edge technologies to ensure accuracy and efficiency.


### ⚙️ What this workflow does

*   **Intelligent Transaction Recording**: Automatically records your financial income and expenses, categorizing them efficiently.
*   **Personalized Financial Analysis**: Provides insights, advice, and financial tips based on your data, helping you make smarter decisions.
*   **Telegram Communication**: Interacts with you via Telegram, making financial management as simple as sending a message (can be adapted for WhatsApp, Instagram, etc.).
*   **Conversation Memory**: Maintains the context of your conversations, allowing for more fluid and personalized interactions.
*   **Balance Report Generation**: Generates detailed balance reports for specific periods, offering a clear overview of your financial health.
*   **Modular and Expandable Structure**: Easily adaptable and expandable to include new functionalities, such as expense analysis by category, budget alerts, and integration with other platforms.

### 🔧 Setup Instructions
This workflow requires n8n self-hosted (or n8n Cloud with custom credentials + community nodes enabled).

#### Create required databases
For the agent to function correctly, the following tables are required in the PostgreSQL database (Supabase):

*   `transactions`: To store details of each transaction (income/expense).
*   `balances`: To store consolidated balance per day and per user.
*   `memoria_chat`: To store conversation history for agent memory.

#### Credentials needed

*   **OpenAI API Key**: For chat model and embeddings.
*   **Supabase API Key and URL**: For database access.
*   **PostgreSQL Connection String**: For chat memory.
*   **Telegram API Token**: For Telegram Trigger and Telegram node.

#### Webhook
Set the webhook path to receive messages from your Telegram API provider (or other messaging platform).

#### Tool connections
Ensure the supporting workflows (`Financial | AI Agent | Register Tool` and `Financial | AI Agent | Balance Tool`) are also imported and connected correctly to the main workflow (`Financial | AI Agent`).


### 📎 Notes
This workflow uses LangChain agents, OpenAI GPT-4.1, Supabase, and PostgreSQL. It includes multiple "sticky notes" inside the workflow with detailed explanations.

Ideal for individuals, consultants, and developers looking for an intelligent and extensible AI chatbot experience for financial management.

## 📊 Basic Information

- **Workflow ID:** 5259
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1058
- **Downloads:** 105
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5259)

## 👤 Author

- **Name:** Bruno Dias
- **Username:** @brunodias

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **telegramTrigger** 
- **set** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
