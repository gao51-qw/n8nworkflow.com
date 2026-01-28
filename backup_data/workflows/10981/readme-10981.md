# Convert YouTube videos to audio summaries with Decodo, OpenAI & Telegram

> **Stop watching long videos, start listening to concise summaries.**

This workflow transforms any YouTube video URL sent via Telegram into a high-quality, spoken audio summary (MP3) and a structured text overview. It acts as your personal AI research assistant, turning lengthy content into bite-sized audio files that you can consume on the go.

It leverages **Decodo** for robust transcript extraction, **OpenAI** for intelligent summarization, and for realistic text-to-speech generation.

---

### **✨ Features**
* **Telegram-First Interface:** Send links and receive audio directly in your chat app.
* **Smart Validation:** Automatically checks if the link is a valid YouTube URL before processing to save API credits.
* **Multi-Language Support:** Easily configure the output language (English, Spanish, German, etc.) via a simple Config node. The AI will translate and speak in this language.
* **Robust Error Handling:** Gracefully handles videos with no captions/transcripts by notifying the user instead of breaking the workflow.
* **Structured Data Extraction:** Uses AI to extract the Genre, Title, and Summary alongside the audio file.

### **⚙️ How it Works**
1.  **Trigger:** You send a YouTube URL to your Telegram Bot.
2.  **Validate:** The workflow checks the URL pattern using Regex.
3.  **Extract:** **Decodo** scrapes the video page to retrieve the full transcript JSON.
4.  **Process:** A Code node flattens the complex JSON into a readable text format.
5.  **Summarize:** **OpenAI (gpt-4o-mini)** analyzes the text and writes a script optimized for listening.
6.  **Speak:** **OpenAI** converts the script into a high-definition MP3 file.
7.  **Deliver:** The bot replies with the Audio File and a formatted text summary including the genre tags and original link.

---

### 📥 Decodo Node Installation

The Decodo node is used in this workflow for fetching the YouTube Transcript.

1.  **Find the Node:** Click the **+** button in your n8n canvas.
2.  **Search:** Search for the **`Decodo`** node and select it.
3.  **Credentials:** When configuring the first Decodo node, use your API key (obtained with the 80% discount coupon).
4.  **Setup:** Open the **`Decodo (Fetch YouTube Transcript)`** node to ensure it is correctly targeting the YouTube service.

-----

### 🎁 Exclusive Deal for n8n Users

To run this workflow, you require a robust scraping provider. We have secured a massive discount for Decodo users:

  * **Get 80% OFF** the **23k Advanced Scraping API** plan.
  * **Coupon Code:** `ATTAN8N`
  * **Sign Up Here:** [**Claim 80% Discount on Decodo**](https://visit.decodo.com/c/6679292/3071239/17480)
---

### **➕ How to Adapt the Template**

This workflow is highly flexible and can be modified for various content tasks:

* **Change AI Model:** Easily swap the **OpenAI Chat Model** node with an **OpenAI** or **Anthropic (Claude)** node without altering the core logic.
* **Create Long-Form Drafts:** Modify the AI System Prompt to generate a full 1,000-word blog post draft or a set of social media updates instead of a short audio script.
* **Change Destination:** Replace the **Telegram** nodes with **Slack**, **Microsoft Teams**, **Email (Gmail/SMTP)**, or **Discord** to deliver the audio and summary to your preferred channel.
* **Create an Archive:** Connect the successful output to a **Google Sheets** or **Airtable** node to keep a searchable archive of every video summary created.


## 📊 Basic Information

- **Workflow ID:** 10981
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10981)

## 👤 Author

- **Name:** Atta
- **Username:** @attakhalighi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegram** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×2)
- **telegramTrigger** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
