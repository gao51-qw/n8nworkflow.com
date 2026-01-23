# Automate multi-website Google Analytics reports with GPT processing to email & Slack

> ## 🟡 DESCRIPTION

This n8n workflow automates the daily generation of comprehensive analytics reports from multiple websites, processes them using OpenAI's powerful language models, and then delivers the insights directly to your email and Slack channels.

Designed for digital marketers, website administrators, and data analysts, this template streamlines the tedious process of manually collecting and interpreting website performance data, offering immediate, actionable intelligence.

The core problem this workflow solves is the fragmentation and manual effort involved in monitoring numerous website analytics. Instead of logging into multiple Google Analytics accounts or properties daily, this workflow centralizes data extraction, enriches it with AI-powered summaries, and distributes it to your preferred communication platforms.

This significantly reduces the time spent on routine reporting, allowing you to focus on strategy and decision-making.

Users who would benefit most from this template include:

- Digital Marketing Agencies: Efficiently generate and share client reports across multiple properties.

- E-commerce Businesses: Monitor performance of various product sites or regional domains.

- Content Creators: Track the success of different blogs or content platforms.

- Anyone managing a portfolio of websites: Gain a unified view of their digital assets' performance.


## 🟡 SETUP


Before importing and running this workflow, ensure you have the following prerequisites in place:


### ► Google Analytics API Setup:

- Go to the Google Cloud Console (https://console.cloud.google.com/).

- Create a new project or select an existing one.

- Navigate to "APIs & Services" &gt; "Enabled APIs & services."

- Search for and enable the "Google Analytics Data API" (for GA4) or "Google Analytics Reporting API" (for Universal Analytics, if still in use).

- Go to "APIs & Services" &gt; "Credentials."

- Create "OAuth client ID" credentials for a "Web application."

- Copy your client ID and client secret.

- In n8n, add a new Google Analytics credential using the "OAuth2" authentication method. 
- Provide the Client ID and Client Secret. You will need to authorize n8n to access your Google Analytics data. 
- Scopes	        https://www.googleapis.com/auth/analytics.readonly (read-only) or https://www.googleapis.com/auth/analytics (manage)
- OAuth Redirect URL	Already pre-filled by n8n (copy this when creating the Google client)

- Click Sign in with Google, choose the GA account, and approve the requested scopes.

- Click Save – n8n tests the token and stores it encrypted.

- For each yourwebsite.com node, select these credentials and specify the correct Google Analytics View ID (for Universal Analytics) or Property ID (for GA4).


### ► Email Credentials (SMTP):

- In n8n, add a new SMTP credential.

- Provide your SMTP host, port, username, and password. This will be used to send the aggregated reports.

### ► Slack Credentials:

- In n8n, add a new Slack credential.

- Follow the instructions to create a Slack App and generate a Bot User OAuth Token. This token will allow n8n to post messages to your Slack channels.


### ► OpenAI Credentials:

Sign up for an OpenAI account (https://platform.openai.com/).

Generate an API Key from your account dashboard.

In n8n, add a new OpenAI credential and paste your API Key.


### ► Website Configuration:

The workflow currently includes nodes for yourwebsite.com (1 to 8).

- For each "Get Report" node (e.g., yourwebsite.com, yourwebsite.com 2, etc.), duplicate or remove them as needed to match the number of Google Analytics properties you wish to monitor.
- Replace the names and number of websites inside the **report maker agent**.


## 🟡 Usage

Once you have configured the credentials, you can customize the workflow to fit your specific needs, including leveraging various alternative nodes for sending notifications and reports. This flexibility allows you to integrate seamlessly with your preferred communication tools such as Gmail, Telegram, Outlook, or any other service supported by n8n's extensive node library.


## 📊 Basic Information

- **Workflow ID:** 6258
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 733
- **Downloads:** 73
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6258)

## 👤 Author

- **Name:** Guillaume
- **Username:** @gay

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **merge** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **aggregate** 
- **googleAnalytics** (×8)
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** (×2)
- **microsoftOutlook** (×2)
- **emailSend** (×2)
- **slack** (×2)
- **telegram** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
