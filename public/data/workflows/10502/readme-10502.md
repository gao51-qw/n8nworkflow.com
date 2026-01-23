# Create AI videos from prompts with OpenAI script, TTS & Pexels B-roll assembly

> Automatically creates complete videos from a text prompt—script, voiceover, stock footage, and subtitles all assembled and ready.


## How it works

Send a video topic via webhook (e.g., "Create a 60-second video about morning exercise"). The workflow uses OpenAI to generate a structured script with scenes, converts text to natural-sounding speech, searches Pexels for matching B-roll footage, and downloads everything. Finally, it merges audio with video, generates SRT subtitles, and prepares all components for final assembly.

The workflow handles parallel processing—while generating voiceover, it simultaneously searches and downloads stock footage to save time.


## Setup steps

1. **Add OpenAI credentials** for script generation and text-to-speech
2. **Get a free Pexels API key** from pexels.com/api for stock footage access
3. **Connect Google Drive** for storing the final video output
4. **Install FFmpeg** (optional) for automated video assembly, or manually combine the components
5. **Test the webhook** by sending a POST request with your video topic

**Input format:**
```json
{
  "prompt": "Your video topic here",
  "duration": 60,
  "style": "motivational"
}
```


## What you get

- ✅ AI-generated script broken into scenes
- ✅ Professional voiceover audio (MP3)
- ✅ Downloaded stock footage clips (MP4)
- ✅ Timed subtitles file (SRT)
- ✅ All components ready for final editing

**Note:** The final video assembly requires FFmpeg or a video editor. All components are prepared and organized by scene number for easy manual editing if needed.

## 📊 Basic Information

- **Workflow ID:** 10502
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 806
- **Downloads:** 80
- **Created:** 2025/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10502)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **openAi** (×2)
- **code** (×3)
- **httpRequest** (×2)
- **merge** 
- **executeCommand** 
- **googleDrive** 
- **stickyNote** (×5)
- **set** (×2)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
