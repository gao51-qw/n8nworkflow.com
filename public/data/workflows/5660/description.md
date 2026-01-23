![ChatGPT Image 3 juil. 2025, 22_24_39.png](fileId:1664)
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
