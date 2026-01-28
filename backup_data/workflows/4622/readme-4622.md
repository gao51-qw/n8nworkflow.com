# Generate custom AI videos with Digital Avatars using HeyGen API

> ## 🎥 n8n Workflow: Generate AI Videos with HeyGen

---
## 🚀 Overview

This automation connects directly to HeyGen's powerful AI video generation platform. It allows you to programmatically create videos with digital avatars and voiceovers, perfect for scaling your content creation for social media, marketing campaigns, or personalized messages without ever opening a video editor.

## 😩 The Problem

Creating video content is incredibly time-consuming and expensive. You have to write scripts, record audio, find actors or create complex animations, piece everything together in an editor, and then wait for it to render. Every minor change or personalization requires repeating the entire frustrating process. This manual work is a major bottleneck, making it nearly impossible to produce large volumes of high-quality video content quickly and affordably.

## ✨ The Solution

This workflow acts as your personal, automated video production assistant! When you provide a script, the automation instantly sends instructions to HeyGen to begin creating your video. It tells the AI which avatar and voice to use and starts the generation process. Then, it cleverly waits and periodically checks the status until your new video is finished and ready. It’s a completely hands-off process that transforms simple text into professional AI videos on demand.

## 🔧 What It Does

1. **Send a request** to HeyGen's API to generate a video with:

   * Custom avatar
   * Scripted voice-over
   * Background color and dimension
2. **Wait 30 seconds**
3. **Check video status**
4. **Loop until video is completed, failed, or still processing**

## ⚙️ Simple Setup

This workflow is a pre-built blueprint, designed to be up and running in minutes!

* **1. Upload:** Simply upload the provided JSON file into your n8n instance.
* **2. Connect:** Connect your app credentials (e.g., your HeyGen account). The workflow will show you exactly where.
* **3. Activate:** Turn the workflow on, and it's ready to go! Let your new automated employee get to work.

This free n8n workflow allows you to generate AI videos using [HeyGen](https://www.heygen.com) via their API.
---

🌐 Explore more workflows

❤️ Buy more workflows at: [adamcrafts](https://adamcrafts.cloudysoftwares.com)
🦾 Custom workflows at: [adamcrafts@cloudysoftwares.com](mailto:adamcrafts@cloudysoftwares.com)
[adamaicrafts@gmail.com](mailto:adamaicrafts@gmail.com)

&gt; Build once, customize endlessly, and scale your video content like never before. 🚀

## 📊 Basic Information

- **Workflow ID:** 4622
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2218
- **Downloads:** 221
- **Created:** 2025/6/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4622)

## 👤 Author

- **Name:** Abdellah Homrani
- **Username:** @adamcrafts

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **wait** 
- **switch** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
