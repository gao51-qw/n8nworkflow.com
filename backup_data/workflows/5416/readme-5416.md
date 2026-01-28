# Scrape AI news from multiple sources to Markdown & Google Drive with RSS.app

> # AI News Scraping System

This n8n workflow automates the process of pulling in breaking AI-related headlines from curated RSS feeds, scraping their full content, and saving readable Markdown versions directly to Google Drive.

Use cases include:
- Creating a personal newsletter curation system
- Automating blog post research workflows
- Archiving news content for later summarization or AI use

---

## How it Works

1. **Scheduled Triggers**  
   The workflow runs every 3–4 hours using multiple `Schedule Trigger` nodes. Each trigger targets a different news source (e.g., Google News, OpenAI Blog, Hugging Face, etc.).

2. **Fetch and Parse Feeds**  
   RSS feeds are fetched via the `HTTP Request` node. Items from the feed are split into individual entries using the `Split Out` node.

3. **Scrape Article Content**  
   Each article URL is sent to the Firecrawl API with a prompt to extract only the main content in Markdown. The scraping skips navigation, headers, footers, and ads.

4. **Convert and Save**  
   The extracted Markdown is converted into a `.md` file using the `Convert to File` node. The file is then uploaded to a Google Drive folder.

---

## Good to Know

- This workflow uses the Firecrawl API for web scraping. Be sure to configure a Generic HTTP Header credential with your API key.
- Output files are saved in Markdown format
- You can add more `Schedule Trigger` + `HTTP Request` pairs to extend this workflow to additional feeds.

---

## Requirements

- Firecrawl API account for scraping
- Google Drive account (OAuth2 credentials must be configured in n8n)
- n8n instance (self-hosted or cloud)

---

## Customization Ideas

- Replace or extend RSS feeds with sources relevant to your niche
- Load up scraped news stories into a prompt to create new content like TikToks and Reels
- Add a summarization step using an LLM like GPT or Claude
- Send the Markdown files to Notion, Slack, or a blog CMS

---

## Example Feeds

| Feed Name        | URL                                                                 |
|------------------|----------------------------------------------------------------------|
| Google News (AI) | https://rss.app/feeds/v1.1/AkOariu1C7YyUUMv.json                    |
| OpenAI Blog      | https://rss.app/feeds/v1.1/xNVg2hbY14Z7Gpva.json                    |
| Hugging Face     | https://rss.app/feeds/v1.1/sgHcE2ehHQMTWhrL.json                    |


## 📊 Basic Information

- **Workflow ID:** 5416
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2993
- **Downloads:** 299
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5416)

## 👤 Author

- **Name:** Lucas Walter
- **Username:** @lucaswalter

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** (×3)
- **httpRequest** (×4)
- **splitOut** (×3)
- **googleDrive** 
- **convertToFile** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
