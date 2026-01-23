# Generate Funny AI Videos with Sora 2 and Auto-Publish to TikTok

> This automation creates a fully integrated pipeline to **generate AI-powered videos**, **store them**, and **publish them on TikTok** — all automatically.
It connects **OpenAI Sora 2**, and **Postiz (for TikTok publishing)** to streamline content creation.

---

### **Key Benefits**

✅ **Full Automation** – From text prompt to TikTok upload, everything happens automatically with no manual intervention once set up.
✅ **Centralized Control** – Google Sheets acts as a simple dashboard to manage prompts, durations, and generated results.
✅ **AI-Powered Creativity** – Uses **OpenAI Sora 2** for realistic video generation and **GPT-5** for optimized titles.
✅ **Social Media Integration** – Seamlessly posts videos to **TikTok** via **Postiz**, ready for your audience.
✅ **Scalable & Customizable** – Can easily be extended to other platforms like YouTube, Instagram, or LinkedIn.
✅ **Time-Saving** – Eliminates repetitive steps like manual video uploads or caption writing.

---

### How it works

This workflow automates the end-to-end process of generating AI videos and publishing them to TikTok. It is triggered either manually or on a recurring schedule.

1.  **Trigger & Data Fetch:** The workflow starts by checking a specified Form for new entries. It looks for rows where a video has been requested (a "PROMPT" is filled) but not yet generated (the "VIDEO" column is empty).

2.  **AI Video Generation:** For each new prompt found, the workflow sends a request to the **Fal.ai Sora 2** model to generate a video. It then enters a polling loop, repeatedly checking the status of the generation request every 60 seconds until the video is "COMPLETED".

3.  **Post-Processing & Upload:** Once the video is ready, the workflow performs several actions in parallel:
    *   **Fetch Video & Store:** It retrieves the final video URL, downloads the video file
    *   **Generate Title:** It uses the **OpenAI GPT-4o-mini** model to analyze the original prompt and generate an optimized, engaging title for the video.
    *   **Publish to TikTok:** The video file is uploaded to **Postiz**, a social media scheduling tool, which then automatically publishes it to a connected TikTok channel, using the AI-generated title as the post's caption.

---
### Set up steps

To make this workflow functional, you need to complete the following configuration steps:

1.  **Prepare the Google Sheet:**
    *   Create a Form with at least "PROMPT", "DURATION", and "VIDEO" fields.

2.  **Configure Fal.ai for Video Generation:**
    *   Create an account at [Fal.ai](https://fal.ai/) and obtain your API key.
    *   In both the **"Create Video"** and **"Get status"** HTTP Request nodes, set up the "Header Auth" credential.
    *   Set the `Name` to `Authorization` and the `Value` to `Key YOUR_API_KEY`.

3.  **Set up TikTok Publishing via Postiz:**
    *   Create an account on [Postiz](https://postiz.com/) and connect your TikTok account to get a **Channel ID**.
    *   Obtain your Postiz API key.
    *   In the **"Upload Video to Postiz"** and **"TikTok" (Postiz)** nodes, configure the API credentials.
    *   In the **"TikTok"** node, replace the placeholder `"XXX"` in the `integrationId` field with your actual TikTok Channel ID from Postiz.

4.  **(Optional) Configure AI Title Generation:**
    *   The **"Generate title"** node uses OpenAI. Ensure you have valid OpenAI API credentials configured in n8n for this node to work.

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 
## Header 2

## 📊 Basic Information

- **Workflow ID:** 10212
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 22086
- **Downloads:** 2208
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10212)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×5)
- **wait** 
- **stickyNote** (×6)
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **n8n-nodes-postiz.postiz** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
