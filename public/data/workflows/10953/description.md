## Description
💸💬 Slack Pro is powerful — but the price hurts, especially for growing teams. This workflow is designed as a **low-cost alternative solution** that provides some Slack Pro functions (**searchable history + AI summaries**) while you stay on the **free Slack plan (or minimal paid seats)**.

What is the advantage?
- 🧠 **AI Slack assistant on demand** – @mention the bot in any channel to get clear summaries of recent discussions (“yesterday”, “last 7 days”, “this week”, etc.).
- 🗄️ **External message history** – recent messages are routinely saved into Google Drive, so important conversations live outside Slack’s 90-day / 10k-message limit.
- 💰 **Cost-efficient setup** – rely on Slack free plan + a little Google Drive storage + low-cost AI API, instead of paying Slack Pro ($8.75 USD per user / month).
- 📚 **Business value** – you keep the benefits you wanted from Slack Pro (memory, context, easy catch-up) while avoiding a big monthly bill.

---

## 🧠 Upgrade your Slack for free with AI chat summaries & history archiving

### **👥 Who’s it for**
- 💰 **Teams stuck on Slack Free because Pro is too expensive** (e.g. founders, small teams)
  - Want longer history and better context, but can’t justify per-seat upgrades.
  - Need “Pro-like” benefits (search, memory, recap) in a **budget-friendly way**.

### **⚙️ How it works**
- 📝 **Slack stays as your main chat tool**: People talk in channels the way they already do.
- 🤖 **You add a bot powered by this workflow**: When someone @mentions it with something like (*@SlackHistoryBot summarize this week*).
- 📆 **On a schedule (e.g. monthly), it backs up channels**: Walks through channels the bot can access and saves recent messages (e.g. last 30 days) as a CSV file into Google Drive.

### **🛠️ How to set up**

1. **🔑 Connect credentials (once)**
   - **Slack (Bot / App)**: [recommend other tutorial video](https://www.youtube.com/watch?v=3q2unQEvjcQ)
     - Create and configure a bot.
     - Create a credential.
     - Invite the bot to channels you want to cover.
   - **Google Drive**
     - Connect a Google account for storage.
     - Create a folder like `Slack History (Archived)` in Drive and select it in the workflow.
   - **AI Provider (e.g. DeepSeek)**
     - Grab any LLM API key.
     - Plug it into the AI node so summaries use that model.

2. **🚀 Quick Start**
	- Import the JSON workflow.
	- Attach your credentials.
	- Save and activate the workflow.
	- Try a real-world test:
		- In a test channel, have a short conversation.
	    - Then try `@(your bot name) summarize today`.
	- Check that archives appear:
	    - Manually trigger the “archive” part from your automation tool.
	    - You should see files named after your channels and time period in Google Drive.

## 🧰 **How to Customize the Workflow**
1. **Limit where it runs**
   - Only invite the bot to “high value” channels (projects, clients, leadership).
   - This keeps both AI and storage usage under control.
2. **Adjust archive frequency** ⏰
   - Monthly is usually enough; weekly only for critical channels.
   - Less frequent archives = fewer operations = lower cost.
1. **Customize the summary style (system prompt) **📃
   - What language to use (e.g. Chinese by default, or English, or both).
   - How to structure the summary (topics, bullets, separators).
   - What to focus on (projects, decisions, tasks, risks, etc.).

### 📩 Help & customize other slack function
**Contact:** owenlzyxg@gmail.com


