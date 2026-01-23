# Automated marketing campaign email system with GPT-4 and HubSpot customer tracking

> ## Overview

* This workflow automates customer outreach for marketing campaigns, including customer prioritization, AI-generated emails, automated sending, reply tracking, and meeting scheduling.

---

## How It Works

1. **Data Synchronization**

   * Customer and campaign data are periodically synchronized from Google Sheets and internal data tables.
   * New customers and campaigns are inserted into the system if they do not already exist.

2. **Customer Evaluation and Prioritization**

   * Customers are evaluated based on revenue, industry, capital, and location.
   * Each customer is classified into High / Medium / Low priority using AI.
   * Only high-priority customers are selected for campaign outreach.

3. **Campaign Detection**

   * The workflow checks for new, unsent marketing campaigns.
   * Campaigns marked as already sent are excluded.

4. **Personalized Email Generation**

   * For each eligible customer, past email history is retrieved.
   * An AI agent generates a personalized campaign email:

     * Uses historical interaction data when available.
     * Uses customer interests and keywords for new customers.
     * Produces a professional, friendly email proposing a meeting.

5. **Automated Email Sending**

   * Emails are sent automatically via Gmail.
   * Sent emails are logged into the message history database.
   * Campaign status is updated to “sent” after completion.

6. **Reply Handling**

   * Incoming customer replies are detected via Gmail triggers.
   * Replies are matched with previous messages and stored in the database.
   * AI generates an appropriate follow-up reply when required.

7. **Reply Classification and Scheduling**

   * Customer replies are classified as Positive / Pending / Negative.
   * If a reply includes scheduling information, meeting details are extracted.
   * Calendar events are automatically created in Google Calendar.

---

## Setup Steps

1. **Prepare Data Sources**

   * Set up Google Sheets for:

     * Customer master data
       Format includes the following columns:
       #/メール/ 氏名/ 会社名/ 所在地/ 売上(万円)/ 資本金(万円)/ 業界/関心/ Hubspot同期
     * Campaign data
       Format includes the following columns:
       No / campaign_name / description / sent

   * Prepare internal data tables for:

     * Campaign records
     * Email message histories


2. **Create Data table**
   * Campaign table:
       * campaign_name: String
       * description: String
       * is_sent: boolean

   * Mail Histories table:
       * customer_email: String
       * email_subject: String
       * message: String
       * reply: String
       * reply_category: String

3. **Configure Credentials**

   * Google Sheets API
   * Gmail OAuth
   * Google Calendar API
   * HubSpot App Token (for customer synchronization)
   * OpenAI API (for AI agents)


## 📊 Basic Information

- **Workflow ID:** 11865
- **Complexity:** advanced
- **Node Count:** 53
- **Views:** 22
- **Downloads:** 2
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11865)

## 👤 Author

- **Name:** Satoshi
- **Username:** @satoshi

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **filter** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **dataTable** (×10)
- **code** (×6)
- **stickyNote** (×14)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **gmail** (×2)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **googleSheets** (×4)
- **googleCalendar** 
- **hubspot** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 53 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
