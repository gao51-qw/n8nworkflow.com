# Qwen-Max: journal paper generation from title/abstract

> ## Introduction
Generates complete scientific papers from title and abstract using AI. Designed for researchers, automating literature search, content generation, and citation formatting.
## How It Works
Extracts input, searches academic databases (CrossRef, Semantic Scholar, OpenAlex), merges sources, processes citations, generates AI sections (Introduction, Literature Review, Methodology, Results, Discussion, Conclusion), compiles document.
## Workflow Template
Webhook → Extract Data → Search (CrossRef + Semantic Scholar + OpenAlex) → Merge Sources → Process References → Prepare Context → AI Generate (Introduction + Literature Review + Methodology + Results + Discussion + Conclusion via OpenAI) → Merge Sections → Compile Document
## Workflow Steps
1. **Input & Search:** Webhook receives title/abstract; searches CrossRef, Semantic Scholar, OpenAlex; merges and processes references
2. **AI Generation:** OpenAI generates six sections with in-text citations using retrieved references
3. **Assembly:** Merges sections; compiles formatted document with reference list
## Setup Instructions
1. **Trigger & APIs:** Configure webhook URL; add OpenAI API key; customize prompts
2. **Databases:** Set up CrossRef, Semantic Scholar, OpenAlex API access; configure search parameters
## Prerequisites
OpenAI API, CrossRef API, Semantic Scholar API, OpenAlex API, webhook platform, n8n instance
## Customization
Adjust reference limits, modify prompts for research fields, add citation styles (APA/IEEE), integrate databases (PubMed, arXiv), customize outputs (DOCX/LaTeX/PDF)
## Benefits
Automates paper drafting, comprehensive literature integration, proper citations

## 📊 Basic Information

- **Workflow ID:** 10314
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10314)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **httpRequest** (×3)
- **merge** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
