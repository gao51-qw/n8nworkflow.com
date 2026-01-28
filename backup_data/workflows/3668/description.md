# Altcoin News to LinkedIn Posts with DeepSeek AI & Google Sheets

Automate your daily crypto content creation and publishing using this n8n workflow. This automation fetches the latest altcoin news from an RSS feed, rewrites it into LinkedIn-style posts using DeepSeek AI, stores it in Google Sheets, and schedules it for publishing—completely hands-free.

<h3>🔧 Prerequisites</h3>
n8n instance (cloud or self-hosted)

DeepSeek AI or OpenAI API key

Google account with Sheets API enabled

RSS feed URL of your preferred altcoin news source

(Optional) LinkedIn API or scheduling tool

<h3>⚙️ Workflow Breakdown</h3>
Fetch RSS Feed – Retrieve altcoin news articles.

Filter Articles – Only select posts from today and containing keywords like "altcoin", "crypto", "defi", etc.

Rewrite with DeepSeek – Convert article into a LinkedIn-style post using a prompt template (includes Hook, Body, CTA).

Store in Google Sheets – Save the generated content into your sheet.

Post to LinkedIn (optional) – Schedule or publish via LinkedIn API or integration.

### Setup
Connect RSS Feed: Set up the CoinDesk RSS feed to be fetched automatically.

API Keys: Add your DeepSeek AI API key to enable content generation.

Google Sheets: Link your Google Sheet to store both raw RSS data and AI-generated LinkedIn posts.

Scheduling: Set the time intervals for when the posts will be scheduled (e.g., every 6 hours).

### Customization Instructions
**Change RSS Feed URL:
**
Open the Fetch RSS Feed node.

Replace the current URL with your new RSS feed URL in the "URL" field.

**Change GPT Model:
**
Open the DeepSeek Chat Model node.

Find the "Model" field and select your preferred model (e.g., gpt-4).

**Change Prompt:
**
Open the DeepSeek Chat Model node.

Edit the prompt text in the "Prompt" field to customize the tone, content, or keywords.

**Change Wait Time:
**
Open the Schedule Tweet node.

Adjust the "Wait Time" (in seconds) to your desired interval:

For 6 hours: 21600

For 1 hour: 3600

For 30 minutes: 1800

For 15 minutes: 900

