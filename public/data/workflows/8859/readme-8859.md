# Generate AI product ad images from Google Sheets using Fal.ai and OpenAI

> ⚠️ **Note:** All sensitive credentials should be set via **n8n Credentials** or environment variables. Do **not** hardcode API keys in nodes.

---

## Who’s it for

Marketers, creators, and automation builders who want to generate **UGC-style ad images** automatically from a Google Sheet. Ideal for e‑commerce SKUs, agencies, or teams that need many variations quickly.

---

## What it does (Overview)

This template turns a spreadsheet row into **ad images** ready for campaigns.

* **Zone 1 — Create Ad Image**: Reads product rows, downloads image, analyzes it, generates prompts, appends results back into Google Sheet.
* **Zone 2 — Create Image (Fal nano‑banana)**: Generates ad image variations, polls Fal.ai API until done, uploads to Drive, and updates sheet with output URLs.

---

## Requirements

* **Fal.ai API key** (env: FAL\_KEY)
* **Google Sheets / Google Drive** OAuth2 credentials
* **OpenAI (Vision/Chat)** for image analysis
* A Google Sheet with columns for product and output
* Google Drive files set to **Anyone with link → Viewer** so APIs can fetch them

---

## How to set up

1. **Credentials**: Add Google Sheets + Google Drive (OAuth2), Fal.ai (Header Auth with Authorization: Key {{\$env.FAL\_KEY}}), and OpenAI.
2. **Google Sheet**: Create sheets with the following headers.

### Sheet: `product`

```
product_id | product_name | product_image_url | product_description | campaign | brand_notes | constraints | num_variations | aspect_ratio | model_target | status
```

### Sheet: `ad_image`

```
scene_ref | product_name | prompt | status | output_url
```

3. **Import the workflow**: Use the provided JSON. Confirm node credentials resolve.
4. **Run**: Start with Zone 0 to verify prompt-only flow, then test Zone 1 for image generation.

---

## Zone 1 — Create Ad Image (Prompt-only)

Reads product row, normalizes Drive link, analyzes image, generates structured ad prompts, appends to `ad_image` sheet.

---

## Zone 2 — Create Image (Fal nano‑banana)

Reads product row, converts Drive link, generates image(s) with Fal nano‑banana, polls until complete, uploads to Drive, updates sheet.

---

## Node settings (high‑level)

**Drive Link Parser (Set)**

```js
{{ (() =&gt; {
  const u = $json.product || '';
  const q = u.match(/[?&]id=([\-\w]{25,})/);
  const d = u.match(/\/d\/([\-\w]{25,})/);
  const any = u.match(/[\-\w]{25,}/);
  const id = q?.[1] || d?.[1] || (any ? any[0] : '');
  return id ? 'https://drive.google.com/uc?export=view&id=' + id : '';
})() }}
```

---

## How to customize the workflow

* Adjust **AI prompts** to change ad style (luxury, cozy, techy).
* Change **aspect ratio** for TikTok/IG/Shorts (`9:16`, `1:1`, `16:9`).
* Extend Sheet schema for campaign labels, audiences, hashtags.
* Add distribution (Slack/LINE/Telegram) after Drive upload.

---

## Troubleshooting

* **JSON parameter needs to be valid JSON** → Ensure expressions return objects, not strings.
* **403 on images** → Make Drive files public (Viewer) and convert links.
* **Job never completes** → Check `status_url`, retry with `*-fast` models or off‑peak times.

---

## Template metadata

* **Uses:** Google Sheets, Google Drive, HTTP Request, Wait/If/Switch, Code, OpenAI Vision/Chat, Fal.ai models (nano‑banana)

---

## Visuals

### Workflow Diagram

![Workflow Diagram](https://drive.google.com/thumbnail?id=1rxWxNznX2R8k9HbG1t9Gxb47UN0-oTbQ&sz=w1200)

### Example Product Image

![Alt text](https://drive.google.com/thumbnail?id=1hyFmGf4MEWcOwOqYwYpJj1ZJurui5BCm\&sz=w300)

## Product Image - nano Banana
![Alt text](https://drive.google.com/thumbnail?id=1Vzqb9HVfQYcj1HKk_-lU6ETULtO8eOn3&sz=w300)  ![Alt text](https://drive.google.com/thumbnail?id=1tSEd8Di4aKT2jL9GSeDO32mBNkllV5aV&sz=w300)  ![Alt text](https://drive.google.com/thumbnail?id=1gS0wIAIikbxCcFSQsBQDefMP0PY50zWW&sz=w300)  ![Alt text](https://drive.google.com/thumbnail?id=1eHTDoroLkD94fhUqW2OLHcvEwMWl5Wk5&sz=w300)


## 📊 Basic Information

- **Workflow ID:** 8859
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 354
- **Downloads:** 35
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8859)

## 👤 Author

- **Name:** Jaruphat J.
- **Username:** @jaruphatj

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitOut** 
- **stickyNote** (×4)
- **wait** 
- **if** 
- **httpRequest** (×4)
- **set** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
