# BeyondPresence sales intelligence → real-time lead scoring

> Monitor BeyondPresence video agent conversations in real-time to automatically score leads (0-100+) based on buying signals and send instant Slack alerts when hot opportunities or competitors are mentioned. This template helps sales teams prioritize leads immediately, never miss competitor mentions, and respond to high-intent prospects while they're still engaged.

## How it works
- **Real-time webhook** processes each user message as it happens during calls
- **Scoring engine** analyzes for buying signals (+points) and objections (-points)
- **Competitor detection** instantly identifies when alternatives are mentioned
- **Smart routing** sends alerts to different Slack channels based on urgency
- **Hot leads** (70+ score) trigger immediate notifications with recommendations
- **Call summary (Optional)** provides final qualification score when conversation ends

## Set up steps
1. **Connect Slack OAuth2** - Use n8n's built-in Slack integration (no webhooks needed!)
2. **Create Slack channels** - Set up #sales-hot-leads, #sales-competitors, #sales-qualified
3. **Add webhook to BeyondPresence** - Copy URL from n8n to [BeyondPresence Settings](https://app.bey.chat/settings) → Webhooks
4. **Customize competitors** - Edit the scoring node to add your specific competitor names
5. **Adjust scoring weights** (optional) - Tune point values for your sales process

**Setup time**: 10-15 minutes
**Requirements**: BeyondPresence account, Slack workspace admin access

## 📊 Basic Information

- **Workflow ID:** 4454
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 559
- **Downloads:** 55
- **Created:** 2025/5/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4454)

## 👤 Author

- **Name:** M Shehroz Sajjad
- **Username:** @mshehrozsajjad

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **webhook** 
- **respondToWebhook** 
- **switch** (×2)
- **code** (×2)
- **slack** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
