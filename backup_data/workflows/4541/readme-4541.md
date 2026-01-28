# Create song lyric documents and Spotify playlists for singers with Google Docs

> ## Setlist Manager
This workflow takes a Google spreadsheet called 'Setlist_Manager' with 'Artist' and 'SongTitle' entries and get's Lyrics for each song and creates a playlist for that set of songs.

1. Create Spotify Playlist (naming it 'Setlist - [date of today]')
2. Create the Google doc that will store the lyrics found. (naming it 'Setlist - [date of today]')
3. Get the rows of songs from 'Setlist_Manager'.
4. Use AI to verify the Artist name and song title.
5. Get the lyrics to the song.
6. Append the Google Doc with the lyrics.
7. Search for the song in Spotify.
8. Add that song to the Spotify Playlist.
9. Go to band practice and be prepared! =)

## 📊 Basic Information

- **Workflow ID:** 4541
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 528
- **Downloads:** 52
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4541)

## 👤 Author

- **Name:** Eric Mooney
- **Username:** @emooney

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** 
- **manualTrigger** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **googleDocs** (×2)
- **spotify** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
