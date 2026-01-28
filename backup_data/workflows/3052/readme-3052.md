# Effortless task management: Create Todoist tasks directly from Telegram with AI

>  ## Effortless Task Management: Create Todoist Tasks Directly from Telegram with AI

This n8n workflow empowers you to seamlessly manage your tasks by creating Todoist entries directly from Telegram, using the power of AI. Simply send a voice or text message to your Telegram bot, and this workflow will transform it into actionable tasks in your Todoist account.

### Who is this for?

* **Busy professionals** who need a quick and easy way to capture tasks on the go.
* **Students** looking to streamline their assignments and project management.
* **Anyone** who wants to leverage AI for effortless task management.

### What Problem Does it Solve?

This workflow eliminates the need to manually enter tasks into Todoist. It automates the process of capturing, organizing, and prioritizing tasks, saving you time and effort.

### What are the Benefits?

* **Seamless Integration:** Connect your Telegram and Todoist accounts for a frictionless workflow.
* **AI-Powered Task Breakdown:** LLM AI intelligently analyzes your messages and breaks them down into manageable sub-tasks.
* **Voice-to-Task:** Create tasks with voice messages for hands-free convenience.
* **Increased Productivity:** Capture and organize tasks quickly, keeping you focused and productive.
* **Accessibility:** Access your tasks from anywhere with Todoist's mobile app and Google extension.

### How it Works

1.  **Send a message:** Send a voice or text message describing your task to your Telegram bot.
2.  **AI analysis:** The workflow uses an LLM (OpenAI Chat Model) to analyze your message and break it down into sub-tasks.
3.  **Task creation:** The workflow creates tasks in your Todoist account based on the AI's analysis.
4.  **Notification:** You receive a Telegram notification with a link to your newly created tasks in Todoist.

### Nodes in the Workflow

* **Telegram Trigger:** Listens for incoming messages on Telegram.
* **Switch:** Routes messages based on their type (voice or text).
* **Telegram:** Fetches voice messages from Telegram.
* **OpenAI:** Transcribes voice messages to text using OpenAI's Whisper API.
* **Edit Fields:** Prepares the text for the LLM.
* **Basic LLM Chain:** Analyzes messages and generates sub-tasks using OpenAI's GPT model.
* **Structured Output Parser:** Extracts sub-tasks from the LLM's response.
* **Todoist:** Creates tasks in your Todoist account.
* **Telegram:** Sends a notification with a link to your Todoist tasks.

### Requirements

* Active n8n instance.
* Telegram account with a bot.
* Todoist account.
* OpenAI API key.

### Setup Information

1.  Import the workflow JSON into your n8n instance.
2.  Configure the Telegram Trigger node with your bot token.
3.  Set up the OpenAI credentials with your API key.
4.  Connect your Todoist account in the Todoist node.
5.  Customize the LLM prompt (optional) to fine-tune task creation.

### Additional Tips

* Explore Todoist's features to further organize and manage your tasks.
* Experiment with different LLM prompts to optimize task breakdown.
* Use n8n's features to automate other aspects of your workflow.

This workflow combines the convenience of Telegram with the power of AI and Todoist to provide a seamless task management experience. Start managing your tasks effortlessly today!

## 📊 Basic Information

- **Workflow ID:** 3052
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 8044
- **Downloads:** 804
- **Created:** 2025/3/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3052)

## 👤 Author

- **Name:** Onur
- **Username:** @onurpolat05

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **telegramTrigger** 
- **switch** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **todoist** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
