# This workflow automates your LinkedIn content curation and posting using AI.

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
