# LinkedIn content creator system

> ## Overview

Automate your entire LinkedIn content machine — from research and image generation to scheduling and posting — with this AI-powered workflow.

This workflow pulls in past content ideas, researches new ones using Perplexity, generates a new post (with image) using your brand's voice and style, saves the output to Google Sheets, and auto-posts twice a week to LinkedIn. It’s perfect for founders, creators, and marketers who want to stay consistent on LinkedIn without manually writing or designing every post.

### Who’s it for

- Solo founders or marketers building a LinkedIn presence  
- Content creators growing their audience  
- Agencies managing client content calendars  
- Anyone who wants to post consistently without spending hours on content  

### How it works

- Pulls old ideas from a Google Sheet  
- Schedules content creation using n8n’s cron node  
- Uses Perplexity to research current topics and trends  
- Feeds the data into an AI agent (like Claude or GPT) to generate post copy  
- Creates a branded image using a reference style and OpenAI’s image model  
- Saves post content + image URL into Google Sheets  
- Twice a week, selects one ready post, downloads the image, and publishes it to LinkedIn

### How to set up

1. Add your Google Sheet ID and column names for posts  
2. Connect your OpenAI (or Claude) and Perplexity API keys  
3. Upload a brand-style reference image to Google Drive  
4. Configure your LinkedIn account and connect the node  
5. Adjust the cron schedule for both post creation and auto-posting  
6. (Optional) Edit the AI prompt to match your personal voice or niche  

### Requirements

- Google Drive & Sheets access  
- OpenAI or Claude API key  
- Perplexity API key  
- LinkedIn credentials (via n8n’s LinkedIn integration)

### How to customize

- Change the prompt for the AI to fit your voice or audience  
- Swap out Perplexity for another research method  
- Adjust how often you want posts scheduled or published  
- Swap LinkedIn for Twitter, Slack, or another platform  
- Add Notion or Airtable as your CMS backend


## 📊 Basic Information

- **Workflow ID:** 6531
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 10914
- **Downloads:** 1091
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6531)

## 👤 Author

- **Name:** Abdul Mir
- **Username:** @abdulmir

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **convertToFile** 
- **scheduleTrigger** (×2)
- **code** 
- **limit** 
- **googleDrive** (×3)
- **googleSheets** (×4)
- **linkedIn** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
