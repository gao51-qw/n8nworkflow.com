# Create AI-generated Spotify playlists with GPT-5 and email the link

> **How it works:**
When a user submits a form with event details, the workflow sends this information to OpenAI's GPT-5 model, which generates a curated list of 18–32 songs tailored to the occasion and audience. The workflow then searches Spotify for each recommended song, creates a new playlist on the user's Spotify account, adds all the tracks, and sends the user an email with a direct link to listen.

**Key Features:**
- AI-Powered Playlist Generation: Uses OpenAI's GPT-5 model to create contextually relevant song recommendations based on event type, audience, and personal preferences.
- Automated Spotify Integration: Searches Spotify's API for each song and automatically adds them to a new playlist on the user's account.
- One-Click Listening: Users receive an email with a direct Spotify link to listen, follow, and modify the playlist immediately after creation.
- Multi-Language Support: The AI responds in the same language as the user's input, making the workflow accessible globally.
- Email Confirmation: Users instantly receive an email notification confirming playlist creation with a shareable Spotify link.


**Step-by-step:**
Form Submission Trigger: 
User submits event details (occasion, guests, preferences, and email) through the web form.

AI Playlist Generation: 
OpenAI's GPT-5 generates a curated list of 18–32 songs based on the provided event context.

Spotify Integration: 
The workflow searches Spotify for each song, creates a new playlist, and adds all found tracks to the user's account.

Email Notification: 
User receives an email with the playlist name and a direct Spotify link to listen immediately.


**API Keys Required**
- OpenAI API Key: Required to access GPT-5 for generating playlist recommendations.
- Spotify Client ID & Secret: Required to authenticate with Spotify's API for searching, creating playlists, and adding tracks.
- SMTP Credentials: Required to send the confirmation email to the user (server, port, username, password, and sender email).


**Response Generation**
The AI model receives event details and generates a structured JSON response containing a playlist name, 18–32 song recommendations with artist credits, and HTML-formatted content for website integration, all in the user's language.

## 📊 Basic Information

- **Workflow ID:** 11376
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 2
- **Downloads:** 0
- **Created:** 2025/12/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11376)

## 👤 Author

- **Name:** Ufuk Ören
- **Username:** @neorebels

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **formTrigger** 
- **emailSend** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** 
- **splitOut** 
- **httpRequest** (×4)
- **set** (×2)
- **merge** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
