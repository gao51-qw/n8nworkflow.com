# Automate weekly marketing reports with GoMarble MCP, Claude AI & Gmail

> # Automated Marketing Analytics Report with AI Agent

## How it works

Transform your marketing data into actionable insights with this intelligent automation workflow. The system combines scheduled triggers with AI-powered analysis to deliver comprehensive marketing reports directly to your inbox.

**Key Features:**
- Scheduled automated reporting (daily, weekly, or monthly)
- AI-powered data analysis using advanced language models
- Multi-platform marketing data integration via GoMarble MCP
- Intelligent report generation with actionable recommendations
- Direct email delivery of formatted reports

## Set up steps

**Prerequisites:**
- GoMarble MCP account and API access
- Gmail account for report delivery
- n8n instance (cloud or self-hosted)

**Configuration Time:** ~15-20 minutes

**Step-by-step setup:**

1. **Connect GoMarble MCP to n8n**
   - Follow the integration guide: [GoMarble n8n Setup](https://www.gomarble.ai/docs/connect-to-n8n)
   - Configure your marketing platform credentials (Google Ads, Facebook Ads, Analytics)

2. **Configure the Schedule Trigger**
   - Set your preferred reporting frequency
   - Choose optimal timing for data availability

3. **Customize the Report Prompt**
   - Define specific metrics and KPIs to track
   - Set analysis parameters and report format preferences

4. **Set up AI Agent Configuration**
   - Choose between Anthropic Claude or OpenAI models
   - Configure the GoMarble MCP tools for your marketing platforms

5. **Configure Gmail Integration**
   - Set recipient email addresses
   - Customize email template and subject line

**Advanced Configuration:**
- Add conditional logic for performance thresholds
- Include custom data visualization requests
- Set up alert triggers for significant metric changes

## What you'll get

- **Automated Intelligence:** Regular marketing performance analysis without manual effort
- **Cross-Platform Insights:** Unified view of Google Ads, Facebook Ads, and Analytics data
- **AI-Powered Recommendations:** Strategic insights and optimization suggestions
- **Professional Reports:** Well-formatted, executive-ready marketing summaries
- **Scalable Solution:** Easy to extend with additional marketing platforms or custom metrics

Perfect for marketing teams, agencies, and business owners who want to stay on top of their marketing performance with minimal manual work.

## 📊 Basic Information

- **Workflow ID:** 6420
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 964
- **Downloads:** 96
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6420)

## 👤 Author

- **Name:** Sankalp Dev
- **Username:** @sankalpthedev

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **gmail** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
