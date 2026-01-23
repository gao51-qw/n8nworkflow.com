# Generate complete SEO audits with Apify, Claude Sonnet 4, and Gmail delivery

> ## Description
Get professional SEO audits delivered automatically in under 5 minutes. This complete n8n workflow analyzes any website and generates 4 comprehensive reports that you can send directly to clients.

### What You Get:
- ✅ **Complete n8n Workflow** - Ready-to-import automation that runs entire SEO audits
- ✅ **Technical SEO Analysis** - HTML structure, performance, and crawlability assessment
- ✅ **Content Quality Audit** - Keyword optimization, readability, and E-A-T evaluation
- ✅ **Strategic Opportunities Report** - Growth strategies and competitive insights
- ✅ **Executive Summary** - Client-ready action plan with prioritized recommendations
- ✅ **Professional Email Templates** - Branded delivery system with all reports attached
- ✅ **Setup Documentation** - Complete installation guide with API configurations

Perfect for agencies, consultants, and freelancers who want to offer high-value SEO audits without manual analysis.

**Get Started:** []https://n8n.partnerlinks.io/ds9podzjls6d

SEO Audit Workflow Product Window
Product Name
"AI-Powered SEO Audit Automation"
Product Description
Get professional SEO audits delivered automatically in under 5 minutes. This complete n8n workflow analyzes any website and generates 4 comprehensive reports that you can send directly to clients.
What You Get:

✅ Complete n8n Workflow - Ready-to-import automation that runs entire SEO audits
✅ Technical SEO Analysis - HTML structure, performance, and crawlability assessment
✅ Content Quality Audit - Keyword optimization, readability, and E-A-T evaluation
✅ Strategic Opportunities Report - Growth strategies and competitive insights
✅ Executive Summary - Client-ready action plan with prioritized recommendations
✅ Professional Email Templates - Branded delivery system with all reports attached
✅ Setup Documentation - Complete installation guide with API configurations

Perfect for agencies, consultants, and freelancers who want to offer high-value SEO audits without manual analysis.
Requirements: You'll need an n8n account to run this workflow.
Get Started: https://n8n.partnerlinks.io/ds9podzjls6d

## 🚀 How to Setup
### Prerequisites
#### Before importing this workflow, ensure you have:

- n8n account (cloud or self-hosted)
- Apify account for web scraping
- Anthropic account for AI analysis
Gmail account for report delivery

### Step 1: API Credentials Setup
#### 1.1 Apify API Setup

- Sign up at Apify
- Go to Account Settings → Integrations
- Copy your API Token
- In the workflow, update the Apify Crawl Request node URL with your token

#### 1.2 Anthropic API Setup

- Create account at Anthropic Console
- Generate an API Key
- In n8n, go to Credentials → Add Credential → Anthropic API
- Enter your API key

#### 1.3 Gmail OAuth2 Setup

- In n8n, go to Credentials → Add Credential → Gmail OAuth2
- Follow the OAuth2 flow to connect your Gmail account
- Grant permissions for sending emails with attachments

### Step 2: Workflow Configuration
#### 2.1 Import Workflow

- Copy the provided workflow JSON
- In n8n, click Import from URL/File
- Paste the JSON and import

#### 2.2 Update Variables

- Open the Variables node
- Set your target website URL (include https://)
- Set the recipient email address
- Save the node

#### 2.3 Configure Credentials

- Assign your Anthropic API credential to all Claude model nodes
- Assign your Gmail OAuth2 credential to the Gmail node
- Update the Apify URL with your API token

### Step 3: Test & Run
#### 3.1 Test Run

- Start with a simple website (your own site recommended)
- Click Execute Workflow on the manual trigger
- Monitor execution progress (takes 3-5 minutes)
- Check for any error messages

#### 3.2 Troubleshooting

**Apify errors**: Verify API token and URL format
**Anthropic errors**: Check API key and usage limits
**Gmail errors**: Re-authenticate OAuth2 connection
**Timeout issues**: Increase node timeout settings if needed

### Step 4: Customization (Optional)
#### 4.1 Audit Scope

Modify maxCrawlDepth in Apify node for more pages
Adjust maxCrawlPages for larger sites
Update CSS selectors for specific content extraction

#### 4.2 Email Template

Customize the HTML email template in Gmail node
Update sender information and branding
Modify report descriptions and formatting

#### 4.3 AI Prompts

Fine-tune prompts in the three audit nodes for specific industries
Adjust analysis depth and focus areas
Modify scoring criteria and recommendations

## 📋 Workflow Overview
The complete process takes 3-5 minutes and includes:

-  Website Crawling (30-60 seconds) - Extracts content and HTML
- AI Analysis (2-3 minutes) - Three parallel audits using Claude Sonnet 4
- Report Generation (1-2 minutes) - Creates and emails 4 professional reports

💡 Pro Tips

- Test with smaller websites first to verify setup
- Monitor Anthropic API usage to avoid rate limits
-Keep backup copies of your customized prompts
- Set up email filters to organize audit reports

## 📦 What Workflow does

### Technical SEO Audit PDF (≈ 8-12 pp)
- Core Web Vitals snapshot
- Crawl/index errors & fixes
- Schema, canonical, robots, mobile UX checks
- Colour-coded priority list (🔴 / 🟡 / 🟢)

### Content Quality Audit PDF (≈ 6-10 pp)
- E-E-A-T scoring & gaps
- Keyword density + missed terms
- Readability metrics (Flesch, Gunning-Fog)
- Duplicate-content & freshness flags

### Strategic SEO Opportunities PDF (≈ 5-8 pp)
- SERP-feature wins (Featured Snippets, PAA)
- Competitor content gaps & topic ideas
- Link-building prospects & internal-link map
- ROI-ranked action list

### Executive Summary PDF (≈ 3-4 pp)
- Health scores (/100) for Tech, Content, Strategy
- 7-day / 30-day / 90-day action roadmap
- KPIs & ROI projection panel
- Resource/time estimates for each phase

## Potential Improvements
If you can self-host Gotenberg, you can use it's html-to-pdf function and attach the audit as a document

## 📊 Basic Information

- **Workflow ID:** 6403
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 189
- **Downloads:** 18
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6403)

## 👤 Author

- **Name:** Luka Zivkovic
- **Username:** @zivkovic58

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×4)
- **merge** (×2)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×4)
- **convertToFile** (×4)
- **stickyNote** (×13)
- **html** (×4)
- **markdown** (×4)
- **gmail** 
- **set** 
- **manualTrigger** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
