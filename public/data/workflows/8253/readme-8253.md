# WordPress SEO publisher with Anthropic AI, Google Docs & media auto

> ## 📄 What this workflow does
 This workflow turns a spreadsheet row into a fully formatted, media-rich WordPress article. It pulls the outline and brand context from Google Sheets/Docs, drafts the article with Anthropic or Gemini, enriches it with internal links, converts it to WordPress-ready HTML, uploads images to the WordPress Media Library, and updates your Google Sheet with links and statuses. Optionally, it can create WooCommerce products (kept disabled by default).

## 👤 Who is this for
- Content & SEO teams who publish long-form articles at scale.
- E-commerce teams creating product blogs/landing pages with galleries.
- Agencies and freelancers who want a repeatable, trackable content pipeline.
- Founders/marketers who want “brief → draft → images → publish” in one click.


## ✅ Requirements
- Google Sheets (content tracker with columns like Title, Query, Outline Link, Image Links, Status).
- Google Docs (for outline sources and saving final content).
- Anthropic &/or Gemini API access (drafting + transformations).
- WordPress site with REST API enabled (Basic/App Password auth) to upload media (and optionally create posts/products).
- SerpAPI key (for Google Images cover search) — optional; can be removed.
- (Optional) Perplexity API if you want the “read official docs once” tool for specs.


## ⚙️ How to set up
- Connect Google Sheets and select your tracking sheet/tab.
- Connect Google Docs (for reading the outline and saving the final article).
- Add Anthropic and/or Gemini credentials in n8n.
- Add WordPress credentials (REST API) in the HTTP Request nodes used for media upload (and product/post creation if enabled).
- (Optional) Add SerpAPI key for the image-cover search node.
- (Optional) Add Perplexity key in the Sonar node if you’ll parse official docs/specs.
- Publish/enable the Webhook (or your trigger), then test with a sample row (Status Writing = “Run”).


## 🔁 How it works
1. Trigger → Get Info (Sheets): Picks the next row marked to run and sets “Processing.”
2. Fetch Outline (Docs): Opens the outline link from the sheet.
3. Content Outline Generator & On-page (Anthropic/Gemini): Writes the article using brand context, E-E-A-T rules, and (optionally) reads official docs once via Perplexity Sonar.
4. Previous Posts → Aggregate → Add Internal Links (Gemini): Loads summaries/keywords of prior posts and injects at least 5 high-relevance internal links into the draft.
5. HTML Version: Converts the draft to strict WordPress-ready HTML (H1–H4, justified paragraphs, links, lists, blockquotes).
6. Post image to WordPress (sub-flow)
- Image Covers (SerpAPI): Finds a cover image by query.
- Google Sheets + Code: Parses Image Links and Product Image columns; converts Google Drive shares into direct downloads.
- Split & HTTP Requests: Downloads each image and uploads to WordPress Media Library.
- Aggregate + Code: Builds an HTML gallery snippet from uploaded URLs.
7. Update Google Doc: Inserts the final article content into a Google Doc and stores the link.
8. Merge → Update Status to Sheet: Writes back Content Final, Outline Link, statuses (Draft/Complete), and any media links.
9. (Optional) Create WooCommerce Product: Disabled by default—enable if you want automatic product creation using the article HTML and gallery.

## 💡 About Margin AI
[Margin AI](https://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, and chatbot development.



## 📊 Basic Information

- **Workflow ID:** 8253
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8253)

## 👤 Author

- **Name:** Cong Nguyen
- **Username:** @cong-nguyen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** (×6)
- **googleDocs** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **webhook** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **aggregate** (×4)
- **httpRequest** (×6)
- **code** (×3)
- **splitOut** (×2)
- **merge** (×2)
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 36 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
