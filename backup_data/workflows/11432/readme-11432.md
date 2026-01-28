# Smart break recommendation system using Google Calendar, weather data, and GPT-4 to Slack

> Who is this for
This workflow is perfect for busy professionals, consultants, and anyone who frequently travels between meetings. If you want to make the most of your free time between appointments and discover great nearby spots without manual searching, this template is for you.
What it does
This workflow automatically monitors your Google Calendar and identifies gaps between appointments. When it detects sufficient free time (configurable, default 30+ minutes), it calculates travel time to your next destination, checks the weather, and uses AI to recommend the top 3 spots to visit during your break. Recommendations are weather-aware: indoor spots like cafés in malls or stations for rainy days, and outdoor terraces or open-air venues for nice weather.
How it works

Schedule Trigger - Runs every 30 minutes to check your calendar
Fetch Data - Gets your next calendar event and user preferences from Notion
Calculate Gap Time - Determines available free time by subtracting travel time (via Google Maps) from time until your next appointment
Weather Check - Gets current weather at your destination using OpenWeatherMap
Smart Routing - Routes to indoor or outdoor spot search based on weather conditions
AI Recommendations - GPT-4.1-mini analyzes spots and generates personalized top 3 recommendations
Slack Notification - Sends a friendly message with recommendations to your Slack channel

Set up steps

Configure API Keys - Add your Google Maps, Google Places, and OpenWeatherMap API keys in the "Set Configuration" node
Connect Google Calendar - Set up OAuth connection and select your calendar
Set up Notion - Create a database for user preferences and add the database ID
Connect Slack - Set up OAuth and specify your notification channel
Connect OpenAI - Add your OpenAI API credentials
Customize - Adjust currentLocation and minGapTimeMinutes to your needs

Requirements

Google Cloud account with Maps and Places APIs enabled
OpenWeatherMap API key (free tier available)
Notion account with a preferences database
Slack workspace with bot permissions
OpenAI API key

How to customize

Change trigger frequency: Modify the Schedule Trigger interval
Adjust minimum gap time: Change minGapTimeMinutes in the configuration node
Modify search radius: Edit the radius parameter in the Places API calls (default: 1000m)
Customize spot types: Modify the type and keyword parameters in the HTTP Request nodes
Change AI model: Switch to a different OpenAI model in the AI node
Localize language: Update the AI prompt to generate responses in your preferred language

## 📊 Basic Information

- **Workflow ID:** 11432
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 15
- **Downloads:** 1
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11432)

## 👤 Author

- **Name:** 長谷　真宏
- **Username:** @masa0258

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **scheduleTrigger** 
- **set** 
- **googleCalendar** 
- **notion** 
- **openWeatherMap** 
- **httpRequest** (×3)
- **code** (×2)
- **if** 
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
