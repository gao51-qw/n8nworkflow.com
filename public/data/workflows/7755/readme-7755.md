# Article to threaded Bluesky posts with JinaAI and Gemini/GPT

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### Who is this for?

Automation enthusiasts, content creators, or social media managers who post article-based threads to Bluesky and want to automate the process end-to-end.

### What problem is this solving?

Manual content repackaging and posting can be repetitive and time-consuming. This workflow automates the process from capturing article URLs (via Telegram or RSS) to scraping content, transforming it into a styled thread, and posting on Bluesky platform.

### What this workflow does

* Listens on **Telegram** or fetches from **RSS feeds** (AI Trends, Machine Learning Mastery, Technology Review).
* Extracts content from URLs using **JinaAI**.
* Converts the article into a neat, scroll-stopping thread via **LangChain + Gemini / OpenAI ChatGPT**.
* Splits the thread into multiple posts. The first post is published with “Create a Post”, while subsequent posts are replies.
* Adds short delays between posting to avoid rate limits.

### Setup

1. Add credentials for **Telegram Bot API**, **JinaAI**, **Google Gemini**, and **Bluesky App Password**.
2. Add or customize RSS feeds if needed 
3. Test with a sample URL to validate posting sequence.

### How to customize

* Swap out RSS feeds or trigger sources.
* Modify prompt templates or thread formatting rules in the LangChain/Gemini node.
* Adjust wait times or content parsing logic.
* Replace Bluesky with another posting target if desired.


Made by: **[Khaisa Studio](https://khaisa.studio?utm_source=n8nofficial)**
Need customs workflows? **[Contact Me!](https://khmuhtadin/contact)**


## 📊 Basic Information

- **Workflow ID:** 7755
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 119
- **Downloads:** 11
- **Created:** 2025/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7755)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **n8n-nodes-bluesky-enhanced.bluesky** (×2)
- **telegramTrigger** 
- **rssFeedReadTrigger** (×3)
- **set** (×3)
- **jinaAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **wait** (×2)
- **if** 
- **splitOut** 
- **code** 
- **splitInBatches** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
