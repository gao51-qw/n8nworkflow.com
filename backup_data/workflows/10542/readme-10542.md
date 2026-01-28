# Auto-generate Shopify blog related articles with OpenAI text-embedding-3-small

> ### 🪐 Use case

Automatically surface and insert the three most relevant “Related articles” at the end of every Shopify blog post to boost session depth, SEO, and reader engagement.

---

### ⚙️ What this workflow does

* Pulls all published articles from a selected **Shopify Blog** using the Admin API.
* Cleans the HTML content (removes existing `.related-articles` blocks) and extracts text for embeddings.
* Generates **OpenAI embeddings** (`text-embedding-3-small`) and stores them in **n8n Data Tables**.
* Calculates **semantic similarity** (cosine distance) between articles to identify the top matches.
* Selects the **Top 3** most relevant related posts for each article (configurable).
* Dynamically builds a `<div>` HTML section and updates the article on Shopify.
* Runs on a weekly schedule to keep relations fresh as new content is added.

---

### 🧩 Setup

1. **Create 3 Data Tables**:

   * `articles`
   * `article_relations`
   * `article_related_links_snapshot`

2. **Add credentials**:

   * Shopify Admin API Access Token
   * OpenAI API Key

3. **Set environment variables** in the *Workflow Configuration* node:

   * `shopifyBlogId`
   * `shopifyBlogDomain`
   * `shopifyStoreName`
   * `shopApiVersion`
   * `percent_minimum_similarity` (default `70`)

4. *(Optional)* Keep or modify the **Schedule Trigger** (default: every week at 20:00).

---

### 🛠️ How to adjust this template

* Modify the similarity threshold or number of related posts displayed.
* Edit the HTML snippet or CSS classes for the related section.
* Integrate a second OpenAI model to rewrite link titles or summaries for better UX.

---

### 💡 Ideal for

Shopify content teams and SEO strategists who want **automated, context-aware internal linking** to improve engagement and organic ranking.

## 📊 Basic Information

- **Workflow ID:** 10542
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 122
- **Downloads:** 12
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10542)

## 👤 Author

- **Name:** Geoffroy
- **Username:** @jojoq42

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×3)
- **code** (×6)
- **splitInBatches** (×2)
- **dataTable** (×5)
- **if** (×2)
- **noOp** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
