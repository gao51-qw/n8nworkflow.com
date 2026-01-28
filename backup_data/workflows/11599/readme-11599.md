# Repurpose blog & YouTube content to social media with GPT-5.1 and Google Docs

> Transform blog posts, YouTube videos, or any text into LinkedIn posts, Twitter threads, email newsletters, and more with GPT-5.1


### Who is this for?

- **Content creators** who want to maximize reach from every piece of content
- **Marketing teams** repurposing long-form content for social media
- **Founders & executives** sharing thought leadership across platforms
- **Agencies** creating multi-platform content packages for clients
- **Solopreneurs** who need to be everywhere but have limited time

### What problem does it solve?

Creating platform-specific content is time-consuming. A single blog post could become LinkedIn posts, Twitter threads, email newsletters, and video scripts-but manually adapting content for each platform takes hours.

This workflow automates the entire process. Drop in a URL or paste your content, and get 7+ ready-to-use content pieces in under 2 minutes.

### What this workflow does

**Step 1: Content Input**
- Submit via simple web form
- Accepts blog URLs, YouTube URLs, or raw text
- Optional: specify target audience and custom instructions

**Step 2: Smart Extraction**
- **Blog posts:** Fetches and extracts article content, removes navigation/ads
- **YouTube videos:** Gets video metadata and description via YouTube API
- **Raw text:** Processes directly with automatic title detection

**Step 3: AI Content Generation**
GPT-4.1/5.1 analyzes your content and generates platform-optimized variations:

| Output | What You Get |
|--------|-------------|
| **LinkedIn Posts** | 3 variations (story-driven, list format, contrarian angle) |
| **Twitter/X Thread** | 7-tweet thread + alternative hook for A/B testing |
| **Email Newsletter** | 3 subject lines + preview text + full body |
| **Key Takeaways** | 5 actionable bullet points |
| **Quote Cards** | 5 shareable quotes ready for graphics |
| **Video Script** | 60-second script (hook → problem → solution → CTA) |

**Step 4: Google Docs Output**
- Everything saved to a beautifully formatted Google Doc
- Organized by platform
- Copy, customize, and publish!

### Outputs Generated

**LinkedIn Posts (3 variations):**
- Story-driven emotional hook
- List/tips format for engagement
- Contrarian/hot take angle
- Each includes: hook, body, CTA, hashtags

**Twitter/X Thread (7 tweets):**
- Scroll-stopping hook
- Logical flow through your key points
- Clear CTA at the end
- Alternative hook for A/B testing

**Email Newsletter:**
- 3 subject line options (curiosity, benefit, direct)
- Preview text
- Conversational body copy
- Clear CTA

**Key Takeaways:**
- 5 actionable insights
- Perfect for bullet points, carousels, or summaries

**Quote Cards:**
- 5 impactful, shareable quotes
- Context included for each
- Ready for Canva/social graphics

**Video Script:**
- 60-second format
- Hook → Problem → Solution → Proof → CTA structure
- Visual suggestions included

### Setup Instructions

#### Required Credentials

**1. OpenAI API**
- Get your API key from [platform.openai.com](https://platform.openai.com)
- Add as "OpenAI API" credential in n8n
- Used for: Content generation (GPT-4o)

**2. Google Docs**
- Create OAuth2 credentials in Google Cloud Console
- Enable Google Docs API
- Add as "Google Docs OAuth2" credential in n8n
- Used for: Saving generated content

#### Optional Credentials

**3. YouTube OAuth2 (use same clientId and secret as above)**

- Enable YouTube Data API v3
- Add a new "YouTube OAuth2 API" credential:
  - Client ID and Secret, same as above
- Used for: Better video metadata extraction

### How to Use

1. **Import the workflow** into your n8n instance
2. **Configure credentials** (OpenAI required, Google Docs required, YouTube optional)
3. **Activate the workflow**
4. **Open the form URL** (shown in Form Trigger node)
5. **Submit your content:**
   - Select content type (Blog URL, YouTube URL, or Raw Text)
   - Paste URL or content
   - (Optional) Add target audience
   - (Optional) Add custom instructions
6. **Get your Google Doc link** with all generated content!

### Customization Options

**Modify the AI prompt:**
- Edit "AI Content Generator" node
- Adjust tone guidelines
- Add industry-specific instructions
- Change output formats

**Change output destination:**
- Replace Google Docs with Notion, Airtable, or other platforms
- Add Slack notification with summary
- Email the doc link

**Add more platforms:**
- Instagram captions
- Pinterest descriptions
- Podcast show notes

### Example Use Case

**Input:**
- Blog post URL: `https://example.com/10-tips-for-startup-founders`
- Target audience: "First-time startup founders"
- Instructions: "Focus on practical, actionable advice"

**Output (in ~90 seconds):**
- 3 LinkedIn posts with founder-focused hooks
- 7-tweet thread breaking down the top tips
- Email newsletter to subscribers
- 5 quotable insights for graphics
- 60-second video script for TikTok/Reels

### Estimated Costs

| Service | Cost |
|---------|------|
| OpenAI (GPT-5.1) | ~$0.01-0.03 per generation |
| YouTube API | Free (10,000 queries/day) |
| Google Docs API | Free |

**Total per use:** ~$0.02-0.04

### Tips for Best Results

1. **Longer content = better output** - Articles with 1000+ words generate richer variations
2. **YouTube videos need captions** - Videos without captions may have limited output
3. **Specify your audience** - Adding target audience improves relevance significantly
4. **Use custom instructions** - Guide the AI toward your preferred tone and focus

### Support

Questions or need customization? Contact [Agentical AI](https://agenticalai.com)

---

## 📊 Basic Information

- **Workflow ID:** 11599
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 121
- **Downloads:** 12
- **Created:** 2025/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11599)

## 👤 Author

- **Name:** AK Pasnoor
- **Username:** @ak-pasnoor

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **formTrigger** 
- **if** (×2)
- **httpRequest** (×3)
- **code** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleDocs** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
