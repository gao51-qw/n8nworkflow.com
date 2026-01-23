## YouTube Chapter Auto-Description with AI

This n8n template automatically adds structured timestamp chapters to your latest YouTube video’s **description** using your RSS feed, SupaData for transcript extraction, and an AI tool for chapter generation.

Ideal for creators who want every video to include chapter markers without doing it manually.

---

### Good to Know

- SupaData extracts full transcripts from YouTube videos via URL.
- The AI chapter generator converts long transcripts into formatted timestamps with short titles.
- This workflow edits the existing **video description** and appends the chapters to the bottom.

---

### How It Works

1. The **RSS Feed Trigger** detects new uploads from your YouTube channel.
2. The workflow checks Airtable to prevent duplicate processing.
3. Transcript is fetched using **SupaData API**.
4. The total video duration is extracted from the transcript.
5. AI is prompted to generate well-formatted chapter timestamps.
6. The existing description is fetched from YouTube.
7. The chapters are appended and pushed back via the YouTube API.

---

### How to Use

- Start with the **Manual Trigger** to test the setup.
- Replace it with the **RSS Trigger** once you're ready for automation.
- Chapters are added only if the video hasn't been processed before.

---

### Requirements

- **YouTube OAuth2** credentials in n8n
- **SupaData API Key**
- **Airtable account** (for optional deduplication logic)

---

### Customizing This Workflow

- Change the chapter format, or instruct the AI to use emojis, bold titles, or include sections like "sponsor" or "Q&A".
- Replace the RSS Trigger with a webhook if using a different publishing process.