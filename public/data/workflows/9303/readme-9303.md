# Automate Job Opportunity Digests with OpenRouter GPT-5 and Email

> # n8n Forum Job Aggregator - AI-Powered Email Digest

## Overview
Automate your n8n community job board monitoring with this intelligent workflow that scrapes, analyzes, and delivers opportunities straight to your inbox. Perfect for freelancers, agencies, and developers looking to stay on top of n8n automation projects without manual checking.

## How It Works
1. **Scrapes** the n8n community job board to find new postings from the last 7 days
2. **Extracts** key metadata including job titles, descriptions, posting dates, and client details
3. **Analyzes** each listing using OpenRouter AI to generate concise summaries of project requirements and client needs
4. **Delivers** a professionally formatted email digest with all opportunities organized and ready for review

## Prerequisites
- **OpenRouter API Key**: Sign up at [OpenRouter.ai](https://openrouter.ai) to access AI summarization capabilities
- **SMTP Email Account**: Gmail, Outlook, or any SMTP-compatible email service

## Setup Steps
**Time estimate: 5-10 minutes**

1. **Configure OpenRouter Credentials**
   - Add your OpenRouter API key in n8n credentials manager
   - Recommended model: GPT-3.5-turbo or Claude for cost-effective summaries

2. **Set Up SMTP Email**
   - Configure sender email address
   - Add recipient email(s) for digest delivery
   - Test connection to ensure delivery

3. **Customize Date Range** (Optional)
   - Default: Last 7 days of job postings
   - Adjust the date filter node to match your preferred frequency

4. **Test & Refine**
   - Run a test execution
   - Review email formatting and AI summary quality
   - Customize HTML template styling to match your preferences

## Customization Options
- **Scheduling**: Set up cron triggers (daily, weekly, or custom intervals)
- **Filtering**: Add keyword filters for specific technologies or project types
- **AI Prompts**: Modify the summarization prompt to extract different insights
- **Email Design**: Customize HTML/CSS styling in the email template node

## Example Use Cases
- **Freelance Developers**: Never miss relevant n8n automation opportunities
- **Agencies**: Monitor market demand and competitor activity
- **Job Seekers**: Track n8n-related positions and consulting gigs
- **Market Research**: Analyze trends in automation project requests

## Example Output
Each email digest includes:
- Job title and posting date
- AI-generated summary (e.g., "Client needs workflow automation for Shopify order processing with Slack notifications")
- Direct link to original posting
- Organized by recency


## 📊 Basic Information

- **Workflow ID:** 9303
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9303)

## 👤 Author

- **Name:** Julian Kaiser
- **Username:** @jksr

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **html** (×2)
- **filter** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **merge** 
- **emailSend** 
- **stickyNote** (×4)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
