# Convert YouTube videos to shorts with Klap & auto-post to multiple social platforms

> ![Workflow Screenshot](https://www.dr-firas.com/youtube_shortsii.png)

# Convert YouTube videos to viral Shorts with Klap and auto-post with Blotato

&gt; ⚠️ **Disclaimer:** This workflow uses Community Nodes and requires a self-hosted n8n instance.

### Who is this for?

This workflow is perfect for content creators, YouTubers, marketing teams and entrepreneurs who want to effortlessly convert long YouTube videos into short, viral-ready clips and publish them automatically on TikTok, Instagram, YouTube Shorts and other platforms.

### What problem is this workflow solving?

Manually creating short, engaging clips from YouTube videos takes hours:
- Selecting highlights
- Adding subtitles and effects
- Downloading and editing
- Posting individually on each platform

This workflow eliminates all of that:
- AI-powered Shorts generation with Klap
- Smart scheduling based on your posting calendar
- Full automation of uploads to multiple platforms

### What this workflow does

From a simple YouTube link sent via Telegram, the workflow:
1. Extracts the YouTube URL and number of Shorts requested
2. Sends the video to Klap for AI-powered Shorts generation
3. Checks when the Shorts are ready
4. Schedules publication times based on your custom settings
5. Uploads the Shorts to Blotato
6. Auto-posts on TikTok, YouTube Shorts, Instagram and more
7. Sends a confirmation recap to Telegram

### Setup

1. Connect your **Telegram bot** to the trigger node
2. Add your **Klap API key** for video processing
3. Link your **Google Sheets** with your scheduling preferences
4. Add your **Blotato API key** and social platform IDs
5. Adjust the number of Shorts generated if needed
6. Modify the scheduling logic or time windows in the Google Sheets

### How to customize this workflow to your needs

- Change AI video settings in the Klap API request  
- Adjust time windows and frequency in the scheduling nodes  
- Limit the workflow to specific platforms (e.g., TikTok only)  
- Add a manual approval step before publishing  
- Modify the Telegram recap message content  



📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Youtube-2223d6550fd980d1b270c84fca22110d?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 5608
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 18239
- **Downloads:** 1823
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5608)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×16)
- **stickyNote** (×3)
- **telegramTrigger** 
- **code** (×6)
- **if** (×2)
- **wait** (×2)
- **googleSheets** (×3)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
