# Overview

This workflow automates the process of turning your video transcripts into platform-specific social media posts using AI.
It reads any uploaded transcript file, analyzes the text, and automatically generates full-length, engaging posts with image prompts for Facebook, LinkedIn, Instagram, Reddit, and WhatsApp.

Perfect for creators, marketers, and automation builders who want to repurpose long-form content into viral posts, all in one click.

# How it Works

- The Manual Trigger starts the workflow.

- The Read Binary File node imports your video transcript (TXT format).
- The Move Binary Data and Set nodes convert it into a text string for processing.
- The AI Agent (LangChain) powered by Groq AI analyzes the transcript and generates human-like social media posts with realistic image prompts.
- The Function Node parses and structures the output by platform.
- The Google Sheets Node automatically saves all content — ready for scheduling or publishing.
- The SerpAPI Integration enhances contextual awareness by referencing real-time search trends.

# Set Up Steps

- Setting up this workflow typically takes 5–10 minutes.
- Connect your Google Sheets account (OAuth2).
- Connect your Groq AI and SerpAPI credentials.
- Upload your transcript file (e.g., from YouTube or podcast).
- Run the workflow to instantly generate platform-specific posts and prompts.
- View all results automatically saved in Google Sheets.
- Detailed instructions are included as sticky notes inside the workflow.

# Use Cases

- Turn YouTube videos or podcasts into multi-platform social content
- Auto-generate daily social posts using transcripts
- Build AI-powered repurposing systems for agencies or creators
- Save creative teams hours of manual copywriting work

# Requirements

- n8n account (self-hosted or cloud)
- Groq AI API Key
- SerpAPI Key (for optional trend enhancement)
- Google Sheets connection