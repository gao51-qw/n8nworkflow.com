# Generate content strategy insights from Reddit & X using Gemini AI analysis

> ## Who’s it for
This template is perfect for content creators, marketers, solopreneurs, agencies, and social media strategists who want to understand what audiences are talking about online. It helps teams quickly turn broad topics into structured insights, trend opportunities, and actionable content ideas.

## What it does / How it works
This workflow begins with a form where the user enters a single topic.  
An AI agent expands the topic into subtopics and generates multiple relevant keywords.  
For each keyword, the workflow automatically gathers content from Reddit and X (formerly Twitter), extracting posts, titles, text, engagement metrics, and links.

Each collected post is then analyzed by an AI model to determine:

- Trend potential  
- Audience relevance  
- Platform suitability  
- Recommended content formats  
- Categories and keywords  

Once all posts are processed, a final AI agent synthesizes the results, identifies the strongest emerging trends, groups similar insights, and generates strategic content recommendations.

## Requirements
- Google Gemini (PaLM) API credentials  
- X / Twitter OAuth2 credentials  
- Access to the n8n Form Trigger (publicly accessible URL)

## How to set up
1. Connect your Gemini API and Twitter API credentials.  
2. Make sure the Form Trigger node is accessible.  
3. Review and adjust the AI prompts if you want different output formats.  
4. Run the form, enter a topic, and execute the workflow.

## How to customize the workflow
- Add more platforms (YouTube, TikTok, Instagram, Hacker News)  
- Add sentiment scoring or engagement ranking  
- Export insights to Google Sheets or Notion  
- Generate ready-to-post content from the trends  

## 📊 Basic Information

- **Workflow ID:** 11698
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 149
- **Downloads:** 14
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11698)

## 👤 Author

- **Name:** Pixcels Themes
- **Username:** @pixcelsthemes

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **twitter** 
- **code** (×3)
- **aggregate** (×2)
- **set** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×5)
- **splitInBatches** (×2)
- **splitOut** 
- **noOp** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
