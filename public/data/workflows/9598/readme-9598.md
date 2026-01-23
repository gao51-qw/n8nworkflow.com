# Create & publish YouTube Shorts on historical what-ifs with GPT-4o & Blotato

> # Workflow Description: Automated YouTube Short Viral History (Blotato + GPT-4.1)

This workflow is a powerful, self-sustaining **end-to-end content automation pipeline** designed to feed your YouTube Shorts channel with consistent, high-quality, and highly engaging videos focused on **"What if history..."** scenarios.

This solution completely eliminates manual intervention across the creative, production, and publishing stages. It expertly links the creative power of a **GPT-4o AI Agent** with the video rendering capabilities of the **Blotato API**, all orchestrated by **n8n**.

## **How It Works**

The automation runs through a five-step, scheduled process:

1.  **Trigger and Idea Generation**: The **Schedule Trigger** starts the workflow (default is 10:00 AM daily). The **AI Agent** (GPT-4o) acts as a copywriter/researcher, automatically brainstorming a random "What if history..." topic, researching relevant facts, and formulating a viral, hook-driven 60-second video script, along with a title and caption.
2.  **Visual Production Request**: The formatted script is sent to the **Blotato API** via the **Create Video** node. Blotato begins rendering the text-to-video short based on the pre-set style parameters (**cinematic** style, specific voice ID, and AI models).
3.  **Status Check and Wait**: The **Wait** node pauses the workflow, and the **Get Video** node continually checks the Blotato system until the video rendering status is confirmed as `done`.
4.  **Media Upload**: The completed video file is uploaded to the Blotato media library using an **HTTP Request** node, preparing it for publishing.
5.  **Automated Publishing**: The final **YT Post** node (another HTTP Request to the Blotato API) automatically publishes the video to your linked YouTube channel, using the video URL and the AI-generated title and short caption.

## **Set Up Steps**

To activate and personalize this powerful content pipeline in n8n, follow these steps:

1.  **OpenAI Credential**: Ensure your **OpenAI API** key credential is created and connected to the **Brainstorm Idea** node (Language Model). The workflow uses **GPT-4o** by default.
2.  **Blotato API Key**: Obtain your **Blotato API Key**.
    * Open the **Prepare Video** node and manually insert your Blotato API Key into the `blotato_api_key` field.
3.  **YouTube Account ID**: Find the Account ID (or Channel ID) for the YouTube channel you want to post to.
    * Open the **Prepare for Publish** node and manually insert your YouTube Account ID into the `youtube_id` field.
4.  **Customize Video Style (Optional)**: If desired, adjust the visual aesthetic by modifying parameters in the **Prepare Video** node, such as:
    * `voiceId`: To change the video narrator.
    * `style`: To change the visual theme (e.g., from `cinematic` to `documentary`).
    * `text_to_image_model` and `image_to_video_model`: To change the underlying AI generation models.
5.  **Activate Workflow**: Save the workflow and toggle the main switch to **Active**. The first video will be created and published on the next scheduled run.

## 📊 Basic Information

- **Workflow ID:** 9598
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 703
- **Downloads:** 70
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9598)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **scheduleTrigger** 
- **wait** 
- **stickyNote** (×5)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
