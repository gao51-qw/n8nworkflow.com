# Repurpose YouTube videos and publish via Blotato with Telegram, Sheets and GPT-4.1-mini

> # 💥 Automate YouTube Video Creation and Publishing with Blotato

![Workflow Overview](https://www.dr-firas.com/youtube-blotato2.png)

### Who is this for?

This workflow is designed for **YouTube creators, content marketers, automation builders, and agencies** who want to **repurpose existing YouTube videos into new original content** and **automate the publishing process**.  
It is especially useful for users already working with **Telegram, Google Sheets, OpenAI, and Blotato**.

---

### What problem is this workflow solving? / Use case

Creating YouTube content at scale is time-consuming: extracting ideas from existing videos, rewriting scripts, generating SEO metadata, tracking content, and publishing videos all require manual work across multiple tools.

This workflow solves that by:
- Automating **content analysis and rewriting**
- Centralizing **tracking and approvals in Google Sheets**
- Automating **YouTube publishing via Blotato**

---

### What this workflow does

This workflow automates the full **YouTube video repurposing and publishing pipeline**:

1. Receives a **YouTube video URL and instructions via Telegram**
2. Logs the request in **Google Sheets**
3. Extracts the **YouTube video ID**
4. Retrieves the **video transcript via RapidAPI**
5. Cleans and normalizes the transcript
6. Generates a **new original video script** using OpenAI
7. Generates **SEO metadata** (title, description, tags) in strict JSON format
8. Updates Google Sheets with the generated content
9. Waits for approval (`status = ready`)
10. Uploads the final video to **Blotato**
11. Publishes the video on **YouTube**
12. Updates the status to `publish` in Google Sheets

---

### Setup

To use this workflow, you need to configure the following services:

#### Google Services
- Enable Google Sheets API in Google Cloud Console
- Create OAuth2 credentials
- Add credentials in n8n: **Google Sheets OAuth2 API**
- Credential name: `Google Sheets account`
- **[My Google Sheets : copy](https://docs.google.com/spreadsheets/d/1A-LpZ8OGn8FP692Hx50j3sEuPgIhlyMOrJ1jUNGwHr8/copy)** 

#### RapidAPI (YouTube Transcript)
- Sign up at [RapidAPI](https://rapidapi.com)
- Subscribe to "YouTube Video Summarizer GPT AI"
- Get your API key
- Update in **Workflow Configuration** node

#### BLOTATO (Video Publishing)
- Sign up at [BLOTATO](https://blotato.com/?ref=firas)
- Get API credentials
- Add credentials in n8n: **Blotato API**
- Credential name: `Blotato account`
- Connect your YouTube account via BLOTATO
---

### How to customize this workflow to your needs

You can easily adapt this workflow by:

- Changing the **output language** (`output_lang`) in the configuration node
- Modifying the **OpenAI prompts** to match your tone or niche
- Adjusting Google Sheets columns or approval logic
- Replacing YouTube with another platform supported by Blotato
- Extending the workflow to generate **shorts, reels, or multi-platform posts**

The workflow is modular and designed to be extended without breaking the core logic.

### 🎥 [Watch This Tutorial](https://youtu.be/szKueQ7Aen8)

![SORA2 logo](https://www.dr-firas.com/workflow-youtube.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/NonoBanan-PRO-2-2b53d6550fd981a5acbecf7cf50aeb3c?source=copy_link)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 📊 Basic Information

- **Workflow ID:** 12191
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 347
- **Downloads:** 34
- **Created:** 2025/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12191)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **code** (×3)
- **googleSheets** (×4)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **telegram** 
- **set** (×3)
- **@blotato/n8n-nodes-blotato.blotato** (×2)
- **googleDrive** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
