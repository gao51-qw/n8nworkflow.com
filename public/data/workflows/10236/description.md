## Who's it for

This workflow is perfect for n8n users and teams who want to stay up-to-date with the latest n8n releases without manually checking GitHub. Get AI-powered summaries of new features and bug fixes delivered straight to your inbox.

## What it does

This workflow automatically monitors the n8n GitHub releases page and sends you smart email notifications when new updates are published. It fetches release notes, filters them based on your schedule (daily, weekly, etc.), and uses OpenAI to generate concise summaries highlighting the most important bug fixes and features. The summaries are then formatted into a clean HTML email and sent via Gmail.

## How to set up

1. **Configure the Schedule Trigger** - Set how often you want to check for updates (daily, weekly, etc.)
2. **Add OpenAI credentials** - Connect your OpenAI API key or use a different LLM
3. **Add Gmail credentials** - Connect your Google account
4. **Set recipient email** - Update the "To" email address in the Gmail node
5. Activate the workflow and you're done!

## Requirements

- OpenAI API account (or alternative LLM)
- Gmail account with n8n credentials configured

## How to customize

- Adjust the schedule trigger to match your preferred notification frequency
- The filtering logic automatically adapts to your schedule (24 hours for daily, 7 days for weekly, etc.)
- Modify the AI prompt to focus on different aspects of the release notes
- Customize the HTML email template to match your preferences