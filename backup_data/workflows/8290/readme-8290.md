# Automate faceless shorts with OpenAI, RunwayML & ElevenLabs: script to social media

> ### ⚙️ Faceless YouTube Generator - Automate Faceless YouTube Shorts with AI: Generate Scripts, Videos, Audio, and Captions in Minutes!

Tired of grinding out YouTube content? This n8n workflow turns AI into your personal video factory—creating engaging, faceless shorts on autopilot. Perfect for creators, marketers, or side-hustlers looking to monetize without showing your face. From script writing to final upload, it's all handled: AI-generated scripts (optimized for 20-second hooks), stunning image-to-video animations via RunwayML, immersive audio with ElevenLabs, and pro captions. Scale your channel effortlessly and watch the views (and revenue) roll in!

### 🧑‍💻 Author: LeeWei

---

### 🚀 How It Works

• **Trigger & Script Magic**: Starts via Google Sheets webhook—AI crafts a punchy 213-223 character script (via Anthropic) for ~20-second shorts, ensuring viral potential.
• **Visuals on Autopilot**: Splits scenes, generates high-quality images with OpenAI, then animates them into videos using RunwayML's Gen3a Turbo.
• **Audio Layering**: Adds soothing background sounds and professional voice-overs (Adam voice) via ElevenLabs for that polished, immersive feel.
• **Final Polish & Upload**: Merges everything in Creatomate, slaps on captions with Replicate, uploads to Google Drive/YouTube, and updates your sheet—ready to post!

Setup takes 15-20 minutes with API keys. Plug-and-play: Import the JSON into n8n, and you're set—edit only API tokens and credentials as noted.

### 🚀 Steps to Connect:

1. **Google Sheets & Drive Setup**
    - Use your existing Google OAuth2 credentials in the "Google Sheets" and "Google Drive" nodes.
    - Clone the demo sheet (ID: 1Co9tTJelYyefLLxzkoOhUBU3XuQIspBpDudtZLynW2M) and update the ID in "Update Video Status" if needed. Tweak folder IDs in "Upload to Drive" nodes for custom storage.

2. **Anthropic API Key**
    - Head to [Anthropic](https://www.anthropic.com/) and grab your API key.
    - Paste it into the "Anthropic Chat Model" node credentials.

3. **OpenAI API Key**
    - Visit [OpenAI](https://platform.openai.com/) for your API key.
    - Add it to the "OpenAI Chat Model" node credentials.

4. **RunwayML API Key**
    - Sign up at [RunwayML](https://runwayml.com/) and get your token.
    - Replace "YOUR_API_TOKEN" in the "Authorization" headers of "Generate Videos" and "Get Generated Videos" HTTP nodes.

5. **ElevenLabs API Key**
    - Go to [ElevenLabs](https://try.elevenlabs.io/mjxkz7027sqp) and generate your key.
    - Swap "YOUR_API_TOKEN" in the "xi-api-key" headers of "Generate Audio (Background sound)" and "Text to Speech (Adam Voice)" nodes.

6. **Creatomate API Key**
    - Register at [Creatomate](https://creatomate.com/) for your token.
    - Update "YOUR_API_TOKEN" in the "Authorization" header of the "Render Video with Creatomate" HTTP node.

7. **Replicate API Key**
    - Get your token from [Replicate](https://replicate.com/).
    - Insert "YOUR_API_TOKEN" in the "Authorization" header of the "Add Captions - replicate" HTTP node.

8. **(Optional) YouTube Upload**
    - For direct uploads, add your Google YouTube OAuth credentials to the "Upload Video" node.



## 📊 Basic Information

- **Workflow ID:** 8290
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 154
- **Downloads:** 15
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8290)

## 👤 Author

- **Name:** LeeWei
- **Username:** @leeweihernandez07

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×14)
- **limit** 
- **googleDrive** (×4)
- **googleSheets** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **merge** (×2)
- **stickyNote** (×10)
- **code** (×2)
- **wait** (×3)
- **splitOut** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **convertToFile** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **webhook** 
- **filter** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
