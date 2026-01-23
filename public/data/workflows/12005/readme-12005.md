# Movie release calendar: Add TMDB films to Google Calendar via Telegram Bot

> ## Add Upcoming Movies from TMDB to Your Google Calendar Via Telegram

This n8n template demonstrates how to automatically fetch upcoming movie releases from TMDB and let users add selected movies to their Google Calendar directly from Telegram.

## How it works

1. On a daily schedule, the workflow queries the TMDB API for upcoming movie releases.
2. Each movie is checked against an n8n data table to avoid duplicates.
3. New movies are stored in the data table for tracking.
4. Movie details are sent to a Telegram chat with an inline “Add to calendar” button.
5. When the button is pressed, the workflow retrieves the movie data from the table.
6. A calendar event is created in Google Calendar using the movie’s release date.

## Use cases

- Tracking upcoming movie releases

- Personal or shared release calendars

- Telegram-based reminders for entertainment events

- Automating calendar updates from public APIs

## Requirements

- TMDB API access token

- Telegram bot token and user ID

- Google Calendar OAuth credentials

- One n8n data table for storing movie metadata

## 📊 Basic Information

- **Workflow ID:** 12005
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 72
- **Downloads:** 7
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12005)

## 👤 Author

- **Name:** Anton Bezman
- **Username:** @nefar1an

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **set** 
- **splitOut** 
- **dataTable** (×3)
- **telegram** 
- **googleCalendar** 
- **telegramTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
