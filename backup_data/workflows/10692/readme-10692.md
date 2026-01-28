# Automated multi-platform market intelligence reporting with Gemini AI & Decodo

> ## 💡 What Problem Does It Solve?
Businesses waste countless hours manually gathering online insights across platforms.

Marketing and strategy teams need fast, structured visibility into what customers are saying and what competitors are promoting across regions and platforms.

This workflow automates that process end-to-end by:
- **Monitoring multiple platforms** (Facebook, Instagram, Google) across all selected regions.
- **Extracting and cleaning live data** with precision and compliance through **Decodo’s advanced web intelligence engine**.

- **Providing AI summaries:** It uses specialized AI agents to analyze the raw text and structure it into key insights.

- **Delivering a clear, ready-to-read daily report** directly to your inbox — no dashboards, no manual effort.

## ⚙️ How to Configure It

**1. Set Up the Decodo Connection**
- In n8n, create a new **Decodo Web Intelligence credential**.
- Paste your **Decodo** authentication token (available in your Decodo dashboard under “Web Scraping API”).

[Setup Manual](https://github.com/Decodo/n8n-nodes-decodo/tree/main) 

**2. Choose Your Regions and Topics**
- Edit the “Set – Regions” node to list your markets
- Add your key search topics or terms

**3. Review the AI-Generated Insights**
- **Decodo** fetches and cleans the latest content from social and web sources.

- Gemini-based AI agents summarize it into a structured report segmented by region and platform.

- The workflow emails the insights automatically, providing a quick morning market snapshot.
### ✨ Why It Works So Well
**Decodo** provides the backbone — real-time, clean, and region-specific data — while AI transforms that data into business intelligence you can act on.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)



## 📊 Basic Information

- **Workflow ID:** 10692
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 59
- **Downloads:** 5
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10692)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)
- **scheduleTrigger** 
- **stickyNote** (×16)
- **code** (×4)
- **splitInBatches** 
- **switch** 
- **@decodo/n8n-nodes-decodo.decodo** (×6)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **merge** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
