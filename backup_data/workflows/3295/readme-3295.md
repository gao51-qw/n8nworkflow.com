# 🧑‍🎓 AI powered language teacher with Telegram, Google Sheet and GPT-4o

> *Tags: Productivity, Education, Learning, Language*

### Context
I’m a [**Supply Chain Data Scientist from Paris**](https://samirsaci.com) who lived six years in China — and yes, **learning Mandarin while working full-time was tough**.

[![Mandarin is hard to learn (In Mandarin)](https://www.samirsaci.com/content/images/size/w1000/2025/03/image-24.png)](https://youtu.be/MQV8wDSug7M)


Learning Mandarin as an adult can be very difficult, especially if you have a full-time job. With AI, you can now have a **Chinese tutor available 24/7** on your phone — no excuses left!

It is with this spirit that I designed this workflow to support fellow Mandarin learners with a **Chinese Teacher powered by GPT-4o**. 

&gt;Boost your **language skills** with AI using N8N!

📬 For business inquiries, you can add me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?
This workflow template is designed for **language learners** and **educators** who need support to learn a vocabulary list in Mandarin (or any other language) using **Open AI GPT-4o**, an **AI agent** and a **Telegram Bot** to interact with users.

[![Example of Flash Card](https://miro.medium.com/max/1400/1*q3203G-NbZGg1dqHewNgWA.png)](https://youtu.be/MQV8wDSug7M)
 

For the vocabulary list, you can use another template shared in my profile [🉑 Generate Anki Flash Cards for Language Learning with Google Translate and GPT-4o](https://n8n.io/workflows/3195-generate-anki-flash-cards-for-language-learning-with-google-translate-and-gpt-4o/) to generate the Google Sheet needed in this workflow.

### How does it work?
The workflow loads a **vocabulary list** stored in your **Google Sheet**.

[![Screen of the Google Sheet](https://www.samirsaci.com/content/images/2025/03/image-9.png)](https://youtu.be/MQV8wDSug7M)
 

The bot will:
1. 📥 Load your vocabulary list from Google Sheets
2. 🧠 Generate multiple-choice questions with GPT-4o
3. ✅ Evaluate your answer and give instant feedback
4. 🔁 Loop to the next word until you're fluent


[![Example of Google Sheet](https://www.samirsaci.com/content/images/2025/03/image-12.png)](https://youtu.be/MQV8wDSug7M)


These fields will be automatically added to a Google Sheet, ready to be loaded in Anki to create flash cards.

### What do I need to start?
This workflow does not require any advanced programming skills.
#### Prerequisite
- A **Google Drive Account** with a folder including a Google Sheet filled with the vocabulary list you want to learn.
- API Credentials: **Open AI API** for the chat model, **Google Drive API** and **Google Sheets API** activated with OAuth2 credentials
- A **Telegram Bot** with its token recorded in the Telegram Node Credentials
- **A Google Sheet** with two columns (initialText: words in your own language, translatedText: words in the target language)

### Next Steps
Follow the sticky notes to set up the parameters inside each node and get ready to pump your learning skills.

[![Tutorial ScreenShot](https://www.samirsaci.com/content/images/2025/04/Flash-Cards.png)](https://youtu.be/MQV8wDSug7M)

[🎥 Watch My Tutorial](https://youtu.be/MQV8wDSug7M)

🚀 Curious how N8N can supercharge learning or supply chain?
📬 Let’s connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

--- 
### Notes
- This workflow can be used **for any language**. In the AI Agent prompt, you just need to replace Chinese with your language.

This workflow has been created with N8N 1.82.1
Submitted: March 23th, 2025


## 📊 Basic Information

- **Workflow ID:** 3295
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 7237
- **Downloads:** 723
- **Created:** 2025/3/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3295)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegramTrigger** 
- **googleSheets** 
- **aggregate** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
