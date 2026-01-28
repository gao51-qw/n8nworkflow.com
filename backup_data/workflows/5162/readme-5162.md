# AI-powered LinkedIn content engine (n8n + OpenAI + Perplexity + Replicate)

> A fully automated content engine that **researches, writes, scores, and visualizes LinkedIn posts** — built with n8n, OpenAI, Perplexity, and Replicate.

What it does:
✅ Researches any topic using real-time data
✅ Writes a personalized post in your voice
✅ Refines tone and structure
✅ Generates abstract, high-quality visual assets
✅ Scores the output and saves it to Google Sheets

How it works:
- Triggered when you change a row status in Google Sheets
- Uses Perplexity to research
- GPT-4o (OpenAI) to create and polish content
- Replicate (FLUX Pro) to generate images
- Scores the post using heuristics
- Appends everything back to your sheet


## 📊 Basic Information

- **Workflow ID:** 5162
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1949
- **Downloads:** 194
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5162)

## 👤 Author

- **Name:** Mariano Kostelec
- **Username:** @marianokostelec

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **code** (×2)
- **httpRequest** 
- **googleSheets** 
- **perplexity** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
