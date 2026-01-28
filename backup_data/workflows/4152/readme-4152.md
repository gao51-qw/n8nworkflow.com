# Automate outbound sales calls to qualified leads with VAPI.ai and Google Sheets

> This workflow automates outbound calls to qualified leads using VAPI.ai and Google Sheets. Here's how it works and how to set it up.

How It Works

Read Leads: The workflow starts by reading leads from a Google Sheet where the "AI call status" is marked as "NO"
Batch Processing: Leads are processed one at a time (batch size = 1) to ensure proper sequencing
Variable Setup: Extracts the phone number and row number from each lead record
Trigger VAPI Call: Makes an API call to VAPI.ai to initiate an AI-powered outbound call
Update Status: Marks the lead as "YES" in the Google Sheet after the call is triggered to prevent duplicate calls
Detailed Setup Guide

Prerequisites

n8n instance (self-hosted or cloud)
Google Sheets account with OAuth2 credentials
VAPI.ai account with API access
Step 1: Google Sheets Setup

Create a Google Sheet with your leads data
Ensure you have these columns (adjust if needed):
Phone number (column E in the current setup)
AI call status (column F in the current setup)
Mark all leads you want to call with "NO" in the status column
Step 2: Google Sheets Credentials

In n8n, go to Credentials &gt; Add New
Select "Google Sheets OAuth2 API"
Follow the prompts to authenticate with your Google account
Name it (e.g., "Google Sheets account 3" as in the example)
Step 3: VAPI.ai Setup

Get your VAPI.ai API credentials
In n8n, go to Credentials &gt; Add New
Select "HTTP Header Auth"
Add your VAPI authorization header (typically "Bearer YOUR_API_KEY")
Name it (e.g., "Header Auth account 4" as in the example)


## 📊 Basic Information

- **Workflow ID:** 4152
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1799
- **Downloads:** 179
- **Created:** 2025/5/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4152)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **splitOut** 
- **set** 
- **code** (×2)
- **httpRequest** 
- **googleSheets** (×2)
- **scheduleTrigger** 
- **wait** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
