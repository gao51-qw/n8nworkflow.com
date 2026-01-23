# Summarize content from URLs, text & PDFs using OpenAI

> # AI Content Summarizer Suite

This n8n template collection demonstrates how to build a comprehensive AI-powered content summarization system that handles multiple input types: URLs, raw text, and PDF files. Built as 4 separate workflows for maximum flexibility.
Use cases: Research workflows, content curation, document processing, meeting prep, social media content creation, or integrating smart summarization into any app or platform.

## How it works
- Multi-input handling: Separate workflows for URLs (web scraping), direct text input, and PDF file processing
- Smart PDF processing: Attempts text extraction first, falls back to OCR.Space for image-based PDFs
- AI summarization: Uses OpenAI's GPT-4.1-mini with customizable length (brief/standard/detailed) and focus areas (key points/numbers/conclusions/action items)
- Language support: Multi-language summaries with automatic language detection
- Flexible output: Returns clean markdown-formatted summaries via webhook responses
- Unified option: The all-in-one workflow automatically detects input type and routes accordingly

## How to use
1. Replace webhook triggers with your preferred method (manual, form, API endpoint)
2. Each workflow accepts different parameters: URL, text content, or file upload
3. Customize summary length and focus in the AI prompt nodes
Authentication is optional - switch to "none" if running internally
4. Perfect for integration with Bubble, Zapier, or any platform that can make HTTP requests

## Requirements
- OpenAI API key or OpenRouter Keys
- OCR.Space API key (for PDF fallback processing)
- n8n instance (cloud or self-hosted)
- Any platform that can make HTTP requests.

## Setup Steps
1. Replace "Dummy OpenAI" with your OpenAI credentials
2. Add your OCR.Space API key in the OCR nodes is not mandatory.
3. Update webhook authentication as needed
4. Test each workflow path individually

## 📊 Basic Information

- **Workflow ID:** 8210
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 2176
- **Downloads:** 217
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8210)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **webhook** (×4)
- **switch** 
- **httpRequest** (×6)
- **extractFromFile** (×2)
- **if** (×2)
- **function** (×2)
- **stickyNote** (×6)
- **set** (×12)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **respondToWebhook** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 37 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
