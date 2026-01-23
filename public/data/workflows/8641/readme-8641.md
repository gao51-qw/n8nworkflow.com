# Generate & post animated anime wallpapers to TikTok with Flux AI and Fal AI

> **Automatically create AI-generated anime wallpapers, transform them into animated videos, and post them to TikTok — all with one n8n workflow.**

## What Problem Is This Workflow Solving? / Use Case  
Creating and publishing engaging anime content for TikTok is often time-consuming. From generating ideas, creating visuals, animating them, and finally uploading to TikTok, the process usually requires multiple tools and manual effort.  

This workflow solves that by automating the entire pipeline — from **anime wallpaper generation** to **video animation** and **auto-posting on TikTok** — all in one place. Perfect for content creators, anime enthusiasts, and marketers who want to consistently deliver fresh, unique TikTok content without the hassle.

---

## Who Is This For  
- **Anime Creators & Fans**: Share unique AI-generated anime content with your TikTok audience.  
- **Content Creators & Influencers**: Keep your TikTok feed active without spending hours designing and editing.  
- **Marketers & Social Media Managers**: Automate anime-themed campaigns to attract new audiences.  
- **Automation Enthusiasts**: Explore creative ways to connect AI models and publishing platforms using n8n.  
  
---

## What This Workflow Does  
- Collects anime topic & style via an **n8n Form** (or scheduled trigger).  
- Uses **Groq + GPT-OSS** to generate a text-to-image prompt.  
- Creates an anime wallpaper using the **Flux AI model (Pollination AI)**.  
- Transforms the wallpaper into an animated video with **Fal AI (Minimax Hailuo 02 Fast)**.  
- Automatically posts the final video to **TikTok** via the **GetLate API**.  

---

## How to Use  

1. **Set up Groq**  
   - Add your **Groq API Key** to the **Groq Chat Model** node.  
   - Select an LLM model (default: **OpenAI GPT-OSS 120B**).  

2. **Set up TikTok posting**  
   - Get your API key from [getlate.dev](https://getlate.dev/).  
   - Add the credentials to the **Upload IMG** and **TikTok Post** nodes.  

3. **Set up Fal AI for video generation**  
   - Get your API key from [Fal.ai](https://fal.ai/dashboard/keys) and top up credits.  
   - Add your **Fal AI credentials** to the **Create Video**, **Get Status**, and **Get Video** nodes.  

4. **Run the workflow**  
   - Open the **n8n Form URL** (Test or Production).  
   - Enter your anime topic and style.  
   - The workflow will generate the image, animate it, and post directly to TikTok.  

### Possible Customizations: 
- Replace the default **Form Trigger** with a **Scheduled Trigger**.  
- Connect a topics database (e.g., Google Sheets or Airtable) to automatically generate and post animated anime wallpapers on TikTok at regular intervals.  

## 📊 Basic Information

- **Workflow ID:** 8641
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 2686
- **Downloads:** 268
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8641)

## 👤 Author

- **Name:** Fariez
- **Username:** @kelaswfa

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **httpRequest** (×6)
- **wait** 
- **if** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
