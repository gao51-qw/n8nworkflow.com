# Create AI sci‑fi book review videos with ChatGPT, Fal.ai and Nexrender

> This n8n workflow is an end-to-end AI-powered video generation pipeline that takes a dataset of sci-fi book, generates reviews with GenAI, dynamically injects assets into After Effects via Nexrender, and automatically produces fully rendered videos — ready for publishing.

It demonstrates:
    •    AI content generation inside render jobs
    •    Dynamic After Effects templating
    •    Adaptive composition logic
    •    Fully automated creative production at scale

Built as a demo for the Nexrender n8n integration, it shows how to turn raw ideas into finished video content with zero manual editing.

Requirements:
1. Nexrender Trial - https://www.nexrender.com/get-trial,
2. N8N - https://n8n.io/,
3. Fal.ai - https://fal.ai/,
4. After Effects Project file - https://drive.google.com/file/d/1XmDcBMM34IFQ2Cv28pzumDmk2OwW2_9q/view?usp=share_link,
5. Nexrender Integration - https://n8n.io/integrations/nexrender/

How It Works:
• Imports a sci-fi books dataset into n8n
• Uses GenAI (ChatGPT) to generate book reviews and narrative content
• Cleans and structures the AI output for video rendering
• Dynamically injects text and assets into an After Effects template via n8n Nexrender Integration
• Submits the job to Nexrender for rendering
• Generates AI-powered visuals inside the render job
• Automatically adjusts composition length based on each review
• Outputs a fully produced video — no manual editing required


## 📊 Basic Information

- **Workflow ID:** 12270
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 15
- **Downloads:** 1
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12270)

## 👤 Author

- **Name:** nexrender
- **Username:** @nexrender

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)
- **@nexrender/n8n-nodes-nexrender.nexrender** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
