# Automated template delivery system with Stripe, GPT-4o & Gmail

> ## 📊 Description
Automate post-purchase workflows by instantly fetching successful Stripe payments, matching them to corresponding automation templates in Google Sheets, and sending customers personalized access emails using AI-generated content. This system ensures each buyer receives their digital template, password, and onboarding details automatically after payment. 💳📩🤖

## What This Template Does
- Step 1: Triggers daily at 7:00 AM IST to fetch all successful payment charges from Stripe. ⏰
- Step 2: Retrieves payment intent and product details for each successful charge to enrich context. 💰
- Step 3: Validates required fields (order reference, product name, customer name, email). ✅
- Step 4: Matches purchased product with the automation record in Google Sheets via AI lookup. 🔍
- Step 5: Combines Stripe and Sheet data into one record, ensuring accuracy and completeness. 🔄
- Step 6: Filters out already-processed customers to avoid duplicate sends. 🧮
- Step 7: Generates a personalized thank-you email using Azure OpenAI (GPT-4o-mini) including access links, password, and onboarding tips. 💌
- Step 8: Sends the email through Gmail to the customer automatically. 📧
- Step 9: Logs each transaction and email delivery into Google Sheets for tracking and auditing. 📊

## Key Benefits
✅ Fully automated Stripe-to-email delivery flow
 ✅ Zero manual intervention — instant template delivery
 ✅ AI-personalized HTML emails with customer details
 ✅ Centralized purchase logging and analytics
 ✅ Eliminates duplicates and ensures smooth customer experience

## Features
- Scheduled daily trigger (7:00 AM IST)
- Stripe API integration for payment and product details
- Google Sheets lookup for automation files and passwords
- GPT-powered email content generation
- Gmail API integration for delivery
- Google Sheets logging for audit trail

## Requirements
- Stripe API credentials
- Google Sheets OAuth2 credentials
- Gmail OAuth2 credentials
- Azure OpenAI API credentials

## Target Audience
- SaaS or digital product sellers using Stripe
- Automation template marketplaces
- Small teams delivering digital assets via email
- Businesses seeking instant customer fulfillment


## 📊 Basic Information

- **Workflow ID:** 10145
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 684
- **Downloads:** 68
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10145)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **googleSheetsTool** 
- **httpRequest** (×2)
- **if** (×4)
- **code** (×2)
- **stickyNote** (×19)
- **stripe** 
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **scheduleTrigger** 
- **merge** (×3)
- **googleSheets** (×2)
- **splitInBatches** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
