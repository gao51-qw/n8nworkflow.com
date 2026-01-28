# Analyze weekly notes with GPT-4 for actionable tasks & summaries

> This n8n template demonstrates how to automatically analyze all your accumulated notes from the past week and generate actionable insights, task lists, and priorities using AI.

Use cases are many: Try automating weekly planning sessions, extracting action items from meeting notes, identifying recurring themes in your thoughts, or creating data-driven weekly reports for personal productivity tracking!

## Good to know

- ChatGPT analysis costs approximately $0.01-0.05 per week depending on the volume of notes
- The workflow uses advanced date filtering to process exactly 7 days of content
- Email sending requires SMTP configuration (Gmail, Outlook, etc.)
- **Perfect companion:** Works seamlessly with the "**Audio Notes to Google Docs**" workflow - it reads and analyzes all notes created by that system!

## How it works

- A schedule trigger runs every Sunday at your preferred time (default: 11 PM)
- The workflow reads your complete Google Doc containing all accumulated notes
- A smart filter function extracts only entries from the past 7 days using date stamp recognition
- The filtered content gets sent to ChatGPT which analyzes patterns and extracts:

Actionable tasks for next week
Important deadlines and appointments
Key insights and learnings
Top 3 priorities
Category distribution (Work, Private, Health, etc.)


- A second AI call creates a personalized email summary with context and recommendations
- The structured analysis gets appended to your Google Doc as a weekly summary
- You receive a Telegram notification when the review is complete
- A detailed email report lands in your inbox with the full analysis and action items

## How to use

- The workflow runs automatically every Sunday - no manual intervention needed
- Adjust the schedule trigger to your preferred day/time for weekly planning
- Review the email summary and use the extracted tasks for your upcoming week planning
- The Google Doc serves as your permanent archive of weekly insights

## Requirements

- Google Docs API access to read your notes document
- OpenAI API account for ChatGPT analysis (GPT-4 recommended for best results)
- SMTP email configuration for sending summary reports
- Telegram Bot Token for notifications
- **Prerequisite:** The **"Audio Notes to Google Docs**" workflow or similar system that creates timestamped entries

## Customising this workflow

- Modify the AI analysis prompt to focus on specific areas (business metrics, health tracking, learning goals)
- Add multiple analysis modes (daily, bi-weekly, monthly reviews)
- Include additional outputs like calendar event creation, task manager integration, or team sharing
- Connect to project management tools like Notion, Asana, or Monday.com for automatic task creation

## 📊 Basic Information

- **Workflow ID:** 8119
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8119)

## 👤 Author

- **Name:** Julian Reich 
- **Username:** @julianreich

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleDocs** (×2)
- **function** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **telegram** (×2)
- **gmail** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
