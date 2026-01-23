# TikTok trend analyzer with Apify + Gemini + Airtable

> ## TikTok Trend Analyzer with Apify + Gemini + Airtable

Automatically scrape trending TikTok videos, analyze their virality using Gemini AI, and store insights directly into Airtable for creative research or content planning.

## Who’s it for?
Marketing analysts, creators, and creative agencies looking to understand why videos go viral and how to replicate successful hooks and formats.

## How it works
1. A scheduled trigger runs the Apify TikTok Trends Scraper weekly.
2. The scraper collects trending video metadata.
3. Data is stored in Airtable (views, likes, captions, sounds, etc.).
4. When a specific video is submitted via webhook, the workflow fetches it from Airtable.
5. Gemini AI analyzes the video and extracts structured insights: summary, visual hook, audio, and subtitle analysis.
6. The workflow updates the Airtable record with these AI insights.

## How to set up
Connect Apify and Airtable credentials, link Gemini or OpenAI keys, and adjust the schedule frequency. Add your Airtable base and table IDs. You can trigger analysis manually via the webhook endpoint.


## 📊 Basic Information

- **Workflow ID:** 9989
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 774
- **Downloads:** 77
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9989)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **wait** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **airtable** (×3)
- **webhook** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **stickyNote** (×6)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
