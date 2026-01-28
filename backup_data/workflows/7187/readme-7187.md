# Automate content publishing to TikTok, YouTube, Instagram, Facebook via Blotato

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![Workflow Screenshot](https://www.dr-firas.com/Auto-Publish-blotato.png)

# Automate Content Publishing to TikTok, YouTube, Instagram, Facebook via Blotato

---

### 🎯 Who is this for?

This workflow is perfect for:
- Content creators who post daily to multiple platforms  
- Marketing teams managing brand presence across channels  
- Solo entrepreneurs and social media managers looking to scale their output  
- Anyone tired of uploading content manually across apps  

---

### 💡 What problem is this solving?

Managing content across platforms is time-consuming.  
You need to:
- Track posts per platform  
- Upload videos manually  
- Adapt captions and posting time  
- Avoid repetitive mistakes

This workflow solves all of that by centralizing everything in one place (Google Sheets) and automating it via Blotato.

---

### ⚙️ What this workflow does

Every hour, this workflow will:
1. Check your Google Sheet for any post marked as `"TO GO"`  
2. Select one item at a time (avoids spam and overposting)  
3. Extract media from a shared Google Drive link  
4. Upload the media to **Blotato**  
5. Publish it automatically to:
   - TikTok  
   - YouTube Shorts  
   - Instagram  
   - Facebook  
6. Update the post status in your Sheet to `"Posted"`

---

### 🧰 Setup

Before running this template, make sure you have:

- ✅ A Blotato account (Pro plan required for API key)  
- 🔑 Generated your Blotato API key (`Settings &gt; API &gt; Generate`)  
- 📦 Enabled **Verified Community Nodes** in n8n Admin Panel  
- 🧩 Installed the **Blotato** node via the community nodes list  
- 🛠 Created a Blotato credential in n8n using your API key  
- ☁️ Made sure your media folder in Google Drive is set to **Anyone with the link can view**  
- 📌 Followed the 3 setup steps in the **brown sticky notes** inside the workflow  

---

### 🛠 How to customize this workflow

- Add new platform nodes (LinkedIn, Threads, Pinterest, etc.) using Blotato  
- Adjust the scheduling frequency from hourly to daily or weekly  
- Add an approval layer (Slack/Telegram) before publishing  
- Customize your captions dynamically using GPT or formulas in Sheets  
- Use tags, categories, or campaign tracking for analytics

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Blotato-2473d6550fd980e19983f69611a80a0d?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 7187
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 4173
- **Downloads:** 417
- **Created:** 2025/8/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7187)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **stickyNote** (×3)
- **scheduleTrigger** 
- **googleSheets** (×2)
- **@blotato/n8n-nodes-blotato.blotato** (×10)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
