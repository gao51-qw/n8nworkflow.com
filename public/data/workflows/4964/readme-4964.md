# YouTube video transcription & summary to Telegram with GPT-4o

>  ⚠️ **Disclaimer** This workflow uses a **community node**:
- `npm install n8n-nodes-supadata`
- Please make sure to install this before running the workflow.

![Screenshot 20250616 at 17.30.24.png](fileId:1516)

## 🔎 Who is this for?

This workflow is for **anyone who wants quick summaries of YouTube videos**, such as researchers, students, analysts, or busy professionals. Just send a video link via Telegram and receive a structured summary in seconds—no need to watch the entire video.

## 🧠 What problem is this workflow solving?

Watching long videos to extract key information is time-consuming. This automation solves that by instantly:

* Fetching the full transcript of the video
* Summarizing the content with AI
* Sending a clean summary directly to Telegram for quick reading

It’s a fast and reliable way to stay informed without the overwhelm.


## ⚙️ What this workflow does

### 💬 Telegram Trigger

Start by sending a YouTube link to your Telegram bot.

### 🎙️ Get Transcript (Supadata)

Uses **Supadata** API to retrieve the full video transcript.

### 🧠 Summarize with OpenAI GPT-4o

Processes the transcript using a structured prompt to extract:

* Main theme of the video
* Target audience
* Key insights and tips
* Problems discussed and solutions mentioned
* Notable quotes or highlights

### 📨 Send to Telegram

The final summary is formatted and sent back to your Telegram chat, ready for reading or saving.


## 🛠️ Requirements
* **[n8n instance](https://n8n.partnerlinks.io/khaisastudio) (Cloud or self-hosted)**
* Supadata API Key
* OpenAI API Key
* Telegram Bot Token

## ✅ Output Example

The Telegram summary includes:

* 🎯 Title and topic
* 💡 Key learnings
* 🛠️ Tips or insights
* 🚨 Issues raised and solutions
* 📝 Quotes or highlights



Just send a link, and get the core message—fast. Perfect for learning on the go. 🧠📲

---

*Made by: [Khaisa Studio](https://khaisa.studio)*  
*Tag: youtube, summarizer, telegram, openai*  
*Category: AI Automation, Video Tools*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 📊 Basic Information

- **Workflow ID:** 4964
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1195
- **Downloads:** 119
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4964)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **telegram** 
- **telegramTrigger** 
- **n8n-nodes-supadata.supadata** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
