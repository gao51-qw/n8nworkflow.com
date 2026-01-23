# Automate RSS news to multi-platform social media publishing via PostPulse

> 
![n8n rss to PostPulse.png](fileId:2667)
This automation template allows you to automatically receive news from RSS feeds, process their content, and publish or schedule posts on various social media platforms using [PostPulse](https://post-pulse.com/).

*⚠️**Disclaimer:** This workflow uses the community node **@postpulse/n8n-nodes-postpulse**. Make sure community nodes are enabled in your n8n instance before importing and using this template.*
👉 **To install it:**
Go to Settings → Community Nodes → Install and enter:"@postpulse/n8n-nodes-postpulse".
💡 **For more details**, see n8n Integration Guide: [PostPulse Developers – n8n Integration](https://developers.post-pulse.com/n8n-integration).

## Who Is This For?
- **Marketers** who want to automatically fill their content plan with relevant news.

- **Content creators and editors** who want to effectively distribute news across different platforms without unnecessary effort.

- **Media agencies** that want to maintain a constant presence on social media by republishing content from reliable sources.

## What Problem Does This Workflow Solve?
Instead of manually searching, copying, and publishing news, you get:
- **Automated news collection:** The workflow automatically reads the RSS feed and finds new content.

- **Intelligent processing:** It automatically extracts the text and, when possible, images from news articles, adapting the content for different social media platforms.

- **Seamless publishing:** PostPulse publishes posts simultaneously on TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X, and Threads.

- **Flexibility and customization:** RSS feeds from different websites have unique structures. This workflow is designed as a flexible template that can automatically publish news (even without images) and allows easy adaptation to any news source.

- **Time saving:** Automates routine processes, freeing up your time for more important tasks.

## How It Works
This workflow runs on a schedule, reads news, and processes it before sending it to PostPulse.
- **Scheduled execution:** The workflow is triggered at a set time, for example, daily at 9:00 AM.

- **RSS feed reading:** The RSS Feed Read node connects to the specified RSS feed (default: https://rss.unian.ua/site/gplay_56_ukr.rss) and retrieves the latest news.

- **Filtering and media check:** The If and Media Check IF nodes verify whether the news was published yesterday and whether it contains an image, looking for it in several possible fields (enclosure, media:content, or even <img> tags in the HTML).

- **Media upload:** If an image is found, the PostPulse Upload Media node uploads it to PostPulse. Then the Get Upload Status node checks if the media is ready for publishing.

- **Post creation:** The content (with or without media) is sent to the Publish Post nodes, which create a draft post in PostPulse, adapting the text to each platform’s limits (e.g., 280 characters for X/Twitter).

- **Publishing:** PostPulse automatically publishes or schedules the posts across all connected platforms.

## Setup
**1. Connect PostPulse to n8n**
- Request your OAuth client key and secret from PostPulse support at **support@post-pulse.com**.

- Add your PostPulse account in the **Credentials** section in n8n.

**2. Find an RSS Feed that you need**

The easiest way is to check the page’s source code.
1. Open the news website you are interested in.
2. Go to the page with a specific news category (e.g., "Sports").
3. Press **Ctrl + U** (or **Cmd + Option + U** on Mac) to open the page’s source code.
4. Press **Ctrl + F** (or **Cmd + F** on Mac) to search the text.
5. Type **"rss"** and press Enter. Usually, you will find a link pointing to an XML page, which is the RSS feed.

**3. Configure the RSS Feed Read node**
- Open the RSS Feed Read node.

- Paste the URL of your RSS feed into the **URL field**.

**4. Configure the Limit to N Post node**
- This node limits the number of posts generated in a single run.

- By default, const limit = 1;. You can change the value from 1 to any number of posts you want to publish at once.

## Requirements

- **Connected PostPulse accounts** (TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X, Threads).

- **OAuth client key and secret** obtained from PostPulse.

- **An n8n instance** with community nodes enabled.

✨ With this workflow, PostPulse and n8n become your all-in-one automation hub for publishing news.

## How To Customize The Workflow
This workflow is designed to be fully flexible and adaptable to your specific needs. While it works out-of-the-box with the default RSS feed, you can easily optimize it for any news source:

- **Adapt to different RSS feeds:** Each website’s RSS feed can have a unique structure. You can adjust the workflow to extract text, images, or additional fields as needed.

- **Handle missing media:** Some feeds may not include images in standard fields. The workflow is built to publish posts even without images, but you can customize it to extract images from other tags or HTML elements.

- **Extend content extraction:** If a feed stores the full text in a separate link, you can add nodes or logic to pull more content for richer posts.

- **Text trimming and platform-specific formatting:** You can modify the trimming logic in the Publish Post nodes to fit platform limits or adjust content formatting as desired.

- **Flexible scheduling and limits:** Easily change the number of posts per run, the schedule, or date filters to match your workflow and publishing strategy.

**💡 Tip:** The workflow is meant to be a template — fully functional out-of-the-box, but easily customizable to match any RSS feed or content source. Its main strength is flexibility, allowing you to adapt it to different feeds, extract more content, and adjust publishing rules without touching the core workflow.



## 📊 Basic Information

- **Workflow ID:** 8800
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 555
- **Downloads:** 55
- **Created:** 2025/9/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8800)

## 👤 Author

- **Name:** Dmytro
- **Username:** @dmytro-hnatiuk

## 🏷️ Categories

- Content Creation
- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** (×3)
- **@postpulse/n8n-nodes-postpulse.postPulse** (×5)
- **rssFeedRead** 
- **merge** (×3)
- **wait** 
- **function** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
