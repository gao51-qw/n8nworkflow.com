# Create & upload AI videos to YouTube with Kling 2.5 & auto-SEO

> ## ++What it is++

An automated workflow for creating Kling 2.5 videos and posting them to YouTube.

The workflow is divided into three main phases: 

1. Create Kling 2.5 Video 
2. Wait for Video Processing 
3. Post to YouTube 

## ++Create Kling 2.5 Video++ 

This phase handles the initial video creation based on user input.

- Type Prompt: A form trigger allows the user to input details for the video, including:

- Prompt: A simple scenario for the video.

- Video Style: (e.g., Dialogue, Monologue, Advertisement, Documentary)

- Aspect Ratio: (e.g., 16:9, 9:16, 1:1)

- Videography (AI Refinement): Refines the user’s prompt into a detailed “script-to-screen” format suitable for video generation.

- FAL.AI Request: The refined prompt is sent to the Fal.ai Kling 2.5 model via an HTTP request to generate the video. 

- Store Data: Details of the video request, including the date requested, the refined prompt, and the request URL, are stored in a Google Sheet.

## ++Wait for Video Processing++

Wait 5 mins: The workflow pauses for 5 minutes. This waiting period is necessary as it typically takes 3–5 minutes for the video to be ready after the generation request.

## ++Post to YouTube++ 

This phase focuses on generating YouTube SEO details and uploading the video.

- YT Video SEO (AI Generation): An AI agent (using OpenRouter’s OpenAI GPT-5 Mini model) acts as a YouTube SEO specialist and viral content strategist. It generates the following details for the YouTube video:

- Video Title: A compelling title (less than 6 words).

- Video Description: A detailed description.

- Video Tags: Relevant tags to maximize discoverability.

- The AI agent is configured to follow guidelines for virality and YouTube’s tag limits.

- Structured Output: Parses the structured JSON output from the AI agent.

- Get Keywords: Extracts and formats the video tags into a comma-separated list suitable for YouTube.

- Fetch Video Credentials: Fetches the video URL and other credentials from Fal.ai.

- Download Video: Downloads the generated video file.

- Post on YouTube: The video is uploaded to YouTube using the generated title, description, and tags.

## ++Setup++

To run this workflow, you need to set up credentials in n8n for:

- OpenRouter: Generate API key from your OpenRouter account. ([Tutorial](https://www.youtube.com/watch?v=Cq5Y3zpEhlc))

- Google Sheets: Uses OAuth 2.0. Connect by authenticating your Google account.

- YouTube Data API: Configure credentials to allow posting videos to YouTube ([Follow this section of another Tutorial](https://youtu.be/DXM1VA-vDX4?si=vDBoz2TabD8CjTAB&t=355)).

## 📊 Basic Information

- **Workflow ID:** 9099
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 182
- **Downloads:** 18
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9099)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **formTrigger** 
- **wait** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **youTube** 
- **stickyNote** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
