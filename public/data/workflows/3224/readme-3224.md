# Analyze any website with OpenAI and get on-page SEO audit

> ## Instantly Find & Fix What’s Holding Your Page Back

You’ve put in the work. Your content is strong. Your design is polished.

But…

❌ Your page isn’t ranking where it should.
❌ Your competitors are outranking you—even with weaker content.
❌ You have no idea what’s wrong—or how to fix it.

The truth? SEO isn’t just about keywords.

Your technical setup, content structure, and on-page elements must work together seamlessly.
And if anything is off? Google won’t rank your page.

## Who Is This For?
- SaaS Founders & Startups – Get higher rankings & organic traffic that converts.
- Marketing Teams & Agencies – Audit & optimize pages in seconds.
- E-commerce & Content Sites – Improve rankings for product pages, blogs, and landing pages.

## How It Works
1. Paste your URL
2. Get an instant audit + recommendations list
3. Implement changes & watch your rankings jump

The workflow scrapes the url you input, gets the htlm source code of the landing page, and sends it to OpenAI AI Agent.

The Agent makes a deep analysis, audit the Technical + Content SEO of the page, and provides 10 Recommendations to improve your SEO.

## Setup Guide
You will need OpenAI Credentials with an API Key to run the workflow.

The workflow is using the OpenAI-o1 model to deliver the best results. It costs between $0.20/0.30 per run.

You can adjust the prompt to your wish in the AI Agent parameters.

Once the audit has been completed, it will send an email (don't forget to add your email address here)

## Below is an example of what you can expect

![Screenshot 20250319 at 21.17.35.png](fileId:1023)


## 📊 Basic Information

- **Workflow ID:** 3224
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 56994
- **Downloads:** 5699
- **Created:** 2025/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3224)

## 👤 Author

- **Name:** Not Another Marketer
- **Username:** @notanothermarketer

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **merge** 
- **aggregate** 
- **markdown** 
- **stickyNote** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
