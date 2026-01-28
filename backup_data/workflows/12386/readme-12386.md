# Create SEO blog drafts in WordPress from trending topics with Perplexity and HuggingFace

> Automatically discover trending developer and security topics, generate SEO-optimized blog posts, and publish them to WordPress as drafts — complete with AI-generated featured images.

### How it works
1. **Discover trends** — Perplexity AI identifies the hottest topic from the last 24-48 hours
2. **Queue topics** — Topics are saved to Google Sheets for tracking and management
3. **Generate content** — Perplexity creates complete blog posts with titles, sections, keywords, and meta descriptions
4. **Create draft** — Content is published as a WordPress draft for your review
5. **Generate image** — HuggingFace FLUX creates a featured image based on the content
6. **Attach media** — The image is uploaded to WordPress and assigned to the post

### Setup steps
1. Add credentials for Perplexity AI, Google Sheets, WordPress, and HuggingFace
2. Create a Google Sheet with columns: `Topic`, `is_generated`, `title`, `content`, `keywords`, `meta_description`
3. Replace `YOUR_GOOGLE_SHEET_ID` in the Google Sheets nodes with your sheet ID
4. Replace `your-site.com` with your WordPress site URL
5. Replace `YOUR_TOKEN_HERE` with your HuggingFace API token
6. Update the `authorId` in the WordPress node to match your author

### Tools used
- **Perplexity AI** — Trend discovery and content generation
- **Google Sheets** — Topic queue and workflow tracking
- **WordPress REST API** — Post creation and media uploads
- **HuggingFace FLUX** — AI image generation

Ideal for developers, content marketers, and agencies who want automated content pipelines with editorial control.

## 📊 Basic Information

- **Workflow ID:** 12386
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 79
- **Downloads:** 7
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12386)

## 👤 Author

- **Name:** Nayankumar Thakor
- **Username:** @nayanthakor

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×3)
- **wordpress** 
- **httpRequest** (×3)
- **perplexity** (×2)
- **googleSheets** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
