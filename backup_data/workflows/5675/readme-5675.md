# Transform markdown content into structured Notion blocks

> # Markdown to Notion Blocks Converter

Transform markdown-formatted text into properly structured Notion page content with this comprehensive workflow.

## Overview
This workflow automatically converts markdown text into Notion's block format and inserts it directly into a Notion page. Perfect for content creators, documentation teams, and anyone who needs to migrate markdown content to Notion.

## Features
- **Complete Markdown Support**: Handles headers (H1-H4), paragraphs, lists, quotes, code blocks, and horizontal rules
- **Rich Text Formatting**: Preserves bold, italic, and link formatting
- **Smart Text Processing**: Generates plain text excerpts and maintains original content structure
- **Direct Notion Integration**: Automatically inserts converted blocks into your specified Notion page
- **Batch Processing**: Efficiently handles large content blocks

## What It Does
1. Takes markdown-formatted text as input
2. Parses and converts it to Notion's block structure
3. Handles complex formatting including:
   - Headers and subheaders
   - Bulleted and numbered lists
   - Code blocks with syntax highlighting
   - Blockquotes
   - Bold and italic text
   - Links
   - Horizontal dividers
4. Uploads the converted content directly to your Notion page

## Use Cases
- **Content Migration**: Move existing markdown documentation to Notion
- **Automated Publishing**: Convert blog posts or articles from markdown to Notion
- **Documentation Workflows**: Streamline technical documentation processes
- **Content Syndication**: Publish the same content across multiple platforms

## Requirements
- Notion API credentials
- Target Notion page ID
- Markdown-formatted source content

## Setup
1. Configure your Notion API credentials
2. Replace the page ID in the HTTP request node with your target Notion page
3. Connect your markdown data source (replace the mock data node)
4. Execute the workflow

## 📊 Basic Information

- **Workflow ID:** 5675
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 4381
- **Downloads:** 438
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5675)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **code** 
- **manualTrigger** 
- **set** 
- **stickyNote** (×3)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
