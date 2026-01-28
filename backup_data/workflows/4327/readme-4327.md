# Auto-generate blog & AI image from YouTube videos with Dumpling AI & GPT-4o

> ### Who is this for?

This template is designed for content creators, marketing teams, educators, or media managers who want to repurpose video content into written blog posts with visuals. It's ideal for anyone looking to automate the process of transforming YouTube videos into professional blog articles and custom images.

---

### What problem is this workflow solving?

Creating written content from video material is time-consuming and manual. This workflow solves that by automating the entire pipeline: from detecting new YouTube video uploads to transcribing the audio, turning it into an engaging blog post, generating a matching visual, and saving both in Airtable. It saves hours of work while keeping your blog or social feed active and consistent.

---

### What this workflow does

This automation listens for new YouTube videos added to a Google Drive folder, extracts the full transcript using Dumpling AI, and sends it to GPT-4o to generate a blog post and image prompt. Dumpling AI then turns the prompt into a 16:9 visual. The blog and visual are saved into Airtable for easy publishing or curation.

---

### Setup

1. **Google Drive Trigger**
   - Create a folder in Google Drive and upload your YouTube videos there.
   - Link this folder in the "Watch Folder for New YouTube Videos" node.
   - Enable polling every minute or adjust as needed.

2. **Download & Prepare the Video**
   - The video is downloaded and converted into base64 format by the next two nodes:  
     `Download Video File` and `Convert Downloaded Video to Base64`.

3. **Transcription with Dumpling AI**
   - The base64 video is sent to Dumpling AI’s `extract-video` endpoint.
   - You must have a Dumpling AI account and an API key with access to this endpoint: [Dumpling AI Docs](https://docs.dumplingai.com/api-reference/introduction)

4. **Generate Blog Content with GPT-4o**
   - GPT-4o takes the transcript and generates:
     - A human-like blog post
     - A descriptive prompt for AI image generation
   - Make sure your OpenAI credentials are configured.

5. **Generate the Visual**
   - The prompt is passed to Dumpling AI’s `generate-ai-image` endpoint using model `FLUX.1-pro`.
   - The result is a clean 1024x576 image.

6. **Save to Airtable**
   - Blog content is stored under the `Content` field in Airtable.
   - The image prompt is also added to the `Attachments` column as a visual reference.
   - Ensure Airtable base and table are preconfigured with the correct field names.

---

### How to customize this workflow to your needs

- Change the GPT prompt to alter the tone or format of the blog post (e.g., add bullet points or SEO tags).
- Modify the Dumpling AI prompt to generate different image styles.
- Add a scheduler or webhook trigger to run at different intervals or through other integrations.
- Connect this output to Ghost, Notion, or your CMS using additional nodes.

---

### 🧠 Sticky Note Summary

**Part 1: Transcription & Blog Prompt**
- Watches a Google Drive folder for new video uploads.
- Downloads and encodes the video.
- Transcribes full audio with Dumpling AI.
- GPT-4o writes a blog post and descriptive image prompt.

**Part 2: Image Generation & Airtable Save**
- Dumpling AI generates a visual from the image prompt.
- Blog content is saved to Airtable.
- The image prompt is patched into the `Attachments` field in the same record.

---

✅ Use this if you want to automate repurposing YouTube videos into blog content with zero manual work.



## 📊 Basic Information

- **Workflow ID:** 4327
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1658
- **Downloads:** 165
- **Created:** 2025/5/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4327)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **airtable** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
