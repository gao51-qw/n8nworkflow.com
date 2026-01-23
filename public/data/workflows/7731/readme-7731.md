# Automate TikTok video posting from Google Sheets & Drive with Blotato

> **Automate TikTok video posting from Google Sheets & Drive with Blotato. Perfect for content creators and social media managers.**

### ⚠️ IMPORTANT
**Self-hosted n8n only** - requires community nodes not available in cloud version.

## Google Sheets Structure
Required columns: **ID**, **Media URL**, **Caption**, **Status**
- Videos must be in Google Drive
- Status must be "pending" for processing
- Captions can include hashtags (5 max recommended)

## How it works
1. **Schedule Trigger** → Runs every hour
2. **Fetch Data** → Gets pending videos from Google Sheets
3. **Process Video** → Extracts Drive ID and shares file
4. **Upload** → Transfers to Blotato platform
5. **Post** → Automatically posts to TikTok
6. **Update Status** → Marks as "posted" in spreadsheet

## Requirements
- Self-hosted n8n instance
- Blotato API account
- Google Drive & Sheets OAuth2 credentials
- Community node: @blotato/n8n-nodes-blotato.blotato

## Use cases
- Automated TikTok content posting
- Batch video processing
- Content management workflows
- Scheduled social media distribution

The workflow processes one video per hour to avoid rate limits and maintains a clear audit trail through Google Sheets integration.

## 📊 Basic Information

- **Workflow ID:** 7731
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 806
- **Downloads:** 80
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7731)

## 👤 Author

- **Name:** Muhammad Farooq Iqbal
- **Username:** @mfarooqone

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **googleSheets** (×2)
- **@blotato/n8n-nodes-blotato.blotato** (×2)
- **if** 
- **limit** 
- **scheduleTrigger** 
- **googleDrive** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
