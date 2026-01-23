# Create a one-minute video from Telegram prompts with Veo 3 and Fal.ai

> # One-Minute VEO Video Generator  
## Automated, Consistent, High-Quality Short-Form Video Creation

This workflow turns a single Telegram prompt into a fully generated, visually consistent, one-minute video using **Veo 3**. It’s built for creators, agencies, and brands that want fast, scalable short-form content without sacrificing quality.

Whether you're posting on **YouTube Shorts**, **TikTok**, **Instagram Reels**, or need polished short ads, this automation gives you studio-level output on autopilot.

---

## 🚀 What This Workflow Does
The workflow listens for a specific Telegram message and instantly triggers a complete AI-powered production pipeline:

- Generates one minute of smooth, coherent video  
- Ensures visual consistency across all scenes  
- Saves all video assets in Google Drive  
- Uses public sharing links so FAL can reliably process and merge clips  
- Delivers the final result back to the user automatically

It’s your fully automated video studio — no timeline editing, no manual rendering, no hassle.

---

## ⚡ How to Use It

### **1 — Send a Prompt to Telegram**
Message your bot with the trigger command, along with the topic for your video. Example:

&gt; “/makevideo Create a motivational video about resilience.”

This immediately starts the workflow.

### **2 — Let AI Build Your One-Minute Video**
Using Veo 3, the system:
- Generates structured, consistent video scenes  
- Maintains coherent visuals from start to finish  
- Keeps pacing smooth and story flow intact  

You don't have to write a script or prompt multiple times — everything is handled automatically.

### **3 — Auto-Store Assets in Google Drive**
Each generated clip is uploaded into a public, designated Google Drive folder.  
This allows **FAL** to fetch and process the video URLs seamlessly during merging and final production.

### **4 — Receive the Final Video**
Once complete, the workflow sends you the fully generated one-minute video directly in Telegram.  
You can save it, post it, or reuse it as needed.

---

## 📈 Perfect For Fast Content Growth

### **Great For:**
- YouTube Shorts  
- TikTok  
- Instagram Reels  
- Facebook Reels  
- X video posts  
- Any short-form content platform  

### **Also Ideal For:**
- Short ads  
- Promo videos  
- B2B explainer clips  
- Training content  
- Course material intros  

Anywhere you need fast, consistent, high-quality video — this workflow delivers.

---

## 🎯 Summary
This workflow simplifies content creation to one step: **send a Telegram prompt**.  
Everything else — generation, consistency, merging, hosting, delivery — is fully automated.

If you want a reliable, scalable way to create one-minute videos for social growth or marketing, this automation is one of the most efficient systems you can deploy.



## 📊 Basic Information

- **Workflow ID:** 11540
- **Complexity:** advanced
- **Node Count:** 52
- **Views:** 111
- **Downloads:** 11
- **Created:** 2025/12/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11540)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.googleGemini** (×7)
- **telegramTrigger** 
- **httpRequest** (×3)
- **if** (×2)
- **telegram** (×10)
- **googleDrive** (×7)
- **set** (×7)
- **merge** 
- **wait** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×6)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 52 nodes with 37 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
