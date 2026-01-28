# Remove video background & compose on custom video background with Google Drive

> ## How it works

• Upload foreground video (AI actors, product demos, webcam footage)
• Provide custom background video URL
• API removes video background with videobgremover.com
• Composites foreground onto background
• Downloads and uploads to Google Drive
• Returns shareable link

## Set up steps

• Get API key at https://videobgremover.com/n8n (2 min)
• Import workflow (1 min)
• Add API key to n8n variables as VIDEOBGREMOVER_KEY (1 min)
• Connect Google Drive (2 min)
• Test with manual trigger (1 min)
• Total: 7 minutes

## What you'll need

• VideoBGRemover API key ($0.50-$2.00 per minute)
• Google Drive account
• Publicly accessible video URLs
• n8n instance

## Perfect for

• AI UGC ad creators using HeyGen, Synthesia, Arcads
• Marketing agencies creating ad variations
• E-commerce product demos on custom backgrounds
• Social media content with branded scenes
• Video editors removing backgrounds at scale

## Key features

• Video composition with custom templates
• Audio mixing with adjustable volumes
• 20-second polling for status
• Google Drive integration
• Webhook automation support
• 3-5 minute processing time per minutes of input video


## 📊 Basic Information

- **Workflow ID:** 9462
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9462)

## 👤 Author

- **Name:** Paul Roussel
- **Username:** @paul

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×7)
- **webhook** 
- **manualTrigger** 
- **set** (×5)
- **merge** 
- **httpRequest** (×4)
- **if** (×3)
- **googleDrive** 
- **wait** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
