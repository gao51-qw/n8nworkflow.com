**Description:** More than an alarm. A smart morning experience that adapts to the weather. 🎸☔️☀️

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