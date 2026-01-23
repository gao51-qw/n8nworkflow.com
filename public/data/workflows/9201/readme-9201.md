# Extract & filter Reddit posts & comments with keyword search & markdown formatting

> # Reddit Posts & Comments Scraper

A powerful workflow to scrape Reddit posts and comments by keywords and/or subreddit, with intelligent filtering and formatting.

## How it works

1. **Search Reddit** - Accepts keywords and/or subreddit parameters via webhook to search for relevant posts
2. **Filter & Sort** - Filters posts by date (last 60 days), minimum upvotes (20+), removes duplicates, and sorts by popularity
3. **Extract Comments** - For each post, retrieves and extracts the top 20 most upvoted comments with their reply threads
4. **Format Results** - Structures all posts and comments into a clean, readable markdown report
5. **Return Data** - Sends the formatted report back as a webhook response, ready for use in AI tools or other applications

## Set up steps

**Time to set up: ~10 minutes**

### 1. Create Reddit App (5 minutes)
- Go to [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) and create a new app
- Add your n8n URL and callback URL in the "redirect uri" field (you'll find this in the Reddit OAuth2 credentials setup in n8n)
- Copy your app's Client ID and Client Secret

### 2. Configure Reddit Credentials in n8n (2 minutes)
- In n8n, create new Reddit OAuth2 API credentials
- Paste your Client ID and Client Secret from step 1
- Complete the OAuth2 authentication flow

### 3. Update Webhook URLs (2 minutes)
- Update the webhook URLs in the example HTTP request nodes to match your n8n instance URL
- The workflow has two webhooks:
  - `/webhook/reddit-search-keyword` - for searching by keywords only
  - `/webhook/reddit-search-subreddit` - for searching within a specific subreddit

### 4. Customize Filters (1 minute - optional)
- **Date filter**: Line 6 in "Posted in Last x days" node (default: 60 days)
- **Upvote filter**: "Upvotes Requirement Filtering" node (default: 20+ upvotes)
- **Post limit**: "Limit" node (default: 10 posts)

### 5. Test the Workflow
- Use the example HTTP request nodes to test both search methods:
  - **Keywords only**: `?keywords=your,keywords,here`
  - **Subreddit search**: `?keywords=your,keywords&subreddit=SubredditName`

## Usage Examples

**Search by keywords:**
```
GET https://your-n8n.com/webhook/reddit-search-keyword?keywords=AI,machine learning
```

**Search within subreddit:**
```
GET https://your-n8n.com/webhook/reddit-search-subreddit?keywords=ChatGPT,GPT-4&subreddit=OpenAI
```

The workflow returns a formatted text report with all posts, their metadata, and top comments ready for analysis or AI processing.

## 📊 Basic Information

- **Workflow ID:** 9201
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 186
- **Downloads:** 18
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9201)

## 👤 Author

- **Name:** Muhammad Asadullah
- **Username:** @asadtech

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **splitInBatches** 
- **set** (×5)
- **limit** 
- **stickyNote** (×4)
- **httpRequestTool** 
- **webhook** (×2)
- **code** (×5)
- **if** 
- **sort** 
- **reddit** (×3)
- **respondToWebhook** 
- **aggregate** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
