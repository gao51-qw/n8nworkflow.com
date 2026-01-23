# Generate news videos from RSS feeds with HeyGen avatar

> ## Overview

This n8n workflow automates the generation of short news videos using the **HeyGen video API** and **RSS feeds** from a Bangla news source, *Prothom Alo*. It is ideal for content creators, media publishers, or developers who want to create daily video summaries from text-based news feeds using AI avatars.

The workflow reads the latest news summaries from an RSS feed and sends each item to the HeyGen API to create a video with a realistic avatar and voice narration. The resulting video is suitable for publishing on platforms like YouTube, Instagram, or TikTok.

## Requirements

* A [HeyGen](https://www.heygen.com/) account with access to the API.
* HeyGen API key (kept securely in your environment).
* n8n (self-hosted or cloud instance).
* Basic understanding of using HTTP request nodes in n8n.

## Setup Instructions

1. **Clone this Workflow** into your n8n instance.
2. Replace the placeholder value in the `X-Api-Key` header with your **HeyGen API key**.
3. Confirm the RSS feed URL is correct and live:
   `https://prod-qt-images.s3.amazonaws.com/production/prothomalo-bangla/feed.xml`
4. The HTTP Request body references `{{$json.summary}}` from each RSS item. Make sure this field exists.
5. Run the workflow manually or configure a CRON trigger if you want to automate it.

## Customization

* **Avatar ID** and **Voice ID** can be changed in the `HTTP Request` body. Use your HeyGen dashboard to get available IDs.
* Change the video **dimensions** (`1280x720`) to suit your platform’s requirements.
* You can replace the RSS feed with any other news source that supports XML format.
* Add nodes to upload the video to YouTube, Dropbox, etc., after generation.

## What It Does

* Triggers manually.
* Reads an RSS feed.
* Extracts summary from each news item.
* Sends a request to HeyGen to generate a video.
* Returns the video generation response.



## 📊 Basic Information

- **Workflow ID:** 6229
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1027
- **Downloads:** 102
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6229)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **httpRequest** 
- **rssFeedRead** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
