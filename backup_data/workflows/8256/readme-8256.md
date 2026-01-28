# English vocabulary bot for Telegram with Gemini & random word API

> ## 📄 What this workflow does
 Every 3 hours, the workflow fetches 3 random English words, asks Gemini to generate a short Vietnamese vocabulary digest (word, Vietnamese meaning, and an example sentence), and sends it to a Telegram chat. Perfect for steady, low-effort vocab exposure in groups.

## 👤 Who is this for
- English learners who want a gentle, automated learning cadence.
- Teachers/tutors who share daily vocab in Telegram groups.
- Community admins who want lightweight, useful content for members.
- Anyone who prefers bite-sized language learning on autopilot.


## ✅ Requirements
- Gemini API access (configured in n8n).
- Telegram Bot token + chat ID (the chat you want to receive messages).
- Internet access to Random Word API (no API key required).
- n8n instance with outbound HTTPS access.


## ⚙️ How to set up
1. Add your Gemini credentials in n8n (the Google Gemini/PaLM node).
2. Add your Telegram credentials and set the chatId in the “Send a text message” node.
3. (Optional) Adjust the schedule interval (default: every 3 hours).
4. (Optional) Change the number of words by updating the HTTP Request URL param words=3.
5. (Optional) Edit the Gemini prompt language/content to fit your style (currently Vietnamese output).
6. Run once to test; confirm the message arrives in Telegram.

## 🔁 How it works
1. Schedule Trigger → runs every 3 hours.
2. HTTP Request → calls random-word-api to get 3 words.
3. Edit Fields (Set) → wraps the API response under word.
4. Aggregate → prepares the word field for the LLM.
5. Message a model (Gemini) → creates a Vietnamese digest: English word, Vietnamese meaning, and example sentence for each word.
6. Send a text message (Telegram) → posts the digest to your specified chat.

## 💡 About Margin AI
[Margin AI](https://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable, automated workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, chatbot development, and more.

## 📊 Basic Information

- **Workflow ID:** 8256
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 843
- **Downloads:** 84
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8256)

## 👤 Author

- **Name:** Cong Nguyen
- **Username:** @cong-nguyen

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **aggregate** 
- **set** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
