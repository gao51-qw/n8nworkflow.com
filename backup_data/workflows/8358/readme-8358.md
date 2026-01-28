# Daily Gmail inbox digest to Discord with GPT-4.1-mini and PDF conversion

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Overview
Automate your email management with this n8n workflow that fetches, summarizes, and shares critical emails from your Gmail inbox. Designed for busy professionals, this workflow runs daily to extract important emails from the past 24 hours, summarizes key details (like credentials, OTPs, deadlines, and action items), converts the summary into a PDF, and sends it to your Discord channel for quick access.

## Key Features
- **Scheduled Automation**: Triggers daily at 8 PM to process emails from the last 24 hours.
- **Gmail Integration**: Retrieves emails labeled "INBOX" and "IMPORTANT" using secure OAuth2 authentication (no hardcoded API keys).
- **Smart Email Parsing**: Extracts essential fields (subject, sender, and plain text) while cleaning up URLs, extra lines, and formatting for clarity.
- **AI-Powered Summarization**: Uses OpenAI's GPT-4.1-mini to create concise plain text and markdown summaries, highlighting urgent actions with "[Action Required]".
- **PDF Conversion**: Converts the markdown summary into a professional PDF using PDF.co API.
- **Discord Notifications**: Shares the PDF via a Discord webhook for seamless team communication.

## Why Use This Workflow?
- Save time by automating email triage and focusing on what matters.
- Stay organized with clear, actionable summaries delivered to Discord.
- Securely handle sensitive data with proper credential management.
- Perfect for teams, freelancers, or anyone managing high email volumes.

## Setup Instructions
1. Configure Gmail OAuth2 credentials for secure access.
2. Set up PDF.co API and Discord webhook credentials.
3. Customize the schedule or filters as needed.
4. Activate and let the workflow handle your daily email summaries!


## 📊 Basic Information

- **Workflow ID:** 8358
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 220
- **Downloads:** 22
- **Created:** 2025/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8358)

## 👤 Author

- **Name:** moosa
- **Username:** @moosa

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **discord** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **n8n-nodes-pdfco.PDFco Api** 
- **markdown** 
- **aggregate** 
- **code** (×2)
- **gmail** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
