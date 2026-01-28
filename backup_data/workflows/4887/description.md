### 🔎 Who is this for?
This workflow is designed for podcast creators, content marketers, and video producers who want to convert YouTube videos into podcast-ready scripts. It's perfect for anyone repurposing long-form content to reach audio-first audiences without manual effort.

---

### 🧠 What problem is this workflow solving?
Creating podcast scripts from YouTube videos manually is time-consuming. This workflow automates the process by pulling transcripts, cleaning the text, organizing the dialogue, summarizing the key points, and saving everything in one place. It removes the need for manual transcription, formatting, and structuring.

---

### ⚙️ What this workflow does

This workflow uses **Dumpling AI** and **GPT-4o** to automate the transformation of YouTube video transcripts into polished podcast scripts. Here's how it works:

1. **RSS Feed Trigger**
   - Monitors a YouTube RSS feed for new video uploads. When a new video is detected, the workflow begins automatically.

2. **Get YouTube Transcript (Dumpling AI)**
   - Uses Dumpling AI's `get-youtube-transcript` endpoint to extract the full transcript from the video URL.

3. **Generate Podcast Script with GPT-4o**
   - GPT-4o receives the transcript and generates a structured JSON output including:
     - Cleaned transcript with filler words removed
     - Speaker labels for clarity
     - A short, engaging podcast title
     - A concise summary of the episode

4. **Save to Airtable**
   - The structured data (title, summary, cleaned transcript) is saved to Airtable for easy review, editing, or publishing.

---

This automation is an ideal workflow for repurposing video content into audio-friendly formats, cutting down production time while increasing content output across platforms.
