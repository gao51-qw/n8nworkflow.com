# Seo FAQ generator for websites using GPT 5 Nano and Google Sheets

> ### General Description

This workflow is designed for **SEO professionals, digital agencies, content creators, and WordPress site owners** who want to improve their search engine rankings automatically.
It’s also perfect for **curious automation enthusiasts**, who want to explore how AI and n8n can work together to save both time and money.

### Main Uses

* Automatically generate **SEO-optimized FAQs** directly from your website content.
* Store and organize all FAQs in **Google Sheets**, ready to manage or implement.
* Send an **automatic email report** confirming the update.

### Key Features

* Includes an **intelligent configuration to extract all URLs from the sitemap** and process them one by one in a loop.
* As an alternative, if you don’t want to spend too much on API calls, you can enable a **configurable limit** to process only X number of URLs per run.
* Comes with an **OPTIONS node** that centralizes the **workflow’s configuration for the user**, making it easy to customize key aspects like language, notification email, company name, keywords, or the number of FAQs per page.

  * In addition, users can choose to **inject keywords directly into the generated FAQs**, making the output even more aligned with their SEO strategy.

### Save Time and Money

This workflow automates a process that would normally take hours of manual work.
On average, the cost is only **\$0.20 for every 20 to 40 pages processed**, depending on the content length (using the **ChatGPT 5 Nano** model).

### Support and Documentation

The workflow includes **detailed documentation**, and almost every node comes with explanations and alternative solutions in case of errors.
In addition, any failure is covered with clear error messages explaining **what happened and why**, making it easier to fix quickly.

In short, this template is a complete tool that combines **automation, artificial intelligence, smart URL extraction, keyword injection, a centralized configuration system, and SEO best practices**, so you can focus on what really matters: **growing your business and boosting your online visibility**.

IMG Google Sheet: https://ibb.co/Yg4KMNk

## 📊 Basic Information

- **Workflow ID:** 8659
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 47
- **Downloads:** 4
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8659)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×4)
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **set** 
- **googleSheets** 
- **splitInBatches** (×3)
- **xml** 
- **httpRequest** (×2)
- **stopAndError** (×4)
- **limit** 
- **gmail** 
- **scheduleTrigger** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
