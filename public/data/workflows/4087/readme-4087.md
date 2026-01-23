# AI content creation and publishing engine with Mistral, Creatomate, and YouTube

> ### Description

This n8n workflow automates the entire process of creating and publishing AI-generated videos, triggered by a simple message from a Telegram bot (YTAdmin). It transforms a text prompt into a structured video with scenes, visuals, and voiceover, stores assets in MongoDB, renders the final output using Creatomate, and uploads the video to YouTube. Throughout the process, YTAdmin receives real-time updates on the workflow’s progress. This is ideal for content creators, marketers, or businesses looking to scale video production using automation and AI.

---

**You can see a video demonstrating this template in action here:** https://www.youtube.com/watch?v=EjI-ChpJ4xA&t=200s 

---

### How it Works

1. Trigger: Message from YTAdmin (Telegram Bot)

* The flow starts when YTAdmin sends a content prompt.

2. Generate Structured Content

* A Mistral language model processes the input and outputs structured content, typically broken into scenes.

3. Split & Process Content into Scenes

* The content is split into categorized parts for scene generation.

4. Generate Media Assets

* For each scene:

* Images: Generated using OpenAI’s image model.
* Voiceovers: Created using OpenAI’s text-to-speech.
* Audio files are encoded and stored in MongoDB.

5. Scene Composition

* Assets are grouped into coherent scenes.

6. Render with Creatomate

* A complete payload is generated and sent to the Creatomate rendering API to produce the video.
* Progress messages are sent to YTAdmin.
* The flow pauses briefly to avoid rate limits.

7. Render Callback

* Once Creatomate completes rendering, it sends a callback to the flow.
* If the render fails, an error message is sent to YTAdmin.
* If the render succeeds, the flow proceeds to post-processing.

8. Generate Title & Description

* A second Mistral prompt generates a compelling title and description for YouTube.

9. Upload to YouTube

* The rendered video is retrieved from Creatomate.
* It’s uploaded to YouTube with the AI-generated metadata.

10. Final Update

* A success message is sent to YTAdmin, confirming upload completion.

---

### Set Up Steps (Approx. 10–15 Minutes)Step 1: Set Up YTAdmin Bot

* Create a Telegram bot via BotFather and get your API token.
* Add this token in n8n's Telegram credentials and link to the "Receive Message from YTAdmin" trigger.

Step 2: Connect Your AI Providers

* Mistral: Add your API key under HTTP Request or AI Model nodes.
* OpenAI: Create an account at platform.openai.com and obtain an API key. Use it for both image generation and voiceover synthesis.

Step 3: Configure Audio File Storage with MongoDB via Custom API

* Receives the Base64 encoded audio data sent in the request body.
* Connects to the configured MongoDB instance (connection details are managed securely within the API- code below).
* Uses the MongoDB driver and GridFS to store the audio data.
* Returns the unique _id (ObjectId) of the stored file in GridFS as a response.
* This _id is crucial as it will be used in subsequent steps to generate the download URL for the audio file.
* My API code can be found here for reference: **https://github.com/nanabrownsnr/YTAutomation.git**

Step 4: Set Up Creatomate

* Create a Creatomate account, define your video templates, and retrieve your API key.
* Configure the HTTP request node to match your Creatomate payload requirements.

Step 5: Connect YouTube

* In n8n, add OAuth2 credentials for your YouTube account.
* Make sure your Google Cloud project has YouTube Data API enabled.

Step 6: Deploy and Test

* Send a message to YTAdmin and monitor the flow in n8n.
* Verify that content is generated, media is created, and the final video is rendered and uploaded.

---

### Customization Options

1. Change the AI Prompts

* Modify the generation prompts to adjust tone, voice, or content type (e.g., news recaps, product videos, educational summaries).

2. Switch Messaging Platform

* Replace Telegram (YTAdmin) with Slack, Discord, or WhatsApp by swapping out the trigger and response nodes.

3. Add Subtitles or Effects

* Integrate Whisper or another speech-to-text tool to generate subtitles.
* Add overlay or transition effects in the Creatomate video payload.

4. Use Local File Storage Instead of MongoDB

* Swap out MongoDB upload http nodes with filesystem or S3-compatible storage.

5. Repurpose for Other Platforms

* Swap YouTube upload with TikTok, Instagram, or Vimeo endpoints for broader publishing.

---
**Need Help or Want to Customize This Workflow?
If you'd like assistance setting this up or adapting it for a different use case, feel free to reach out to me at nanabrownsnr@gmail.com. I'm happy to help!**

## 📊 Basic Information

- **Workflow ID:** 4087
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 3227
- **Downloads:** 322
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4087)

## 👤 Author

- **Name:** NanaB
- **Username:** @nanabrown

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×2)
- **httpRequest** (×3)
- **youTube** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **set** (×4)
- **if** 
- **telegram** (×3)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **wait** 
- **extractFromFile** 
- **merge** 
- **aggregate** 
- **stickyNote** (×7)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
