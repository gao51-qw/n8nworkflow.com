# Translate RSS feed content to Hindi and publish to WordPress with OpenAI

> This workflow automatically pulls articles from an RSS feed, translates the content and title from English to Hindi using OpenAI, extracts the featured image from the HTML content, and publishes the translated post as a draft on a connected WordPress site.

🔧 Key Features:

Polls RSS feed every 10 minutes for new articles

Extracts and parses the featured image from custom HTML tags

Translates content and title from English to Hindi using OpenAI Assistant

Uploads the featured image to WordPress media library

Associates the image with the new draft post

Publishes the translated article as a draft for review

🎯 Use Case:
Ideal for multi-language blog automation or content localization workflows where original content is in English and needs to be localized into Hindi before publishing.



## 📊 Basic Information

- **Workflow ID:** 5150
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 861
- **Downloads:** 86
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5150)

## 👤 Author

- **Name:** The Higher Pitch
- **Username:** @digvijay

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedReadTrigger** 
- **wordpress** 
- **httpRequest** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
