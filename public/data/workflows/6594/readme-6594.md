# Automate website monitoring with GPT-4 Mini, MCP tools & multi-channel alerts

> ## How it works
This workflow automatically monitors multiple websites using AI-powered analysis and MCP (Model Context Protocol) tools. The system runs scheduled checks, analyzes website performance and security using browser-tools-mcp and mcp-recon servers, categorizes issues by severity (critical, warning, info), sends appropriate alerts through Slack and email, and logs all findings to Google Sheets for historical tracking and trend analysis.

## Who is this for
DevOps engineers, website administrators, system monitors, digital agencies, and technical teams responsible for maintaining multiple websites. Perfect for organizations that need automated website health monitoring with intelligent analysis, comprehensive security checks, and immediate alerting for critical issues.

## Requirements
- **MCP Servers**: Browser-tools-mcp and mcp-recon servers running locally or remotely
- **OpenAI API**: API key for AI-powered website analysis
- **Google Sheets**: Spreadsheet with "Websites" and "Monitoring Log" sheets
- **Slack Integration**: Slack workspace with webhook or bot token for alerts
- **Email Configuration**: SMTP settings for critical email notifications
- **Environment Variables**: Secure storage for all credentials and endpoints

## How to set up
1. **Install and Configure MCP Servers** - Set up browser-tools-mcp and mcp-recon servers, configure endpoints in environment variables (MCP_BROWSER_TOOLS_URL, MCP_RECON_URL)
2. **Prepare Google Sheets Integration** - Create spreadsheet with "Websites" sheet (URL column) and "Monitoring Log" sheet, set GOOGLE_SHEET_ID environment variable
3. **Configure Notification Systems** - Set up Slack webhook/bot and email SMTP settings, configure SLACK_CHANNEL, ALERT_EMAIL, FROM_EMAIL variables
4. **Customize Monitoring Parameters** - Update Configuration Variables node with your monitoring thresholds, batch sizes, and website lists

## How to customize the workflow
Modify the Configuration Variables node to adjust monitoring thresholds (response times, performance scores), change batch processing sizes, update notification preferences, or add additional websites to monitor. Customize alert severity rules in the Alert Severity Router and modify notification templates in the Slack and Email nodes.

## 📊 Basic Information

- **Workflow ID:** 6594
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 961
- **Downloads:** 96
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6594)

## 👤 Author

- **Name:** Grace Gbadamosi
- **Username:** @grace-bola

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **googleSheets** (×2)
- **merge** 
- **switch** 
- **slack** (×2)
- **emailSend** 
- **if** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
