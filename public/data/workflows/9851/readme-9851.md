# AI-powered news monitoring & social post generator with OpenAI and Upload-Post

> ![image.png](fileId:3008)

This automation template turns any RSS feed into ready-to-publish social content using AI. It continuously ingests articles, scores their quality and relevance, crafts platform-native posts (Twitter/X threads and LinkedIn posts), routes items for review or archiving, logs everything to Google Sheets, and can publish automatically to X, Threads, and LinkedIn.

***Note: This workflow uses OpenAI models for analysis and content generation and integrates with Upload-Post for multi-platform publishing and Google Sheets for tracking. Costs depend on token usage and posting volume.***

## Who Is This For?
- **Content Teams & Solo Creators:** Ship consistent, high-signal posts without manual rewriting.
- **Newsletters & Media Brands:** Turn breaking stories into shareable, platform-native content.
- **Agencies:** Scale curation across clients with review and auto-publish paths.
- **Founders & PMMs:** Maintain a steady public presence with minimal effort.

## What Problem Does This Workflow Solve?
Manual curation and rewriting of news is slow and inconsistent. This workflow:
- **Scores Articles:** Filters noise with AI quality/relevance scoring.
- **Auto-Writes Posts:** Generates concise X threads and business-ready LinkedIn copy.
- **Routes Intelligently:** Sends good items to publish/review and archives the rest.
- **Logs Everything:** Keeps a structured history in Google Sheets for analytics.

## How It Works
1. **RSS Polling:** Monitors your chosen feed(s) on a schedule.
2. **Scoring AI:** Rates quality and relevance; extracts summary, key topics, and angle.
3. **Parse & Enrich:** Normalizes AI output and merges with article metadata.
4. **Quality Gates:** Directs items to “publish/review” or “archive.”
5. **Content Generation:** Produces an X thread and a LinkedIn post with clear hooks and insights.
6. **Publishing:** Uploads to X, Threads, and LinkedIn via Upload-Post (optional).
7. **Sheets Logging:** Writes summaries, scores, and outputs to Google Sheets.

## Setup
1. **OpenAI API:** Add your OpenAI credentials (models like `gpt-4.1`/`gpt-4o`).
2. **Upload-Post Credentials:** Connect the Upload-Post integration and target pages (e.g., LinkedIn org ID).
3. **Google Sheets:** Add OAuth credentials and point “Store Content”/“New for Review”/“Archive” to your sheets.
4. **RSS Feed URL:** Replace the sample feed with your preferred sources.
5. **Thresholds & Routing:** Adjust quality/relevance filters to your standards.
6. **Publishing Mode:** Toggle platforms (X, Threads, LinkedIn) and decide auto vs. review-first.

## Requirements
- **Accounts:** n8n, OpenAI, Upload-Post, Google account (Sheets).
- **API Keys:** OpenAI token, Upload-Post credentials, Google Sheets OAuth.
- **Feeds:** One or more RSS URLs for your niche.

## Features
- **AI Triage:** Quality/relevance scoring to prioritize high-value stories.
- **Platform-Native Output:** Hooked X threads and professional LinkedIn posts.
- **Review or Auto-Publish:** Safe gating before posting live.
- **Analytics-Ready Logs:** Structured entries in Google Sheets.
- **Modular & Extensible:** Swap feeds, add Slack/Discord alerts, or plug into CMS/Notion.

Stay top-of-mind: convert fresh news into compelling, on-brand social content—automatically.

## 📊 Basic Information

- **Workflow ID:** 9851
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1110
- **Downloads:** 111
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9851)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **rssFeedReadTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **if** (×2)
- **n8n-nodes-upload-post.uploadPost** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
