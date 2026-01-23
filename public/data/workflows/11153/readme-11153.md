# Create weather-aware morning alarms with Spotify, Gemini AI and OpenMeteo

> **Description:** More than an alarm. A smart morning experience that adapts to the weather. 🎸☔️☀️

This workflow demonstrates how to upgrade a simple automation into a smart, context-aware system. By integrating OpenMeteo (Weather API), Google Gemini (AI), and Spotify, it creates a personalized DJ experience for your morning.

## Why is this "Advanced"?

Context Awareness: It doesn't just play music; it checks the weather (via OpenMeteo API) to understand the user's environment.

AI Persona: Gemini acts as a live DJ, generating commentary that connects the specific Led Zeppelin track to the current weather conditions (e.g., "It's rainy, perfect for 'The Rain Song'").

Data Logging: It logs every wake-up session (Song, Time, Weather) to Google Sheets, creating a personal music history database.

Robust Error Handling: Includes logic to detect offline speakers and send fallback alerts.

## How it works:

Check Context: Fetches real-time weather data for your location and checks your Spotify speaker status.

Select Music: Picks a random track from Led Zeppelin's top hits.

Generate: Gemini generates a unique "Good Morning" script combining the song title and the weather.

Action: Plays the music, logs the data to Google Sheets, and emails you the AI's greeting with album art.

## Setup Requirements:

Spotify Premium

Google Gemini API Key

Google Sheets: Create a sheet named History with headers: date, time, weather, temperature, song, artist.

Gmail

## 📊 Basic Information

- **Workflow ID:** 11153
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 25
- **Downloads:** 2
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11153)

## 👤 Author

- **Name:** NODA shuichi
- **Username:** @shuichi

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **set** 
- **spotify** (×3)
- **httpRequest** 
- **code** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **googleSheets** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
