## 🔍 Overview

This template uses Firecrawl’s `/search` API to perform AI-powered web scraping and screenshots — no code required. Just type natural language prompts, and an AI Agent will convert them into precise Firecrawl queries.

## ⚙️ Setup

1. Get your Firecrawl API Key from [https://firecrawl.dev](https://firecrawl.dev)
2. Add it to n8n using `HTTP Header Auth`:
   - Key: `Authorization`
   - Value: `Bearer YOUR_API_KEY`

## 🚀 What It Does

- Turns natural language into smart search queries
- Scrapes web data and captures full-page screenshots
- Returns titles, links, content, and images

## 💡 Example

Input:
&gt; Find AI automation pages on YouTube (exclude Shorts)

Result:
```json
{
  "query": "intitle:AI automation site:youtube.com -shorts",
  "limit": 5
}