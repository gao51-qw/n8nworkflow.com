# Create AI news avatar videos with Dumpling AI, GPT-4o and HeyGen

> ## 🧾 What this workflow does

This workflow automatically generates avatar-style videos from the latest AI-related news using Dumpling AI and HeyGen. It runs every hour, scrapes trending articles, turns them into 30–60 second spoken scripts with GPT-4o, and produces short avatar videos with HeyGen. Finally, it logs the final video URL in a Google Sheet.

---

## 👤 Who is this for

- Newsletters and creators who want to automate AI trend updates  
- Content marketers generating short-form video content  
- Product teams experimenting with AI-generated summaries  
- Automation enthusiasts combining LLMs + video + trending data  

---

## ⚙️ How to set up

### 🔐 Requirements
- **Dumpling AI API Key** stored securely as HTTP Header credential  
- **HeyGen API Key** added as an HTTP Header credential  
- **OpenAI API Key** for GPT-4o (can use GPT-4o-mini if preferred)  
- **Google Sheets account** with one column: `Video link`  

### 🛠 Step-by-step setup

1. **Google Sheet Setup**  
   - Create a Google Sheet with a single column named: `Video link`

2. **Update Credentials**  
   - Use n8n’s credential manager to add tokens for:  
     - Dumpling AI  
     - HeyGen  
     - OpenAI  
     - Google Sheets

3. **Optional Customizations**
   - In the "Dumpling AI: Search AI News" node, you can change `"query": "AI Agent"`  
     to other trending keywords (e.g., `"Generative AI"`, `"Autonomous Agents"`, etc.)
   - Update the `avatar_id` and `voice_id` in the HeyGen request to match your preferred look/sound

---

## 🧠 How it works

1. The Schedule Trigger runs hourly.  
2. Dumpling AI searches for fresh news related to "AI Agent."  
3. The top 4 news links are scraped for full content.  
4. Articles are merged and fed into GPT-4o via a LangChain Agent to produce a casual, conversational video script.  
5. HeyGen creates a video using the script, avatar, and voice.  
6. The workflow waits until the video rendering is complete.  
7. Once done, the final video link is logged into Google Sheets.

---

## 🧪 Customization Ideas

- Change the interval (e.g., every 6 hours, daily)
- Swap avatar/voice in HeyGen to fit your brand
- Expand to post the video directly to social media
- Add image background or B-roll overlays using Creatomate


---

This is a fast, automated pipeline to create explainer-style AI news updates using real-time data and generative video tools.


## 📊 Basic Information

- **Workflow ID:** 5796
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 3919
- **Downloads:** 391
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5796)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×4)
- **splitOut** 
- **limit** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **wait** (×2)
- **if** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
