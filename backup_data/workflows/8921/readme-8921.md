# Generate articles from Google Sheets to WordPress with web scraping and GPT-4 Mini

> ## 🤖 Automated AI Article Generation from Google Sheets to WordPress

### 📝 Short Description
Transform a Google Sheet into an automated content factory! This workflow reads article topics, scrapes source content, uses AI to create original articles, and publishes drafts to WordPress automatically. 🚀

### 📖 Full Description
This workflow automates the entire content creation pipeline by connecting Google Sheets, web scraping, AI content generation, and WordPress publishing. It's designed for content marketers, bloggers, and news publishers who need to scale their content production efficiently. 💪

The system monitors a Google Sheet for new article ideas, processes source URLs through a dual-AI system for summarization and content creation, then automatically generates WordPress drafts while tracking everything back to the spreadsheet. 📊→🤖→🌐

## 👥 Who's It For

- **📈 Content marketing agencies** managing multiple clients
- **✍️ Bloggers** looking to scale their content output
- **📰 News publishers** automating article aggregation
- **🔍 SEO specialists** creating keyword-optimized content
- **🎯 Digital marketers** running content campaigns

## ⚙️ How It Works

1. **📊 Sheet Monitoring**: Watches Google Sheets for rows marked "New" in the Flow Status column
2. **🔍 Content Processing**: Fetches and analyzes source articles using dual AI agents
3. **🤖 Article Generation**: Creates SEO-optimized articles with proper formatting and structure
4. **🌐 WordPress Integration**: Automatically publishes drafts to your WordPress site
5. **✅ Status Tracking**: Updates the sheet with progress and final draft links

## 🛠️ How to Set Up

### 📋 Prerequisites
- 🔐 Google Sheets API access (OAuth2)
- 🧠 OpenAI API key
- 🌐 WordPress REST API credentials
- 🔗 Source URLs for article inspiration

### ⚡ Configuration Steps
1. **🔄 Clone the workflow** into your n8n instance
2. **🔗 Connect credentials** for Google Sheets, OpenAI, and WordPress
3. **📄 Update the Google Sheet ID** in all Sheet nodes to point to your document
4. **📊 Configure the sheet columns** to match: Topic, Source, Flow Status, Publish Status, Publish Link
5. **🧪 Test with one row** marked as "New" in your sheet

## 📋 Requirements

### 🧩 n8n Nodes Used
- 📊 Google Sheets (read/update operations)
- 🌐 HTTP Request (web scraping)
- 🤖 OpenAI/LangChain (AI content processing)
- 🌐 WordPress (draft creation)
- 💻 Code node (content formatting)
- ⚖️ If node (error handling)
- 🔄 SplitInBatches (item processing)

### ☁️ External Services
- 📊 Google Sheets with specific column structure
- 🧠 OpenAI API access
- 🌐 WordPress installation with REST API enabled

## 🎨 How to Customize the Workflow

### ✍️ Content Style Adjustments
Modify the "Article Creator" AI node's system prompt to change:
- 🎭 Writing tone and style
- 🔍 SEO keyword density
- 📑 Article structure and headings
- 💬 Call-to-action format

### 🔍 Source Processing
Adjust the "Article Summarizer" node to:
- 🕸️ Handle different website structures
- 📝 Extract specific content elements
- 📋 Modify markdown output format

### 📤 Publishing Options
Customize the "Create a Draft" WordPress node to:
- 📝 Change post status from "draft" to "publish"
- 👥 Assign different authors or categories
- 🏷️ Add custom fields or tags

### ⚠️ Error Handling
Modify the conditional logic in the "If" node to handle different failure scenarios or add additional validation steps.

---

**ℹ️ Note**: This workflow uses community nodes (LangChain/OpenAI) and requires a self-hosted n8n instance.

*✨ Workflow features comprehensive error handling, real-time status tracking, and batch processing for efficient content pipeline management.*

## 📊 Basic Information

- **Workflow ID:** 8921
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 693
- **Downloads:** 69
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8921)

## 👤 Author

- **Name:** Automation for you
- **Username:** @n8nforyou

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **splitInBatches** 
- **if** 
- **googleSheets** (×4)
- **httpRequest** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **wordpress** 
- **code** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
