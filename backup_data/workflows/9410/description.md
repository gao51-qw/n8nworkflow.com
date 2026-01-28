## Description
Automate your team's daily stand-ups with AI-powered morning briefs, directly pulled from ClickUp tasks and shared via Slack and Gmail every morning. ☀️📋💬

## What This Template Does
- Triggers automatically at 9:15 AM each morning via cron. ⏰
- Fetches the latest sprint and all active or due-today tasks from ClickUp.
- Categorizes tasks by status, priority, and assignee for clear visibility.
- Uses Azure OpenAI GPT-4o to generate a detailed, structured morning summary.
- Formats the AI summary into a clean HTML email and a Slack post.
- Sends automated updates to Gmail and Slack channels.
- Includes real-time error detection and Slack alerts for quick debugging.

## Key Benefits
✅ Eliminates manual stand-up prep by generating AI-driven daily reports.
 ✅ Keeps teams aligned with clear task summaries and blocker tracking.
 ✅ Automatically distributes updates across Slack and Gmail.
 ✅ Provides HTML-formatted emails and Slack markdown summaries.
 ✅ Reduces time spent on daily check-ins and sprint reviews.

## Features
- Fully automated daily scheduling using cron triggers.
- Real-time task fetching and categorization from ClickUp.
- GPT-4-powered summarization for executive-style briefs.
- Responsive HTML email builder for beautiful reports.
- Slack integration for quick, shareable updates.
- Error handling with dedicated Slack notifications.

## Requirements
- ClickUp OAuth2 credentials for task access.
- Azure OpenAI GPT-4o API credentials for summary generation.
- Slack API credentials for channel posting.
- Gmail OAuth2 credentials for sending email reports.

## Target Audience
- Project managers and team leads needing automated daily briefings 👩‍💼
- Development teams using ClickUp for sprint and task tracking 💻
- Agencies or operations teams coordinating across tools 🔄
- Remote teams seeking quick alignment and productivity boosts 🌍

## Step-by-Step Setup Instructions
- Connect your ClickUp account via OAuth2 and update Team, Space, and Folder IDs. ⚙️
- Add Azure OpenAI GPT-4o credentials for AI summary generation. 🤖
- Configure Slack OAuth2 credentials and set the target channel ID. 💬
- Connect Gmail OAuth2 and define recipient email addresses. 📧
- Customize the schedule trigger time (default: 9:15 AM). 🕒
- Test the workflow to verify proper data retrieval and message delivery. 🚀