*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### How it works

This n8n workflow helps you build a fully automated **SEO content engine** using [Scrapeless](https://www.scrapeless.com/?utm_source=n8n&utm_campaign=seo-engine) and AI. It’s designed for teams running international websites—such as SaaS products, e-commerce platforms, or content-driven businesses—who want to grow **targeted search traffic** through **high-conversion content**, without relying on manual research or hit-or-miss topics.

The flow runs in **three key phases**:

#### 🔍 Phase 1: Topic Discovery  
Automatically find **high-potential long-tail keywords** based on a seed keyword using Google Trends via Scrapeless. Each keyword is analyzed for trend strength and categorized by priority (P0–P3) with the help of an AI agent.

#### 🧠 Phase 2: Competitor Research  
For each P0–P2 keyword, the flow performs a Google Search (via [Deep SerpAPI](https://www.scrapeless.com/en/product/deep-serp-api?utm_source=n8n&utm_campaign=seo-engine)) and extracts the top 3 organic results. Scrapeless then crawls each result to extract full article content in clean Markdown. This gives you a structured, comparable view of how competitors are writing about each topic.

#### ✍️ Phase 3: AI Article Generation  
Using AI (OpenAI or other LLM), the workflow generates a **complete SEO article draft**, including:
- SEO title
- Slug
- Meta description
- Trend-based strategy summary
- Structured JSON-based article body with H2/H3 blocks

Finally, the article is stored in **Supabase** (or any other supported DB), making it ready for review, API-based publishing, or further automation.

### Set up steps

This flow requires intermediate familiarity with n8n and API key setup. Full configuration may take **30–60 minutes**.

#### ✅ Prerequisites

- **Scrapeless** account (for Google Trends and web crawling)
- **LLM provider** (e.g. OpenAI or Claude)
- **Supabase** or **Google Sheets** (to store keywords & article output)

#### 🧩 Required Credentials in n8n

- `Scrapeless API Key`
- `OpenAI (or other LLM)` credentials
- `Supabase` or `Google Sheets` credentials

---

#### 🔧 Setup Instructions (Simplified)

1. **Input Seed Keyword**  
   Edit the “Set Seed Keyword” node to define your niche, e.g., `"project management"`.

2. **Google Trends via Scrapeless**  
   Use Scrapeless to retrieve “related queries” and their interest-over-time data.

3. **Trend Analysis with AI Agent**  
   AI evaluates each keyword's trend strength and assigns a priority (P0–P3).

4. **Filter & Store Keyword Data**  
   Group and sort keywords by priority, then store them in Google Sheets.

5. **Competitor Research**  
   Use Deep SerpAPI to get top 3 Google results. Crawl each using Scrapeless.

6. **AI Content Generation**  
   Feed competitor content + trend data into AI. Output a structured SEO blog article.

7. **Store Final Article**  
   Save full article JSON (title, meta, slug, content) to Supabase.