# AI-Powered Vendor Policy & RSS Feed Analysis with Integrated Risk Scoring

> ## 🧠 Overview

A dual-engine, AI-driven **n8n** workflow that automates the monitoring of both vendor policy webpages and compliance-related RSS feeds. It intelligently detects recent updates, evaluates their potential risk, and delivers a structured HTML digest categorized by severity — right to your inbox.

---

## ⚙️ How It Works

1️⃣ **Scheduled Execution**  
⏰ Runs daily at 3 AM to ensure timely and consistent monitoring.

2️⃣ **Dual Data Streams**  
- 📰 **RSS Feed Monitoring**: Ingests articles from selected feeds focused on security, privacy, and compliance.  
- 🌐 **Vendor Webpage Monitoring**: Fetches specified policy URLs and checks for updates using `Last-Modified` headers and in-page content analysis.

3️⃣ **Content Filtering**  
🧹 Applies logic to filter out stale or irrelevant data, focusing only on updates within the past 24 hours.

4️⃣ **AI-Powered Risk Categorization**  
🤖 Two dedicated AI agents (one per stream) analyze content to:  
- 📝 Generate a 2-line compliance/risk-focused summary  
- 🚦 Assign a risk score: **High**, **Medium**, **Low**, or **Informational**

5️⃣ **Digest Generation**  
🖼️ Summaries are grouped by risk level and formatted into a visually polished HTML report, using category-specific styles and color coding.

6️⃣ **Email Delivery**  
📧 Automatically sends out two separate email reports via Gmail:  
- 🗂️ One for vendor **webpage updates**  
- 📰 One for **RSS feed-based** vendor news

---

## ✨ Key Features

- 🔁 **Automates daily monitoring** across feeds and policy pages  
- 🤖 **AI-driven summarization** and structured risk scoring  
- 🧾 **Clean, HTML-formatted digests** grouped by risk category  
- 🧩 **Fully customizable**: feed sources, vendor URLs, AI prompts, and email styling  
- 🛡️ **Designed for compliance, security, and risk teams** needing proactive intelligence


## 📊 Basic Information

- **Workflow ID:** 5103
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1738
- **Downloads:** 173
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5103)

## 👤 Author

- **Name:** Kamalraj
- **Username:** @kamalraj

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** (×7)
- **splitOut** (×2)
- **rssFeedRead** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **gmail** (×2)
- **filter** 
- **sort** 
- **merge** 
- **scheduleTrigger** 
- **stickyNote** (×7)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
