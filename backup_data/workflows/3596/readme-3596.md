# Daily AI news translation & summary with GPT-4 and Telegram delivery

> ### 📝 What this workflow does

Every morning at 8 a.m., this workflow fetches the latest AI-related articles from both GNews and NewsAPI. It merges up to 40 new articles daily, selects the 15 most relevant ones on AI technology and applications, and uses GPT-4.1 to generate concise summaries in accurate Traditional Chinese (while preserving essential English technical terms). Each summary also includes the article link for easy referral. The compiled digest is then posted to your designated Telegram account or group.

### 👥 Who is this for?

- AI enthusiasts, professionals, and anyone interested in artificial intelligence news
- Individuals and teams wanting a concise daily digest of AI developments in Traditional Chinese
- Telegram users who prefer automated information delivery

### 🎯 What problem does this workflow solve?

With the rapid evolution of AI technology, it can be overwhelming to keep up with new developments. This workflow addresses information overload by automatically collecting, summarizing, and translating the most important AI news each morning — all delivered conveniently to your chosen Telegram channel or group.

### ⚙️ Setup

1. **🔑 Add NewsAPI and GNews API Keys**
    - Register for accounts on [NewsAPI.org](https://newsapi.org/) and [GNews](https://gnews.io/) to obtain your API keys.
    - Input your NewsAPI key directly into the `Fetch NewsAPI articles` node.
    - Input your GNews API key into the `Fetch GNews articles` node.
2. **🤖 Set up your Telegram Bot**
    - Create a Telegram Bot via [BotFather](https://core.telegram.org/bots#6-botfather) and copy the generated Bot Token.
    - In n8n, create Telegram Bot credentials using this token.
    - In the `Send summary to Telegram` node, enter the chat ID of your target user, group, or channel to receive the messages.
3. **🧠 Configure OpenAI Credentials**
    - In n8n, create a new credential using your OpenAI API key.
    - Assign this credential to the `GPT-4.1 Model` node (or equivalent OpenAI/AI nodes).

After completing these steps, your workflow is fully configured to fetch, summarize, and deliver daily AI news to your selected Telegram chat automatically.

### 🛠️ How to customize this workflow

- **🔍 Change the topic:** Update the keywords in the NewsAPI and GNews nodes for other subjects (e.g., "blockchain", "quantum computing").
- **⏰ Adjust delivery time:** Modify the scheduled trigger to your preferred hour.
- **✍️ Tweak summary style or language:** Refine the prompt in the AI summarizer node for different tones or translate into other languages as needed.

### 📦 Dependencies

- NewsAPI account
- GNews account
- Telegram Bot
- OpenAI API access (for GPT-4.1) or compatible AI model for Langchain agent

## 📊 Basic Information

- **Workflow ID:** 3596
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 7570
- **Downloads:** 757
- **Created:** 2025/4/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3596)

## 👤 Author

- **Name:** SamirLiu
- **Username:** @samir

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×3)
- **scheduleTrigger** 
- **httpRequest** (×2)
- **set** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
