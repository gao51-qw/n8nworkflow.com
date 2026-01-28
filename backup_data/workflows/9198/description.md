# Step-By-Step AI Stock Market Research Agent (Beginner)

Build your own AI-powered daily stock market digest — automatically researched, summarized, and delivered straight to your inbox.
This beginner-friendly n8n workflow shows how to combine OpenAI GPT-5, Decodo scraping tool, and Gmail to produce a concise daily financial update without writing a single line of code.

🎥 Watch a full tutorial and walkthrough on how to build and customize similar workflows at:
https://www.youtube.com/watch?v=DdnxVhUaQd4

## What this template does
Every day, this agent automatically:
Triggers on schedule (e.g., 9 a.m. daily).
Uses Decodo Tool to fetch real market headlines from Bloomberg, CNBC, Reuters, Yahoo Finance, etc.
Passes the information to GPT-5, which summarizes key events into a clean daily report covering:
Major indices (S&P 500, Nasdaq, Dow)
Global markets (Europe & Asia)
Sector trends and earnings
Congressional trading activity
Major financial and regulatory news
Emails the digest to you in a neat, ready-to-read HTML format.

## Why it’s useful (for beginners)
Zero coding: everything configured through n8n nodes.
Hands-on AI Agent logic: learn how a language-model node, memory, and web-scraping tool work together.
Practical use case: a real-world agent that automates market intelligence for investors, creators, or business analysts.

## Requirements
OpenAI API Key (GPT-4/5 compatible)
Decodo API Key (for market data scraping)
Gmail OAuth2 Credential (to send daily digest)


Credentials to set in n8n
OpenAI API (Chat Model) → Connect your OpenAI key.
Decodo API → Paste your Decodo access key.
Gmail OAuth2 → Connect your Google Account and edit “send to” email address.

## How it works (nodes overview)
1. Schedule Trigger
Starts the workflow at a preset time (default: daily).
2. AI Research Agent
Acts as a Stock Market Research Assistant.
Uses GPT-5 via OpenAI Chat Model.
Uses Decodo Tool to fetch real-time data from trusted finance sites.
Applies custom system rules for concise summaries and email-ready HTML output.
3. Simple Memory
Maintains short-term context for clean message passing between nodes.
4. Decodo Tool
Handles all data scraping and extraction using the AI’s tool calls.
5. Gmail Node
Emails the final daily digest to the user (default subject: “Daily AI News Update”).

## Setup (step-by-step)
Import template into n8n.
Open each credential node → connect your accounts.
In the Gmail node, replace “sendTo” with your email.
Adjust Schedule Trigger → e.g., every weekday 8:30 a.m.
(Optional) Edit the system prompt in AI Research Agent to focus on different sectors (crypto, energy, tech).
Click Execute Workflow Once to test — you’ll receive an AI-curated digest in your inbox.

## Customization tips
🕒 Change frequency: adjust Schedule Trigger to run multiple times daily or weekly.
📰 Add sources: extend the Decodo Tool input with new URLs (e.g., Seeking Alpha, MarketWatch).
📈 Switch topic: modify prompt to track crypto, commodities, or macroeconomic data.
💬 Alternative delivery: send digest via Slack, Telegram, or Notion instead of Gmail.

## Troubleshooting
401 errors: verify OpenAI/Decodo credentials.
Empty output: ensure Decodo Tool returns valid data; inspect the agent’s log.
Email not sent: confirm Gmail OAuth2 scope and recipient email.
Formatting issues: keep output in HTML mode; avoid Markdown.