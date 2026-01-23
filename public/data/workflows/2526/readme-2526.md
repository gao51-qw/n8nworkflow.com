# Telegram to Spotify with OpenAI

> **Search music and play to Spotify from Telegram**

This workflow is a simple demonstration on accessing a message model from Telegram and it makes searching for songs an easy task even if you can't remember the artist or song name.
An OpenAI message model tries to figure out the song and sends it to an active Spotify device**.

**Use case**
Imagine an office where you play music in the background and the employees can control the music without having to login to the playing account.

**How it works**
- You describe the song in Telegram.
- Telegram bot sends the text to n8n.
- An OpenAI message model tries to find the song.
- Spotify gets the search query string.
- First match is then added to queue.
-- If there is no match a message is sent to Telegram and the process ends.
- We change to the next track in the list.
- We make sure the song starts playing by trying to resume.
- We fetch the currently playing track.
- We return "now playing" information to Telegram: Song Name - Artist Name - Album Name.

**Error handling**
- Every Spotify step has it's on error handler under settings where we output the error.
- Message parser receives the error and sends it to Telegram.

**Requirements**
- Active workflow*
- OpenAI API key
- Telegram bot
- Spotify account and Oauth2 API
- Spotify active on a device**

.* The Telegram trigger is activated only if this workflow is active. You can however TEST the workflow in the editor by clicking "Test step" and then it waits for the Telegram event. When event is received, just step through all steps or just clicking "Test step" on the "Fetch Now Playing" node.

.** You must have a Spotify device active when trying to communicate with a device. Open Spotify and play something - not it is active.



## 📊 Basic Information

- **Workflow ID:** 2526
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2675
- **Downloads:** 267
- **Created:** 2024/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2526)

## 👤 Author

- **Name:** Alexander Bentlund
- **Username:** @nld-alex

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **spotify** (×5)
- **stickyNote** 
- **merge** 
- **if** 
- **set** (×3)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
