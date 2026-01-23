**💡 How It Works**

This workflow automatically detects new YouTube uploads, retrieves their transcripts, summarizes them in Japanese using GPT-4 o mini, and posts the results to a selected Slack channel.
It’s ideal for teams who follow multiple creators, internal training playlists, or corporate webinars and want concise Japanese summaries in Slack without manual work.

Here’s the flow at a glance:

1. **YouTube RSS Trigger** — monitors a specific channel’s RSS feed.
2.  **HTTP Request via RapidAPI** — fetches the video transcript (supports both English & Japanese). 
3. **Code Node** — merges segmented transcript text into one clean string.
4. **OpenAI (GPT-4o-mini)** — generates a natural-sounding, 3-line Japanese summary.
5. **Slack Message** — posts the title, link, and generated summary to #youtube-summary.

**⚙️ Requirements**

- n8n (v1.60 or later)
- RapidAPI account + [youtube-transcript3 API key]
- OpenAI API key (GPT-4o-mini recommended)
- Slack workspace with OAuth connection

**🧩 Setup Instructions**

1.Replace YOUR_RAPIDAPI_KEY_HERE with your own RapidAPI key.
2.Add your OpenAI Credential under Credentials → OpenAI.
3.Set your target Slack channel (e.g., #youtube-summary).
4.Enter the YouTube channel ID in the RSS Trigger node.
5.Activate the workflow and test with a recent video. 

**🎛️ Customization Tips**

Modify the OpenAI prompt to change summary length or tone.

Duplicate the RSS Trigger for multiple channels → merge before summarization.

Localize Slack messages using Japanese or English templates.

**🚀 Use Case**

Perfect for marketing teams, content curators, and knowledge managers who want to stay updated on YouTube content in Japanese without leaving Slack.