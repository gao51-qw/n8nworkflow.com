# Generate social media campaign images with Mistral AI & Pollinations.ai

> ## 📖 Description  

### 🔹 How it works  
This workflow uses **AI (Mistral LLM + Pollinations.ai)** to generate **high-quality visual content for social media campaigns**. It automates the process from **brand/campaign input** to **final image upload**, ensuring consistency and relevance.

1. **Input Brand & Campaign Data**  
   - Retrieves brand profile and campaign goals from Google Drive.  
   - Cleans and merges the data into a structured JSON format.  

2. **Campaign Goal Generation**  
   - AI summarizes campaign goals, audience, success metrics, and keywords.  
   - Produces a clear **campaign goal summary** for content planning.  

3. **Image Prompt Generation**  
   - AI creates **5 detailed image prompts** reflecting the campaign story.  
   - Includes **1 caption** and **4–6 relevant hashtags**.  

4. **Image Creation**  
   - Pollinations.ai generates images based on the AI prompts.  
   - Each image is renamed systematically (photo1 → photo5).  

5. **Post-Processing & Upload**  
   - All images are merged into a single item.  
   - Workflow uploads the final output to Google Drive for campaign use.  

---

## ⚙️ Set up steps  

1. **Connect Credentials**  
   - Add Google Drive and Mistral API credentials in n8n.  

2. **Configure Google Drive Input Nodes**  
   - Set `fileId` for brand profile and campaign goals.  

3. **Customize AI Prompts**  
   - Sticky notes explain AI nodes for goal summary and image prompt generation.  
   - Optionally modify tone, keywords, or target audience for brand-specific campaigns.  

4. **Check Image Output Nodes**  
   - Ensure Pollinations.ai HTTP request nodes are active.  
   - Verify renaming code nodes for proper photo sequence.  

5. **Activate Workflow**  
   - Test workflow manually to ensure images are generated and uploaded correctly.  

---
## 🔹 Data Handling & Output  

- This workflow **pulls brand profile and campaign goal data** from Google Drive.  
- Data is processed into **structured JSON**, including:  
  - **Brand Profile**: name, mission, vision, values, services, tone, keywords, contact info.  
  - **Campaign Goal**: primary goal, focus, success metrics, target audience, core message.  
- Supports **population of multiple campaigns or brands** dynamically.  
- JSON output can be used downstream for **image prompt generation, reporting, or analytics**.  
- All processing is **automated**, with clear nodes for extraction, parsing, and merging.  

---

**[pollinations.ai](https://pollinations.ai/)** is an open-source  free text and image generation API available.  No signups or API keys required. which  prioritize your privacy with zero data storage and completely anonymous usage.

---


⚡ **Result:** A fully automated **AI-to-image workflow** that transforms campaign goals into ready-to-use social media visuals, saving time and maintaining brand consistency.

## 📊 Basic Information

- **Workflow ID:** 8770
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 387
- **Downloads:** 38
- **Created:** 2025/9/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8770)

## 👤 Author

- **Name:** ResilNext
- **Username:** @rnair1996

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×5)
- **code** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleDrive** (×3)
- **stickyNote** (×6)
- **merge** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
