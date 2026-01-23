# Auto-publish PR news articles with featured images to WordPress from RSS

> This workflow automates the process of publishing PR News articles to the WordPress website.

🔧 How it works:

Uses an RSS Feed Trigger to monitor new PR News articles.

Extracts the article content and parses the featured image URL.

Uploads the image to WordPress as a media item.

Creates a new draft post on the WordPress site using the article's content and sets the uploaded image as the featured image.

✅ Features:

Polls RSS feed every minute.

Automatically extracts and sets featured images.

Posts are created as drafts for editorial review.

📝 Requirements:

WordPress REST API access with media upload permission.

Active WordPress credentials in n8n.

Perfect for teams who want to streamline PR content publishing without manual effort.

## 📊 Basic Information

- **Workflow ID:** 4913
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 3313
- **Downloads:** 331
- **Created:** 2025/6/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4913)

## 👤 Author

- **Name:** The Higher Pitch
- **Username:** @digvijay

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **wordpress** 
- **code** 
- **httpRequest** (×3)
- **stickyNote** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
