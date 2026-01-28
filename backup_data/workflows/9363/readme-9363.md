# One telegram chat to edit, thumbnail & auto-post your videos everywhere

> This workflow turns any **Telegram bot** into an AI-powered **social media command center** for photos, videos and voice notes.

[video demo](https://www.youtube.com/watch?v=a5WndRCD63I)

From one Telegram chat you can:

- Send a **photo** and auto-post it to **Instagram, TikTok and Pinterest** with AI captions.
- Send a **video** and:
  - Let AI generate **titles + descriptions** and upload it to **TikTok, Instagram and YouTube**.
  - Use `/thumb` to generate **4 custom thumbnails** with **Nano Banana Pro**.
  - Use `/edit ...` to run **FFmpeg edits** (cut, mute, resize, speed, etc.) via **Upload-Post FFmpeg jobs** and get the edited video back in Telegram.
- Send a **voice note** and turn it into posts for **LinkedIn, X (Twitter) and Threads**, then auto-publish.
- Keep **human approval** in the loop: every caption or text post is shown in Telegram for you to accept before publishing.

Out of the box, the captions and long descriptions are optimized for **Spanish (es-ES)**, but you can easily change the prompts to any language or brand voice.

---

## What You Can Do From Telegram

### 1. Photo → Instagram, TikTok & Pinterest

Just send a **photo** (or image as document) to your Telegram bot:

- The workflow downloads the photo from Telegram.
- **Gemini 2.5 Flash** analyzes the image plus your caption/text (if any).
- An AI Agent generates **platform-specific descriptions** for:
  - TikTok (short hook, 90 chars)
  - Instagram
  - Pinterest (title + description)
- You receive a message in Telegram with all the proposed descriptions.
- You approve or reject with inline buttons.
- On approval, **Upload-Post** publishes the photo to:
  - Instagram
  - TikTok
  - Pinterest (to the board you configured)  
  and sends back a status message with success flags, post URLs and error messages.

---

### 2. Video → TikTok, Instagram & YouTube (no commands)

If you send a **video with no special caption**:

- The workflow treats it as a standard **video post**.
- It fetches the file from Telegram.
- **Gemini 2.5 Flash** analyzes the video and describes its content.
- An AI Agent turns that description + your caption into:
  - TikTok description
  - Instagram description
  - YouTube **title + description**
- You get a Telegram message with the three platform descriptions to review.
- Once you approve:
  - It shows “Uploading…” in Telegram.
  - The video is sent to **Upload-Post**, which uploads to **TikTok, Instagram and YouTube** with the generated text.
  - Finally, you receive an upload report for each platform (success, URL, error message).

---

### 3. `/thumb` → AI Thumbnails for Your Video (Nano Banana Pro)

If you send a **video with caption exactly `/thumb`**:

- The workflow downloads the video.
- **Gemini 2.5 Flash** generates a **long, SEO-rich description in Spanish** of everything that happens in the video.
- A second AI Agent uses that detailed description to create **3 concepts**:
  - Each concept has: `title`, `description`, and a full `prompt_thumbnail` (Spanish, single line) specially crafted for **Nano Banana Pro**.
- In Telegram you see the 3 concepts (titles) and select:
  - `0`, `1`, `2` or “create new”.
- Once you choose a concept:
  - The prompt is sent to **Nano Banana Pro** (`fal-ai/nano-banana-pro/edit`) with your reference face image (configurable).
  - Nano Banana Pro generates **4 thumbnails** (16:9).
  - The workflow downloads the 4 images and sends them back to you in Telegram as photos so you can pick and use your favorite in your YouTube/Upload-Post pipeline.

Use `/thumb` whenever you already have the video and just want **killer thumbnails** generated with AI.

---

### 4. `/edit …` → Natural-Language FFmpeg Video Editor

If you send a **video with a caption starting with `/edit`**, for example:

- `/edit cut the first 3 seconds and remove the audio`
- `/edit crop to vertical 9:16 and speed up x1.5`
- `/edit blur the background and keep the subject centered`

The workflow behaves as a **text-to-FFmpeg command generator**:

- An AI Agent (powered by **Gemini**) reads your `/edit` instructions.
- It generates a **safe FFmpeg command** in JSON format:
  - Always uses `ffmpeg -y`
  - Uses `{input}` and `{output}` placeholders
  - No semicolons and no dangerous shell characters
- The workflow then:
  - Downloads the original video from Telegram.
  - Calls **Upload-Post FFmpeg jobs API** with the video and the generated `full_command`.
  - Polls the job status until it’s finished.
  - Downloads the processed (edited) video.
  - Sends the edited video back to you in Telegram with a simple `sendVideo` node.

This makes Telegram a **front-end for a remote FFmpeg engine**: you describe the edit in natural language, and the workflow handles all the FFmpeg complexity.

&gt; Note: The edited video is returned to Telegram; if you want to auto-post it, simply send the new video again **without `/edit`** so it goes through the normal multi-platform publishing path.

---

### 5. Voice Notes → LinkedIn, X & Threads (Text Posts)

For **voice messages**:

- The Telegram Trigger detects `message.voice`.
- The workflow downloads the audio file.
- **OpenAI Whisper** transcribes the recording.
- An AI Agent turns the transcription into:
  - A **LinkedIn post** (Spanish, long-form dev/creator style, based on your examples).
  - A **Threads post** (Spanish, up to ~500 chars).
  - A **Tweet / X post or thread** (English, using hooks + hashtags like `#n8n`, `#automation`, `#dev`).
- In Telegram you see a preview message with the suggested copy for Threads, LinkedIn and X.
- After you approve:
  - You get an “Uploading…” message.
  - **Upload-Post** publishes:
    - To your LinkedIn organization page (configured by ID).
    - To X (Twitter).
    - To Threads.
  - The workflow sends a status message with success flags and URLs for each platform.

This is perfect for **“talk to your phone, ship content to all your text platforms”**.

---

## How the Workflow Is Structured

- **Telegram Trigger**  
  Listens to every incoming message and routes by type:
  - `/start` → No-Op
  - `voice` → Audio pipeline
  - `document/photo` → Photo pipeline
  - `video` → Video/thumbnail/editor pipelines (`/thumb`, `/edit` or normal)

- **AI Blocks (Gemini + OpenAI)**  
  - Gemini 2.5 Flash for:
    - Photo understanding.
    - Short video descriptions (for auto-posting).
    - Long, detailed video summaries (for thumbnail generator).
  - OpenAI Whisper for voice transcription.
  - Multiple AI Agents (Gemini chat) with **structured JSON output parsers** for:
    - Per-platform social captions.
    - Threads/LinkedIn/X posts.
    - Thumbnail prompts and title concepts.
    - FFmpeg command generation.

- **Upload-Post Integration**
  - **Photos** → Instagram, TikTok, Pinterest.
  - **Videos** → TikTok, Instagram, YouTube.
  - **Text** → LinkedIn page, X, Threads.
  - FFmpeg job endpoint for server-side video editing.
  - All uploads return **status, URL and error messages** back into Telegram.

- **Human-in-the-Loop**
  - All critical AI outputs go through `sendAndWait` nodes in Telegram:
    - You review and choose whether to publish or not.
    - You choose which thumbnail concept to use.

---

## Requirements & Setup

- **Accounts & APIs**
  - Telegram bot (via @BotFather).
  - **Upload-Post.com** account with your social profiles connected.
  - **OpenAI API key** (Whisper).
  - **Google Gemini API key** (AI Studio).
  - **Nano Banana Pro / fal.ai** key (for thumbnails).

- **Runtime**
  - n8n instance (cloud or self-hosted).
  - FFmpeg available where n8n runs (Docker image, VM, etc.) for local checks if needed (the heavy lifting is delegated to Upload-Post FFmpeg jobs).

- **Configuration**
  - Create Telegram credentials with your bot token.
  - Create Upload-Post credentials with your API token.
  - Set `upload_post_user` and `pinterest_board_id` in the `Edit Fields` node.
  - Optionally replace:
    - Example face image URL used for Nano Banana Pro.
    - LinkedIn organization ID.
    - Any language / tone in the AI agent system prompts.

---

## Ideal Use Cases

- **Creators & influencers** who want to post to every platform from **one Telegram chat**.
- **Agencies** who want a “content butler” clients can use without touching n8n.
- **Solo devs & makers** who publish workflows, devlogs and product updates and want:
  - Multi-platform video posts.
  - Voice → LinkedIn/X/Threads posts.
  - Easy text-based video editing and thumbnail generation.

Install this template, plug in your keys, talk to your bot in Telegram, and turn it into your **all-in-one AI social media machine**.


## 📊 Basic Information

- **Workflow ID:** 9363
- **Complexity:** advanced
- **Node Count:** 104
- **Views:** 1532
- **Downloads:** 153
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9363)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** (×2)
- **noOp** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×38)
- **telegram** (×21)
- **@n8n/n8n-nodes-langchain.googleGemini** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×5)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **if** (×6)
- **n8n-nodes-upload-post.uploadPost** (×3)
- **httpRequest** (×9)
- **wait** (×2)
- **debugHelper** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 104 nodes with 60 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
