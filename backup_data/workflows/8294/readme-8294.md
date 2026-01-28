# Generate viral baby celebrity podcasts with AI, Hedra and ElevenLabs

> ### ⚙️ Automated Viral Baby Podcast Video Generator

### 🧑‍💻 Author: LeeWei

---
## Overview of the n8n Workflow

This n8n workflow automates the creation of viral short videos featuring AI-generated baby podcasts. It handles everything from generating unique video ideas to producing audio, images, and videos using AI tools, then uploading the final content to YouTube and tracking it in Google Sheets. The workflow includes sticky notes labeling key sections for clarity, formatted in Markdown.

---


## How it Works

This workflow distills the process of creating viral baby podcast videos into a few high-level steps:

- **Idea Generation**: Fetches existing topics from Google Sheets and uses AI to create a new, unique idea with a character (e.g., Baby Elon Musk).
- **Content Creation**: Generates a script/title, audio via TTS, and an image via DALL-E.
- **Video Synthesis**: Uploads assets to Hedra to produce a short video.
- **Upload and Tracking**: Saves the video to Google Drive, uploads to YouTube, and logs details in Google Sheets.

---

## Set up Steps

Setup should take about 15-30 minutes, mainly for creating accounts and credentials. Detailed descriptions are kept in the workflow's sticky notes. Since this is plug-and-play, all nodes are pre-configured—edit only the specified fields below.



---

### 🚀 Steps to Connect:

1. **OpenAI API Key**  
   - Go to [OpenAI](https://platform.openai.com/) and generate your API key.  
   - Paste it into the OpenAI credentials for nodes like "Audio Prompt & Title", "Image Prompt", "Idea Generator", and "Create The Image".

2. **ElevenLabs API Key**  
   - Visit [ElevenLabs](https://try.elevenlabs.io/mjxkz7027sqp) to generate your API key.  
   - Paste it into the HTTP Header Auth credentials for the "Text to Speech" node.  
   - (Optional) Update the voice ID in the URL if you want a different voice (default: "nPczCjzI2devNBz1zQrb").

3. **Hedra API Key**  
   - Go to [Hedra](https://www.hedra.com/) and generate your API key.  
   - Paste it into the HTTP Header Auth credentials for Hedra-related nodes (e.g., "Create Audio Asset (Hedra)").  
   - (Optional) Update the AI model ID in "Create Video (Hedra)" if needed (default: "d1dd37a3-e39a-4854-a298-6510289f9cf2").

4. **Google Drive & Sheets OAuth**  
   - Set up OAuth2 credentials at [Google Cloud Console](https://console.cloud.google.com/) with access to Drive and Sheets.  
   - Paste into the Google Drive/Sheets credentials.  
   - Duplicate the template Sheet (link in video description) and update the `documentId` in "Get Existing Ideas" and "Google Sheets" nodes.  
   - Create a "Baby Pods" folder in Drive and update the `folderId` in "Upload Video" (default: "1WemU2r1nI0xnv-3z5a2LZk2kpt1bw5Pt").

5. **Blotato**  


---

## Potential Customizations

- **Change Characters or Prompts**: Edit the system message in "Idea Generator" to add/remove characters (e.g., add "Baby Taylor Swift").  
- **Adjust Schedule**: Modify "Schedule Trigger1" for different run times.  
- **Different TTS or Image Models**: Swap ElevenLabs/OpenAI endpoints for alternatives.  
- **Add Platforms**: Extend with nodes for Instagram Reels or TikTok uploads.  
- **Video Settings**: Tweak resolution/aspect ratio in "Create Video (Hedra)".

---

## Considerations and Improvements

- **API Limits**: Monitor usage for OpenAI, ElevenLabs, and Hedra to avoid rate limits; add more waits if needed.  
- **Error Handling**: Add "If" nodes for failures (e.g., if video generation times out).  
- **Content Quality**: Test prompts for virality; the default focuses on controversial topics.  
- **Dependencies**: Ensure all APIs are active; Hedra may require waits for processing.  
- **Scalability**: For more videos, increase batching or parallelize idea generation.




## 📊 Basic Information

- **Workflow ID:** 8294
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 50
- **Downloads:** 5
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8294)

## 👤 Author

- **Name:** LeeWei
- **Username:** @leeweihernandez07

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×9)
- **convertToFile** 
- **merge** (×3)
- **code** (×4)
- **wait** (×2)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×6)
- **manualTrigger** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
