# Personal knowledgebase AI agent

> **How it works:**

This project creates a personal AI knowledge assistant that operates through Telegram. The assistant can extract summaries from YouTube videos or online articles, store them in Google Sheets for later reference, and retrieve stored summaries when requested by the user.

**Step-by-step:**

* **Google Sheets Trigger:** The workflow starts by detecting a new YouTube or article URL added to a dedicated sheet (**Sheet2**). It checks whether the link is already processed.

* **Link Type Detection:** The system identifies if the URL is from YouTube or a standard article.

* **Data Retrieval:**

  * If it’s YouTube: Uses **Apify** to fetch the transcript.
  * If it’s an article: Uses an **HTTP Request** node to fetch the webpage content.

* **AI Summarization:** The transcript or article content is passed to **Google Gemini** for refined summarization.

* **Google Sheets Storage:** The summary and title are appended to another sheet (**Sheet1**) for long-term storage, along with a “Stored” status update in Sheet2.

* **Telegram Assistant:**

  * A **Telegram Trigger** listens for messages from the user.
  * The assistant searches stored summaries in Google Sheets.
  * If a match is found, it returns the result to the user on Telegram; otherwise, it politely apologizes.

---

## 📊 Basic Information

- **Workflow ID:** 7215
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1988
- **Downloads:** 198
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7215)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **markdown** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **googleSheetsTool** 
- **googleSheets** (×4)
- **googleSheetsTrigger** 
- **filter** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
