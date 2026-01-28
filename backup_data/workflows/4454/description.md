Monitor BeyondPresence video agent conversations in real-time to automatically score leads (0-100+) based on buying signals and send instant Slack alerts when hot opportunities or competitors are mentioned. This template helps sales teams prioritize leads immediately, never miss competitor mentions, and respond to high-intent prospects while they're still engaged.

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