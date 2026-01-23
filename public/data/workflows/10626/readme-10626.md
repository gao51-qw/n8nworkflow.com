# Singapore university eligibility analyzer with GPT-4o-Mini, WordPress and Slack notifications

> ## Introduction
Automates scholarship tracking by scraping university sites, assessing eligibility via AI, and publishing results to WordPress or Slack. Eliminates manual searches for students, counselors, and education platforms, enabling scalable curation and timely notifications.

## How it Works
Webhook triggers parallel scraping of NUS, NTU, SIT, SUTD → merge data → AI evaluates eligibility → aggregate qualified scholarships → generate summaries → post to WordPress/Slack → send email notifications with appeal options.

## Setup Steps
1. Configure OpenAI credentials and eligibility prompt template
2. Update HTTP requests with university URLs and selectors
3. Add WordPress site URL and API credentials
4. Create Slack webhook and notification channel
5. Configure Gmail/SMTP for email notifications

## Workflow
Webhook → Scrape 4 Universities (Parallel) → Merge Data → Prepare Context → AI Eligibility Check → Aggregate Results → Generate Summary → Check Status → Publish Slack/Email/WordPress → Handle Appeals

## Workflow Steps
1. Scraping: Fetch scholarship pages from four universities simultaneously
2. Merge: Combine data into a unified dataset
3. AI Processing: Analyze eligibility criteria, deadlines against student profile
4. Aggregation: Consolidate qualified scholarships with match scores
5. Publishing: Post to WordPress, send Slack/email with results
6. Appeals: Webhook handles rejection appeals with AI review

## Prerequisites
OpenAI API key, WordPress site with REST API, Slack workspace with webhook, Gmail/SMTP credentials, student profile data (GPA, citizenship, major)

## Use Cases
Counselors automating recommendations for 100+ students, financial aid offices aggregating departmental opportunities

## Customization
Add universities (SMU, SUSS, international institutions), include government schemes (MOE, Edusave, Mendaki)

## Benefits
Saves 10+ hours weekly per counselor, monitors 50+ scholarships automatically, provides AI eligibility matching (85%+ accuracy)


## 📊 Basic Information

- **Workflow ID:** 10626
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10626)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** (×5)
- **merge** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **aggregate** 
- **slack** (×2)
- **wordpress** (×2)
- **respondToWebhook** (×3)
- **if** 
- **emailSend** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
