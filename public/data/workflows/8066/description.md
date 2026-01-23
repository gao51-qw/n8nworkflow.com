## What Problem Does It Solve?

Customers often ask product questions or prices in comments.

Businesses waste time replying manually, leading to delays.

Some comments only need a short thank-you reply, while others need a detailed private response.

This workflow solves these by:

Replying with a friendly public comment.

Sending a private message with details when needed.

Handling compliments, complaints, and unclear comments in a consistent way.

## How to Configure It

Facebook Setup

Connect your Facebook Page credentials in n8n.

Add the webhook URL from this workflow to your Facebook App/Webhook settings.

AI Setup

Add your Google Gemini API key (or swap for OpenAI/Claude).

The included prompt is generic — you can edit it to match your brand tone.

Optional Logging

If you want to track processed messages, connect a Notion database or another CRM.

## How It Works

Webhook catches new Facebook comments.

AI Agent analyzes the comment and categorizes it (question, compliment, complaint, unclear, spam).

Replying:

For questions/requests → public reply + private message with full details.

For compliments → short thank-you reply.

For complaints → apology reply + private message for clarification.

For unclear comments → ask politely if they need help.

For spam/offensive → ignored (no reply).

Replies and messages are sent instantly via the Facebook Graph API.

## Customization Ideas

Change the AI prompt to match your brand voice.

Add forwarding to Slack/Email if a human should review certain replies.

Log conversations in Notion, Google Sheets, or a CRM for reporting.

Expand to Instagram or WhatsApp with small adjustments.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)