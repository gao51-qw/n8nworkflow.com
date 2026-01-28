*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🧠 AI News Update Every 24 Hours (with Perplexity + GPT Formatter)
Description:

This workflow automatically delivers a clean, AI-curated summary of the latest AI news headlines from the past 24 hours directly to your inbox — every morning at 9 AM.

For step-by-step video tutorial for this build, watch here:
https://youtu.be/O-DLvaMVLso

🧰 How It Works:
🕘 Schedule Trigger
 Runs daily at 9 AM to start the workflow.

🔎 Perplexity AI Agent
 Searches for AI-related headlines published in the last 24 hours, including:

Headline

1-sentence summary

Source

Full URL

🧠 GPT Formatter AI Agent
 Uses an OpenAI language model (GPT-4.1-mini) to reformat raw news data into a clean, readable email update.

🧷 Memory Buffer (Optional)
 Gives the formatter context and continuity if you want to personalize formatting further over time.

📧 Gmail Node
 Sends the formatted AI news digest to your inbox (or your team’s) daily.

📦 Tools & APIs Required:
✅ Perplexity AI API

✅ OpenAI API

✅ Gmail Account (OAuth2 credentials)

🔄 Use Cases:
Daily AI trend monitoring for individuals or teams

Automating internal market intelligence

Research triggers for blog or content creation

Email digests for newsletters or Slack updates

🛠️ Customizable Ideas:
Swap Gmail for Slack, Telegram, Discord, etc.

Modify the topic (e.g., Climate Tech, Crypto News)

Add sentiment analysis or AI-generated commentary

Send summary to Google Docs or Notion instead