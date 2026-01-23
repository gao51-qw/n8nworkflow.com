# Indeed job matching to Telegram with BrowserAct, Gemini & Telegram

> ## Analyze job market data with AI to find matching jobs

### This n8n template helps you stay on top of the job market by matching scraped job offers with your resume using an AI Agent.

This workflow is perfect for **job seekers, recruiters, or market analysts** who need to find specific job opportunities without manually sifting through countless listings.

---
### Steps to Take
* **Create BrowserAct Workflow:** Set up the **Job Market Intelligence** template in your BrowserAct account.
* **Add BrowserAct Token:** Connect your BrowserAct account credentials to the **HTTP Request** node.
* **Update Workflow ID:** Change the `workflow_id` value in the **HTTP Request** node to match the one from your BrowserAct workflow.
* **Connect Gemini:** Add your Google Gemini credentials and update your **resume** inside the prompt in the **AI Agent** node.
* **Configure Telegram:** Connect your Telegram account and add your Channel ID to the **Send a text message** node.

---
### How it works
* The workflow is triggered manually by clicking "Execute workflow," but you can easily set it to run on a schedule.
* It uses an **HTTP Request** node to start a web scraping task via the **BrowserAct** API to collect the latest job offers.
* A series of **If** and **Wait** nodes monitor the scraping job, ensuring the full data is ready before proceeding.
* An **AI Agent** node, powered by **Google Gemini**, processes the job listings and filters them to find the best matches for your resume.
* A **Code** node then transforms the AI's output into a clean, readable format.
* Finally, the filtered job offers are sent directly to you via **Telegram**.

---
### Requirements
* **BrowserAct** API account
* **BrowserAct** **“Job Market Intelligence”** Template
* **Gemini** account
* **Telegram** credentials

---

### Need Help ?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

### Workflow Guidance and Showcase

* #### [Never Manually Search for a Job Again (AI Automation Tutorial)](https://youtu.be/mRJw8Jyrizg)

## 📊 Basic Information

- **Workflow ID:** 8864
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 211
- **Downloads:** 21
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8864)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **wait** (×2)
- **if** (×2)
- **telegram** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×17)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
