# Automated faceless YouTube video generator using Leonardo AI and Creatomate

> # Automate Your Video Content Creation: AI-Powered Video Generation

This n8n template streamlines the creation of high-quality, faceless videos, automating the entire process from scriptwriting to final video production. Leveraging AI tools like Leonardo AI and Creatomate, this workflow empowers content creators to efficiently produce engaging videos without on-camera presence.

## Who is this for?

This template is ideal for:

* Content creators looking to scale their presence on YouTube, Instagram, and TikTok.
* Marketers seeking to automate video marketing campaigns.
* Anyone wanting to produce professional-looking videos quickly and easily.
* Individuals wishing to create faceless video content.

## What problem is this workflow solving?

Creating engaging videos can be time-consuming and resource-intensive. This workflow eliminates the manual effort involved in scripting, image sourcing, and video editing, allowing creators to focus on strategy and content ideation. It addresses the challenge of consistent video production by automating repetitive tasks.

## What this workflow does:

This workflow automates the following steps:

* **AI-Driven Scriptwriting:** Uses an LLM (default: DeepSeek V3) to generate a compelling video script based on your system prompt and desired number of scenarios.
* **AI Image Generation:** Integrates with Leonardo AI to create visually appealing images for each scenario in the script. You define the image style and resolution.
* **Automated Video Editing:** Connects to Creatomate to assemble the script and images into a polished video, ready for upload. You’ll use a pre-created “AI generated story template” within Creatomate.

## Setup:

* **Video Script Generation:** Provide a detailed system prompt describing your video’s topic, target audience, and key message. Specify the number of scenarios. Select your preferred LLM (DeepSeek V3 is the default).
* **Image Generation:** Connect your Leonardo AI account. Choose your preferred image generation model and set the video resolution. Craft a detailed prompt for Leonardo AI, defining the image style (e.g., “cinematic,” “cartoon,” “realistic”).
* **Video Editing:** Link your Creatomate account. Create an empty “AI generated story template” in Creatomate. Copy the cURL from the Creatomate template to the video generation node. Link your ElevenLabs account to Creatomate and choose the desired voice.

## How to customize this workflow:

* **Script Customization:** Refine the system prompt to guide the AI. Experiment with different LLMs.
* **Image Style:** Adjust the Leonardo AI prompt. Explore different image generation models.
* **Video Editing:** Modify the Creatomate template to customize transitions, text overlays, and other elements. Add voiceover using the ElevenLabs integration in Creatomate.

## Category:

Marketing, Social Media, Content Creation

## 📊 Basic Information

- **Workflow ID:** 2971
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 13896
- **Downloads:** 1389
- **Created:** 2025/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2971)

## 👤 Author

- **Name:** Tianyi
- **Username:** @muzi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **youTube** 
- **httpRequest** (×14)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **wait** (×7)
- **merge** 
- **set** (×6)
- **telegram** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
