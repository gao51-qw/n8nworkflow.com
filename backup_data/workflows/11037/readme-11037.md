# Personalized B2B cold email sequence with GPT-4 + Gmail auto-reply detection

> # 🎯 Automated B2B Cold Email Sequence with AI Personalization

Stop manually sending follow-ups. This workflow automates your entire cold email outreach with AI-powered personalization, smart scheduling, and automatic reply detection.

## ✨ What It Does

This workflow sends a perfectly-timed 3-email sequence to B2B prospects with:

- **AI-generated personalized emails** adapted to each prospect's sector, company size, and role
- **Smart scheduling**: Only sends Tuesday/Wednesday/Thursday at optimal times (~9AM with randomization)
- **Bilingual support**: Auto-detects French or English prospects
- **Reply detection**: Automatically stops the sequence when someone replies
- **Spam prevention**: Randomized sending times, professional intervals
- **Full tracking**: Updates Google Sheets with send status and reply detection
- **Slack notifications**: Get alerted immediately when a hot lead responds

## 📊 Expected Results

Based on real usage:
- **10-15% reply rate** (vs 3-8% for generic cold emails)
- **2-5 hot leads** per 30 prospects contacted
- **90% time saved** vs manual outreach
- **Professional delivery** that preserves sender reputation

## 🎬 How It Works

1. **Add prospect** to Google Sheet (Email, Name, Company, etc.)
2. **Workflow triggers** automatically on new row
3. **Time planning** calculates optimal send dates (Tue/Wed/Thu only)
4. **Email 1** (J0): AI generates introduction with value prop (80-120 words)
5. **Wait 3 days**
6. **Email 2** (J+3): Follow-up with new angle or case study (70-90 words)
7. **Wait 4 days**
8. **Email 3** (J+7): Final soft close, respectful exit (60-100 words)
9. **Reply detection**: Monitors Gmail → marks prospect "hot" → Slack alert → stops sequence

## 🚀 Perfect For

- Sales teams doing B2B cold outreach
- Agencies prospecting new clients
- SaaS founders building their pipeline
- Consultants/freelancers doing business development
- Anyone tired of manual follow-ups and low response rates

## ⚙️ Requirements

**Required:**
- Google Sheets (free)
- Gmail account (free)
- OpenAI API key (~$0.50 per 100 emails)

**Optional:**
- Slack (for notifications)

**n8n version:** Compatible with n8n 1.0+




## 📊 Basic Information

- **Workflow ID:** 11037
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 218
- **Downloads:** 21
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11037)

## 👤 Author

- **Name:** Peyrichou Maxime
- **Username:** @mapey

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **gmailTool** (×3)
- **googleSheets** (×7)
- **gmailTrigger** 
- **if** (×2)
- **slack** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **stickyNote** (×8)
- **googleSheetsTrigger** 
- **merge** (×3)
- **set** 
- **errorTrigger** 
- **wait** (×3)
- **code** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
