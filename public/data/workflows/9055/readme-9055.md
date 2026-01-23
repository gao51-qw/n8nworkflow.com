# Aggregate Twitter/X content to Telegram channel with BrowserAct & Google Gemini

> ## Automate social media content aggregation to a Telegram channel

### This n8n template automatically aggregates and analyzes key updates from your social media platforms Home Page, delivering them as curated posts to a Telegram channel.

This workflow is perfect for **digital marketers, brand managers, or data analysts and Busy people,** seeking to monitor real-time trends and competitor activity without manual effort.

---
### How it works
* The workflow is triggered automatically on a schedule to aggregate the latest social media posts.
* A series of **If** and **Wait** nodes monitor the data processing job until the full data is ready.
* An **AI Agent**, powered by **Google Gemini**, refines the content by summarizing posts and removing duplicates.
* An **If** node checks for an image in the post to decide if a photo or a text message should be sent.
* Finally, the curated posts are sent to your Telegram channel as rich media messages.

---
### How to use
1.  **Set up BrowserAct Template:** In your **BrowserAct** account, set up **“Twitter/X Content Aggregation”** template.
 
2.  **Set up Credentials:** Add your credentials for **BrowserAct** In Run Node , **Google Gemini** in Agent Node, and **Telegram** in Send Node.

3.  **Add Workflow ID:** Change the `workflow_id` value inside the **HTTP Request** inside the **Run Node**, to match the one from your BrowserAct workflow.

4.  **Activate Workflow:** To enable the automated schedule, simply activate the workflow.

---
### Requirements
* **BrowserAct** API account
* **BrowserAct** **“Twitter/X Content Aggregation”** Template
* **Gemini** account
* **Telegram** credentials

---
### customizing this workflow
This workflow provides a powerful foundation for social media monitoring. You could:
* Replace the Telegram node with an email or Slack node to send notifications to a different platform.
* Add more detailed prompts to the AI Agent for more specific analysis or summarization.
* customize BrowserAct Workflow to reach your desire.
---

### Need Help ?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase

* #### [Automate Your Social Media: Get All X/Twitter Updates Directly in Telegram!](https://youtu.be/6CXe6k9vihk)

## 📊 Basic Information

- **Workflow ID:** 9055
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 205
- **Downloads:** 20
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9055)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **httpRequest** (×2)
- **wait** (×2)
- **if** (×3)
- **telegram** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **stickyNote** (×16)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
