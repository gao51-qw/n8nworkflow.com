# Generate AI video avatars from URLs with HeyGen, Gemini & upload to social media

> ![image.png](fileId:3248)

This workflow turns any URL (news article, blog post, or even an n8n workflow page) into a vertical short video with your AI avatar explaining it ready for TikTok, Instagram Reels, and YouTube Shorts. It fetches the page, generates a tight 30–45s script and platform-optimized descriptions, captures a dynamic background of the page (animated scroll or static image), composes and renders the video with HeyGen (free split‑screen or paid clean cut‑out), and sends it to Upload-Post with an optional human review step.

***Note: You can generate full videos end‑to‑end using free trials—no credit card required—for all APIs used in this template (Google Gemini, ScreenshotOne, HeyGen, Upload‑Post).***

### Who Is This For?
- **Creators & Marketers:** Explain articles, launches, and workflows without filming or editing.
- **Media & Newsletters:** Turn breaking stories into clear, shareable shorts.
- **Agencies:** Scale content creation with review gates and multi-account publishing.
- **Founders & Product Teams:** Maintain an on-brand presence in minutes.

### What Problem Does It Solve?
Making platform-native explainers is slow and inconsistent. This workflow:
- **Writes the script with AI:** ~30s hook-led monologue with key facts.
- **Optimizes per platform:** Tailored captions for TikTok, Reels, and Shorts.
- **Generates the video automatically:** Uses the page itself as background + avatar voiceover.
- **Publishes everywhere:** Optional review, then one-click multi-platform posting.

### How It Works
1. **URL Input:** Paste any page to convert (article, blog, or workflow).
2. **AI Agent (Gemini):** Reads the page and produces a single script (~30s) + platform-specific descriptions.
3. **Video Background:** Animated scroll capture (9:16) or featured image via ScreenshotOne.
4. **HeyGen Composition & Render:**
   - Free: split-screen vertical (avatar bottom, background top).
   - Paid: clean avatar cut‑out over video/image (background removal).
5. **Render & Poll:** Waits for HeyGen to finish and retrieves the final MP4.
6. **Human Review (optional):** Approve or reject in a simple form.
7. **Publish (Upload-Post):** Uploads to TikTok, Instagram (Reels), and YouTube Shorts with AI-generated titles/descriptions.

### Setup
1. **Credentials (all offer free trials, no credit card required):**
   - HeyGen API (`X-Api-Key`) + your `avatar_id` and `voice_id`.
   - ScreenshotOne API key.
   - Upload-Post (connect your social accounts).
   - Google Gemini (chat model).
2. **Variables in “Set Input Vars”:**
   - `workflow_url`: page to convert.
   - `background_removal`: `true` (paid) or `false` (free).
   - `background_type`: `video` (animated scroll) or `photo` (static).
3. **Publishing:** Choose platforms in Upload-Post; enable review if you want to approve before posting.

### Requirements
- **Accounts:** n8n, HeyGen, ScreenshotOne, Upload-Post, Google (Gemini).
- **API Keys:** HeyGen, ScreenshotOne, Gemini; Upload-Post credentials.
- **Assets:** An avatar and a voice available in HeyGen.

### Features
- **URL → Short in minutes:** 9:16 vertical (720×1280).
- **Pro script with hook:** Clear, natural, ~30s.
- **Two render modes:** Split-screen (free) or clean cut‑out (paid).
- **Background from the page:** Animated scroll or main image.
- **Human-in-the-loop:** Approval before going live.
- **Multi-publish:** TikTok, Instagram Reels, YouTube Shorts via Upload-Post.
- **Start free:** Generate videos with free trials across all APIs—no credit card required.

## 📊 Basic Information

- **Workflow ID:** 10642
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 1190
- **Downloads:** 119
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10642)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **if** (×5)
- **wait** (×2)
- **httpRequest** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **manualTrigger** 
- **n8n-nodes-upload-post.uploadPost** 
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
