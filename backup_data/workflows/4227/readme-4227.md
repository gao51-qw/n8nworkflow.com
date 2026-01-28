# Multi-platform video publishing from Google Sheets to 9 social networks via Blotato API

> **This workflow automates the process of publishing content from a Google Sheet to multiple social media platforms using the Blotato API. It retrieves content details (caption and Google Drive video URL) from a Google Sheet, uploads the media to Blotato, and then distributes it to Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Twitter, Bluesky, and Pinterest. It also includes a separate branch for generating and publishing an AI-created image to Pinterest.**
# Tools & Services Used
Content Source: Google Sheets (for captions, status, and Google Drive video URLs)
## Media Hosting: Google Drive (for source videos)
Social Media Publishing API: Blotato API (for media upload and posting to all platforms)
## AI Image Generation: 
OpenAI (DALL-E for generating an image for Pinterest)
## Target Social Platforms:
Instagram
Facebook (Pages)
LinkedIn
TikTok
YouTube
Threads
Twitter (X)
Bluesky
Pinterest
# Workflow Overview
This automation performs the following steps:
## Trigger & Content Retrieval:
The Schedule Trigger node initiates the workflow on a defined schedule (e.g., every interval).
The Google Sheets node reads data from a specified sheet (Sheet1 of "Publish to 9 Social Platforms"). It filters for rows where the "Status" column is "Ready to Post" and returns the first match. This provides the caption and the Google Drive URL for the video content.
The Get Google Drive ID node (a Set node) extracts the unique Google Drive file ID from the video URL obtained from the sheet.
Configuration & Media Preparation for Blotato:
The Setup Social Accounts node (a Set node) defines placeholders for the Blotato API key and various social media account IDs required by the Blotato API. These need to be manually filled with your actual credentials and IDs.
The Upload to Blotato node (HTTP Request) uploads the video content to Blotato's media endpoint. It constructs the downloadable Google Drive URL using the extracted file ID and sends it to Blotato along with the API key. Blotato then fetches and stores the media, returning a Blotato media URL.
## Content Distribution to Social Platforms via Blotato (Parallel Branches from "Upload to Blotato"):
The Blotato media URL (from the previous step) and the caption (from Google Sheets) are used to make individual POST requests to the Blotato API (/v2/posts) for each target platform. Each request is an HTTP Request node configured for a specific platform:
[Instagram] Publish via Blotato (Disabled by default): Posts to the configured Instagram account.
## Publish to Facebook: 
Posts to the configured Facebook Page.
## Publish to LinkedIn:
 Posts to the configured LinkedIn account.
## Publish to Tiktok: 
Posts to the configured TikTok account, with specific privacy and feature settings.
## Publish to Youtube: 
Uploads the video as a public YouTube short/video with a title and notifying subscribers.
## Publish to Threads: 
Posts to the configured Threads account (caption sliced to 500 chars).
## Publish to Twitter: 
Posts to the configured Twitter (X) account (caption sliced to 280 chars).
## Publish to Bluesky: 
Posts text-only (no media URL used in the example body) to the configured Bluesky account (caption sliced to 280 chars).
## AI Image Generation & Pinterest Publishing (Separate Branch from "Upload to Blotato"):
This branch demonstrates an alternative content type.
The OpenAI node generates an image based on a prompt ("Image of a manatee staring in the mirror at its AI avatar") and returns image URLs.
The Upload to Blotato - Image node (HTTP Request) takes one of these generated image URLs and uploads it to Blotato's media endpoint.
The [Pinterest] Publish via Blotato node then posts this AI-generated image to the configured Pinterest account and board, along with the caption from the Google Sheet and a link.


## 📊 Basic Information

- **Workflow ID:** 4227
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 835
- **Downloads:** 83
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4227)

## 👤 Author

- **Name:** Sam Yassine
- **Username:** @samyassine

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **set** (×2)
- **httpRequest** (×11)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
