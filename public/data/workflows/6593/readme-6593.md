# Personalized weather assistant with Google Calendar, WeatherAPI, Gemini & Telegram

> # Personalized Weather Assistant with Google Calendar, WeatherAPI, AI & Telegram

This workflow automates the delivery of a personalized daily agenda by combining events from Google Calendar with real-time local weather conditions. Using AI-powered summarization and Telegram integration, users receive a friendly and motivating message every morning everything needed to plan the day effectively.

Perfect for professionals or individuals who want an overview of their schedule and weather in one place.

## 🛠️ Key Features

- Triggered automatically every morning by schedule
- Fetches Google Calendar events for today and tomorrow
- Retrieves weather conditions (temperature, humidity, wind, UV index) using WeatherAPI based on event location
- Uses AI Agent to generate a concise, human-friendly agenda summary
- Sends the summary via Telegram bot
- If no location is available, delivers a simplified agenda without weather

## 🔧 Requirements

- Google Calendar OAuth2 credentials connected to n8n
- WeatherAPI key ([weatherapi.com](https://www.weatherapi.com/))
- Telegram Bot Token and user `chat_id`
- OpenRouter API Key ([openrouter.ai](https://openrouter.ai/))

## 🧩 Setup Instructions

1. **Timezone**
   - Adjust timezone in the Set Timezone node

2. **Google Calendar**
   - Add Google Calendar OAuth2 credentials
   - Set your primary calendar ID in the Get many events node

3. **WeatherAPI**
   - Replace the API key in the HTTP Request node with your WeatherAPI key

4. **OpenRouter**
   - Create credentials in n8n and connect them to the OpenRouter Chat Model nodes

5. **Telegram**
   - Add your bot token and chat_id to both Telegram nodes

6. **Deploy**
   - Activate the workflow
   - You’ll start receiving personalized daily Telegram messages


## 📊 Basic Information

- **Workflow ID:** 6593
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 786
- **Downloads:** 78
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6593)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleCalendar** 
- **httpRequest** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **set** 
- **telegram** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
