# AI-powered code review with linting, red-marked corrections in Google Sheets & Slack

> ## Advanced Code Review Automation (AI + Lint + Slack)

### Who’s it for
For software engineers, QA teams, and tech leads who want to **automate intelligent code reviews** with both AI-driven suggestions and rule-based linting — all managed in Google Sheets with instant Slack summaries.

### How it works
This workflow performs a two-layer review system:
1. **Lint Check**: Runs a lightweight static analysis to find common issues (e.g., use of `var`, `console.log`, unbalanced braces).
2. **AI Review**: Sends valid code to Gemini AI, which provides human-like review feedback with severity classification (`Critical`, `Major`, `Minor`) and visual highlights (red/orange tags).
3. **Formatter**: Combines lint and AI results, calculating an overall score (0–10).
4. **Aggregator**: Summarizes results for quick comparison.
5. **Google Sheets Writer**: Appends results to your review log.
6. **Slack Notification**: Posts a concise summary (e.g., number of issues and average score) to your team’s channel.

### How to set up
1. Connect **Google Sheets** and **Slack** credentials in n8n.
2. Replace placeholders (`&lt;YOUR_SPREADSHEET_ID&gt;`, `&lt;YOUR_SHEET_GID_OR_NAME&gt;`, `&lt;YOUR_SLACK_CHANNEL_ID&gt;`).
3. Adjust the AI review prompt or lint rules as needed.
4. Activate the workflow — reviews will start automatically whenever new code is added to the sheet.

### Requirements
- Google Sheets and Slack integrations enabled
- A configured AI node (Gemini, OpenAI, or compatible)
- Proper permissions to write to your target Google Sheet

### How to customize
- Add more linting rules (naming conventions, spacing, forbidden APIs)
- Extend the AI prompt for project-specific guidelines
- Customize the Slack message formatting
- Export analytics to a dashboard (e.g., Notion or Data Studio)

### Why it’s valuable
This workflow brings **realistic, team-oriented AI-assisted code review** to n8n — combining the speed of automated linting with the nuance of human-style feedback. It saves time, improves code quality, and keeps your team’s review history transparent and centralized.

## 📊 Basic Information

- **Workflow ID:** 10034
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 85
- **Downloads:** 8
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10034)

## 👤 Author

- **Name:** higashiyama 
- **Username:** @kazushi

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **set** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheetsTool** 
- **stickyNote** (×6)
- **function** (×3)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
