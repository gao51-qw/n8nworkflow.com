# YouTube Comment Sentiment & Keyword Extractor

**Template Google Sheets:** [Click here to open](https://docs.google.com/spreadsheets/d/1LBlCLH8L-eooAlfGq66_cLTbxyCse83c1VZaea0tjMg/edit?usp=sharing)

This workflow automatically retrieves comments from YouTube videos listed in Google Sheets, analyzes sentiment and keywords using an LLM, stores the results, then generates an aggregate summary and sends a report to Telegram.

---

## ✨ Key Features
- **Automated Scheduling** – Runs the process at regular intervals.
- **Google Sheets Integration** – Fetches a list of videos and stores analysis results directly in Google Sheets.
- **YouTube Comment Retrieval** – Retrieves top-level comments (up to 100 per video; can be extended with pagination).
- **Comment Parsing** – Flattens the API response into one item per comment.
- **AI Sentiment & Keyword Analysis** – Powered by an LLM model to extract:
  - Sentiment (`positive`, `neutral`, `negative`)
  - Sentiment score (-1 to 1)
  - Keywords (cleaned from stopwords, emojis, hashtags)
  - Language (ISO 639-1, 2-letter code)
- **Data Normalization** – Ensures LLM output is consistent and safe to write to the sheet.
- **Telegram Reporting** – Sends a concise report for each video directly to a Telegram chat.

---

## 🔐 Required Credentials
- **Google Sheets OAuth2 API** – Read & write access to the spreadsheet.
- **YouTube Data API Key** – To fetch comments via `commentThreads`.
- **OpenRouter API Key** – To access the LLM model.
- **Telegram Bot API** – To send reports via a Telegram bot.

---

## 🎁 Benefits
- **End-to-End Automation** – From comment retrieval to reporting, no manual steps required.
- **No Duplication** – Each comment is uniquely tracked by `comment_id`.
- **Data Transparency** – Raw and analyzed data stored neatly in Google Sheets.
- **Actionable Insights** – Sentiment and keyword summaries ready for content strategy decisions.
- **Scalable** – Can be extended for pagination, reply comment analysis, or additional metrics.
- **Cross-Platform** – Direct Telegram integration for easy monitoring on any device.
