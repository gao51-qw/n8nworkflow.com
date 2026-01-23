# Analyze YouTube channels & send performance reports with GPT-4o-mini and Gmail

> ## **Analyze YouTube Channels & Email Actionable Insights with GPT-4o-mini, RapidAPI, and Gmail**

## Description
Automate **YouTube channel analysis** by fetching channel data, generating a **key metrics table** and actionable insights using **Azure OpenAI (GPT-4o-mini)**, and delivering the results via email. Integrates **YouTube Data API (RapidAPI)**, Google Sheets, and Gmail/SMTP for seamless reporting.

## What This Template Does
- **Fetches** YouTube channel IDs from a Google Sheet.
- **Extracts** detailed channel data using the YouTube Data API (RapidAPI).
- **Processes** and structures channel metrics for analysis.
- **Generates** a key metrics table and actionable insights using Azure OpenAI (GPT-4o-mini).
- **Delivers** a professional HTML report to your email.

## Key Benefits
- **Saves time** with automated channel performance analysis.
- **Delivers clear, actionable insights** in a mobile-friendly email.
- **Enables no-code customization** for different channels or recipients.
- **Supports multi-channel batch processing.**
- **Ensures secure handling** of credentials and sensitive data.

## Features
- **YouTube channel data extraction** via RapidAPI.
- **Google Sheets integration** for channel management.
- **AI-powered analysis** with Azure OpenAI (GPT-4o-mini).
- **Professional HTML email reports** with channel links.
- **Node renaming** for workflow clarity.
- **Batch processing** for multiple channels.

## Requirements
- **n8n instance** (cloud or self-hosted).
- **YouTube Data API access via RapidAPI** (API key stored in n8n credentials).
- **Azure OpenAI account** with GPT-4o-mini deployed (API key in n8n credentials).
- **Gmail or SMTP email account** connected in n8n credentials for report delivery.
- **Google Sheets integration** (OAuth2 credentials) for reading channel IDs.
- All credentials must be **securely managed in n8n**.

## Target Audience
- **YouTube creators** seeking data-driven channel insights.
- **Digital marketers** optimizing content strategies.
- **Agencies** managing multiple client channels.
- **Content strategists** and analytics teams.
- **Operations teams** automating reporting workflows.

## Step-by-Step Setup Instructions (Concise)
- **Enable YouTube Data API (RapidAPI)** and add the API key in n8n Credentials.
- **Deploy GPT-4o-mini** in Azure OpenAI and add credentials in n8n.
- **Connect your Gmail/SMTP account** in n8n Credentials and authorize sending.
- **Import the workflow**, assign credentials to each node, and replace placeholders.
- **Rename the email node** to “Deliver YouTube Report via Gmail” for clarity.
- **Run once to test**, then schedule as needed.

## 📊 Basic Information

- **Workflow ID:** 8167
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 34
- **Downloads:** 3
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8167)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **emailSend** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×10)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **httpRequest** 
- **googleSheets** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
