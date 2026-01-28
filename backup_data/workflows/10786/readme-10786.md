# Create comedic marketing reels with Sora2, OpenAI & auto-post to social media

> # Viral Marketing Reel & Autopost with Sora2 + Blotato

Create funny, ultra-realistic marketing reels on autopilot using n8n, Sora2, Blotato, and OpenAI.
This beginner-friendly template generates a comedic video prompt, creates a 12-second Sora2 video, writes a caption, and auto-posts to Instagram/TikTok — all on a schedule.

🎥 Watch the full step-by-step tutorial:
https://www.youtube.com/watch?v=lKZknEzhivo

## What this template does

This workflow automates an entire short-form content production pipeline:

Scheduled Trigger: Runs automatically at your chosen time (e.g., every evening at 7PM).

AI “Video Prompt Agent”: Creates a cinematic, funny, 12-second Sora2 text-to-video prompt designed to promote a product (default: Sally’s Coffee).

Insert Row (Data Table): Logs each generated video prompt for tracking, reuse, or inspiration.

Sora2 (via Wavespeed):

Sends POST request to generate a video.

Waits 30 seconds.

Polls the prediction endpoint until the video is completed.

Blotato Integration:

Uploads the finished video to your connected social account(s).

Automatically publishes or schedules the post.

Caption Generator:

Uses an AI agent to create an Instagram/TikTok-ready caption with relevant hashtags.

This turns n8n into a hands-free comedic marketing engine that writes, creates, and posts content for you.

## Why it’s useful

Create daily or weekly marketing reels without filming, editing, or writing scripts.

Experiment with new comedic formats, hooks, and product placements in seconds.

Perfect for small businesses, agencies, creators, and social media managers.

Demonstrates how to combine AI agents + Sora2 + polling + external posting services inside one workflow.

## Requirements

Before running this template, configure:

OpenAI API Key (for the prompt agent & caption model)

Wavespeed / Sora2 API credentials

Blotato account connected to Instagram/TikTok (for posting)

n8n Data Table (optional, or replace with your own)

⚠️ All credentials must be added manually after import.
No real credentials are included in the template.

## How it works
1. Schedule Trigger

Runs at a fixed time or interval.

2. Video Prompt Agent (LangChain Agent)

Generates a cinematic, realistic comedic video idea.

Built with a detailed system prompt.

Ensures brand integration (e.g., Sally’s Coffee) happens naturally.

3. Insert Row (Data Table)

Logs each generated prompt so future videos can be referenced or reused.

4. Sora2 POST Request

Sends the generated prompt to Sora2 via Wavespeed’s /text-to-video endpoint.

5. Wait 30s + GET Sora2 Result

Polls the result until data.status === "completed".

Continues looping if still “processing”.

6. Upload Media (Blotato)

Uploads the finished video file.

7. Caption Generator

Creates a funny, platform-ready Instagram/TikTok caption with hashtags.

8. Create Post (Blotato)

Publishes (or schedules) the video + caption.

Setup Instructions (Step-by-Step)

Import template into n8n.

Open Video Prompt Agent → review or customize the brand name, style, humor tone.

Add your OpenAI API credentials:

For prompt generation

For caption generation

Add your Wavespeed/Sora2 credentials to the POST and GET nodes.

Connect your Blotato credential for uploading and posting.

(Optional) Replace the Data Table ID with your own table.

Adjust the Schedule Trigger time to your desired posting schedule.

Run once manually to confirm:

Prompt is generated

Video is created

Caption is written

Video uploads successfully

Enable workflow → your daily/weekly comedic autoposter is live.

## Customization Ideas

Change the brand from Sally’s Coffee to any business, product, or influencer brand.

Modify the prompt agent to enforce specific camera styles, settings, or comedic tones.

Swap posting destinations:
Blotato supports multiple networks—configure IG/TikTok/Facebook/YouTube Shorts.

Add approval steps:
Insert a Slack/Telegram “Approve before posting” step.

Add analytics logging:
Store video URLs, caption, and AI cost estimate.

## Troubleshooting

Sora video stuck in processing: Increase the wait time or add another polling loop.

Upload fails: Ensure media URL exists and Blotato account has posting permissions.

Caption empty: Reconnect OpenAI credential or check model availability.

Posting fails: Confirm your Blotato API key is valid and linked to a connected account.

Category: Marketing, AI Video, Social Media Automation

Difficulty: Beginner–Intermediate

Core Nodes: LangChain Agent, HTTP Request, Wait, Data Table, Blotato, OpenAI

Includes: System prompts, polling logic, caption generator, posting workflow

## 📊 Basic Information

- **Workflow ID:** 10786
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 2808
- **Downloads:** 280
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10786)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **dataTable** 
- **httpRequest** (×2)
- **wait** (×2)
- **if** 
- **@blotato/n8n-nodes-blotato.blotato** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
