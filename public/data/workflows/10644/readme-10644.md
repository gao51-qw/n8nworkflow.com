# Create & auto-publish YouTube content with Gemini AI, face thumbnails & human review

> ![image.png](fileId:3296)

This workflow transforms any video you drop into a Google Drive folder into a ready-to-publish YouTube upload. It analyzes the video with AI to craft 3 high-CTR title ideas, 3 long SEO-friendly descriptions (with timestamps), and 10–15 optimized tags. It then generates 4 thumbnail options using your face and lets you pick your favorite before auto-publishing to YouTube via Upload-Post.


### Who Is This For?
- **YouTube Creators & Editors:** Ship videos with winning titles, thumbnails, and SEO in minutes.
- **Agencies & Media Teams:** Standardize output and speed across channels and clients.
- **Founders & Solo Makers:** Maintain consistent publishing with minimal manual work.

### What Problem Does It Solve?
Producing SEO metadata and high-performing thumbnails is slow and inconsistent. This flow:
- **Generates High-CTR Options:** 3 distinct angles for title/description/tags.
- **Creates Thumbnails with Your Face:** 4 options ready for review in one pass.
- **Auto-Publishes Safely:** Human selection gates reduce risk before going live.

### How It Works
1. **Google Drive Trigger:** Watches a folder for new video files.
2. **AI Video Analysis (Gemini):** Produces an in-depth Spanish description and timestamps.
3. **Concept Generation:** Returns 3 JSON concepts (title, thumbnail prompt, description, tags).
4. **User Review #1:** Pick your favorite concept in a simple form.
5. **Thumbnail Generation (fal.ai):** Creates 4 thumbnails using your face (provided image URL).
6. **User Review #2:** Choose the best thumbnail.
7. **Upload to YouTube (Upload-Post):** Publishes the video with your chosen title, description, tags, and thumbnail.

### Setup
1. **Credentials (all offer free trials, no credit card required):**
   - Google Gemini (chat/vision for analysis)
   - fal.ai API (thumbnail generation)
   - [Upload-Post](https://www.upload-post.com) ( [Connect your Youtube channel](https://app.upload-post.com/manage-users) and [generate api keys](https://app.upload-post.com/api-keys))
   - Google Drive OAuth (folder watch + file download)
2. **Provide Your Face Image URL(s):** Used by fal.ai to integrate your face into thumbnails.
3. **Select the Google Drive Folder:** Where you’ll drop videos to process.
4. **Pick & Publish:** Use the built-in forms to choose concept and thumbnail.

### Requirements
- **Accounts:** Google (Drive + Gemini), fal.ai, Upload-Post, n8n.
- **API Keys:** Gemini, fal.ai; Upload-Post credentials; Google Drive OAuth.
- **Assets:** At least one clear face image for thumbnails.

### Features
- **Three SEO Angles:** Distinct title/description sets to test different intents.
- **Rich Descriptions with Timestamps:** Ready for YouTube SEO and viewer navigation.
- **Face-Integrated Thumbnails:** 4 options aligned with the selected title.
- **Human-in-the-Loop Controls:** Approve concepts and thumbnails before publishing.
- **Auto-Publish via Upload-Post:** One click to push live to YouTube.
- **Start Free:** All API calls can run on free trials, no credit card required.

### Video demo 

https://www.youtube.com/watch?v=EOOgFveae-U

## 📊 Basic Information

- **Workflow ID:** 10644
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 1228
- **Downloads:** 122
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10644)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×10)
- **httpRequest** (×6)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **wait** (×3)
- **googleDriveTrigger** 
- **n8n-nodes-upload-post.uploadPost** 
- **googleDrive** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
