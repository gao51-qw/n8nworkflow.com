# Workflow function to summarize Reddit posts using Google Gemini and Supabase

> # Reddit Post Saver & Summarizer with AI-Powered Filtering

## Who This Is For
Perfect for **content curators, researchers, developers, and community managers** who want to build a structured database of valuable Reddit content without manual data entry. If you're tracking industry trends, gathering user feedback, or building a knowledge base from Reddit discussions, this workflow automates the entire process.

## The Problem It Solves
Reddit has incredible discussions, but manually copying posts, extracting insights, and organizing them into a database is time-consuming. This workflow automatically transforms your saved Reddit posts into structured, searchable data—complete with AI-generated summaries of both the post and its comment section.

## How It Works

### 1. Save Posts Manually
Simply use Reddit's built-in save feature on any post you find valuable.

### 2. Automated Daily Processing
The workflow triggers once per day and:
- Fetches all your saved Reddit posts via Reddit API
- Filters posts by subreddit and custom conditions (e.g., "only posts about JavaScript frameworks" or "posts with more than 100 upvotes")
- Uses an LLM (Google Gemini) to verify posts match your natural language criteria
- Generates comprehensive summaries of both the original post and top comments

### 3. Structured Database Storage
Filtered and summarized posts are automatically saved to your Supabase database with this structure:
```json
{
  "reddit_id": "unique post identifier",
  "title": "post title",
  "url": "direct link to Reddit post",
  "summary": "AI-generated summary of post and comments",
  "tags": ["array", "of", "relevant", "tags"],
  "post_date": "original post creation date",
  "upvotes": "number of upvotes",
  "num_comments": "total comment count"
}
```

## Setup Requirements
- **Reddit API credentials** (client ID and secret)
- **Supabase account** with a database table
- **Google Gemini API key** (or alternative LLM provider)
- Basic configuration of filter conditions (subreddit names and natural language criteria)

## Use Cases
- **Product Research**: Track competitor mentions and feature requests
- **Content Creation**: Build a library of trending topics in your niche
- **Community Management**: Monitor feedback across multiple subreddits
- **Academic Research**: Collect and analyze discussions on specific topics

## 📊 Basic Information

- **Workflow ID:** 10181
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 108
- **Downloads:** 10
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10181)

## 👤 Author

- **Name:** Fei Wu
- **Username:** @feiwu77777

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **code** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **wait** 
- **stickyNote** (×7)
- **manualTrigger** 
- **scheduleTrigger** 
- **supabase** (×2)
- **reddit** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **splitInBatches** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
