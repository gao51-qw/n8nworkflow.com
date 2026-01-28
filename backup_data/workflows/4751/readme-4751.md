# Automated video translation & distribution with DubLab to multiple platforms

> 
**Automated** n8n workflow: Receives videos via form, dubs/translates them to the selected languages, and—upon completion—uploads them to multiple social media channels and cloud drives, including Box, Dropbox, and YouTube, Telegram, Postiz (Facebook, Instagram, Tiktok, Reddit etc.)

### Workflows
----------
 1. Via n8n form select files to dub for desired languages.
 2. Listen webhook and whenever dubbing finishes upload to desired platforms

### Used Stacks
-------------
 - DubLab App (ApiKey, Webhook Setup Required)
#### Optional (Upload)
 - Telegram (Token Required)
 - Box (Oauth2 Required)
 - Dropbox (Oauth2 Required)
 - Youtube (Oauth2 Required)
 - Postiz (ApiKey Required)

## 📊 Basic Information

- **Workflow ID:** 4751
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1786
- **Downloads:** 178
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4751)

## 👤 Author

- **Name:** Behram
- **Username:** @behram

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×7)
- **code** 
- **merge** (×2)
- **webhook** 
- **telegram** 
- **box** 
- **dropbox** 
- **youTube** 
- **formTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
