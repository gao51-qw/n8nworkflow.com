# Post AI videos to YouTube with Fal AI Veo3, Google Sheets, and YouTube API

> # Auto-Post Veo3 Videos on YouTube

An automated workflow for creating Veo3 videos and posting them to YouTube. 

YT Tutorial: https://youtu.be/DXM1VA-vDX4

## Workflow Overview

The workflow is divided into three main phases:

1.  **Create Veo3 Video**
2.  **Wait for Video Processing**
3.  **Post on YouTube**

### 1. Create Veo3 Video

This phase handles the initial video creation based on user input.

*   **Type Prompt:** A form trigger allows the user to input details for the video, including:
    *   **Prompt:** A simple scenario for the video.
    *   **Video Style:** (e.g., Dialogue, Monologue, Advertisement, Documentary)
    *   **Aspect Ratio:** (e.g., 16:9, 9:16, 1:1)
    *   **Video Category:** A YouTube category for the video.
*   **Get Specific Prompt:** Based on the selected "Video Style," the workflow fetches specific prompt data from a Google Sheet.
*   **Videography (AI Refinement):** An AI agent (using OpenRouter's Google Gemini 2.5 Flash model) refines the user's prompt into a detailed "script-to-screen" format suitable for video generation.
*   **Make FAL.AI Request:** The refined prompt is sent to the Fal.ai Veo 3 model via an HTTP request to generate the video. The video duration is fixed at 8 seconds.
*   **Store Data:** Details of the video request, including the date requested, the refined prompt, and the request URL, are stored in a Google Sheet.

### 2. Wait for Video Processing

*   **Wait 5 mins:** The workflow pauses for 5 minutes. This waiting period is necessary as it typically takes 3-5 minutes for the video to be ready after the generation request.

### 3. Post on YouTube

This phase focuses on generating YouTube SEO details and uploading the video.

*   **YT Video SEO (AI Generation):** An AI agent (using OpenRouter's OpenAI GPT-4.1 Mini model) acts as a YouTube SEO specialist and viral content strategist. It generates the following details for the YouTube video:
    *   **Video Title:** A compelling title (less than 6 words).
    *   **Video Description:** A detailed description.
    *   **Video Tags:** Relevant tags to maximize discoverability.
    *   **YouTube Category:** The appropriate YouTube category code based on the user's input.
    *   The AI agent is configured to follow guidelines for virality and YouTube's tag limits.
*   **Structured Output:** Parses the structured JSON output from the AI agent.
*   **Get Keywords:** Extracts and formats the video tags into a comma-separated list suitable for YouTube.
*   **Fetch Video Credentials:** Fetches the video URL and other credentials from Fal.ai.
*   **Download Video:** Downloads the generated video file.
*   **Post on YouTube:** The video is uploaded to YouTube using the generated title, description, tags, and category.

## Setup

To run this workflow, you need to set up credentials in n8n for:

*   **OpenRouter:** Generate API key from your OpenRouter account.
*   **Google Sheets:** Uses OAuth 2.0. Connect by authenticating your Google account.
*   **YouTube Data API:** Configure credentials to allow posting videos to YouTube.

If you do not have an n8n account, follow the tutorial at `https://youtu.be/E2yQelHPUdU?feature=shared` to get started.


## 📊 Basic Information

- **Workflow ID:** 4754
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2445
- **Downloads:** 244
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4754)

## 👤 Author

- **Name:** Ari Nakos
- **Username:** @just-aristides

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×2)
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

This workflow contains 15 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
