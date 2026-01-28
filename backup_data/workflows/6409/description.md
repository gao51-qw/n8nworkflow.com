*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

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