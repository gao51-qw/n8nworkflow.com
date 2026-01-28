# Analyze blog SEO with AI: complete assessment using GPT-4 and ethical scraping

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works?
This workflow is an intelligent SEO analysis pipeline that ethically scrapes blog content and performs comprehensive SEO evaluation using AI. It receives blog URLs via webhook, validates permissions through robots.txt compliance, extracts content, and generates detailed SEO insights across four strategic dimensions: Content Optimization, Keyword Strategy, Technical SEO, and Backlink Building potential.

The system prioritizes ethical web scraping by checking robots.txt permissions before proceeding, ensuring compliance with website policies. Upon successful analysis, it returns a structured JSON report with actionable SEO recommendations, performance scores, and optimization strategies.

## Technical Specifications

Trigger: HTTP POST webhook
Processing Time: 30-60 seconds depending on content size
AI Model: GPT-4.1 minimum with specialized SEO analysis prompt.
Output Format: Structured JSON
Error Handling: Graceful failure with informative messages
Compliance: Respects website robots.txt policies

## 📊 Basic Information

- **Workflow ID:** 6409
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 690
- **Downloads:** 69
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6409)

## 👤 Author

- **Name:** inderjeet Bhambra
- **Username:** @idsinghbhambra

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **code** (×3)
- **set** 
- **if** 
- **markdown** 
- **respondToWebhook** (×2)
- **webhook** 
- **noOp** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
