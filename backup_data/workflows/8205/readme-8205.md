# Generate UGC ads from Google Sheets with Fal.ai models (nano-banana, WAN2.2, Veo3)

> ⚠️ **Note:** All sensitive credentials should be set via **n8n Credentials** or environment variables. Do **not** hardcode API keys in nodes.

---

## Who’s it for
Marketers, creators, and automation builders who want to generate **UGC-style ad images and short videos** automatically from a Google Sheet. Ideal for e‑commerce SKUs, agencies, or teams that need many variations quickly.

---

## What it does (Overview)
This template turns a spreadsheet row into **ad images** and optionally **5–8s videos**.

- **Zone 0 — Image-only pipeline (Gemini/OpenRouter)**: Creates an ad image from a product link and prompt, uploads it to Drive, and updates the sheet (no video step).
- **Zone 1 — Create image (Fal nano‑banana) + prepare for video**: Generates an image via Fal.ai, polls status, fetches URL, then analyzes the image with LLM to prepare scene prompts.
- **Zone 2 — Generate video (WAN2.2 & Veo3)**: Uses the generated image + structured scene prompts to create short clips, uploads them to Drive, and writes the video URL back to the sheet.

---

## Requirements
- **Fal.ai API key** (env: `FAL_KEY`)
- **Google Sheets / Google Drive** OAuth2 credentials
- **OpenAI / Gemini (via OpenRouter)** for image analysis or alternative image generation
- A Google Sheet with columns, e.g.: `product | presenter | prompt | img_url | video_url`
- Google Drive files set to **Anyone with link → Viewer** so APIs can fetch them

---

## How to set up
1. **Credentials**: Add Google Sheets + Google Drive (OAuth2), Fal.ai (Header Auth with `Authorization: Key {{$env.FAL_KEY}}`), and OpenAI/OpenRouter.
2. **Google Sheet**: Create the columns above. Paste product image Drive links (the workflow converts them to direct links automatically).
3. **Import the workflow**: Use the provided JSON. Confirm node credentials resolve.
4. **Run**: Start with Zone 0 to verify image-only flow, then test Zone 1 + Zone 2 for full image→video.

---

## Zone 0 — Create Ad Image (Image-only)
This path is for creating **just an image** and stopping. It reads the **Gemini** tab in the Sheet, generates an image via OpenRouter/Gemini, converts base64 to a file, uploads to Drive, and writes back `img_url`.

**Key nodes**
- **Get Data1 (Google Sheets)** → reads `Gemini` tab
- **setImgeURL (Set)** → converts Drive URLs to direct (`uc?export=view&id=...`)
- **CreateImagebyOpernRouter (Gemini)** → calls `google/gemini-2.5-flash-image-preview:free`
- **wait20sec (Wait)** → small delay
- **setBase64data (Code)** → splits data URI into `{ data, mimeType, fileName }`
- **Convert to File** → creates binary
- **uploadImagetoGdrive (Google Drive)** → uploads image
- **updateImageURL (Google Sheets)** → writes back `img_url`

---

## Zone 1 — Create Image (Fal nano‑banana) + Prepare for Video
Reads product rows, normalizes Drive links, generates image with **Fal nano‑banana**, polls until complete, fetches the output image URL, then runs an **image analysis** (OpenAI Vision) to prepare structured text for the video step.

**Key nodes**
- **Get Data (Google Sheets)** → reads `nanoBanana` tab
- **Edit Fields (Set)** → converts Drive links to direct (`uc?export=view&id=...`)
- **Call Fal.ai API (nanoBanana)** → `POST https://queue.fal.run/fal-ai/nano-banana/edit`
- **Get image status / If / Wait / Get the image** → job polling until complete
- **Analyze image (OpenAI Vision)** → returns structured description (brand text, colors, type, short description)

---

## Zone 2 — Generate Video (WAN2.2 & Veo3)
Creates a 5–8s UGC clip using the generated image + structured scene prompt.

**Key nodes**
- **Describe Each Scene for Video (AI Agent)** → expands analysis + user intent into detailed scene sections (Characters, Scene Background, Camera Movement, Movement in Scene, Sound Design)
- **Structured Output Parser2 (Schema)** → enforces consistent JSON structure
- **Veo3 (HTTP)** → `POST /fal-ai/veo3/image-to-video` with prompt + `image_url`
- **Call Fal.ai API (WAN2.2) [Optional]** → `POST /fal-ai/wan/v2.2-a14b/image-to-video`
- **Wait for the video / Get the video status / Video status / Get the video** → polling loop
- **HTTP Request (Download File)** → downloads MP4
- **uploadImagetoGdrive1 (Google Drive)** → uploads video
- **updateVideoURL (Google Sheets)** → writes back `video_url`

---

## Node settings (high‑level)
- **Drive Link Parser (Set)**
  ```js
  {{ (() =&gt; {
    const u = $json.product || '';
    const q = u.match(/[?&]id=([-\w]{25,})/);
    const d = u.match(/\/d\/([-\w]{25,})/);
    const any = u.match(/[-\w]{25,}/);
    const id = q?.[1] || d?.[1] || (any ? any[0] : '');
    return id ? 'https://drive.google.com/uc?export=view&id=' + id : '';
  })() }}
---

## How to customize the workflow

* Adjust **AI prompts** to change ad style (funny, luxury, cozy, techy).
* Change **video aspect ratio** for TikTok/IG/Shorts (`9:16`, `1:1`, `16:9`).
* Extend Sheet schema for campaign labels, audiences, hashtags.
* Add distribution (Slack/LINE/Telegram) after Drive upload.

---

## Troubleshooting

* **JSON parameter needs to be valid JSON** → Ensure expressions return objects, not strings.
* **403 on images** → Make Drive files public (Viewer) and convert links.
* **Video never completes** → Check `status_url`, retry with `*-fast` models or off‑peak times.

---

## Template metadata

* **Uses:** Google Sheets, Google Drive, HTTP Request, Wait/If/Switch, Code, Convert to File, OpenAI/Gemini (optional), Fal.ai models (nano‑banana, WAN2.2, Veo3)
* **Source workflow JSON:** Gemini\_NanoBanana\_Template.json (node names and connections match)

## Product Image
![Alt text](https://drive.google.com/thumbnail?id=1ROt8xvXvpcodXzgNBOlrNQVuiwV1qeRT&sz=w600)
## Product Image - nano Banana
![Alt text](https://drive.google.com/thumbnail?id=13ZwkKDBfvDw2TXSGFOo7xZL5jd6JTfHK&sz=w600)

## Product Video - Veo3
![Alt text](https://drive.google.com/thumbnail?id=1RSLfg3e2ZqJsKv5YLmmGOX7zHHUYEJKK&sz=w600)

## Product Video - Wan2.2
![Alt text](https://drive.google.com/thumbnail?id=1cdV0Q3j15X5zMvEPhwAQM1uHcGiZIJl1&sz=w600)

## 📊 Basic Information

- **Workflow ID:** 8205
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 3972
- **Downloads:** 397
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8205)

## 👤 Author

- **Name:** Jaruphat J.
- **Username:** @jaruphatj

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×6)
- **googleSheets** (×4)
- **convertToFile** 
- **set** (×2)
- **httpRequest** (×9)
- **wait** (×3)
- **code** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **splitInBatches** 
- **switch** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
