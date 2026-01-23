# Split test different agent prompts with Supabase and OpenAI

> 
## Split Test Agent Prompts with Supabase and OpenAI
### Use Case
Oftentimes, it's useful to test different settings for a large language model in production against various metrics. Split testing is a good method for doing this.
### What it Does
This workflow randomly assigns chat sessions to one of two prompts, the baseline and the alternative. The agent will use the same prompt for all interactions in that chat session.
### How it Works
1. When messages arrive, a table containing information regarding session ID and which prompt to use is checked to see if the chat already exists
2. If it does not, the session ID is added to the table and a prompt is randomly assigned
3. These values are then used to generate a response

### Setup
1. Create a table in Supabase called **split_test_sessions**. It needs to have the following columns: **session_id** (`text`) and **show_alternative** (`bool`)
2. Add your **Supabase**, **OpenAI**, and **PostgreSQL** credentials
3. Modify the **Define Path Values** node to set the baseline and alternative prompt values.
4. Activate the workflow and test by sending messages through n8n's inbuilt chat
5. Experiment with different chat sessions to test see both prompts in action

### Next Steps
- Modify the workflow to test different LLM settings such as temperature
- Add a method to measure the efficacy of the two alternative prompts



## 📊 Basic Information

- **Workflow ID:** 2992
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 8047
- **Downloads:** 804
- **Created:** 2025/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2992)

## 👤 Author

- **Name:** Chris Carr
- **Username:** @chriscarr

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **supabase** (×2)
- **if** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
