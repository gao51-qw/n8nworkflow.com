# Generate influencer posts with GPT-4, Google Sheets, and Media APIs

> This template transforms uploaded brand assets into **AI-generated influencer-style posts** — complete with captions, images, and videos — using n8n, OpenAI, and your preferred image/video generation APIs.

---

### 🧠 Who it’s for
Marketers, creators, or brand teams who want to speed up **content ideation** and **visual generation**.  
Perfect for social-media teams looking to turn product photos and brand visuals into ready-to-review creative posts.

---

### ⚙️ How it works
1. **Upload your brand assets** — A form trigger collects up to three files: product, background, and prop.  
2. **AI analysis & content creation** — An OpenAI LLM analyzes your brand tone and generates post titles, captions, and visual prompts.  
3. **Media generation** — Connected image/video generation workflows create corresponding visuals.  
4. **Result storage** — All captions, image URLs, and video URLs are automatically written to a Google Sheet for review or publishing.

---

### 🧩 How to set it up
1. Replace all placeholders in nodes:
   - `&lt;&lt;YOUR_SHEET_ID&gt;&gt;`
   - `&lt;&lt;FILE_UPLOAD_BASE&gt;&gt;`
   - `&lt;&lt;YOUR_API_KEY&gt;&gt;`
   - `&lt;&lt;YOUR_N8N_DOMAIN&gt;&gt;/form/&lt;&lt;FORM_ID&gt;&gt;`
2. Add your own credentials in:
   - **Google Sheets**
   - **HTTP Request**
   - **AI/LLM** nodes
3. Execute the workflow or trigger via form.
4. Check your connected Google Sheet for generated posts and media links.

---

### 🛠️ Requirements
| Tool | Purpose |
|------|----------|
| **OpenAI / compatible LLM key** | Caption & idea generation |
| **Image/Video generation API** | Creating visuals |
| **Google Sheets credentials** | Storing results |
| *(Optional)* n8n Cloud / self-hosted | To run the workflow |

---

### 🧠 Notes
- The workflow uses **modular sub-workflows** for image and video creation; you can connect your own generation nodes.  
- All credentials and private URLs have been removed.  
- Works seamlessly with both **n8n Cloud** and **self-hosted** setups.  
- Output is meant for **creative inspiration** — review before posting publicly.

---

### 🧩 Why it’s useful
- Speeds up **campaign ideation** and **content creation**.  
- Provides structured, reusable results in Google Sheets.  
- Fully visual, modular, and customizable for any brand or industry.

---

### 🧠 Example Use Cases
- Influencer campaign planning  
- Product launch creatives  
- E-commerce catalog posts  
- Fashion, lifestyle, or tech brand content

---

### ✅ Security & best practices
- No hardcoded keys or credentials included.  
- All private URLs replaced with placeholders.  
- Static data removed from the public JSON.  
- Follows n8n’s template structure, node naming, and sticky-note annotation guidelines.

---

### 📦 Template info
**Name:** AI-Powered Influencer Post Generator with Google Sheets and Image/Video APIs
**Category:** AI / Marketing Automation / Content Generation  
**Author:** Palak Rathor  
**Version:** 1.0 (Public Release — October 2025)

## 📊 Basic Information

- **Workflow ID:** 10364
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 396
- **Downloads:** 39
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10364)

## 👤 Author

- **Name:** Palak Rathor
- **Username:** @palakrathor

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×8)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **extractFromFile** (×3)
- **httpRequest** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitOut** 
- **executeWorkflow** (×2)
- **filter** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
