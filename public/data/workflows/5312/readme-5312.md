# Generate viral Bigfoot vlog videos with Veo 3

> Transform simple ideas into viral-ready Bigfoot vlogs! This automated workflow creates charming 8-scene video content featuring "Sam" the Bigfoot - a lovable, outdoorsy character inspired by popular YouTube adventure channels.

**How It Works**

The workflow transforms your creative concept into professional video content through three automated stages:
1. Story Generation - AI creates an 8-scene narrative arc featuring Sam the Bigfoot, complete with character-consistent dialogue and engaging plot development
2. Human Approval - Review and approve the generated storyline via Slack before proceeding to video production
3. Video Production - Each scene is automatically converted into 8-second video clips using Google's VEO 3 AI, then uploaded to Google Drive for easy access

**Required Credentials**

- Anthropic API - Add your Claude API key for story generation
- FAL API - Configure your FAL.ai key for VEO 3 video generation
- Slack OAuth - Set up Slack app with channel permissions for approvals
- Google Drive OAuth - Connect your Google Drive for video storage

**Configuration Steps**

1. Import the workflow into your n8n instance
2. Update Slack channel ID in the notification nodes to match your desired channel
3. Set Google Drive folder - Update the folder ID where videos should be stored
4. Test the form trigger - The workflow starts with a web form for video ideas
5. Customize character (optional) - Modify Sam's personality in the narrative prompts



## 📊 Basic Information

- **Workflow ID:** 5312
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 4743
- **Downloads:** 474
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5312)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **slack** (×3)
- **aggregate** (×2)
- **set** (×3)
- **httpRequest** (×4)
- **wait** 
- **if** 
- **googleDrive** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
