# Generate videos from chat with Google Vertex AI (Veo3)

> Generate Videos from Chat with Google Vertex AI (Veo3) - Beginner Friendly

Description
Turn any text prompt into a short AI-generated video directly from an n8n chat. This workflow connects a chat trigger to Google Vertex AI’s Veo3 model, sending your prompt as input and polling until the rendered video is ready. Once complete, the video is converted into a downloadable file you can use anywhere. Perfect for experimenting with AI-driven media or automating creative video generation inside your workflows.

Watch step-by-step guide for these type of workflows here:
www.youtube.com/@automatewithmarc

How It Works

Chat Trigger – Start by typing your prompt into an n8n chat.

Post to Vertex AI (Veo3) – Sends the prompt to the Veo3 API with parameters like aspect ratio, duration, and resolution.

Wait + Poll Loop – Repeatedly checks the operation status until the video is finished.

If + Edit Fields – Extracts the base64 video response and metadata.

Convert to File – Turns the video into a binary file for download or use in further automations.

Why You’ll Love It

⚡ Generate custom AI videos in minutes.

🗣️ Natural workflow — just type your idea in chat.

🎥 Flexible parameters — adjust resolution, aspect ratio, and duration.

🔗 Ready for integration — feed the output into Google Drive, Slack, or any connected app.

Requirements

Google Cloud project with Vertex AI API enabled.

Google OAuth credentials in n8n.

n8n (Cloud or self-hosted).

## 📊 Basic Information

- **Workflow ID:** 7954
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1003
- **Downloads:** 100
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7954)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×2)
- **httpRequest** (×2)
- **set** 
- **convertToFile** 
- **if** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
