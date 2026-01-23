# Domain-specific web content crawler with depth control & text extraction

> This template implements a recursive web crawler inside n8n. Starting from a given URL, it crawls linked pages up to a maximum depth (default: 3), extracts text and links, and returns the collected content via webhook.

---

## 🚀 How It Works

1) **Webhook Trigger**  
   Accepts a JSON body with a `url` field.  
   Example payload:
    
    { "url": "https://example.com" }

2) **Initialization**  
   - Sets crawl parameters: `url`, `domain`, `maxDepth = 3`, and `depth = 0`.  
   - Initializes global static data (`pending`, `visited`, `queued`, `pages`).

3) **Recursive Crawling**  
   - Fetches each page (HTTP Request).  
   - Extracts body text and links (HTML node).  
   - Cleans and deduplicates links.  
   - Filters out:
     - External domains (only same-site is followed)  
     - Anchors (#), mailto/tel/javascript links  
     - Non-HTML files (.pdf, .docx, .xlsx, .pptx)

4) **Depth Control & Queue**  
   - Tracks visited URLs  
   - Stops at `maxDepth` to prevent infinite loops  
   - Uses SplitInBatches to loop the queue

5) **Data Collection**  
   - Saves each crawled page (`url`, `depth`, `content`) into `pages[]`  
   - When `pending = 0`, combines results

6) **Output**  
   - Responds via the Webhook node with:
     - `combinedContent` (all pages concatenated)
     - `pages[]` (array of individual results)
   - Large results are chunked when exceeding ~12,000 characters

---

## 🛠️ Setup Instructions

1) **Import Template**  
   Load from n8n Community Templates.

2) **Configure Webhook**  
   - Open the **Webhook** node  
   - Copy the Test URL (development) or Production URL (after deploy)  
   - You’ll POST crawl requests to this endpoint

3) **Run a Test**  
   Send a POST with JSON:

    curl -X POST https://&lt;your-n8n&gt;/webhook/&lt;id&gt; \
      -H "Content-Type: application/json" \
      -d '{"url": "https://example.com"}'

4) **View Response**  
   The crawler returns a JSON object containing `combinedContent` and `pages[]`.

---

## ⚙️ Configuration

- **maxDepth**  
  Default: 3. Adjust in the **Init Crawl Params** (Set) node.

- **Timeouts**  
  HTTP Request node timeout is 5 seconds per request; increase if needed.

- **Filtering Rules**  
  - Only same-domain links are followed (apex and `www` treated as same-site)  
  - Skips anchors, `mailto:`, `tel:`, `javascript:`  
  - Skips document links (.pdf, .docx, .xlsx, .pptx)  
  - You can tweak the regex and logic in **Queue & Dedup Links** (Code) node

---

## 📌 Limitations

- No JavaScript rendering (static HTML only)  
- No authentication/cookies/session handling  
- Large sites can be slow or hit timeouts; chunking mitigates response size

---

## ✅ Example Use Cases

- Extract text across your site for AI ingestion / embeddings  
- SEO/content audit and internal link checks  
- Build a lightweight page corpus for downstream processing in n8n

---

## ⏱️ Estimated Setup Time

~10 minutes (import → set webhook → test request)



## 📊 Basic Information

- **Workflow ID:** 8852
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1428
- **Downloads:** 142
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8852)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×2)
- **webhook** 
- **splitInBatches** 
- **if** 
- **html** 
- **code** (×6)
- **httpRequest** 
- **merge** (×2)
- **set** (×2)
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
