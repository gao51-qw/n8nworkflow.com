# Create daily trivia icebreakers in Slack with OpenTDB & Google Sheets log

> **Who this workflow is for**

This template is for teams who want a lightweight “daily icebreaker” in Slack and creators who’d like to build a reusable trivia database over time. It works well for remote teams, communities, and any workspace that enjoys a quick brain teaser each day.

**What this workflow does**

The workflow fetches a random multiple-choice question from the Open Trivia Database (OpenTDB), posts a nicely formatted trivia message to a Slack channel, and logs the full question and answers into a Google Sheets spreadsheet. Over time, this creates a searchable “trivia archive” you can reuse for quizzes, content, or community events.

**How it works**

A Schedule Trigger runs once per day at a time you define.

A Set node randomly chooses a difficulty level (easy, medium, or hard).

A Switch node routes to the matching OpenTDB HTTP request.

Each branch normalizes the API response into common fields (timestamp, date, difficulty, category, question, correct, incorrect, messageTitle, messageBody).

A Merge node combines the three branches into a single stream.

Slack posts the trivia message.

Google Sheets appends the same data as a new row.

**How to set up**

Connect your Slack OAuth2 credentials and choose a target channel.

Connect your Google Sheets credentials and select the spreadsheet and sheet.

Adjust the schedule (time and frequency) to match your use case.

**How to customize**

Change the Slack message format (for example, add emojis or hints).

Filter categories or difficulty levels instead of picking them fully at random.

Add additional logging (e.g., user reactions, answer stats) in Sheets or another datastore.

## 📊 Basic Information

- **Workflow ID:** 11280
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11280)

## 👤 Author

- **Name:** SOLOVIEVA ANNA
- **Username:** @anna0726

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **merge** 
- **scheduleTrigger** 
- **googleSheets** 
- **slack** 
- **switch** 
- **set** (×4)
- **httpRequest** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
