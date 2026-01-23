# Landing page conversion optimizer with Gemini 2.5-pro & Telegram

> 🛠️ Landing-Page Roast & CRO Ideas Bot – Quick Guide
What this workflow does

    Takes any public landing-page URL.

    Scrapes the page content.

    Uses Gemini 2.5-pro to
    • Roast the page (friendly but brutally honest)
    • Give 10 high-impact, 2024-ready CRO ideas – all in Turkish, max 3 000 characters.

    Sends the result back to you on Telegram.

Two ways to trigger it

1. Web form
• Open the form titled “Conversion Rate Optimizer.”
• Paste your landing-page URL(with https or http in front of it).
• Click Submit.

2. Telegram (fastest)
• Send the URL in a DM to @MertSiteRaporBot.
• Forgot the “https://”? No worries—the bot adds it automatically.
Behind the scenes

• Code node normalises the URL.
• HTTP Request scrapes the page HTML.
• AI Agent (Gemini) produces the Roast + Recommendations.
• Telegram node sends the formatted reply to you.
Usage tips

• One URL per request.
• Page must be publicly accessible (no login).
• Very long pages may be trimmed to fit model limits.
• Output language is always Turkish.

## 📊 Basic Information

- **Workflow ID:** 6962
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 568
- **Downloads:** 56
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6962)

## 👤 Author

- **Name:** Mert Dalkır
- **Username:** @mertdlkr

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **telegram** (×2)
- **telegramTrigger** 
- **stickyNote** (×3)
- **code** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
