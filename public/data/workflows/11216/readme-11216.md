# Find low-competition keyword opportunities with DataForSEO

> ## 🔍  Low competition keyword finder

**What it does:**
Discovers all keywords a domain ranks for and analyzes their difficulty, trends, and intent. Identifies opportunities based on actual ranking data rather than suggestions.

**How it works:**
1. Reads domain seeds from Google Sheets (with location/language settings)
2. Fetches all keywords the domain ranks for (Keywords For Site API)
3. Gets keyword difficulty scores for each keyword (Bulk Keyword Difficulty API)
4. Combines data with search trends, intent classification, and backlink metrics
5. Writes comprehensive results to keywords_opportunities sheet

**Setup Requirements:**
- DataForSEO API credentials (Basic Auth)
- Google Sheets with input columns: seed, location_name, language_name, limit
- Output sheet: keywords_opportunities

**Data Captured:**
- Keyword & Search Volume
- Monthly/Quarterly/Yearly Trends
- Keyword Difficulty (0-100)
- Search Intent (main + foreign)
- Average Backlinks
- Last Updated Time
- SE Type & Location/Language codes

**Best For:**
- Competitor keyword analysis
- Content gap identification
- Monitoring domain keyword portfolio
- Finding keywords you already rank for

## 📊 Basic Information

- **Workflow ID:** 11216
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 137
- **Downloads:** 13
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11216)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** (×7)
- **httpRequest** (×3)
- **googleSheets** (×2)
- **code** (×2)
- **aggregate** 
- **splitInBatches** 
- **scheduleTrigger** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
