# Fully automated AI video generation & multi-platform publishing

> ## Description

This comprehensive n8n automation template orchestrates a complete end-to-end workflow for generating engaging short-form Point-of-View (POV) style videos using multiple AI services and automatically publishing them across major social media platforms. It takes ideas from a Google Sheet and transforms them into finished videos with captions, voiceovers, and platform-specific descriptions, ready for distribution.

### Who Is This For?

*   **Content Creators & Agencies:** Mass-produce unique short-form video content for various clients or channels with minimal manual effort.
*   **Digital Marketers:** Automate video content pipelines to boost online presence and engagement across multiple platforms simultaneously.
*   **Social Media Managers:** Schedule and distribute consistent video content efficiently without juggling multiple tools and manual uploads.
*   **Businesses:** Leverage AI to create branded video content for marketing, reducing production time and costs.

### What Problem Does This Workflow Solve?

Creating and distributing high-quality short-form video content consistently across multiple social networks is incredibly time-consuming and resource-intensive. This workflow tackles these challenges by:

*   **Automating Idea-to-Video Pipeline:** Generates video concepts, image prompts, scripts, images, video clips, and voiceovers using AI.
*   **Streamlining Video Assembly:** Automatically combines generated assets into a final video using a template.
*   **Generating Platform-Optimized Descriptions:** Creates relevant descriptions for posts by transcribing the final video audio.
*   **Automating Multi-Platform Publishing:** Uploads the final video and description to TikTok, Instagram, YouTube, Facebook, and LinkedIn simultaneously.
*   **Reducing Manual Workload:** Drastically cuts down the time and effort required for video production and distribution.
*   **Centralized Tracking:** Updates a Google Sheet with results, costs, and status for easy monitoring.

### How It Works

1.  **Trigger & Input:** Runs on a daily schedule (configurable) and fetches new video ideas from a designated Google Sheet.
2.  **AI Content Generation:**
    *   Uses OpenAI to generate video captions and image prompts based on the idea.
    *   Uses PiAPI (Flux) to generate images from prompts.
    *   Uses PiAPI (Kling) to generate video clips from the images (Image-to-Video).
    *   Uses OpenAI to generate a voiceover script based on the captions.
    *   Uses ElevenLabs to generate voiceover audio from the script and uploads it to Google Drive.
3.  **Video Assembly:** Combines the generated video clips, captions, and voiceover audio using a Creatomate template to render the final video.
4.  **Description Generation:** Uploads the final video to Google Drive, extracts the audio using OpenAI (Whisper), and generates a social media description using OpenAI (GPT).
5.  **Multi-Platform Distribution:** Uses upload-post.com to upload the final video and generated description to TikTok, Instagram, YouTube, Facebook, and LinkedIn.
6.  **Tracking & Notification:** Updates the original Google Sheet row with output details (video link, costs, tokens used) and sends a completion notification via Discord.

### Setup

1.  **Accounts & API Keys:** Obtain accounts and generate API keys/credentials for:
    *   n8n
    *   Google Cloud Platform (for Google Sheets & Google Drive APIs + OAuth Credentials)
    *   OpenAI
    *   PiAPI
    *   ElevenLabs
    *   Creatomate
    *   upload-post.com
    *   Discord (Webhook URL)
2.  **Google Sheet:** Make a copy of the provided [Google Sheet Template](https://docs.google.com/spreadsheets/d/1cjd8p_yx-M-3gWLEd5TargtoB35cW-3y66AOTNMQrrM/edit?usp=sharing) and connect it in the `Load Google Sheet` node.
3.  **Creatomate Template:** Set up a video template in Creatomate (use the [provided JSON source code](https://pastebin.com/c7aMTeLK) as a base) and note its Template ID.
4.  **Configure Nodes:**
    *   Enter all API Keys/Credentials in the `Set API Keys` node and other relevant credential sections (Google nodes, upload-post nodes, etc.).
    *   Configure Google Drive nodes (Folder IDs, Permissions).
    *   Configure the `upload-post.com` nodes with your user identifier and necessary platform details (e.g., Facebook Page ID).
    *   Customize AI prompts within the OpenAI nodes (`Generate Video Captions`, `Generate Image Prompts`, `Generate Script`, `Generate Description...`) if desired.
    *   Set the Discord Webhook URL in the `Notify me on Discord` node.
5.  **Enable Google APIs:** Ensure Google Drive API and Google Sheets API are enabled in your Google Cloud Project.

### Requirements

*   **Accounts:** n8n, Google (Sheets, Drive, Cloud Platform), OpenAI, PiAPI, ElevenLabs, Creatomate, [The social media api Upload-Post](https://www.upload-post.com), Discord.
*   **API Keys & Credentials:** API Keys for OpenAI, PiAPI, ElevenLabs, Creatomate, upload-post.com. Google Cloud OAuth 2.0 Credentials. Discord Webhook URL.
*   **Templates:** A configured Google Sheet based on the template, a configured Creatomate video template.
*   **(Potentially) Paid Plans:** Some services (OpenAI, PiAPI, Creatomate, upload-post.com) may require paid plans depending on usage volume after free trials/credits are exhausted.

Use this template to build a powerful, automated video content factory, scaling your production and distribution efforts across the social media landscape.

## 📊 Basic Information

- **Workflow ID:** 3442
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 206095
- **Downloads:** 20609
- **Created:** 2025/4/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3442)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×13)
- **code** (×4)
- **wait** (×5)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **stickyNote** (×8)
- **merge** (×2)
- **googleDrive** (×4)
- **discord** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **set** 
- **readBinaryFile** 
- **writeBinaryFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 38 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
