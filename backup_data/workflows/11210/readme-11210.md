# Automated MIT AI news delivery to Discord with deduplication

> Stay ahead of the curve with the latest Artificial Intelligence research from MIT, delivered directly to your Discord server—clean, filtered, and duplicate-free.

This workflow is perfect for AI agencies, researchers, and tech teams who want to stay informed without the noise.

## How it works
This workflow runs automatically every day (default 9:00 AM) to:
1. **Fetch** the official MIT News RSS feed for the "Artificial Intelligence" topic.
2. **Filter** articles to keep only those published in the last 24 hours.
3. **Deduplicate** content using an internal **n8n Data Table**. It checks if the article link has already been sent to prevent spamming old news.
4. **Notify** your team on Discord with a clean, formatted message including the Title, Author, Date, and Link.

## Setup steps
### 1. Create the Data Table (Mandatory)
This workflow relies on n8n Data Tables to track sent articles. Before running:
1. Go to your n8n Dashboard &gt; **Data Tables**.
2. Create a new table named: `mit_ai_news_sent`
3. Add these exact columns:
   * `creator` (Type: String)
   * `title` (Type: String)
   * `link` (Type: String)
   * `pubDate` (Type: Date)

### 2. Connect the Table
1. Import this template.
2. Open the orange nodes named **"Avoid Duplicated Articles"** and **"Register New Article"**.
3. Select the `mit_ai_news_sent` table you just created from the list.

### 3. Configure Discord
1. Create a Webhook in your Discord Server (Server Settings &gt; Integrations &gt; Webhooks).
2. Open the **"MIT AI Articles"** node.
3. Create a new Credential and paste your Webhook URL.

## 📊 Basic Information

- **Workflow ID:** 11210
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11210)

## 👤 Author

- **Name:** Vasyl Pavlyuchok
- **Username:** @vasylpavlyuchok

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **stickyNote** (×8)
- **dataTable** (×2)
- **filter** 
- **scheduleTrigger** 
- **discord** 
- **rssFeedRead** 
- **set** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
