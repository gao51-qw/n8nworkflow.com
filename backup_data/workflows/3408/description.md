# AI YouTube Playlist & Video Analyst Chatbot

This n8n workflow transforms entire YouTube playlists or single videos into interactive knowledge bases you can chat with. Ask questions and get summaries without needing to watch hours of content.

## 🌟 How it Works

1.  **🔗 Provide a Link:** Start by giving the workflow a URL for a YouTube playlist or a single video.
2.  **📄 Content Retrieval:** The workflow automatically fetches the video details and transcripts for the provided link. For playlists, it can process multiple videos at once (you might be asked how many).
3.  **🧠 AI Processing:** Google's Gemini AI reads through the transcripts, understands the content, and creates summaries.
4.  **💾 Storage & Context:** The processed information and summaries are stored in a vector database (Qdrant), making them ready for conversation. **Context is managed using Redis**, remembering the current video/playlist you're discussing.
5.  **💬 Chat & Ask:** Now, you can ask the AI agent questions about the playlist or video content! **Because context is maintained**, you can ask follow-up questions (like "expand on point X") without needing to provide the URL again.

## 🛠️ Requirements

* **Community Node:** This workflow uses the `youtubeTranscripter` community node to fetch video transcripts. You'll need to install it in your n8n environment.
    * **Installation:** `npm install n8n-nodes-youtube-transcription-dmr`
    * **Important:** Community nodes require a **self-hosted n8n instance**.
* **Redis:** A Redis instance is required for managing conversation context and status between interactions.
* **Credentials:** You will need API credentials configured in your n8n instance for:
    * Google Gemini (AI Models)
    * Qdrant (Vector Store)
    * Redis (Context Store)

## 🤖 AI Agent Capabilities

Engage with the AI agent to explore the video content. Since the agent remembers the context of your conversation, you can ask detailed follow-up questions naturally:

* Get a quick **summary** of a single video or an entire playlist.
* Ask for **key takeaways** or main topics discussed.
* Query for **specific information** mentioned in the videos.
* Ask the agent to **elaborate** on a specific point previously mentioned.
* Understand complex subjects **without watching** the full duration.

## 🚀 Use Cases

* **📊 Content Analysis:** Quickly understand the themes and key points across a playlist or long video.
* **📚 Research & Learning:** Extract insights from educational series or tutorials efficiently.
* **✍️ Content Creation:** Easily repurpose video transcript information into blog posts, notes, or social media content.
* **⏱️ Save Time:** Get the essence of video content when you're short on time.
* **♿ Accessibility:** Offers a text-based way to interact with and understand video content.

## ✨ Sample Prompts

* Please analyze this playlist and tell me the main topics covered: [YouTube Playlist URL]
* Summarize the first 5 videos in this playlist: [YouTube Playlist URL]
* _(Follow-up)_ Tell me more about the main point in video 3.
* What are the key points discussed in this video? [YouTube Video URL]
* _(Follow-up)_ Expand on the second key point you mentioned.
* Does the video at [YouTube Video URL] mention [specific topic]?