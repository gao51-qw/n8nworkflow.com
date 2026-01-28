## 📊 Description
Generate high-quality, SEO-optimized content briefs automatically using AI, real-time keyword research, SERP intelligence, and historical content context. This workflow standardizes user inputs, fetches search metrics, analyzes competitors, and produces structured SEO briefs with quality scoring and version control. It also stores all versions in Google Sheets and generates HTML previews for easy review and publishing. 🤖📄📈

## What This Template Does
- Normalizes user input from the chat trigger into structured fields (intent, topic, parameters). ✏️
- Fetches real-time keyword metrics such as search volume, CPC, and difficulty from DataForSEO. 🔍
- Retrieves SERP insights through SerpAPI for top competitors, headings, and content gaps. 🌐
- Loads historical brief versions from Google Sheets for continuity and versioning. 📚
- Uses an advanced GPT-4o-mini agent to generate a complete SEO brief with title, metadata, keywords, outline, entities, and internal links. 🤖
- Calculates detailed SEO, differentiation, and completeness quality scores. 📊
- Validates briefs against quality thresholds (outline length, keywords, word count, overall score). ⚡
- Stores approved briefs in Google Sheets with version control and timestamping. 🗂️
- Generates an HTML preview with styled formatting for team review or CMS use. 🖥️
- Sends Slack alerts when a brief does not meet quality standards. 🚨

## Key Benefits
✅ Fully automated SEO content brief generation
 ✅ Uses real-time keyword + SERP + competitor intelligence
 ✅ Ensures quality through automated scoring and validation
 ✅ Built-in version control for content operations teams
 ✅ Beautiful HTML preview ready for editors or clients
 ✅ Reduces research time from hours to minutes
 ✅ Ideal for content agencies, SEO teams, and AI-powered workflows

## Features
- Chat-triggered brief generation
- Real-time DataForSEO keyword metrics
- SERP analysis tool integration
- GPT-4o-mini structured AI agent
- Google Sheets integration for storing & retrieving versions
- Automated quality scoring (SEO, gaps, completeness)
- HTML preview builder with rich formatting
- Slack alerting for low-quality briefs
- Semantic entities, content gaps, competitor insights

## Requirements
- OpenAI API (GPT-4o-mini or compatible model)
- DataForSEO access credentials (Basic Auth)
- SerpAPI key for SERP extraction
- Google Sheets OAuth2 integration
- Optional: Slack webhook for quality alerts

## Target Audience
- SEO teams generating large amounts of content briefs
- Content agencies scaling production with automation
- Marketing teams building data-driven content strategies
- SaaS teams wanting automated keyword-based briefs
- Anyone needing structured, high-quality content briefs from chat

## Step-by-Step Setup Instructions
1. Connect your OpenAI API credential and confirm GPT-4o-mini availability. 🔌
2. Add DataForSEO HTTP Basic Auth for keyword metrics. 📊
3. Connect SerpAPI for SERP analysis tools. 🌐
4. Add Google Sheets OAuth2 and link your content_versions sheet. 📄
5. Optional: Add a Slack webhook URL for quality alerts. 🔔
6. Test by sending a topic via the chat trigger.
7. Review the generated SEO brief and HTML preview.
8. Enable the workflow for continued use in your content pipeline. 🚀
