# Turn TikTok comments into AI avatar videos with Dumpling AI, GPT-4 & Captions.ai

> ## Who’s it for

This template is perfect for TikTok creators, content marketers, and social media teams who want to turn viral comments into engaging short-form videos without manually scripting, recording, or editing. If you want to keep up with trends and consistently publish high-quality avatar videos, this workflow automates the entire process from comment selection to enhanced final video.

---

## What it does

The workflow takes TikTok video URLs and their top comments from a Data Table, extracts the transcript using **Dumpling AI**, and uses **GPT-4** to write a natural and engaging TikTok script inspired by the comment. It then generates a full AI avatar video through **Captions.ai**, enhances it with subtitles and B-roll using **Submagic**, and finally saves all video details into **Airtable** for tracking.

Here’s what happens step by step:  
1. Pulls TikTok videos and their top comments from a Data Table  
2. Sends video URLs to **Dumpling AI** to retrieve transcripts  
3. Feeds both transcript and comment into **GPT-4** to generate a conversational TikTok script  
4. Cleans and formats the script using JavaScript  
5. Sends the script to **Captions.ai** to produce an AI avatar video  
6. Checks video status and retries if needed  
7. Enhances the final video with **Submagic** for captions and effects  
8. Receives the enhanced video via webhook and logs details into **Airtable**

---

## How it works

1. **Schedule Trigger**: Runs automatically at set intervals to start the workflow  
2. **Data Table**: Retrieves TikTok video URLs and associated comments  
3. **Dumpling AI**: Extracts transcripts from the video URLs  
4. **GPT-4**: Generates a compelling TikTok script based on the comment  
5. **JavaScript Node**: Cleans up script formatting for a smooth avatar generation  
6. **Captions.ai**: Creates an AI avatar video from the cleaned script  
7. **Wait & Check**: Monitors video creation status and retries if necessary  
8. **Submagic**: Enhances the video with captions, zooms, and B-roll effects  
9. **Webhook & Airtable**: Receives final video data and saves URL and ID for future use

---

## Requirements

- ✅ **Dumpling AI API key** stored as HTTP header credentials  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Captions.ai API credentials**  
- ✅ **Submagic API credentials**  
- ✅ **Airtable base** with fields for `Video URL` and `Caption Video ID`  
- ✅ A properly structured Data Table containing TikTok `Keywords` or video URLs

---

## How to customize

- Adjust the GPT-4 system prompt to shape the tone, style, or format of the TikTok script  
- Change the avatar or creator settings in Captions.ai to match your brand personality  
- Modify Submagic settings to control subtitle styling or B-roll effects  
- Integrate approval steps before final video generation if needed  
- Extend the workflow to auto-publish videos to TikTok or store them in cloud drives

---

&gt; This workflow lets you transform TikTok comments into engaging AI avatar videos with captions and edits, completely on autopilot. It’s a powerful way to scale content output and stay ahead of trends without manual scripting or filming.


## 📊 Basic Information

- **Workflow ID:** 9251
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 292
- **Downloads:** 29
- **Created:** 2025/10/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9251)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **dataTable** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **wait** (×2)
- **if** 
- **webhook** 
- **airtable** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
