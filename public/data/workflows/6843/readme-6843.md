# Multi platform content generator from YouTube using AI & RSS

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Multi Platform Content Generator from YouTube using AI & RSS

This workflow automates content generation by monitoring YouTube channels, extracting transcripts via AI, and creating platform-optimized content for LinkedIn, X/Twitter, Threads, and Instagram. Ideal for creators, marketers, and social media managers aiming to scale content production with minimal effort.


## ✨ Key Features
- **🔔 Automated YouTube Monitoring** via RSS feed
- **🧠 AI-Powered Transcript Extraction** using Supadata API
- **✍️ Multi-Platform Content Generation** with OpenRouter AI
- **🎯 Platform Optimization** based on tone and character limits
- **📬 Telegram Notification** for easy preview
- **📊 Centralized Data Management via Google Sheets**

&gt; 🗂️ All video data, summaries, and generated content are tracked and stored in a single, centralized [Google Sheets template](https://docs.google.com/spreadsheets/d/17OjwIwx7eAwbkT5wtwvpCQU4rjrLH0v7j3fmC2Sc1CY/edit?usp=sharing)  
&gt; This ensures full visibility, easy access, and smooth collaboration across your team.

---

## ⚙️ Workflow Components

### 1. 🧭 Channel Monitoring
- **Schedule Trigger**: Initiates workflow periodically
- **Google Sheets (Read)**: Pulls YouTube channel URLs
- **HTTP Request + HTML Parser**: Extracts channel IDs from URLs
- **RSS Reader**: Fetches latest video metadata

### 2. 🧾 Content Processing
- **Supadata API**: Extracts transcript from YouTube video
- **OpenRouter AI**: Summarizes transcript + generates content per platform
- **Conditional Check**: Prevents duplicate content by checking existing records

### 3. 📤 Multi-Platform Output
- **LinkedIn**: Story-driven format (≤ 1300 characters)
- **X/Twitter**: Short, punchy copy (≤ 280 characters)
- **Threads**: Friendly, conversational
- **Instagram**: Short captions for visual posts

### 4. 🗃️ Data Management
- **Google Sheets (Write)**: Stores video metadata + generated posts
- **Telegram Bot**: Sends content preview
- **ID Tracking**: Avoids reprocessing using video ID

---

## 🔐 Required Credentials
- **Google Sheets OAuth2**
- **Supadata API**
- **OpenRouter API**
- **Telegram Bot Token & Chat ID**

---

## 🎁 Benefits
- **⌛ Save Time**: Automates transcript + content generation
- **🔊 Consistent Tone**: Adjust AI prompts for brand voice
- **📡 Multi-Platform Ready**: One video → multiple formats
- **📂 Centralized Logs via Google Sheets**: Easily track, audit, and collaborate
- **🚀 Scalable**: Handle many channels with ease



## 📊 Basic Information

- **Workflow ID:** 6843
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 1515
- **Downloads:** 151
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6843)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **noOp** 
- **html** 
- **httpRequest** (×2)
- **scheduleTrigger** 
- **googleSheets** (×8)
- **code** (×2)
- **rssFeedRead** 
- **stickyNote** (×8)
- **if** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** (×5)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
