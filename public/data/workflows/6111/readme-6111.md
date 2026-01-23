# Automated abandoned cart recovery emails for Shopify stores

> ## Overview

This n8n template automatically sends personalized recovery emails to customers who abandon their shopping carts. Recover 15-25% of lost sales with intelligent, well-timed follow-up emails that include exact cart contents.
Use cases: Online stores, e-commerce brands, subscription services, digital product sales, any business with cart abandonment.

## How it works

Shopify webhook triggers when customer creates cart and begins checkout process. The workflow waits one hour then checks if cart was converted to completed order. If cart remains abandoned, it extracts customer email and cart details. A personalized email is generated with cart contents and direct checkout link. Customer receives gentle reminder and can complete purchase with one click.

## Set up instructions

The cart creation webhook is used but you can adjust the wait time or add multiple follow-up sequences
Configure your email service provider in the Send Email node
Customize email template and messaging to match your brand tone

## Requirements

Shopify store with cart abandonment tracking
Email service provider configured in n8n
Customer email collection enabled in checkout process

## Customising this workflow

Create multi-email sequences with different timing (1hr, 24hr, 72hr)
Add discount codes for additional purchase incentive
Segment messaging by cart value or customer type

## 📊 Basic Information

- **Workflow ID:** 6111
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 369
- **Downloads:** 36
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6111)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **shopifyTrigger** 
- **wait** 
- **shopify** 
- **if** 
- **set** 
- **emailSend** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
