# Repurpose YouTube videos into blogs and social posts with GPT-4o, WordPress, LinkedIn, X and Instagram

> ## Overview

This workflow turns a single YouTube video into multiple content formats and publishes them across different platforms with an optional human approval step.

It helps content creators, marketers, and agencies repurpose long-form video content into blog posts and social media updates automatically.

## How it works

1. Fetches the transcript from a YouTube video  
2. Uses AI to generate blog and social media content  
3. Optionally waits for manual approval  
4. Publishes content to selected platforms  
5. Logs the result for tracking

## Setup steps

1. Add your API credentials (AI, transcript, and social platforms)
2. Paste a YouTube video URL
3. Choose auto-publish or approval mode
4. Run the workflow

## Use cases

- Content repurposing for YouTube creators  
- Automated blog and social media publishing  
- Marketing automation for agencies  
- AI-assisted content production pipelines

---

### 🧑‍💻 Creator Information
Developed by: Adem Tasin
🌐 Website: ademtasin.com
💼 LinkedIn: Adem Tasin

## 📊 Basic Information

- **Workflow ID:** 12264
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 182
- **Downloads:** 18
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12264)

## 👤 Author

- **Name:** Adem Tasin
- **Username:** @ademtasin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **if** (×8)
- **stopAndError** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **slack** (×4)
- **webhook** (×2)
- **code** 
- **wordpress** 
- **linkedIn** 
- **twitter** (×5)
- **wait** 
- **notion** 
- **@mookielianhd/n8n-nodes-instagram.instagram** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
