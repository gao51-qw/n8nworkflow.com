# Create faceless videos with Gemini, ElevenLabs, Leonardo AI & Shotstack

> ### This n8n template demonstrates walks you through a fully automated process to generate faceless videos - from script creation to final download - using AI-generated voice, images, and smart video editing.

Use cases are many: This tool is perfect for **YouTube and Shorts creators** who want to publish daily content without showing their face, **TikTok and Reels marketers** automating voice-over-driven videos, and **solopreneurs** scaling up their content without hiring a team. It’s also ideal for **agencies** producing batches of faceless video ads, **automation enthusiasts** building smart media workflows in n8n, and anyone who’s rich in ideas but tired of spending hours editing.

## How It Works
- Phase 1: **Provide Topic Input**
    - A short topic and idea should be entered into the **Idea** part in Node **Fields - Set Idea** inside the workflow in n8n.
    - Trigger the process manually by clicking **Test Workflow** or **Execute Workflow**. 
- Phase 2: **Script Generation**
    - Your idea is passed to **Google Gemini's chat model**. The model returns a concise, 60-second faceless video script. 
    - The script is then reformatted into a structured layout optimized for voice generation and visual synchronization.
- Phase 3: **Audio Generation**
    - The formatted script is passed to **ElevenLabs**, which turns the text into a high-quality voiceover audio.
    - The generated audio is uploaded to **Google Drive** and made publicly accessible.
    - At the same time, the audio is sent to **OpenAI Whisper** via a POST request to generate a transcription of the voiceover.
- Phase 4: **Timestamps Generation**
    - The tool merges the original script and the **OpenAI Whispe**r-generated transcription.
    - The merged data is passed to **Google Gemini's chat model** to generate image prompts with precise timestamps.
    - The output is parsed and cleaned using a structured parser to ensure it's in ready-to-use JSON format for image generation.
- Phase 5: **Images Generation**
    - The full list of timestamped prompts is is split into individual entries.
    - Each prompt is sent to **Leonardo's API** that turns text descriptions into visuals.
    - A delay of 30 seconds is added to give the image generation engine enough time to complete rendering.
    - Once completed, the workflow retrieves all final images for the next stage.
- Phase 6: **Images To Video Conversion**
    - All generated images are sent to **Leonardo's API**, which stitches them together based on the structured prompts and timing.
    - A 5-minute wait allows time for rendering.
    - After the wait, the workflow retrieves the generated small videos and makes  them downloadable.
    - Then, the tool aggregates all downloaded videos into a single unified structure, preparing them for the final editing.
- Phase 7: **Video Editing and Downloading**
    - The raw video, along with timestamps or subtitles, is sent to **Shotstack**, a video editing tool that supports advanced edits.
    - A delay of 1 minute allows **Shotstack** to process the edit.
    - Then, the tool checks whether the edited video is finished by **Shotstack** and ready to be downloaded.
    - Once completed, you can download the final polished video to your local storage for later use.

## How To Use
- Download the workflow package.
- Import the package into your n8n interface.
- Set up necessary credentials for tools access and usability:
    + For Google Gemini access, please connect to its API in the following nodes:
        Node **Google Gemini Chat Model 1**
        Node **Google Gemini Chat Model 2**
    + For Google Drive access, please ensure connection in the following nodes:
        Node **Upload Audio to Drive**
        Node **Make Audio File Public**
    + For ElevenLabs access, please connect to its API in the following node:
        Node **Generate Voice**
    + For OpenAI Whisper access, please connect to its API in the following node:
        Node **Transcribe Audio with OpenAI Whisper**
    + For Leonardo access, please allow connection to its API in the following nodes:
        Node **Generate Images**
        Node **Generate Videos/Scenes**
    + For Shortstack access, please connect to its API in the following nodes:
        Node **Edit with Shotstack**
        Node **Render Final Video with Shotstack**
- Input your video idea or short description as a string in Node **Fields - Set Idea** in n8n.
- Run the workflow by clicking **Execute Workflow** or **Test Workflow**.
- Wait the process to run and finish.
- View the result in Node **Download Final Video** and download it in your local storage for later use.

## Requirements
- Basic setup in **Google Cloud Console** (OAuth or API Key method enabled) with enabled access to Google Drive.
- **Google Gemini API** access with permission to use chat-based large language models.
- **ElevenLabs API** access for generating high-quality voiceovers from scripts.
- **OpenAI Whisper API** access to transcribe voiceovers into clean text.
- **Leonardo API** access for both image and video generation tasks.
- **Shotstack API** access for editing and rendering the final video with enhanced visuals and timing.

## How To Customize
- You can input your requested video topic or description directly in Node **Fields – Set Idea**.
- By default, the script length is set to around 60 seconds in Node **60 Second Script Writer**. You can easily change this in the prompt to create shorter or longer videos based on your needs.
- While the default setup uses **Google Gemini** for script and prompt generation, you can replace it with **OpenAI ChatGPT**, **Claude**, or any other compatible chat-based model you prefer.
- The voiceover is currently created using **ElevenLabs**, but you’re free to substitute it with other text-to-speech engines like **Google Cloud Text-to-Speech**, **HeyGen**, etc.
- We're using **OpenAI Whisper** to transcribe the voiceover into text. You can switch to alternatives such as **AssemblyAI**, **Deepgram**, or other compatible providers depending on your preference.
- This workflow uses **Leonardo** for both image and video generation. You can swap it out for other compatible providers based on availability or style preference.
- Video editing is handled by **Shotstack** by default. You can plug in alternatives like **Runway**, **FFmpeg**, or other API-based editors depending on your editing needs or desired effects.


If you’d like this workflow customized to fit your tools and platforms availability, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

## Need Help?
Join our community on different platforms for support, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 📊 Basic Information

- **Workflow ID:** 6014
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 7326
- **Downloads:** 732
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6014)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDrive** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×8)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **splitOut** 
- **wait** (×3)
- **aggregate** 
- **httpRequest** (×10)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
