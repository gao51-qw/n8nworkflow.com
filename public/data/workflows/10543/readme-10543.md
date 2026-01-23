# Weekly stock/ETF analysis with Claude & Gmail — monthly index fund review

>  What This Flow Does

  Automated stock portfolio analysis system that performs comprehensive fundamental and technical analysis of your
  portfolio holdings on a scheduled basis, with intelligent follow-up capabilities.

  How It Works

  Two-Phase Analysis System:

  1. Monday Analysis (Main weekly analysis)
    - Reads your stock holdings from Google Sheets
    - Performs deep fundamental analysis using Claude AI with web search
    - Conducts technical analysis with current market data
    - Combines both analyses into final buy/sell/hold recommendations
    - Emails you comprehensive analysis report
  2. Wednesday Follow-up (Interactive refinement)
    - Sends midweek check-in email asking for additional input
    - If you reply with documents, questions, or market observations
    - Runs supplemental analysis incorporating your feedback
    - Updates recommendations based on new information and market changes
    - Delivers refined analysis via email

  Key Features

  - Fractional share support - handles both whole and fractional stock positions
  - Web-enabled AI analysis - Claude AI searches current market data, news, earnings
  - Dual-analyst approach - separate fundamental and technical analysis for comprehensive coverage
  - Interactive feedback loop - Wednesday follow-ups allow you to guide analysis
  - Professional email reports - formatted HTML emails with actionable recommendations

  Setup Steps

  1. Google Sheets: Duplicate given template and fill with your investment information
  2. Gmail OAuth: Connect your Gmail account for sending reports
  3. Anthropic API: Add Claude AI credentials for analysis
  4. Replace placeholders: Update YOUR_EMAIL@gmail.com, YOUR_GOOGLE_SHEETS_ID, webhook IDs
  5. Schedule configuration: Currently set for Monday 12pm EST analysis, Wednesday 12pm EST follow-up

  Use Case

  Perfect for part time investors who want systematic, AI-powered analysis of their portfolio with the flexibility to
  provide additional context and refinements throughout the week.

## 📊 Basic Information

- **Workflow ID:** 10543
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10543)

## 👤 Author

- **Name:** Joe Marotta
- **Username:** @jmarotta

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **code** (×14)
- **gmail** (×4)
- **googleSheets** (×3)
- **scheduleTrigger** (×3)
- **httpRequest** (×7)
- **wait** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
