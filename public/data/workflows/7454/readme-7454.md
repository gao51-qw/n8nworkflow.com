# Monitor competitors & generate content ideas with GPT4 & Gemini to Google Sheets

> ## Who’s it for
Women creators, homemakers-turned-entrepreneurs, and feminine lifestyle brands who want a graceful, low-lift way to keep an eye on competitor content and spark weekly ideas.

## What it does
On a weekly schedule, this workflow crawls your competitor URLs with **Firecrawl** (HTTP Request), summarizes each page with **OpenAI**, brainstorms carousel/pin ideas with **Gemini**, appends results to **Google Sheets** (Date, URL, Title, Summary, Ideas), and sends you a single email digest (optional Telegram alert). It includes basic error notifications and a setup-friendly config node.

## Requirements
- **HTTP credentials** for Firecrawl, OpenAI, and Gemini (no keys in nodes)
- **Google Sheets** OAuth credential
- A Sheets document with a target sheet/range (e.g., `Digest!A:F`)
- (Optional) Telegram bot + chat ID

## How to set up
1. Open **Set: Configuration (edit me)** and fill:
   - `competitorUrls` (one per line), `sheetsSpreadsheetId`, `sheetsRange`,
     `ownerEmail`, `emailTo`, `geminiModel`, `openaiModel`
2. Attach credentials to the HTTP and Sheets nodes.
3. Test by switching **Cron** to **Every minute**, then revert to weekly.

## How it works
Cron → Firecrawl (per URL) → Normalize → OpenAI (summary) + Gemini (ideas) → Merge → Compile Row → Google Sheets append → Build one digest → Email (+ optional Telegram).

## How to customize
- Add/remove competitors or change the weekly send time.
- Tweak the OpenAI/Gemini prompts for your brand voice.
- Expand columns in Sheets (e.g., category, tone, CTA).
- Swap email/Telegram for Slack/Notion, or add persistent logs.


## 📊 Basic Information

- **Workflow ID:** 7454
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 240
- **Downloads:** 24
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7454)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **cron** 
- **set** (×2)
- **code** (×7)
- **httpRequest** (×3)
- **merge** 
- **googleSheets** 
- **emailSend** (×2)
- **if** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
