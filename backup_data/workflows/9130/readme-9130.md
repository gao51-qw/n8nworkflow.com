# Auto-generate Instagram, Facebook & LinkedIn posts from YouTube videos with GPT-4o & Dumpling AI

> ## Who’s it for

This template is perfect for content marketers, social media managers, and creators who want to repurpose YouTube videos into platform-specific posts without manual work. If you spend hours brainstorming captions, resizing content, or creating images for different platforms, this workflow automates the entire process from video selection to ready-to-publish posts.

---

## What it does

The workflow takes a topic from a Google Sheet, finds the most relevant and recent YouTube video using Dumpling AI and GPT-4o, then automatically generates unique posts for **Instagram**, **Facebook**, and **LinkedIn**. Each post comes with a tailored **AI-generated image**, and all content is saved back into a Google Sheet for easy scheduling and review.

Here’s what happens step by step:
1. Picks an unsearched topic from Google Sheets  
2. Searches YouTube via **Dumpling AI** and sorts videos  
3. Uses **GPT-4o** to select the most relevant video  
4. Extracts the video transcript using Dumpling AI  
5. Generates three platform-specific posts using **GPT-4o**  
6. Creates matching images for each post using **Dumpling AI** image generation  
7. Saves the final Instagram, Facebook, and LinkedIn posts into a Google Sheet  
8. Marks the topic as processed so it won’t repeat

---

## How it works

1. **Scheduled Trigger**: Starts the workflow automatically on a set schedule  
2. **Google Sheets**: Retrieves one unprocessed topic from the YouTube Topics sheet  
3. **Dumpling AI**: Finds and filters YouTube videos matching the topic  
4. **GPT-4o**: Chooses the best video and turns the transcript into three unique posts  
5. **Dumpling AI (Image)**: Generates platform-specific visuals for each post  
6. **Google Sheets**: Saves all posts and images to the Social Media Post sheet for publishing

---

## Requirements

- ✅ **Dumpling AI API key** stored as credentials  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Google Sheets** connection with the following sheets:  
  - **YouTube Topics** with columns `Youtube Topics` and `Searched?`  
  - **Social Media Post** with columns `platform`, `Content`, `Image`  

---

## How to customize

- Adjust the GPT prompt to match your brand voice or content style  
- Add or remove platforms depending on your posting strategy  
- Change the schedule trigger frequency to fit your content calendar  
- Integrate with scheduling tools like Buffer or Hootsuite for auto-publishing  
- Add review or approval steps before posts are finalized

---

&gt; This workflow helps you transform a single YouTube video into three polished, platform-ready posts with matching visuals, in minutes—not hours.


## 📊 Basic Information

- **Workflow ID:** 9130
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 708
- **Downloads:** 70
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9130)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×5)
- **httpRequest** (×5)
- **code** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **set** (×3)
- **merge** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
