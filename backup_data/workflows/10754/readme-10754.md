# Automate SEO blog creation from trends using Gemini AI, Apify, and Google Docs

> # Automate SEO Blog Creation with Apify + Google Docs + KIE AI’s Nano Banana API

## Who’s it for

For content creators, SEO specialists, and digital marketers who want to automatically generate SEO-optimized blog posts from trending topics — no manual writing or formatting required.

## How it works / What it does

This workflow turns trending searches into fully structured blog posts using AI:
1. Fetch trending topics from India (or any country) using Apify’s Google Trends scraper.
2. Generate a SEO-optimized blog post with title, meta description, headings, and long-form content using Gemini AI.
3. Refine the System Message (optional) with Gemini AI for better readability and engagement.
4. Create a custom blog image using KIE AI’s Nano Banana API based on the blog title.
5. Automatically insert all content and images into a Google Doc, ready for publishing.

## How to set up
1. Add your Apify API token in the Google Trends node.
2. Configure Google Docs OAuth2 credentials for the document update node.
3. Add your KIE AI Nano Banana API token for image generation.
4. Schedule the Daily Trigger to your preferred time (default is 8 AM).

## Requirements
1. Apify API token (for trending search scraping)
2. Google account with Docs access
3. KIE AI Nano Banana API token

## How to customize the workflow
1. Change country or timeframe for trending searches.
2. Update the AI prompt for tone, length, or style of the blog.
3. Change the Google Doc ID to insert content into a different document.
4. Adjust image generation settings (size, style) in the KIE AI node.

## 📊 Basic Information

- **Workflow ID:** 10754
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 318
- **Downloads:** 31
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10754)

## 👤 Author

- **Name:** Parth Pansuriya
- **Username:** @parthpansuriya

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **if** 
- **set** 
- **wait** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
