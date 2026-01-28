# One-click YouTube shorts generator with Leonardo AI, GPT and ElevenLabs

> ## 🎬 What it does  
This workflow creates an engaging YouTube Short with a single click — from script to voiceover, to visuals and background music.  
It combines several AI tools to automate content creation and final video assembly.

---

## ⚙️ How it works  
- Accepts an input prompt or topic  
- Generates script using GPT  
- Converts script to voiceover using ElevenLabs  
- Generates b-roll style images via Leonardo.Ai  
- Matches background music  
- Assembles a vertical 1080×1920 MP4 video using JSON render config  
- Optionally uploads to YouTube or saves to Cloudinary

---

## 🧰 Setup steps  
- Add your credentials:  
  - Leonardo API (image generation)  
  - ElevenLabs (voiceover)  
  - Cloudinary (upload destination)  
  - Any GPT-based text generator

- Drop your audio/music file in the right node  
- Replace API expressions with your own credentials

&gt; 🟨 Full step-by-step instructions are in sticky notes inside the workflow.


## 📊 Basic Information

- **Workflow ID:** 5683
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 15615
- **Downloads:** 1561
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5683)

## 👤 Author

- **Name:** Huzaifa Tahir
- **Username:** @huzaifa404

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **set** (×3)
- **httpRequest** (×10)
- **splitOut** 
- **aggregate** 
- **merge** 
- **wait** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
