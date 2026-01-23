# Daily MLB pitcher vs. batter matchup analysis with Google Sheets and Telegram

> **MLB "Hits" Workflow — Overview**
• Pulls today's MLB schedule incl. probablePitcher + lineups (statsapi.mlb.com)
• Batches season stats for all involved players
• Builds pitcher vs. batter matchup rows


**Setup Steps:**
1) Google Sheets OAuth2 → point to your Google Sheet → Tab name
2) Create Telegram Bot cred + chatId
3) Optional: tweak ERA/OPS thresholds or Top N in nodes 6 or 8.

**Optional Setup:**
- Conditional Formatting in the Sheet for ColorScale on best stat in the column, as well as Lefty vs Right highlighting.

- ![Screenshot 20250711 at 9.54.30 AM.png](fileId:2018)
- **COMING SOON! Results Tracker tab and Apps Scripts and formulas.**



## 📊 Basic Information

- **Workflow ID:** 7252
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 238
- **Downloads:** 23
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7252)

## 👤 Author

- **Name:** TheStock
- **Username:** @thestock

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **code** (×5)
- **httpRequest** (×2)
- **stickyNote** (×2)
- **scheduleTrigger** (×2)
- **googleSheets** (×2)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
