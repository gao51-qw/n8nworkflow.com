# Sync upcoming anime releases from Jikan API to Google Calendar with rate limiting

> ## Who is this for
- **Anime Enthusiasts:** Users who want to automate their watchlists based on specific voice actors or creators.
- **n8n Learners:** Anyone looking for a best-practice example of handling API rate limiting, loops, and data filtering.
- **Calendar Power Users:** People who want to populate their personal schedule with external data sources automatically.

## What it does
- **Search:** Queries the Jikan API for a specific person (e.g., Voice Actor "Mamoru Miyano").
- **Wait:** Pauses execution to respect the API rate limit.
- **Retrieve:** Fetches the list of anime roles associated with that person.
- **Loop & Filter:** Iterates through the list one by one, fetches detailed status, and filters for shows marked as "Not yet aired."
- **Schedule:** Creates an event in your Google Calendar using the anime's title and release date.

## Setup Steps
1. **Configure Search:** Open the 'Search Voice Actor' node. In "Query Parameters," change the value of `q` to the name of the voice actor or person you want to track.
2. **Connect Calendar:** Open the 'Create an event' node. Select your Google Calendar credentials and choose the Calendar ID where events should be created.
3. **Test:** Run the workflow manually to populate your calendar.

## Requirements
- An active n8n instance.
- A Google account (for Google Calendar).
- No API Key is required for Jikan API (Public), but rate limiting logic must be preserved.

## How to customize
- **Change the Filter:** Modify the 'Check if Not Aired' node to track "Currently Airing" shows instead of upcoming ones.
- **Enrich Event Details:** Update the 'Create an event' node to include the MyAnimeList URL or synopsis in the calendar event description.
- **Search Different Entities:** Adjust the API endpoint to search for Manga authors or specific Studios instead of voice actors.

## Expected Result
Upon successful execution, this workflow will:
- Search for the specified voice actor.
- Retrieve their upcoming anime roles.
- Create events in your Google Calendar for anime that hasn't aired yet.

**Example Calendar Entry:**
- **Title:** Anime Name - Release Date
- **Description:** Details regarding the release...

## 📊 Basic Information

- **Workflow ID:** 11126
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 44
- **Downloads:** 4
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11126)

## 👤 Author

- **Name:** Miki Arai
- **Username:** @mikia-n8n

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **wait** (×2)
- **splitOut** 
- **googleCalendar** 
- **splitInBatches** 
- **stickyNote** (×4)
- **httpRequest** (×3)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
