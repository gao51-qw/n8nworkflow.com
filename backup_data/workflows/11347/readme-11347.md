# Generate book summaries with GPT-4o, Google APIs & Amazon Affiliate Links

> **Description:** Your personal AI Book Curator that reads reviews, recommends books, and supports affiliate links. 📚🤖

This advanced workflow acts as a complete "Reading Assistant Application" with monetization features. It takes a book title via form, researches it using Google APIs, and employs an OpenAI Agent to generate a summary and recommendations.

Why use this template?

Monetization Support: Just enter your Amazon Affiliate Tag in the config node, and all email links will automatically include your tag.

Organized & Scalable: The workflow is clearly grouped into 4 sections (Input, Enrichment, AI, Delivery) with sticky notes for easy navigation.

## How it works:

Input: User submits a book title (e.g., "Atomic Habits").

Research: The workflow fetches book metadata and searches for real-world reviews.

Analyze: GPT-4o explains why the book is interesting and suggests 3 related reads.

Deliver: Generates a beautiful HTML email with purchase links and logs the request to Google Sheets.

## Setup Requirements:

Google Sheets: Create headers: date, book_title, author, ai_comment, user_email.

Credentials: OpenAI, Google Custom Search, Gmail, Google Sheets.

Config: Open the "1. Input & Config" section to enter API Keys and IDs.

## 📊 Basic Information

- **Workflow ID:** 11347
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 46
- **Downloads:** 4
- **Created:** 2025/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11347)

## 👤 Author

- **Name:** NODA shuichi
- **Username:** @shuichi

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **formTrigger** 
- **set** (×3)
- **httpRequest** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **gmail** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
