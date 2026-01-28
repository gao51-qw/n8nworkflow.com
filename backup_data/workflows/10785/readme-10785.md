# Generate custom icons with OpenAI GPT image & Google Drive auto-storage

> 
## Workflow Description:

Turn a simple text idea into production-ready icons in seconds. With this workflow, you input a subject (e.g., “Copy”, “Banana”, “Slack Mute”), select a style (Flat, 3D, Cartoon, etc.), and off it goes.

Here’s what happens:

1. A form trigger collects your icon subject, style and optional background.
3. The workflow uses an LLM to construct an optimised prompt.
5. An image-generation model (OpenAI image API) renders a transparent-background, 400×400 px PNG icon.
7. The icon is automatically uploaded to Google Drive, and both a download link and thumbnail are generated.
9. A styled completion card displays the result and gives you a “One More Time” option.

Perfect for designers, developers, no-code creators, UI builders and even home-automation geeks (yes, you can integrate it with Home Assistant or Stream Deck!). It saves you the manual icon-hunt grind and gives consistent visual output across style variants.

## 🔧 Setup Requirements:

- n8n instance (self-hosted or cloud)
- OpenAI API access (image generation enabled)
- Google Drive credentials (write access to a folder)
- (Optional) Modify to integrate Slack, Teams or other file-storage destinations

## ✅ Highlights & Benefits:

- Fully automated prompt creation → consistent icon quality
- Transparent background PNGs size-ready for UI use
- Saves icons to Drive + gives immediate link/thumbnail
- Minimal setup, high value for creative/automation workflows
- Easily extendable (add extra sizes, style presets, share via chat/bot)

## ⚠️ Notes & Best-Practices:

- Check your OpenAI image quota and costs - image generation may incur usage.
- Confirm Google Drive folder permissions to avoid upload failures.
- If you wish a different resolution or format (e.g., SVG), clone the image node and adjust parameters.



## 📊 Basic Information

- **Workflow ID:** 10785
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10785)

## 👤 Author

- **Name:** Arkadiusz
- **Username:** @akadiusz

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **form** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleDrive** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
