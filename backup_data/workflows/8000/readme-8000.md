# Generate AI sales pitches from website URLs with GPT-4o and Google Sheets

> # Overview

This n8n workflow converts a simple list of website URLs in Google Sheets into a concise, consultative Context + AI pitch for each organization. It scrapes real page content (markdown preferred), feeds it to OpenAI with tight prompts to avoid fluff, and writes the result back to the same sheet row. You can run it on demand or schedule it, and it’s resume-safe—rows with existing messages are skipped. The net effect: faster, higher-quality prospect research and consistent outbound messaging without leaving your sheet.

## How it works

- Reads rows from Google Sheets with headers Website and Personalized Message.
- Skips rows where Personalized Message already has content.
- Scrapes each URL to get clean page content (prefer markdown from a scraper like Firecrawl).
- Calls OpenAI with strict System/User prompts to produce Context + Pitch grounded in the site.
- Writes the generated message back to the same row (upsert by Website).
- (Optional) Adds a short delay between rows to respect rate limits.

## Setup:

- Sheet: Create headers Website, Personalized Message (row 1).
- Credentials: Add Google Sheets OAuth2 and OpenAI in n8n.
- Read node (Sheets): Select your doc/tab → Get All.
- Scrape step: Use Firecrawl → Scrape (markdown), or fallback to HTTP Request → HTML extract.
- OpenAI node: Model like gpt-4o-mini; paste your System/User prompts; enable Simplify Output if available.
- Write node (Sheets): Append or Update → Column to match on = Website; map
- Website → original URL
- Personalized Message → OpenAI output ({{$json.content}}
- (Optional) Add a Wait node (500–2000 ms) for throttling and stability.

## 📊 Basic Information

- **Workflow ID:** 8000
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 172
- **Downloads:** 17
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8000)

## 👤 Author

- **Name:** Zach @BrightWayAI
- **Username:** @ajenta

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **wait** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** (×2)
- **splitInBatches** 
- **@mendable/n8n-nodes-firecrawl.firecrawl** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
