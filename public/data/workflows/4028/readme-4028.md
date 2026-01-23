# Generate and publish carousels for TikTok and Instagram with GPT-Image-1

> ## Description

This n8n automation template provides an end-to-end solution for generating a series of themed images for Instagram and TikTok carousels using OpenAI's GPT Image (via the image generation API) and automatically publishing them to both platforms. It uses a sequence of prompts to create a narrative or themed carousel, generating each image based on the previous one, and then posts them with an AI-generated caption.

### Who Is This For?

*   **Social Media Managers:** Quickly create and schedule engaging image carousels for Instagram and TikTok.
*   **Content Creators:** Automate the visual content creation process for thematic posts or storytelling carousels.
*   **Digital Marketers:** Efficiently produce visual assets for campaigns that require sequential imagery.
*   **Small Businesses:** Generate unique promotional content for social media without needing advanced design skills.

### What Problem Does This Workflow Solve?

Manually creating a series of related images for a carousel and then publishing them across multiple platforms can be repetitive and time-consuming. This workflow addresses these issues by:

*   **Automating Image Generation:** Uses OpenAI to generate a sequence of 5 images, where each new image is an evolution based on the previous one and a new prompt.
*   **Automating Caption Generation:** Leverages OpenAI (GPT) to create a suitable description/caption for the carousel based on the image prompts.
*   **Streamlining Multi-Platform Publishing:** Automatically uploads the generated image carousel and caption to both Instagram and TikTok.
*   **Reducing Manual Effort:** Significantly cuts down the time spent on designing individual images and manually uploading them.
*   **Ensuring Visual Cohesion:** The sequential image generation method (editing the previous image) helps maintain a consistent style or narrative across the carousel.

### How It Works

1.  **Trigger:** The workflow is initiated manually (can be adapted to a schedule or webhook).
2.  **Define Prompts:** Five distinct prompts are pre-set within the workflow to guide the generation of each image in the carousel.
3.  **AI Caption Generation:** OpenAI (GPT-4.1) generates a concise (≤ 90 characters for TikTok) description for the social media posts based on all five image prompts.
4.  **Sequential AI Image Generation:**
    *   **Image 1:** OpenAI's image generation API (specified as `gpt-image-1`) creates the first image based on `prompt1`.
    *   **Image 2-5:** For each subsequent image, the workflow uses the OpenAI image *edits* API. It takes the previously generated image and a new prompt (`prompt2` for image 2, `prompt3` for image 3, and so on) to create the next image in the sequence.
    *   Images are converted from base64 JSON to binary format.
5.  **Content Aggregation:** The five generated binary image files (named `photo1` through `photo5`) are merged.
6.  **Multi-Platform Distribution:**
    *   The merged images and the AI-generated description are sent to `api.upload-post.com` for publishing as a carousel to Instagram.
    *   The same content is sent to `api.upload-post.com` for publishing as a carousel to TikTok, with an option to automatically add music.
    *   The TikTok description is truncated if it exceeds 90 characters.

### Setup

1.  **Accounts & API Keys:** You will need:
    *   An n8n instance.
    *   An OpenAI API key.
    *   A key for [social media API](https://www.upload-post.com) upload-post.
2.  **Configure Credentials:**
    *   Add your OpenAI API key to the "OpenAI" credentials in n8n. This will be used by the "Generate Description for Tiktok and Instagram" node and the HTTP Request nodes calling the OpenAI image generation/edit APIs.
    *   In the "POST TO INSTAGRAM" and "POST TO TIKTOK" nodes, replace `"Apikey add_api_key_here"` with your actual `upload-post.com` API key.
    *   Update the `user` field in the "POST TO INSTAGRAM" and "POST TO TIKTOK" nodes if `"upload_post"` is not your user identifier for that service.
3.  **Customize Prompts:** Modify the five prompts (`prompt1` to `prompt5`) in the "Set All Prompts" node to define the story or theme of your image carousel.
4.  **Review Image Generation Parameters:** In the "Set API Variables" node, you can adjust:
    *   `size_of_image` (e.g., "1024x1536" for vertical carousels).
    *   `openai_image_model` (ensure this matches a valid OpenAI model identifier for image generation/edits, like `dall-e-2` or `dall-e-3` if `gpt-image-1` is a placeholder).
    *   `response_format_image` (should generally remain `b64_json` for this workflow).
5.  **(Optional) TikTok Auto Music:** The "POST TO TIKTOK" node has an `auto_add_music` parameter set to `true`. Change this to `false` if you prefer to add music manually or not at all.

### Requirements

*   **Accounts:** n8n, OpenAI, upload-post.com.
*   **API Keys & Credentials:** API Keys for OpenAI and https://upload-post.com.
*   **(Potentially) Paid Plans:** OpenAI and upload-post.com usage may incur costs depending on your volume and their respective pricing models.

This template empowers you to automate the creation and distribution of visually consistent image carousels, saving time and enhancing your social media presence.


## 📊 Basic Information

- **Workflow ID:** 4028
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 17890
- **Downloads:** 1789
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4028)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **code** (×6)
- **httpRequest** (×7)
- **merge** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **splitOut** (×5)
- **convertToFile** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
