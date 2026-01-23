# YouTube video optimization & cross-platform distribution with GPT-4o

> This workflow automates the post-publish process for YouTube videos, combining advanced SEO optimization, cross-platform promotion, and analytics reporting. It is designed for creators, marketers, and agencies who want to maximize the reach and performance of their YouTube content with minimal manual effort.

---

## Features

- **SEO Automation**
  - Fetches video metadata and analyzes competitor and trending data.
  - Uses AI to generate SEO-optimized titles, descriptions, and tags.
  - Calculates an SEO score and applies A/B testing logic to select the best title.
  - Updates the video metadata on YouTube automatically.

- **Cross-Platform Promotion**
  - Generates platform-specific promotional content (LinkedIn, X/Twitter, Instagram, Facebook, etc.) using AI.
  - Publishes posts to each connected social channel.
  - Extracts video clips and analyzes thumbnails for enhanced promotion.

- **Engagement Monitoring & Analytics**
  - Monitors YouTube comments, detects negative sentiment, and drafts AI-powered replies.
  - Logs all key data (videos, comments, analytics) to Google Sheets for tracking and reporting.
  - Runs a weekly analytics job to aggregate performance, calculate engagement/viral indicators, and email a detailed report.

- **Notifications & Alerts**
  - Sends Slack alerts when a new video is published or when viral potential/negative comments are detected.

---

## How It Works

1. **Trigger**
   - The workflow starts automatically when a new YouTube video is published (via webhook) or on a weekly schedule for analytics.

2. **Video Intake & SEO**
   - Fetches video details (title, description, tags, stats).
   - Gathers competitor and trending topic data.
   - Uses AI to generate improved SEO assets and calculates an SEO score.
   - Selects the best title (A/B test) and updates the video metadata.

3. **Clip & Thumbnail Processing**
   - If the video is long enough, runs thumbnail analysis and extracts short clips for social media.

4. **Cross-Platform Promotion**
   - Generates and formats promotional posts for each social platform.
   - Publishes automatically to enabled channels.

5. **Engagement & Comment Monitoring**
   - Fetches comments, detects negative sentiment, and drafts AI-powered replies.
   - Logs comments and responses to Google Sheets.

6. **Analytics & Reporting**
   - Aggregates weekly analytics, calculates engagement and viral indicators.
   - Logs insights and sends a weekly report via email.

7. **Notifications**
   - Sends Slack alerts for new video publications and viral/negative comment detection.

---

## Setup Instructions

1. **Connect YouTube**
Set up YouTube API credentials and required IDs in the **Workflow Configuration** node.

2. **Connect OpenAI**
Add your OpenAI credentials for AI-powered content generation.

3. **Connect Slack**
Configure Slack credentials and specify alert channels.

4. **Connect Google Sheets**
Set up service account credentials for logging video, comment, and analytics data.

5. **Configure Social Platforms**
Add credentials for LinkedIn, Twitter (X), Instagram, and Facebook as needed.

6. **Test the Workflow**
Publish a test video and verify that metadata updates, social posts, logging, and weekly reports are working as expected.

---

## Use Cases

- **YouTube Creators:** Automate SEO, promotion, and analytics to grow your channel faster.
- **Marketing Teams:** Streamline multi-channel video campaigns and reporting.
- **Agencies:** Deliver consistent, data-driven YouTube growth for multiple clients.

---

## Requirements

- YouTube API credentials
- OpenAI API key
- Slack API token
- Google Sheets service account
- (Optional) LinkedIn, Twitter, Instagram, Facebook API credentials

---

## Limitations

- Requires valid API credentials for all connected services.
- AI-powered features depend on OpenAI API access.
- Social posting is limited to platforms with available n8n nodes and valid credentials.

---

**Tip:**  
You can easily customize prompts, scoring logic, and enabled platforms to fit your channel’s unique needs.

## 📊 Basic Information

- **Workflow ID:** 11797
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 351
- **Downloads:** 35
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11797)

## 👤 Author

- **Name:** Țugui Dragoș
- **Username:** @tuguidragos

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** (×5)
- **youTube** (×4)
- **httpRequest** (×4)
- **code** (×5)
- **if** (×6)
- **linkedIn** 
- **twitter** 
- **facebookGraphApi** (×2)
- **sendGrid** 
- **googleSheets** (×3)
- **slack** (×2)
- **scheduleTrigger** 
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** (×6)
- **stickyNote** (×13)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
