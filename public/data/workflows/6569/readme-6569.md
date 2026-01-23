# Monitor supply chain risks with ScrapeGraphAI alerts via Slack and email

> # How it works

This workflow automatically monitors supplier health and supply chain risks, providing real-time alerts and daily reports to procurement teams.

## Key Steps

1. **Daily Risk Check** - Runs the workflow every morning at 9:00 AM to assess supplier health.
2. **Multi-Source Data Collection** - Scrapes supplier websites, investor relations pages, and industry news for risk indicators.
3. **AI-Powered Risk Analysis** - Uses ScrapeGraphAI to extract and analyze financial status, operational issues, and regulatory problems.
4. **Risk Scoring Engine** - Calculates comprehensive risk scores (1-10) based on multiple factors including financial health, operational disruptions, and news sentiment.
5. **Alternative Supplier Discovery** - Automatically searches for backup suppliers when high-risk situations are detected.
6. **Smart Alert System** - Routes notifications based on risk levels: immediate alerts for high-risk suppliers, daily summaries for normal operations.
7. **Multi-Channel Notifications** - Sends alerts via Slack and detailed reports via email to procurement teams.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping capabilities.
2. **Set up Slack integration** - Connect your Slack workspace and configure the #procurement-alerts and #supply-chain-updates channels.
3. **Configure email settings** - Set up email credentials for detailed reports to procurement teams.
4. **Customize supplier URLs** - Update the supplier website URLs to monitor your specific suppliers.
5. **Adjust risk thresholds** - Modify the risk scoring parameters based on your industry and risk tolerance.
6. **Set notification preferences** - Configure alert conditions and message formatting for your team's needs.


## 📊 Basic Information

- **Workflow ID:** 6569
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 388
- **Downloads:** 38
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6569)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** (×4)
- **code** 
- **if** 
- **set** (×2)
- **slack** (×2)
- **emailSend** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
