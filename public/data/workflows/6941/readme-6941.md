# Lead generation and qualification with GPT-4o, Google Workspace, and automated follow-up

> # 🚀 AI Lead Generation and Follow-Up Template

## 📋 Overview

This n8n workflow template automates your lead generation and follow-up process using AI. It captures leads through a form, enriches them with company data, classifies them into different categories, and sends appropriate follow-up sequences automatically.

### Key Features:
- 🤖 AI-powered lead classification (Demo-ready, Nurture, Drop)
- 📊 Automatic lead enrichment with company data
- 📧 Intelligent email responses and follow-up sequences
- 📅 Automated demo scheduling for qualified leads
- 📝 Complete lead logging in Google Sheets
- 💬 AI assistant for immediate query responses

## 🛠️ Prerequisites

Before setting up this workflow, ensure you have:

1. **n8n Instance**: Self-hosted or cloud version
2. **OpenAI API Key**: For AI-powered features
3. **Google Workspace Account** with:
   - Gmail access
   - Google Sheets
   - Google Calendar
4. **Basic understanding** of your Ideal Customer Profile (ICP)

## ⚡ Quick Start Guide

### Step 1: Import the Workflow
1. Copy the workflow JSON
2. Import into your n8n instance
3. The workflow will appear with all nodes connected

### Step 2: Configure Credentials
You'll need to set up the following credentials:
- **OpenAI API**: For AI agents and classification
- **Gmail OAuth2**: For sending emails
- **Google Sheets OAuth2**: For lead logging
- **Google Calendar OAuth2**: For demo scheduling

### Step 3: Create Your Lead Log Sheet
Create a Google Sheet with these columns:
- Date
- Name
- Email
- Company
- Job Title
- Message
- Number of Employees
- Industry
- Geography
- Annual Revenue
- Technology
- Pain Points
- Lead Classification

### Step 4: Update Configuration Nodes
1. **Replace Sheet ID**: Update all Google Sheets nodes with your sheet ID
2. **Update Email Templates**: Customize all email content
3. **Set Escalation Email**: Replace "your-email@company.com" with your team's email
4. **Configure ICP Criteria**: Edit the "Define ICP and Lead Criteria" node

## 🎯 Lead Classification Setup

### Define Your ICP (Ideal Customer Profile)

Edit the "Define ICP and Lead Criteria" node to set your criteria:

#### 📌 ICP Criteria Example:
```
- Company Size: 50+ employees
- Industry: SaaS, Finance, Healthcare, Manufacturing
- Geography: North America, Europe
- Pain Points: Manual processes, compliance needs, scaling challenges
- Annual Revenue: $5M+
```

#### ✅ Demo-Ready Criteria:
High-intent prospects who meet multiple qualifying factors:
- Large company size (your threshold)
- Clear pain points mentioned
- Urgent timeline
- Budget authority indicated
- Specific solution requests

#### 🌱 Nurture Criteria:
Prospects with future potential:
- Meet basic size requirements
- In target industry
- General interest expressed
- Planning future implementation
- Exploring options

#### ❌ Drop Criteria:
Only drop leads that clearly don't fit:
- Outside target geography
- Wrong industry (B2C if you're B2B)
- Too small with no growth
- Already with competitor
- Spam or test messages

## 📧 Email Customization

### Customize Follow-Up Sequences:

#### Demo-Ready Sequence:
1. Immediate calendar invitation
2. Personalized demo confirmation
3. Meeting reminder (optional)

#### Nurture Sequence:
1. Welcome email with resources
2. Educational content (Day 2)
3. Webinar/event invitation (Day 3)
4. Demo offer (Day 4)

#### Drop Message:
- Polite acknowledgment
- Clear explanation
- Keep door open for future

## 🔧 Advanced Configuration

### AI Answer Agent Setup:
1. Update the system prompt with your company information
2. Add common Q&A patterns
3. Set escalation rules
4. Configure language preferences

### Lead Enrichment Options:
- Add API keys for additional data sources
- Configure enrichment fields
- Set data quality thresholds
- Enable duplicate detection

### Calendar Integration:
- Set available meeting times
- Configure meeting duration
- Add buffer times
- Set timezone handling

## 📊 Monitoring and Optimization

### Track Key Metrics:
- Lead volume by classification
- Response rates
- Demo conversion rates
- Time to first response
- Enrichment success rate

### Optimization Tips:
1. **Regular Review**: Check classification accuracy weekly
2. **A/B Testing**: Test different email sequences
3. **Feedback Loop**: Use outcomes to refine ICP criteria
4. **AI Training**: Update prompts based on results

## 🎉 Best Practices

1. **Start Simple**: Begin with basic criteria and refine over time
2. **Test Thoroughly**: Use test leads before going live
3. **Monitor Daily**: Check logs for the first week
4. **Iterate Quickly**: Adjust based on results
5. **Document Changes**: Keep track of criteria updates

## 📈 Scaling Your Workflow

As your lead volume grows:
1. **Add Sub-workflows**: Separate complex processes
2. **Implement Queuing**: Handle high volumes
3. **Add CRM Integration**: Sync with your sales tools
4. **Enable Analytics**: Track detailed metrics
5. **Set Up Alerts**: Monitor for issues



## 📊 Basic Information

- **Workflow ID:** 6941
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 1851
- **Downloads:** 185
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6941)

## 👤 Author

- **Name:** Franz
- **Username:** @agents-by-franz

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **gmail** (×4)
- **set** 
- **code** (×4)
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **formTrigger** 
- **googleSheets** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **if** (×3)
- **googleCalendar** (×2)
- **wait** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
