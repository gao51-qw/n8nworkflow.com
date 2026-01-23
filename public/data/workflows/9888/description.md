🎧 Automated Spotify Playlist Organizer — Sort and Queue Tracks by Popularity

🧠 Overview

This workflow acts as your AI-powered Spotify DJ assistant.
It retrieves your playlists, cleans and organizes them, sorts tracks by popularity, and automatically queues them for playback — creating a ready-to-play, personalized listening session.

⸻

⚙️ Step-by-Step Breakdown

1. Manual Trigger

Node: When clicking ‘Execute workflow’
Starts the workflow manually when you click “Execute” in n8n.

⸻

2. Get User’s Playlists

Node: Get a user’s playlists
	•	Uses your Spotify OAuth credentials.
	•	Calls Spotify’s API to retrieve all playlists from your account (returnAll: true).
	•	Output: an array of playlists (name, URI, number of tracks, etc.).

🟢 This is your raw data source.

⸻

3. Clean & Deduplicate

Node: Clean & Deduplicate (Code node)
This JavaScript block:
	•	Normalizes input (handles arrays and multiple items).
	•	Extracts only useful fields: name, uri, total.
	•	Filters out playlists missing data.
	•	Removes duplicates by URI.

🧹 Result: a clean, uniform list of your playlists.

⸻

4. Get a Playlist’s Tracks

Node: Get a playlist’s tracks by URI or ID
	•	Fetches all tracks from a specific playlist.
	•	Returns detailed info: name, popularity, artists, album, added date, etc.

🎵 This retrieves the actual songs from your chosen playlist.

⸻

5. Playlist Reorganizer

Node: Playlist reorganizer (Code node)
This JavaScript block:
	•	Collects all tracks from the selected playlist.
	•	Avoids duplicates with seenTrackIds.
	•	Extracts key fields: id, name, popularity, artists, album, added_at, url, etc.
	•	Sorts songs by ascending popularity (less popular first).

📊 Result: playlist reorganized by song popularity.

⸻

6. Loop Over Items

Node: Split in Batches
	•	Iterates over each track one by one.
	•	Sends each song sequentially to the next node (“Add a song to a queue”).

🔁 Allows each song to be processed individually.

⸻

7. Add a Song to a Queue

Node: Add a song to a queue
	•	Uses each song’s Spotify ID to add it to your Spotify playback queue (spotify:track:{{ $json.id }}).
	•	Connected to the “Loop Over Items” node to continue until all songs are queued.

🎶 Result: your Spotify queue fills automatically with the reorganized tracks.

⸻

✅ Final Result

When you execute this workflow:
	1.	It fetches all your playlists.
	2.	Cleans and filters them.
	3.	Extracts tracks from one selected playlist.
	4.	Sorts them by popularity.
	5.	Adds them to your playback queue.

🎧 End result: a fully automated “AI DJ” that reorganizes your playlists and lines up your music session — from discovery to playback.

⸻

🪪 Prerequisites

Before using this workflow:
	•	You must have a Spotify account.
	•	You need to set up Spotify OAuth credentials in n8n (Client ID, Client Secret, Redirect URI).
	•	Ensure you have Spotify Premium (API queueing only works on Premium accounts).

⸻

🛠️ Setup Instructions
	1.	Import this workflow into your n8n instance.
	2.	Go to the Spotify OAuth2 API credentials section and connect your account.