# Identify competitor content gaps across ChatGPT, Perplexity & Gemini with SE Ranking

> ![Zrzut ekranu 20251218 o 15.29.43.png](fileId:3780)

## Who is this for

- Marketing teams tracking AI SEO performance
- Content strategists planning editorial calendars
- SEO teams doing competitive intelligence

## What this workflow does

Identify content opportunities by analyzing where competitors outrank you in AI search and traditional SEO.

## What you'll get

- AI visibility gaps across ChatGPT, Perplexity, and Gemini
- Keyword gaps with search volume and difficulty
- Competitor backlink authority metrics
- Prioritized opportunities with HIGH/MEDIUM/LOW scoring
- Actionable recommendations for each gap

## How it works

1. Fetches AI search visibility for your domain and competitor
2. Compares metrics across ChatGPT, Perplexity, and Gemini
3. Extracts competitor's top-performing prompts and keywords
4. Analyzes competitor backlink authority
5. Calculates opportunity scores and prioritizes gaps
6. Exports ranked opportunities to Google Sheets

## Requirements

- Self-hosted n8n instance
- SE Ranking community node installed
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- Google Sheets account (optional)

## Setup

1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Update the Configuration node with your domain and competitor
4. Connect Google Sheets for export (optional)

## Customization

- Change `source` for different regions (us, uk, de, fr, etc.)
- Adjust volume/difficulty thresholds in Code nodes
- Modify priority scoring weights

## 📊 Basic Information

- **Workflow ID:** 11929
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 28
- **Downloads:** 2
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11929)

## 👤 Author

- **Name:** Eugene
- **Username:** @eugene-m

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **set** 
- **@seranking/n8n-nodes-seranking.seRanking** (×10)
- **wait** (×7)
- **merge** (×3)
- **code** (×5)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
