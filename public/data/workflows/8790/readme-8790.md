# A/B test AI prompts with Supabase, Langchain Agent & OpenAI GPT-4o

> 
![n8n.png](fileId:2666)
## Split Test AI Prompts Using Supabase & Langchain Agent

This workflow allows you to A/B test different prompts for an AI chatbot powered by Langchain and OpenAI. It uses Supabase to persist session state and randomly assigns users to either a baseline or alternative prompt, ensuring consistent prompt usage across the conversation.

### 🧠 Use Case

Prompt optimization is crucial for maximizing the performance of AI assistants. This workflow helps you run controlled experiments on different prompt versions, giving you a reliable way to compare performance over time.

### ⚙️ How It Works

1. When a message is received, the system checks whether the session already exists in the Supabase table.
2. If not, it randomly assigns the session to either the baseline or alternative prompt.
3. The selected prompt is passed into a Langchain Agent using the OpenAI Chat Model.
4. Postgres is used as chat memory for multi-turn conversation support.

### 🧪 Features

- Randomized A/B split test per session
- Supabase database for session persistence
- Langchain Agent + OpenAI GPT-4o integration
- PostgreSQL memory for maintaining chat context
- Fully documented with sticky notes

### 🛠️ Setup Instructions

1. Create a Supabase table named `split_test_sessions` with the following columns:
   - `session_id` (text)
   - `show_alternative` (boolean)
2. Add credentials for:
   - Supabase
   - OpenAI
   - PostgreSQL (for chat memory)
3. Modify the **"Define Path Values"** node to set your baseline and alternative prompts.
4. Activate the workflow.
5. Send messages to test both prompt paths in action.

### 🔄 Next Steps

- Add tracking for conversions or feedback scores to compare outcomes.
- Modify the prompt content or model settings (e.g. temperature, model version).
- Expand to multi-variant tests beyond A/B.


### 📚 Learn More

- [How This Workflow Uses Supabase + OpenAI for Prompt Testing](https://banana-ai.art/blog/ab-test-ai-prompts)

## 📊 Basic Information

- **Workflow ID:** 8790
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/9/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8790)

## 👤 Author

- **Name:** vanhon
- **Username:** @vanhon

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
