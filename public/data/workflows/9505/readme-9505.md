# Make UGC ads from app screen recordings with Gemini, Sora 2, and VideoBGRemover

> ## Who's it for

This workflow is perfect for app developers, SaaS founders, and mobile growth teams who need constant UGC-style video ads without hiring creators or agencies. If you're spending $500+ per creator and waiting weeks for videos, this automates the entire process for $2-5 per video in 8 minutes.

## How it works

Upload an app screen recording, and this n8n workflow handles everything: Gemini AI analyzes the recording and generates a UGC ad structure (hook, problem, solution, CTA with word limits). It describes the ideal actor, emotional journey, and visual style. Sora 2 then generates a hyper-realistic AI actor delivering the script naturally. VideoBGRemover removes the actor's background and composites them picture-in-picture over your screen recording with audio mixing. The result is a scroll-stopping UGC ad ready for TikTok, Instagram, and Facebook.

## Set up steps

Setup takes ~10 minutes and requires 3 API keys:

1. Get your **Gemini API key** from Google AI Studio
2. Get your **FAL AI key** for Sora 2 access
3. Get your **VideoBGRemover API key** at https://videobgremover.com/n8n
4. Add all three keys to n8n environment variables
5. Connect Google Drive for output storage
6. Test with the included sample screen recording

The workflow includes 7 detailed sticky notes explaining each section (Gemini analysis, Sora generation, VideoBGRemover composition, output handling).

## Requirements

- Google Gemini API key (for video analysis)
- FAL AI API key (for Sora 2 access)
- VideoBGRemover API key
- Google Drive account (for final video storage)
- App screen recordings in vertical format (9:16 recommended, 4-12 seconds)

## How to customize

Modify the Gemini prompt to adjust ad tone, script word limits, or actor descriptions. Change composition settings in the VideoBGRemover node (position, size, audio mix). Add your own post-processing nodes for branding, captions, or multi-platform exports.

## 📊 Basic Information

- **Workflow ID:** 9505
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 1019
- **Downloads:** 101
- **Created:** 2025/10/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9505)

## 👤 Author

- **Name:** Paul Roussel
- **Username:** @paul

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **manualTrigger** 
- **stickyNote** (×11)
- **set** (×5)
- **merge** 
- **httpRequest** (×10)
- **wait** (×3)
- **code** (×2)
- **if** (×3)
- **googleDrive** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
