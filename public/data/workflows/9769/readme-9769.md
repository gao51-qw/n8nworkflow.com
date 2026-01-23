# Auto-curate & post LinkedIn company page using RSS + Gemini AI + Templated.io

> # This workflow automates your LinkedIn content curation and posting using AI.

Every week, it pulls the latest marketing insights from an RSS feed (like HubSpot’s), analyzes them, and turns the best article into a crisp, human-style LinkedIn post — complete with **branded visuals and headline text** using the **Templated API**.

You can fully customize it for your own brand’s voice, niche, and platform.

## ⚙️ What It Does

📰 **Fetches articles** from any RSS feed you choose  

🧩 **Uses AI (Gemini)** to:
- Pick the most relevant article for your target audience  
- Rewrite it into a short, save-worthy post (&lt;200 words)  
- Optimize tone, clarity, and structure for readability  

🖼️ **Uses Templated API** to:
- Generate branded visuals with your own layout or assets  
- Auto-inject headline text into image templates  
- Maintain consistent post design across your feed  

🤖 **Auto-posts to LinkedIn** (only if AI confidence ≥7/10)  

---

## 🪄 Setup Instructions

- Replace the **RSS URL** in the “RSS Read” node with your preferred feed.  
- Connect your own credentials:
  - **Google Gemini (PaLM) API key** via Credentials  
  - **LinkedIn OAuth2 credentials**  
  - **Templated API credentials** (optional, for image/headline generation)  
- Review and tweak AI prompts in:
  - “Best Article Finder”  
  - “Content Creator”  
  - “Post Optimizer”  
- Adjust your posting frequency, tone, or feed to suit your brand.  
- Activate and let it run automatically.  

---

## 💡 Ideal For

- Solo marketers or consultants managing content calendars  
- Startup marketing teams automating top-of-funnel content  
- Founders building personal brands on LinkedIn  
- Creators who want branded visuals with consistent design


## 📊 Basic Information

- **Workflow ID:** 9769
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 395
- **Downloads:** 39
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9769)

## 👤 Author

- **Name:** Shrishti S Nagar
- **Username:** @shrishtisnagar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **rssFeedRead** 
- **aggregate** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **n8n-nodes-templated.templated** 
- **linkedIn** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
