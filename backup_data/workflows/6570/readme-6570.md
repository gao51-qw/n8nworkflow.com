# Website intelligence & lead scoring with ScrapeGraphAI, HubSpot and Slack

> # How it works

This workflow automatically analyzes website visitors in real-time, enriches their data with company intelligence, and provides lead scoring and sales alerts.

## Key Steps

1. **Webhook Trigger** - Receives visitor data from your website tracking system.
2. **AI-Powered Company Intelligence** - Uses ScrapeGraphAI to extract comprehensive company information from visitor domains.
3. **Visitor Enrichment** - Combines visitor behavior data with company intelligence to create detailed visitor profiles.
4. **Lead Scoring** - Automatically scores leads based on company size, industry, engagement, and intent signals.
5. **CRM Integration** - Updates your CRM with enriched visitor data and lead scores.
6. **Sales Alerts** - Sends real-time notifications to your sales team for high-priority leads.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for company intelligence gathering.
2. **Set up HubSpot connection** - Connect your HubSpot CRM to automatically update contact records.
3. **Configure Slack integration** - Set up your Slack workspace and specify the sales alert channel.
4. **Customize lead scoring criteria** - Adjust the scoring algorithm to match your target customer profile.
5. **Set up website tracking** - Configure your website to send visitor data to the webhook endpoint.
6. **Test the workflow** - Verify all integrations are working correctly with a test visitor.

## Key Features

- **Real-time visitor analysis** with company intelligence enrichment
- **Automated lead scoring** based on multiple factors (company size, industry, engagement)
- **Intent signal detection** (pricing interest, demo requests, contact intent)
- **Priority-based sales alerts** with recommended actions
- **CRM integration** for seamless lead management
- **Deal size estimation** based on company characteristics


## 📊 Basic Information

- **Workflow ID:** 6570
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 337
- **Downloads:** 33
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6570)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **code** (×2)
- **hubspot** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
