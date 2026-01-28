# Daily AI news digest with Perplexity Pro, GPT format & Gmail delivery

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

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

## 📊 Basic Information

- **Workflow ID:** 5469
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 5177
- **Downloads:** 517
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5469)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **perplexity** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
