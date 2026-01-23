# Seo keyword analysis and filter

> **Use case**
This workflow is designed for e-commerce brands and content teams who:

- Need to scale SEO content production without sacrificing quality
- Want to eliminate manual keyword filtering (saves 10+ hours/week)
- Aim to dominate niche search terms (e.g., "vegan leather crossbody bags")

**What this workflow does**
Automates the end-to-end process from keyword discovery to publish-ready articles:

- Keyword Harvesting: Pulls 1,000+ keywords/day from SEMrush/Ahrefs
- Smart Filtering:Blocks competitor brands (e.g., "Zara alternatives")
- Detects irrelevant demographics ("kids", "petite")
- AI Content Generation:Flags non-compliant colors (non-black/white terms)
- Multi-Channel Output: Formats content for blogs, product descriptions, and email campaigns

**setup**
- Add Google,SEMrush and OpenAI credentials
- Set the rules excel of google drive 
- Test workflow by testing workflow
- Review generated opportunity report in Google Sheets

**How to adjust this template**

- Change scenario: Replace the rules and define different target 



## 📊 Basic Information

- **Workflow ID:** 3108
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 634
- **Downloads:** 63
- **Created:** 2025/3/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3108)

## 👤 Author

- **Name:** Alex Huang
- **Username:** @tao

## 🏷️ Categories

- AI
- Marketing

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDrive** (×2)
- **extractFromFile** (×2)
- **aggregate** 
- **set** (×4)
- **if** (×2)
- **merge** (×3)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **filter** 
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
