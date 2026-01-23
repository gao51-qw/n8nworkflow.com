## 📊 Description
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
