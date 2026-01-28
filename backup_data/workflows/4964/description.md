 ⚠️ **Disclaimer** This workflow uses a **community node**:
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