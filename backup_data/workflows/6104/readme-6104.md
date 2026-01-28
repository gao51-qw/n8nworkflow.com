# Clone viral TikTok & Instagram reels with Apify and Gemini 2.5 Pro

> # Reverse engineer short-form videos from Instagram and TikTok using Gemini AI

## Who's it for

Content creators, AI video enthusiasts, and digital marketers who want to analyze successful short-form videos and understand their production techniques. Perfect for anyone looking to reverse-engineer viral content or create detailed prompts for AI video generation tools like Google Veo or Sora.

## How it works

This automation takes any Instagram Reel or TikTok URL and performs a forensic analysis of the video content. The workflow downloads the video, converts it to base64, and uses Google's Gemini 2.5 Pro vision API to generate an extremely detailed "Generative Manifest" - a comprehensive prompt that could be used to recreate the video with AI tools.

The analysis includes:
- Visual medium identification (film stock, camera sensor, lens characteristics)
- Color grading and lighting breakdown
- Shot-by-shot deconstruction with precise timing
- Camera movement and framing details
- Subject description and action choreography
- Environmental and atmospheric details

## How to set up

1. **Configure API credentials:**
   - Add your Apify API key for video scraping
   - Set up Google Gemini API authentication

2. **Set up Slack integration (optional):**
   - Configure Slack OAuth for result sharing
   - Update the channel ID where results should be posted

3. **Access the form:**
   - The workflow creates a web form where you can input video URLs
   - Form accepts both Instagram Reel and TikTok URLs

## Requirements

- **Apify account** with API access for video scraping
- **Google Cloud account** with Gemini API enabled
- **Slack workspace** (optional, for sharing results)
- Videos must be publicly accessible (no private accounts)

## How to customize the workflow

- **Modify the analysis prompt:** Edit the "set_base_prompt" node to adjust the depth and focus of the video analysis
- **Add different platforms:** Extend the switch node to handle other video platforms
- **Integrate with other tools:** Replace Slack with email, Discord, or other notification systems

## 📊 Basic Information

- **Workflow ID:** 6104
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3141
- **Downloads:** 314
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6104)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **switch** 
- **httpRequest** (×6)
- **extractFromFile** (×2)
- **set** (×5)
- **stickyNote** (×4)
- **slack** (×2)
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
