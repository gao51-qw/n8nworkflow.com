# Generate SEO blog content with GPT-4, Perplexity & WordPress auto-publishing

> This n8n workflow automates the creation of high-quality, SEO-optimized blog posts using AI. It pulls keyword data from Google Sheets, conducts research via Perplexity AI, generates structured content (title, introduction, key takeaways, body, conclusion, and FAQs) with OpenAI and Anthropic models, assembles the post, performs final edits, converts to HTML, and publishes directly to WordPress. Ideal for content marketers, bloggers, or agencies looking to scale content production while maintaining relevance and engagement.
Key Features

Keyword-Driven Generation: Fetches primary keywords, search intent, and related terms from a Google Sheets spreadsheet to inform content strategy.
AI Research & Structuring: Uses Perplexity for in-depth topic research and OpenAI/Anthropic for semantic analysis, outlines, and full content drafting.
Modular Content Creation: Generates sections like introductions, key takeaways, outlines, body, conclusions, and FAQs with tailored prompts for tone, style, and SEO.
Assembly & Editing: Combines sections into a cohesive Markdown post, adds internal/external links, and applies final refinements for readability and flow.
Publishing Automation: Converts Markdown to styled HTML and posts drafts to WordPress.
Customization Points: Easily adjust AI prompts, research depth, or output formats via Code and Set nodes.

Requirements

Credentials: OpenAI API (for GPT models), Perplexity API (for research), Google Sheets OAuth2 (for keyword input), WordPress API (for publishing).
Setup: Configure your Google Sheets with columns like "keyword", "search intent", "related keyword", etc. Ensure the sheet is shared with your Google account.
Dependencies: No additional packages needed; relies on n8n's built-in nodes for AI, HTTP, and data processing.

How It Works

Trigger & Input: Start manually or schedule; pulls keyword data from Google Sheets.
Research Phase: Uses Perplexity to gather topic insights and citations from reputable sources.
Content Generation: AI nodes create title, structure, intro, takeaways, outline, body, conclusion, and FAQs based on research and SEO guidelines.
Assembly & Refinement: Merges sections, embeds links, edits for polish, and converts to HTML.
Output: Publishes as a WordPress draft or outputs the final HTML for manual use.

Benefits

Time Savings: Automate 80-90% of content creation, reducing manual writing from hours to minutes.
SEO Optimization: Incorporates primary/related keywords naturally, aligns with search intent, and includes semantic structures for better rankings.
Scalability: Process multiple keywords in batches; perfect for content calendars or high-volume blogging.
Quality Assurance: Built-in editing ensures engaging, error-free content with real-world examples and data-backed insights.
Versatility: Adaptable for any niche (e.g., marketing, tech, finance) by tweaking prompts or sheets.

Potential Customizations

Add more AI models (e.g., via custom nodes) for varied tones.
Integrate image generation or social sharing for full content pipelines.
Filter sheets for specific topics or add notifications on completion.

## 📊 Basic Information

- **Workflow ID:** 7509
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 2478
- **Downloads:** 247
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7509)

## 👤 Author

- **Name:** rana tamure
- **Username:** @tamure

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **manualTrigger** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×10)
- **googleSheets** (×2)
- **perplexity** 
- **wordpress** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
