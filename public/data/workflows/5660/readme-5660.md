# Generate personalized language learning news digests with LLaMA-3.1 & DeepSeek AI

> ![ChatGPT Image 3 juil. 2025, 22_24_39.png](fileId:1664)
Automatically generate and email level-appropriate language learning content based on trending news.  
This workflow reads learner preferences from Google Sheets (language, level, and topic of interest), uses an AI web search model to fetch relevant news, and formats the result into a structured HTML digest featuring grammar explanations and vocabulary highlights.  
Emails are sent automatically to each learner in a clean, mobile-friendly format.

---

## ⚙️ What it does

1. ⏰ **Daily Trigger** at 6 AM  
2. 📄 Pulls learner data from Google Sheets (Language, Level, Topic)  
3. 🔍 **Fetches news** using `perplexity/llama-3.1-sonar-small-128k-online`  
4. ✨ **Formats it into HTML** using `deepseek-chat`, tailored to the learner's level  
5. 🧠 Adds grammar breakdowns and vocabulary highlights  
6. 📬 Sends personalized HTML email to each learner

---

## 🧠 AI Models Used

- `perplexity/llama-3.1-sonar-small-128k-online` – web-connected LLM for up-to-date news  
- `deepseek-chat` – formatting and simplifying articles for language learners

---
## 📚 Examples
![WhatsApp Image 20250703 at 18.00.25_00f56289.jpg](fileId:1663)
## 🔗 Technologies used

- **Google Sheets** – Learner database  
- **OpenRouter API** – AI access and online reasoning  
- **LangChain AI Agent + Output Parser** – Clean HTML structuring  
- **Gmail Node** – Email dispatch per user

---

## 💡 Use Cases

- 🧑‍🏫 Classroom-ready language micro-lessons  
- 🌍 Personalized news digests for multilingual learners  
- ✉️ Daily practice delivery via email  
- 📚 Reading + grammar + vocab in one workflow


## 📊 Basic Information

- **Workflow ID:** 5660
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 135
- **Downloads:** 13
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5660)

## 👤 Author

- **Name:** hippolyte-hu
- **Username:** @hippolyte-hu

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **googleSheets** 
- **code** 
- **httpRequest** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
