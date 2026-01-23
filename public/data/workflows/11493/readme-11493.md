# Qualify & enrich leads with GPT-4 and LinkedIn data for intelligent routing

> # AI-Powered Lead Qualification & Enrichment Pipeline

## 🎯 Who is this for?

This template is perfect for:
- **Marketing Teams** looking to automatically qualify inbound leads from campaigns
- **Sales Teams** wanting to prioritize high-value prospects instantly  
- **Agencies** offering lead qualification as a service to clients
- **SaaS Companies** routing trial signups to appropriate nurture sequences
- **B2B Service Providers** scoring and enriching leads from multiple sources

## 💡 What problem does it solve?

Manual lead qualification is slow, inconsistent, and expensive. Sales teams waste hours on unqualified leads while hot prospects go cold. This workflow:

- **Eliminates manual research** - Automatically enriches company data via LinkedIn
- **Scores leads instantly** - AI analyzes 15+ data points to score 0-100
- **Routes intelligently** - Hot leads get instant alerts, warm leads enter nurture
- **Personalizes outreach** - AI generates custom emails based on company context

## ⚡ What this workflow does

### 1. Lead Capture & Validation
- Captures leads via built-in n8n Form (embeddable on any website)
- Validates email format and detects business vs personal emails
- Normalizes data from various field naming conventions

### 2. Company Enrichment via Apify
- Uses Google Search to find company's LinkedIn profile
- Scrapes LinkedIn for industry, size, description, specialties, and more
- Gracefully skips enrichment for personal emails (Gmail, Yahoo, etc.)

### 3. AI Lead Qualification (GPT-4.1)
- Scores leads 0-100 based on buying signals
- Assigns tier: Hot (80+), Warm (60-79), Cold (40-59), Disqualified (&lt;40)
- Identifies buyer persona (Decision Maker, Influencer, Champion, etc.)
- Generates personalized talking points and risk factors

### 4. Intelligent Routing & Actions
- **Hot Leads**: Instant Slack alert + AI-generated personalized email + HubSpot contact
- **Warm Leads**: Slack notification for nurture sequence
- **Cold Leads**: Logged for future reference
- **All Leads**: Recorded to Google Sheets with full qualification data

## 🔧 Setup

### Required Credentials
| Service | Purpose |
|---------|---------|
| OpenAI | AI qualification & email generation |
| Apify | Google Search + LinkedIn scraping |

### Optional Credentials
| Service | Purpose |
|---------|---------|
| Slack | Lead alerts and notifications |
| HubSpot | CRM contact creation |
| Gmail | Sending personalized emails |
| Google Sheets | Lead database logging |

### Apify Setup
1. Create account at [apify.com](https://apify.com)
2. Get API token from Settings → Integrations
3. Open the Apify HTTP nodes and replace YOUR_API_KEY with the API token obtained in the above step

### Apify Actors Used
- **Google Search Scraper PPR** (Actor ID: `G9PR1B1upfS0mRvp0`) - ~$0.004/search
- **LinkedIn Company Scraper PPR** (Actor ID: `G9y3V8J1hXYJTf1Ho`) - ~$0.02/company

**Total cost**: ~$0.02-0.03 per enriched lead

## 📊 Lead Scoring Criteria

| Score | Tier | What it means |
|-------|------|---------------|
| 80-100 | 🔥 Hot | Strong buying signals, budget confirmed, urgent timeline |
| 60-79 | 🌡️ Warm | Good fit, some buying signals, needs nurturing |
| 40-59 | ❄️ Cold | Potential fit but unclear intent |
| 0-39 | ⛔ Disqualified | Poor fit, spam, or invalid |

## 🎨 Customization

### Modify Form Fields
Edit the "Lead Capture Form" node to add/remove fields for your use case.

### Adjust AI Scoring
Edit the system prompt in "AI Lead Qualification" to customize:
- Score thresholds for your industry
- Buyer persona definitions
- Custom qualification criteria

### Add Integrations
Easily extend with:
- Pipedrive, Salesforce, or other CRMs
- Email sequences (Mailchimp, ActiveCampaign)
- SMS notifications (Twilio)
- Calendar booking (Calendly)

## 📈 Example Output

```json
{
  "qualification": {
    "score": 85,
    "tier": "Hot",
    "buyerPersona": "Decision Maker",
    "urgencyLevel": "High"
  },
  "insights": {
    "keyInsights": [
      "VP-level with direct budget authority",
      "Company in growth phase (51-200 employees)",
      "Industry aligned with our ICP"
    ],
    "talkingPoints": [
      "Reference their sustainability focus",
      "Highlight ROI for mid-market companies"
    ]
  }
}
```

## 🙋 Need Help?

- Check the sticky notes in the workflow for section-by-section guidance
- Ensure Apify credentials are properly configured
- Test with a business email (not Gmail/Yahoo) to see full enrichment

---

**Created by [Agentical AI](https://agenticalai.com)** - AI Automation Agency specializing in workflow automation and AI solutions.

## 📊 Basic Information

- **Workflow ID:** 11493
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 102
- **Downloads:** 10
- **Created:** 2025/12/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11493)

## 👤 Author

- **Name:** AK Pasnoor
- **Username:** @ak-pasnoor

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **respondToWebhook** 
- **if** (×5)
- **code** (×5)
- **slack** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **hubspot** 
- **googleSheets** 
- **httpRequest** (×2)
- **gmail** 
- **stopAndError** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
