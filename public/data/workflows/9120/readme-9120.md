# Automate SEO blog pipeline from keywords to WordPress with GPT-5 & fal.ai images

> # ✍️ AI-Powered SEO Blog Automation Workflow

**Complete PostgreSQL-backed system:** Keyword scoring → AI research → Multi-part content generation → fal.ai Nano Banana image generation → WordPress publishing

**Real Example:** [AI Applications in Real Estate Playbook](https://taskmorphr.com/blog/ai-applications-in-real-estate-playbook) — fully generated, optimized, and published with this automation.


![image.png](fileId:2747)
## 🚀 What You Get

### Full n8n Workflow Package
- **Pre-configured automation** with 80+ connected nodes
- **PostgreSQL schema** for keyword tracking & blog management
- **3-phase system**: Scoring → Planning → Generation
- **Setup documentation** with customization guide

### Each Blog Post Includes
- 2,100+ words across 6 sections (Intro, Dev 1, Dev 2, Conclusion, FAQ, Header)
- 2 AI-generated images via **fal.ai Nano Banana** (16:9 format)
- Internal links to your existing content
- External citations to authoritative sources
- Complete SEO metadata (title, slug, description, tags)
- WordPress-ready draft

## ⚡ Core Features

**Keyword Intelligence**
- Multi-factor scoring algorithm (volume, competition, CPC, relevance)
- Usage tracking prevents cannibalization
- AI agent selects optimal clusters avoiding impossible competition

**AI Content Pipeline**
- Perplexity Sonar Pro deep research
- GPT-5 parallel section generation
- Grade 13-15 reading level
- Natural keyword distribution (no over-optimization)

**Image Generation**
- **fal.ai Nano Banana model** for contextual visuals
- Featured image (16:9) from research summary
- Body image (16:9) embedded in content
- Automatic alt text generation
- 10s wait + 5s retry logic

**Automation Infrastructure**
- Queries existing posts to prevent duplicates
- Scheduled execution (every 2-3 days)
- Error handling with retry logic
- Non-blocking image generation

## 🔗 Required Services

- OpenAI (GPT-5, GPT-4o)
- OpenRouter (GPT-5 Mini)
- Perplexity AI (Sonar Pro)
- **fal.ai (Nano Banana model)**
- WordPress REST API
- PostgreSQL database
- n8n instance

## 📊 Database Schema

**Keywords Table** - Tracks scoring, usage, and Google Ads metrics
**Cluster Blog Table** - Manages topic pipeline and published URLs

Full SQL schema included in setup documentation.

## 🎯 Production Ready

- **10-15 posts/week** on autopilot
- **60% faster** than sequential generation (parallel processing)
- **Usage tracking** prevents keyword reuse
- **Customizable** scoring weights and relevance terms for any niche

## 🛠️ Setup Process

1. Import n8n JSON workflow
2. Create PostgreSQL tables (schema provided)
3. Add API credentials
4. Import keywords from Google Ads Planner
5. Customize relevance terms for your industry
6. Configure schedules and domain URL
7. Test manually → Enable automation

## 💡 Perfect For

- Content marketers scaling to 10+ posts/week
- SEO agencies managing multiple sites
- Niche site builders needing consistent output
- WordPress users wanting hands-off publishing
- Low-authority sites targeting winnable keywords

## 🔧 Key Customization Points

- Scoring algorithm weights (volume/competition/CPC/relevance)
- Relevance terms for your industry (default: AI/automation)
- Publishing schedule (daily/3x week/weekly)
- Content length per section
- Image aspect ratio and format
- Website domain URL

---

**Stop writing blogs manually.** This workflow handles research, writing, fal.ai Nano Banana image generation, linking, and publishing while you focus on strategy.

## 📊 Basic Information

- **Workflow ID:** 9120
- **Complexity:** advanced
- **Node Count:** 96
- **Views:** 148
- **Downloads:** 14
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9120)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×14)
- **markdown** 
- **wordpress** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **perplexity** 
- **splitOut** (×2)
- **aggregate** (×5)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×8)
- **@n8n/n8n-nodes-langchain.chainLlm** (×9)
- **code** (×4)
- **stickyNote** (×17)
- **postgres** (×11)
- **limit** (×2)
- **scheduleTrigger** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **httpRequest** (×4)
- **wait** (×4)
- **splitInBatches** 
- **postgresTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 96 nodes with 74 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
