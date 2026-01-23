# Generate social content pillars, calendars and posts using Google Sheets and OpenAI

> ## How it works
This workflow turns a single planning row in Google Sheets into a fully structured content engine. It generates weighted content pillars, builds a rule-based posting calendar, and then creates publish-ready social posts using AI. The workflow strictly controls format routing, CTA rules, and execution order. All outputs are written back to Google Sheets for easy review and execution.

## Step-by-step
- **Step 1: Input capture & pillar generation**
  - **Google Sheets Trigger** – Detects new or updated planning rows.
  - **Get row(s) in sheet** – Fetches brand, platform, scheduling, and promotion inputs.
  - **Message a model** – Calculates calendar metrics and generates platform-specific content pillars.
  - **Code in JavaScript** – Validates AI output and enforces 100% weight distribution.
  - **Append row in sheet** – Stores finalized content pillars in the pillars sheet.

- **Step 2: Calendar generation & routing**
  - **Message a model7** – Generates a full day-by-day content calendar from the pillars.
  - **Code in JavaScript7** – Normalizes calendar data into a sheet-compatible structure.
  - **Append row in sheet6** – Saves calendar entries with dates, formats, CTAs, and status.
  - **Switch By Format** – Routes items based on Video vs Non-Video formats.

- **Step 3: Post creation & final storage**
  - **Loop Over Items** – Processes each calendar entry one at a time.
  - **Message a model6** – Creates complete hooks, captions, CTAs, and hashtags.
  - **Code in JavaScript6** – Formats AI output for final storage.
  - **Append row in sheet7** – Stores publish-ready posts in the final sheet.
  - **Wait** – Controls pacing to avoid API rate limits.

## Why use this?
- Eliminates manual content planning and ideation.
- Enforces strategic content mix and CTA discipline.
- Produces platform-ready posts automatically.
- Keeps all planning, calendars, and content in Google Sheets.
- Scales content operations without extra overhead.


## 📊 Basic Information

- **Workflow ID:** 12294
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 90
- **Downloads:** 9
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12294)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **googleSheets** (×4)
- **switch** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **code** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
