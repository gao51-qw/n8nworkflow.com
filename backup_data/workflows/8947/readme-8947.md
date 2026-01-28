# Stripe customer duplicate detection & management with Airtable & Slack notifications

> ## Description
Automatically scan your Stripe customers daily to detect duplicates and keep your customer database clean. This workflow uses advanced fuzzy matching for emails and names, logs results to Airtable for review, and notifies your team in Slack with actionable insights. 💳🧹💬

## What This Template Does
- Runs every day at 2:00 AM via scheduled trigger ⏰
- Fetches all customers from Stripe 💳
- Analyzes for potential duplicates using email and name similarity 🔍
- Logs duplicate suggestions into Airtable for review 📊
- Sends formatted Slack notifications with detailed reports 💬

## Key Benefits
- Keeps your Stripe customer database clean and deduplicated 🧹
- Reduces errors in reporting and billing 💵
- Provides confidence scoring for duplicate matches 🔑
- Centralized review and approval in Airtable 📋
- Real-time team notifications in Slack with actionable insights 📲

## Features
- Daily 2 AM schedule with cron expression 0 2 * * *
- Email-based duplicate detection 📧
- Name similarity matching using Levenshtein distance 👤
- Smart grouping: oldest record becomes the primary 🏷️
- Logs duplicates to Airtable with status tracking 🔄
- Slack notifications with statistics, match types, and Airtable link ⚡

## Requirements
- n8n instance (cloud or self-hosted)
- Stripe API credentials with customer read access
- Airtable account with a table for duplicate tracking
- Slack App & Bot Token with chat:write permission
- Target Audience
- SaaS companies managing large Stripe customer databases 🏢
- Finance and billing teams wanting clean records 💰
- Support teams reducing customer confusion from duplicates 🎧
- Growth and marketing teams ensuring CRM accuracy 📈
- Any business that relies on Stripe for recurring billing 💼

## Step-by-Step Setup Instructions
- Set up Stripe API credentials in n8n (use your Secret Key).
- Create an Airtable base and table with required fields (Customer IDs, Email, Similarity Score, Status).
- Add Slack API credentials and choose your target channel.
- Replace environment variables for Airtable (AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID) and Slack (SLACK_CHANNEL_ID).
- Import this workflow into n8n and connect your credentials.
- Run the workflow once manually to validate data flows.
- Enable the workflow for daily automated duplicate detection. ✅


## 📊 Basic Information

- **Workflow ID:** 8947
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 29
- **Downloads:** 2
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8947)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **stripe** 
- **function** (×2)
- **airtable** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
