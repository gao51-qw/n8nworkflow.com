# YouTube Videos to Viral X Threads by Keywords (using Gemini & Claude)

> # Who is this for?
Content creators, marketers, and social media managers who want to turn high-performing YouTube videos into viral X (Twitter) threads using keywords (without manual research). Perfect for anyone looking to systematically create engaging social content from proven video sources.

---

# What problem does it solve?
Finding viral content ideas and writing engaging threads is time-consuming and hit-or-miss. This workflow automates the entire process: discovers high-performing YouTube videos based on your keywords, extracts key insights using AI, and generates multiple viral thread variations using proven patterns from 12.5M+ view threads.

---

# How it works

| # | Node | Purpose |
|---|------|---------|
| 1 | **Form Trigger** | Captures your keyword, target audience, and content type preferences. |
| 2 | **YouTube Video Search** | Finds recent videos (April 2025+) matching your keyword, sorted by view count. |
| 3 | **Get Video Statistics** | Fetches detailed metrics (views, engagement) for discovered videos. |
| 4 | **Filter High-Performers** | Keeps only videos with 100K+ views and excludes YouTube Shorts. |
| 5 | **Top 5 Selection** | Limits to the best 2 videos to focus on proven winners. |
| 6 | **Save Video Candidates** | Logs discovered videos to Google Sheets for manual approval. |
| 7 | **Wait & Check Approval** | Pauses 30 seconds, then checks which videos you marked "Yes" for thread generation. |
| 8 | **Video Analysis (Gemini)** | Uses Google's Gemini AI to extract key insights, tools, and strategies from approved videos. |
| 9 | **Thread Generation (Claude)** | Applies viral thread database patterns to create 3 distinct thread variations using Claude Sonnet 4. |
| 10 | **Structure & Save Threads** | Formats the generated threads and saves them back to Google Sheets for review and posting. |

---

# Setup steps

1. **Import & configure credentials**
  * Import the JSON workflow into n8n
  * Add your **YouTube Data API** key (get from [Google Cloud Console](https://console.cloud.google.com/))
  * Add your **Google Gemini API** key (get from [Google AI Studio](https://aistudio.google.com/))
  * Connect **Anthropic API** for Claude access
  * Set up **Google Sheets OAuth2** credential

2. **Create your tracking spreadsheet**
  * The workflow auto-creates a sheet with columns: `Keyword`, `Youtube video title`, `Description`, `Video URL`, `Turn into thread?`, `Thread 1`, `Thread 2`, `Thread 3`
  * You'll manually review and mark videos "Yes" in the `Turn into thread?` column

3. **Configure the viral thread database**
  * The workflow includes proven patterns from threads with 12.5M+ views
  * Adjust the target audience and content style in the AI prompts if needed

4. **Test the workflow**
  * Submit the form with a keyword like "AI automation"
  * Check that videos appear in your Google Sheet
  * Mark one "Yes" and verify threads are generated

---

# Resources

* [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
* [Google Gemini AI Platform](https://ai.google.dev/)
* [Anthropic Claude API](https://docs.anthropic.com/)
* [n8n Documentation](https://docs.n8n.io/)
* [Viral Thread Generator Demo](https://gamma.app/docs/Viral-XThreadGenerator--wce7q6wtkdilz35?mode=doc)

---

# Extending the workflow

* **Auto-posting** – Connect X API to automatically post generated threads
* **Competitor tracking** – Monitor specific channels for new content opportunities  
* **Multi-platform** – Adapt threads for LinkedIn, Instagram, or TikTok formats
* **Performance tracking** – Log thread performance back to sheets for optimization
* **Webhook triggers** – Set up Zapier integration for form submissions from other tools

Transform proven YouTube content into viral social media threads—systematically and at scale.

## 📊 Basic Information

- **Workflow ID:** 4974
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 219
- **Downloads:** 21
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4974)

## 👤 Author

- **Name:** Matty Reed
- **Username:** @mattyreed1

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **filter** (×2)
- **limit** 
- **code** (×4)
- **googleSheets** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **formTrigger** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
