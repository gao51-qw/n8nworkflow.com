## Product Review Analysis with BrowserAct & Gemini-Powered Recommendations.

### This n8n template demonstrates how to perform product review sentiment analysis and generate improvement recommendations using an AI Agent.

This workflow is perfect for e-commerce store owners, product managers, or marketing teams who want to automate the process of collecting feedback and turning it into actionable insights.

---
### How it works
* The workflow is triggered manually.
* An **HTTP Request** node initiates a web scraping task with the BrowserAct API to collect product reviews.
* A series of **If** and **Wait** nodes are used to check the status of the scraping task. If the task is not yet complete, the workflow pauses and retries until it receives the full dataset.
* An **AI Agent** node, powered by **Google Gemini**, then processes the scraped review summaries. It analyzes the sentiment of each review and generates actionable improvement recommendations.
* Finally, the workflow sends these detailed recommendations via a **Telegram** message and an **Email** to the relevant stakeholders.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Product Review Sentiment Analysis**" Template
* **Gemini** account for the AI Agent
* **Telegram** and **SMTP** credentials for sending messages

---

### Need Help ?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase

* #### [How to INSTANTLY Get Product Improvement Ideas from Amazon Reviews | BrowserAct + n8n + Gemini](https://www.youtube.com/watch?v=YRhXjILRZH0)