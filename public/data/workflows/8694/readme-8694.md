# Summarize news articles & auto-post to social media with GPT-4 and GetLate

> ## Different Articles Summarizer & Social Media Auto-Poster

This n8n template demonstrates how to extract full-text articles from different news websites, summarize them with AI, and automatically generate content for social networks (Twitter, Instagram, Threads, LinkedIn, YouTube).

You can use it for any news topic. Example: posting summaries of breaking news articles.

Possible use cases :
* Automate press article summarization with GPT.
* Create social media posts optimized for young audiences.
* Publish content simultaneously across multiple platforms with Late API.


## How it works

* The workflow starts manually or with a trigger.
* URLs of news articles are defined in the Edit Fields node.
* Each URL is processed separately via Split Out.
* HTTP Request fetches the article HTML.
* Custom Code node extracts clean text (title, content, main image).
* OpenAI summarizes each article factually.
* Aggregate combines results.
* Another OpenAI node (Message a model) creates structured JSON summaries for young readers.
* A final OpenAI node (Message a model1) generates short social media posts (hook, summary, CTA, hashtags).
* Images are extracted via HTML1 and uploaded to Google Drive.
* Posts (text + image) are sent to Late API for multi-platform scheduling (Twitter, Instagram, Threads, LinkedIn, YouTube).

## Requirements

* OpenAI API key connected to n8n.

* Google Drive account (for storing article images).

* Late API credentials with platform account IDs.

* Valid list of article URLs.

## 📊 Basic Information

- **Workflow ID:** 8694
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1128
- **Downloads:** 112
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8694)

## 👤 Author

- **Name:** Pikor
- **Username:** @pikor

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **splitOut** 
- **aggregate** 
- **stickyNote** (×6)
- **manualTrigger** 
- **html** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
