# Pre-meeting lead research agent with Calendly, Perplexity & RapidAPI

> ## Who's it for

Sales teams, BDRs, account managers, and customer success professionals who want to show up prepared for every meeting. Perfect for anyone using Calendly who wants to automate prospect research and never walk into a call blind again.

**Watch the full tutorial here:**

[![AI Meeting Research Workflow Tutorial](https://img.youtube.com/vi/K8E003tw2v8/maxresdefault.jpg)](https://youtu.be/K8E003tw2v8?si=-vFjzR_lUX3Jn5Qa)

## What it does

This workflow automatically researches your meeting attendees the moment they book through Calendly. It combines multiple AI agents to gather comprehensive intelligence:

- **Company Research**: Uses Perplexity AI to validate company details, recent news, funding, leadership changes, and business signals
- **LinkedIn Analysis**: Leverages RapidAPI to analyze the person's profile, recent posts, comments, and engagement patterns from the last 60-90 days
- **Signal Detection**: Identifies hiring signals, growth indicators, and potential risks with confidence scoring
- **Meeting Prep**: Synthesizes everything into personalized talking points, conversation starters, and strategic recommendations

The final research brief gets delivered directly to your Slack, saving 30-45 minutes of manual research per meeting.

## How it works

1. Someone books a meeting via your Calendly (must include LinkedIn URL in booking form)
2. Main AI Agent extracts company domain from email and coordinates three specialist research agents
3. Company Agent researches business intel via Perplexity
4. Person Agent analyzes LinkedIn activity using 4 different RapidAPI endpoints
5. Signal Agent identifies business opportunities and risks
6. Comprehensive meeting brief gets sent to your Slack channel

## Requirements

**API Credentials needed:**
- Calendly API (for webhook trigger)
- OpenAI API key (GPT-4 recommended for orchestration)
- Perplexity API key (for web research)
- RapidAPI subscription (for LinkedIn data endpoints)
- Slack bot token (for output delivery)

**Important**: Your Calendly booking form must include a LinkedIn URL field to get optimal results.

## How to set up

1. **Configure Calendly**: Add the Calendly trigger node with your API credentials
2. **Update Slack destination**: Modify the final Slack node with your user ID or channel
3. **Add API keys**: Configure all the API credentials in their respective nodes
4. **Test the workflow**: Book a test meeting through Calendly to verify the complete flow
5. **Customize prompts**: Adjust the AI agent prompts based on your specific industry or use case

The workflow uses structured JSON output with confidence scoring and source citation for reliable, actionable intelligence.

## How to customize the workflow

- **Change output destination**: Replace Slack with email, Teams, or CRM integration
- **Modify research depth**: Adjust the AI prompts to focus on specific industries or company types
- **Add more signals**: Extend the Signal Research Agent to detect additional business indicators
- **Integrate with CRM**: Add nodes to automatically update contact records in your sales system
- **Schedule follow-ups**: Connect to calendar tools to automatically schedule research updates

The modular design makes it easy to adapt for different sales processes and research requirements.

## 📊 Basic Information

- **Workflow ID:** 8957
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 410
- **Downloads:** 41
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8957)

## 👤 Author

- **Name:** Fabian Herhold
- **Username:** @fabianherh

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **calendlyTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.agentTool** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **perplexityTool** (×3)
- **httpRequestTool** (×4)
- **slack** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
