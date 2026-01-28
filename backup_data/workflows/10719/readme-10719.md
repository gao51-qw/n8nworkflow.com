# Generate YouTube chapter timestamps with GPT and SupaData transcripts

> ## YouTube Chapter Auto-Description with AI

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

## 📊 Basic Information

- **Workflow ID:** 10719
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 77
- **Downloads:** 7
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10719)

## 👤 Author

- **Name:** Chris Jadama
- **Username:** @chrisjadama

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **rssFeedReadTrigger** 
- **airtable** (×2)
- **if** 
- **set** 
- **httpRequest** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **youTube** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
