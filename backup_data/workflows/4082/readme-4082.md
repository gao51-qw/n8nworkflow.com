# Automate SEO blog creation + social media with GPT-4, Perplexity and WordPress

> # 🚀 AI Blog & Social Media Publisher – Fully Automated Workflow

This workflow is ideal for individuals, marketers, agencies, and brands who want to effortlessly automate the entire blogging and social media process—from idea generation to promotion. Its primary goal is to consistently deliver engaging, SEO-optimized blog posts directly to WordPress, accompanied by professionally crafted social media content ready for Instagram, Facebook, and X (Twitter).

No writers, editors, designers, or social media managers required. Save countless hours and resources while boosting your brand's online presence.

## 🔧 Workflow Capabilities:

-Automated Blog Topic Generation: Instantly generates unique, high-value blog ideas tailored to your brand.
-SEO Content Creation: Produces comprehensive, 2000–2500 word articles optimized for search engines.
-Real-Time Research: Integrates Perplexity AI to ensure factually accurate, authoritative content.
-Visual Content Generation: Creates custom, AI-generated featured images via GPT-4, with automatic fallback to Pexels.
-WordPress Publishing: Automatically publishes articles directly to WordPress with complete formatting (HTML), meta descriptions, featured images, and proper categorization.
-Social Media Automation: Generates and schedules engaging, platform-specific posts for Instagram, Facebook, and X, complete with relevant hashtags, calls-to-action, and links.
-Detailed Logging & Reporting: Logs every step transparently into Google Sheets and optionally sends publication reports to Gmail.

## ⚙️ How It Works:
When activated, the workflow checks your content calendar in Google Sheets to avoid duplicate topics. It generates fresh, brand-aligned blog ideas, conducts live research, and creates complete, ready-to-publish articles. It then automatically designs and sources appropriate visuals, publishes content seamlessly to WordPress, and prepares engaging social media posts optimized for each platform.

## 🛠️ Easy Setup Steps:
-Connect your APIs: OpenAI, WordPress, Google Sheets, Gmail, and optionally Pexels.
-Replace placeholders (WordPress URLs, Google Sheets ID/tab, workflow IDs).
-Customize AI prompts with your brand’s tone, keywords, and CTAs for personalized content.
-Configure scheduling to automate daily, weekly, or custom publishing intervals.

## 📌 Additional Features:
-Modular workflow design for easy customization and scalability.
-Comprehensive Markdown and PDF setup guides included.
-Bonus: Reference placeholders and quick-edit Sticky Notes for effortless adjustments.

## Launch today. Automate permanently. Amplify your reach effortlessly.

## 📊 Basic Information

- **Workflow ID:** 4082
- **Complexity:** advanced
- **Node Count:** 79
- **Views:** 5362
- **Downloads:** 536
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4082)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×23)
- **manualTrigger** 
- **executeWorkflowTrigger** 
- **notion** 
- **aggregate** (×2)
- **set** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×6)
- **@n8n/n8n-nodes-langchain.chainLlm** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **httpRequest** (×10)
- **wordpress** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleSheets** (×3)
- **markdown** 
- **scheduleTrigger** 
- **code** 
- **facebookGraphApi** (×3)
- **merge** (×3)
- **twitter** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 79 nodes with 54 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
