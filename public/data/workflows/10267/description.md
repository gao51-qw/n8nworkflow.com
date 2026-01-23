## 📄 Workflow Overview

Title: Spotify Emotion-to-News Card Generator (APITemplate.io + Slack)

## What it does:
This workflow analyzes the emotion of your recently played Spotify track using OpenRouter (LLM), fetches a related trending Google News article, generates a visual news card with APITemplate.io, and posts it to Slack.

## 👥 Who’s it for

Music lovers, marketers, and developers who want to automatically turn their listening mood into a visual daily digest or Slack update.

## ⚙️ How it works

Spotify Trigger — Fetch your recently played tracks.

LLM (Emotion Analyzer) — Infer the main emotion from the track title and artist.

Google News Query — Build an RSS URL based on the emotion keyword.

RSS Reader — Retrieve trending news headlines.

APITemplate.io — Render the top article into an image card.

Slack — Post title, link, and card image into your channel.

## 🧰 Requirements

Spotify API credentials

OpenRouter API key

APITemplate.io account (with template ID)

Slack OAuth2 connection

## 🪄 How to customize

Replace the APITemplate.io template ID with your own.

Adjust the RSS URL language (hl=en-US → hl=ja-JP for Japanese news).

Modify the Slack message text for your preferred channel tone.

## ⚠️ Disclaimer

If you use community nodes (LangChain), this template is for self-hosted n8n only.