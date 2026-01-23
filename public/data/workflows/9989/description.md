## TikTok Trend Analyzer with Apify + Gemini + Airtable

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
