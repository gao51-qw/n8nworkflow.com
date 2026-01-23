# Automated SEO blog publishing with WordPress, OpenAI & Perplexity

> # Automated Blog n8n System – Professional Articles in Minutes  

Most blogs publish words.  
This system publishes **experiences**.  

With one simple row in Google Sheets, your blog comes alive with **SEO & RAO-friendly WordPress articles** — written, illustrated, and published without lifting a finger.  

What makes it different? Not just automation. Not just speed. It’s the way **images are woven between paragraphs**, giving your readers a richer, more engaging journey. Instead of walls of text, every article feels alive — easier to read, easier to share, and impossible to ignore.  

---

## ✨ What this workflow delivers  
- **End-to-end automation**: idea → research → writing → visuals → publishing.  
- **SEO & RAO optimized**: content built to rank in Google *and* surface in AI systems.  
- **Built-in storytelling with visuals**: Perfect Images embedded directly inside the article body, making every post more compelling.  
- **Seamless WordPress publishing**: titles, excerpts, slugs, body, and featured image in one click.  
- **Effortless setup**: designed so anyone can run it, even without technical skills.  

---

## 🔧 Requirements  
- Google Sheets (title, short_description, created)  
- WordPress site with REST API + credentials  
- OpenAI API key (text + image generation)  
- Perplexity API key (research)  
- Cloudinary account with unsigned upload preset  
- *(Optional)* Pexels API key for stock header images  

---

## ✅ Perfect for  
- Bloggers who want their content to *stand out* visually.  
- Agencies managing client blogs and SEO projects.  
- Businesses that need engaging, living content on autopilot.  
- Anyone ready to turn a silent blog into a **beautiful, automated publishing machine**.  


## 📊 Basic Information

- **Workflow ID:** 7965
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 199
- **Downloads:** 19
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7965)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **splitOut** 
- **splitInBatches** 
- **httpRequest** (×8)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **limit** 
- **scheduleTrigger** 
- **perplexityTool** 
- **googleSheets** (×3)
- **wordpress** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
