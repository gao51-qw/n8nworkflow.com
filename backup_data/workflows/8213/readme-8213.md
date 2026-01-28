# Generate AI videos from text or images with Veo 3 API and VietVid.com

> # Veo 3 Video Generator via VietVid.com API (n8n)

## Overview
This workflow leverages the **VietVid.com Veo3 model** to generate AI videos from simple text descriptions or optional images.  
Users interact via a **form interface**, inputting a prompt (e.g., a scene description), choosing aspect ratio and model, then the system automatically submits the request to the VietVid API, monitors the generation status in real time, and retrieves the final video output.  

It’s ideal for **content creators, marketers, and developers** exploring **text-to-video AI creation**, supporting intelligent video generation with minimal setup.

---

## Prerequisites
- A **VietVid.com account and API key**: Register at [VietVid.com](https://vietvid.com) to obtain your free or paid API key.  
- An active **n8n instance** (cloud or self-hosted) with HTTP Request, Wait, and form submission capabilities.  
- Basic knowledge of **AI prompts for video generation** to achieve optimal results.  

---

## Setup Instructions

### 1. Obtain API Key
- Register at **VietVid.com** and generate your API key.  
- Store it securely—**do not share publicly**.  

### 2. Configure the Form
- In the **Form Trigger** node, ensure the following fields are available:
  - `text_prompt` — video description (e.g., *“A serene mountain landscape at sunset with birds flying”*)  
  - `ImageURL [optional]` — optional image input for image-to-video  
  - `api_Token` — your VietVid API key  
  - `aspect_Ratio [16:9,9:16]` — dropdown to select ratio  
  - `model` — choose between `veo3` and `veo3_fast`  

### 3. Test the Workflow
- Click **Execute Workflow** in n8n.  
- Access the generated form URL.  
- Submit your **prompt, API key, and options**.  
- The workflow will **poll the VietVid API every 10 seconds** until the video is ready.  

### 4. Handle Outputs
- The final **Set node** formats and displays the video links:
  - `720p_link` — always available when ready.  
  - `1080p_link` — available only for **16:9 aspect ratio**.  

---

## Customization Tips
- **Enhance prompts**: Add details like style (*realistic, cinematic, animated*), duration, actions, and camera/lighting for better results.  
- **Stability**: Fix the `seeds` value (e.g., `50000`) for more consistent characters.  
- **Webhook Response**: Add a **Webhook Response node** to return a clean JSON payload for frontend integrations.  
- **Adjust polling delay**: Modify Wait node (8–15s) if needed to balance speed vs. API calls.  


## 📊 Basic Information

- **Workflow ID:** 8213
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1355
- **Downloads:** 135
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8213)

## 👤 Author

- **Name:** Tran Trung Nghia
- **Username:** @trungnghialk

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×7)
- **formTrigger** 
- **httpRequest** (×2)
- **wait** 
- **set** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
