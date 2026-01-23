# Curate & translate news from RSS using Google Gemini, Sheets, and Slack

> ## 🤖 Automated Multi-lingual News Curator & Archiver

**Overview**
This workflow automates news monitoring by fetching RSS feeds, rewriting content using AI, translating it (EN/ZH/KO), and archiving it.

**Who is this for?**
Content Curators, Localization Teams, and Travel Bloggers.

**How it works**
1. **Fetch & Filter:** Pulls NHK RSS and filters for keywords (e.g., "Tokyo").
2. **AI Processing:** Google Gemini rewrites articles, extracts locations, and translates text.
3. **Archive & Notify:** Saves structured data to Google Sheets and alerts Slack.

**Setup Requirements**
1. **Credentials:** Google Gemini, Google Sheets, Slack.
2. **Google Sheet:** Create headers: `title`, `summary`, `location`, `en`, `zh`, `ko`, `url`.
3. **Slack:** Configure Channel IDs.

**Customization**
- **RSS Read:** Change feed URL.
- **If Node:** Update filter keywords.
- **AI Agent:** Adjust system prompts for tone.


## 1. Fetch & Filter
Runs on a schedule to fetch the latest RSS items. Filters articles based on specific keywords (e.g., "Tokyo" or "Season") before processing.


## 2. AI Analysis & Parsing
Uses Google Gemini to rewrite the news, extract specific locations, and translate content. The Code node cleans the JSON output for the database.


## 3. Archive & Notify
Appends the structured data to Google Sheets and sends a formatted notification to Slack (or alerts if an article was skipped).



**Output Example (JSON)**
The translation agent outputs data in this format:
```json
{
  "en": "Tokyo Tower is...",
  "zh": "东京塔是...",
  "ko": "도쿄 타워는..."
}

## 📊 Basic Information

- **Workflow ID:** 11301
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 57
- **Downloads:** 5
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11301)

## 👤 Author

- **Name:** ueharayuuki
- **Username:** @ueharayuuki1012

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **stickyNote** (×4)
- **rssFeedRead** 
- **limit** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **code** 
- **googleSheets** 
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
