# Generate AI videos from text prompts with OpenAI Sora 2

> ## Sora 2 Video Generation: Prompt-to-Video Automation with OpenAI API

### Who’s it for
This template is ideal for content creators, marketers, developers, or anyone needing automated AI video creation from text prompts. Perfect for bulk generation, marketing assets, or rapid prototyping using OpenAI's Sora 2 API.

Example use cases:

- E-commerce sellers creating product showcase videos for multiple items without hiring videographers or renting studios

- Social media managers generating daily content like travel vlogs, lifestyle videos, or brand stories from simple text descriptions

- Marketing teams producing promotional videos for campaigns, events, or product launches in minutes instead of days

### How it works / What it does
- Submit a text prompt using a form or input node.
- Workflow sends your prompt to the Sora 2 API endpoint to start video generation.
- It polls the API to check if the video is still processing or completed.
- When ready, it retrieves the finished video's download link and automatically saves the file.
- All actions—prompt submission, status checks, and video retrieval—run without manual oversight.


### How to set up
1. Use your existing OpenAI API key or create a new one at https://platform.openai.com/api-keys

2. Replace Your_API_Key in the following nodes with your OpenAI API key: Sora 2Video, Get Video, Download Video

3. Adjust the Wait node for Video node intervals if needed — video generation typically takes several minutes

4. Enter your video prompt into the Text Prompt trigger form to start the workflow

### Requirements
- OpenAI account & OpenAI API key
- n8n instance (cloud or self-hosted)
- A form, webhook, or manual trigger for prompt submission

### How to customize the workflow
- Connect the prompt input to external forms, bots, or databases.
- Add post-processing steps like uploading videos to cloud storage or social platforms.
- Adjust polling intervals for efficient status checking.

### Limitations and Usage Tips
- Prompt Clarity: For optimal video generation results, ensure that prompts are clear, concise, and well-structured. Avoid ambiguity and overly complex language to improve AI interpretation.

- Processing Duration: Video creation may take several minutes depending on prompt complexity and system load. Users should anticipate this delay and design workflows accordingly.

- Polling Interval Configuration: Adjust polling intervals thoughtfully to balance prompt responsiveness with API rate limits, optimizing both performance and resource usage.

- API Dependency: This workflow relies on the availability and quota limits of OpenAI’s Sora 2 API. Users should monitor their API usage to avoid interruptions and service constraints.


## 📊 Basic Information

- **Workflow ID:** 9341
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1375
- **Downloads:** 137
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9341)

## 👤 Author

- **Name:** Barbora Svobodova
- **Username:** @barb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×3)
- **if** 
- **formTrigger** 
- **wait** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
