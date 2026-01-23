# Filter real-time news with Gemini AI and BrowserAct for Telegram channels

> ## Automate AI News Filtering with Keywords to Telegram

### This n8n template helps you stay up-to-date by automatically filtering news and sending relevant articles to Telegram using an AI Agent.

This workflow is perfect for **content marketers, journalists, or researchers** who need to find specific articles without manually sifting through countless news feeds.

---
### Steps to Take
* **Create BrowserAct Workflow:** Set up the **News Content Marketing Automation** template in your BrowserAct account.
* **Add BrowserAct Token:** Connect your BrowserAct account credentials to the **HTTP Request** inside **Run Node**.
* **Update Workflow ID:** Change the `workflow_id` value in the **HTTP Request** inside **Run Node** to match the one from your BrowserAct workflow.
* **Connect Gemini:** Add your Google Gemini credentials to the **AI Agent** node.
* **Configure Telegram:** Connect your Telegram account and add your Channel ID to the **Send a News Photo To Telegram** node.

---
### How it works
* The workflow is triggered automatically on a schedule, but you can also manually run it.
* It uses an **HTTP Request** node to start a web scraping task via the **BrowserAct** API to collect the latest news.
* A series of **If** and **Wait** nodes monitor the scraping job until the full data is ready.
* An **AI Agent** node, powered by **Google Gemini**, processes the headlines and filters the news based on a list of keywords you define.
* A **Code** node then formats the AI's output into a clean, readable format.
* Finally, the filtered news articles are sent as rich media messages to **Telegram**, including the headline, a picture, and a link.

---
### Requirements
* **BrowserAct** API account
* **BrowserAct** **“News Content Marketing Automation”** Template
* **Gemini** account
* **Telegram** credentials

---
### Need Help ?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)



## 📊 Basic Information

- **Workflow ID:** 8915
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 367
- **Downloads:** 36
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8915)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **wait** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **stickyNote** (×15)
- **httpRequest** (×2)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
