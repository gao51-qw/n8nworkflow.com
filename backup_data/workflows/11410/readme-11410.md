# Review aggregator and AI alerts for Google, Facebook, Trustpilot, and Yelp

> This workflow automatically collects customer reviews from Google, Facebook, Trustpilot, and Yelp, analyzes their sentiment using AI, sends real-time alerts for negative feedback, and generates a weekly summary report. It is ideal for businesses that want to monitor their online reputation across multiple platforms and respond quickly to customer concerns.

---

## How It Works

- **Daily Schedule**: Triggers the workflow every day at 09:00.
- **Review Collection**: Fetches new reviews from Google, Facebook, Trustpilot, and Yelp using their official APIs.
- **Data Normalization**: Merges and standardizes all reviews into a unified format.
- **AI Sentiment Analysis**: Uses GPT-4 to analyze the sentiment and extract key insights from each review.
- **Negative Review Alerts**: Sends a Slack notification to managers if a negative review is detected.
- **Logging**: Saves all reviews and their analysis to a Google Sheet for record-keeping.
- **Weekly Reporting**: Every Monday, aggregates the past week’s reviews, generates an AI-powered summary, and emails it to management.

---

## Configuration

1. API Credentials:
   - **Google My Business API**: Create a project in Google Cloud, enable the My Business API, and generate OAuth credentials.
   - **Facebook Graph API**: Create a Facebook App, request the necessary permissions, and obtain a Page Access Token.
   - **Trustpilot API**: Register for a Trustpilot Business account and generate an API key.
   - **Yelp Fusion API**: Sign up for Yelp Fusion, create an app, and get your API key.
   - **OpenAI API**: Create an account at OpenAI, generate an API key for GPT-4 access.
   - **Slack API**: Create a Slack App, enable Incoming Webhooks, and get the webhook URL.
   - **Google Sheets API**: Enable the Google Sheets API in Google Cloud and create OAuth credentials.

2. **Set Up Environment Variables**:
   - Add all API keys, tokens, and configuration values in the `Workflow Configuration` node or as n8n credentials.

3. **Google Sheet Setup**:
   - Create a Google Sheet with columns for review data and share it with your service account email.

4. **Slack Channel**:
   - Set up a Slack channel for alerts and add the webhook URL in the configuration.

5. **Email Settings**:
   - Configure the recipient email address for weekly reports in the workflow.

---

## Usage

- Activate the workflow after configuration.
- Reviews will be collected and analyzed daily.
- Negative reviews trigger instant Slack alerts.
- Every Monday, a summary report is sent via email.

---

**Use Case:**  
Monitor and respond to customer feedback across Google, Facebook, Trustpilot, and Yelp, automate sentiment analysis, and keep management informed with actionable weekly insights.

## 📊 Basic Information

- **Workflow ID:** 11410
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11410)

## 👤 Author

- **Name:** Țugui Dragoș
- **Username:** @tuguidragos

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×4)
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **code** (×3)
- **if** (×2)
- **slack** 
- **googleSheets** (×2)
- **aggregate** 
- **gmail** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
