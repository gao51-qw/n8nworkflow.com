📌 How it works

This workflow turns voice or text messages from Telegram into structured tasks in Notion, using AI-powered intent detection and task generation.

It supports:
- 🆕 Task creation
- ✏️ Task updates (like changing priority, title, or deadline)
- 🧠 Task analysis (e.g., workload, goal alignment, emotional fatigue)

The assistant uses OpenAI to:
- Detect intent (create, update, or analyze)
- Extract or update task fields (title, priority, due date, etc.)
- Auto-format list-style descriptions with bullet points
- Detect relevant tags like health, money, sport, etc.

⚙️ Setup steps
1. Clone the [GitHub repo](https://github.com/YahorDubrouski/ai-planner) or import the .json into n8n manually.
2. Configure:
- OpenAI credentials
- Telegram Bot Token
- Notion credentials
3. Use Telegram to send messages like:
- “Create a task to call mom tomorrow”
- “Update the grocery task to add milk”
- “Am I overbooked today?”