# Automate news publishing to LinkedIn with Gemini AI and RSS feeds

> # 📰 LinkedIn News Auto-Publisher

## Overview 📋

This project is an automated news publisher for LinkedIn. It uses RSS feeds to fetch news, processes the content with the Gemini API to generate precise summaries, and automatically publishes to LinkedIn via its API.

* * *

## How It Works

### Architecture and Workflow ⚙️

- **n8n**: Efficient orchestration of workflow with automation.
- **RSS**: News sources such as TechCrunch and MIT Technology Review.
- **Gemini API**: Dynamic generation of content and precise summaries.
- **LinkedIn API**: Automatic publication on profiles and corporate pages.

### Content Processing 🧠

- Fetching news through RSS feeds.
- Processing and generating summaries with the Gemini API.
- Automatic publication on LinkedIn.

* * *

## Key Benefits ✅

- Complete automation of the news publishing process.
- Dynamic generation of precise and relevant content.
- Integration with reliable news sources and publication on a professional platform.

* * *

## Use Cases 💼

- Automation of news publishing for businesses and professionals.
- Keeping corporate profiles and pages updated with relevant content.
- Saving time in managing content on social networks.

* * *

## Requirements 👨‍💻

- n8n instance (self-hosted or cloud).
- Gemini API credentials.
- LinkedIn bot setup and API credentials.
- Configured RSS feeds to fetch news.

* * *

## Authors 👥

- Joel Choez
- Alan Bajaña
- Jaren Pazmiño
- David Sandoval

Members of CIAP
![Logo_CIAP Tortuga y letras 2.png](fileId:1382)


## 📊 Basic Information

- **Workflow ID:** 4414
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 4649
- **Downloads:** 464
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4414)

## 👤 Author

- **Name:** Club de Inteligencia Artificial Politécnico CIAP
- **Username:** @ciap

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)
- **scheduleTrigger** 
- **rssFeedRead** (×3)
- **set** (×5)
- **filter** 
- **sort** 
- **limit** 
- **merge** (×3)
- **stickyNote** (×9)
- **code** (×3)
- **linkedIn** 
- **httpRequest** (×2)
- **writeBinaryFile** 
- **convertToFile** 
- **googleSheets** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
