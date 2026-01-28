# Transform long content into bite-sized learning modules with GPT-4 & Google Docs

> ## Who's it for
Content creators, trainers, and educators who need to convert lengthy documents into digestible micro-learning experiences.

## How it works
This workflow takes your source content (PDFs, articles, handbooks) and uses GPT-4 to intelligently break it into 2-3 minute learning modules. Each module includes a key concept, explanation, practical example, and knowledge check question.

## How to set up
1. Configure OpenAI credentials with GPT-4 access
2. Connect Slack workspace (optional)
3. Set up Google Docs integration
4. Optionally, Send content via webhook or paste directly

## Requirements
- OpenAI API key with GPT-4 access
- Google Docs account (for document creation)
- Slack workspace (optional, for notifications)

## How to customize the workflow
- Adjust module count and length in AI prompts
- Modify output formats (email, mobile, Slack)
- Change document structure and styling
- Add custom delivery channels

Perfect for converting employee handbooks, training materials, and documentation into engaging micro-learning courses that people actually complete.

## 📊 Basic Information

- **Workflow ID:** 8265
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 326
- **Downloads:** 32
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8265)

## 👤 Author

- **Name:** inderjeet Bhambra
- **Username:** @idsinghbhambra

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **openAi** 
- **respondToWebhook** (×2)
- **set** (×2)
- **code** (×3)
- **splitOut** 
- **googleDocs** (×2)
- **merge** 
- **noOp** (×2)
- **stickyNote** (×7)
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
