# Analyze BeyondPresence video calls with GPT-4o-mini and Google Sheets

> Transform your [BeyondPresence](https://app.bey.chat/settings) video agent conversations into comprehensive insights by automatically analyzing each call with AI and organizing 35+ data points in Google Sheets. This template helps customer success, support, and training teams save 30+ minutes per call on documentation while ensuring no critical action items or insights are missed.

## How it works
- **Webhook receives** completed call data from BeyondPresence including full transcript
- **Data validation** ensures quality and adds enriched metadata (duration, time calculations)  
- **AI analysis** (GPT-4) extracts action items, sentiment, decisions, and recommendations
- **Parse response** handles the AI output and structures it for sheets
- **Auto-append** to Google Sheets with 35+ insights per call organized beautifully

## Set up steps
1. **Copy our Google Sheets template** - One click! Get pre-formatted sheet: [BeyondPresence Call Analytics Template](https://docs.google.com/spreadsheets/d/1TO6-jkCtoSFNLJObtN0UyklgdUd3ZxEnUaNvUaBjpvo/copy)
2. **Connect accounts** - Add OpenAI API key and Google Sheets OAuth2
3. **Configure webhook** - Copy URL from n8n to [BeyondPresence Settings](https://app.bey.chat/settings) → Webhooks
4. **Customize AI prompt** (optional) - Adjust analysis focus for your use case
5. **Test with a call** - Make a test call and watch insights appear!

**Setup time**: 5-10 minutes
**Requirements**: BeyondPresence account, OpenAI API key, Google account

## 📊 Basic Information

- **Workflow ID:** 4436
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 352
- **Downloads:** 35
- **Created:** 2025/5/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4436)

## 👤 Author

- **Name:** M Shehroz Sajjad
- **Username:** @mshehrozsajjad

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **webhook** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **n8n-nodes-beyondpresence.beyondPresence** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
