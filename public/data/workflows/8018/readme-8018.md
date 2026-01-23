# LeadChat Booker — conversational lead capture that schedules

> ## Real Working Demo

[https://crmaiinsight.com/leadbot](https://crmaiinsight.com/leadbot)
# How It Works (High-Level)

1) **Chat &gt; Capture**  
   LeadBot greets, collects **Full Name → Email → Mobile (optional) → Product interest** via friendly chat (no forms).  
   - Validates email/phone, confirms inputs, supports corrections.

2) **De-dupe**  
   Checks Salesforce for an existing lead by **Email**.  
   - If found → **update_lead**. If not → **create_lead**.

3) **Product Selection**  
   Pulls your **Feature_Product__c** list (Name + one-line Description) and lets the user choose by **number or name**.

4) **Demo Booking (Optional)**  
   If the user says **Yes**:  
   - Detect/ask **Time Zone** (IANA).  
   - Reads **Salesforce Events** for the next 14 days.  
   - Computes **free 30-min weekday slots (09:00–17:00 UTC)** strictly after *now*.  
   - User picks a slot → creates a **Salesforce Event** (30 min) linked to the Lead.

5) **Notifications & Follow-ups**  
   - **Slack DM** to your team (concise summary).  
   - **Email** confirmation to the prospect (local date/time included).  
   - Ends with a polite confirmation message.

---

## Setup at a Glance

- **Effort:** Most teams finish the base setup in **~45–90 minutes** (credentials, field mapping, test).  
- **What you’ll configure:** Salesforce OAuth, SMTP (or your ESP), Slack, OpenAI key, and the web chat widget.

&gt; Tip: Start with the provided **Feature_Product__c** object. You can switch to your own product catalog with a **few tweaks** (see below).

---

## Prerequisites

- **Salesforce**  
  - Connected App + OAuth (API enabled).  
  - Lead fields: `FirstName`, `LastName`, `Email`, `MobilePhone`, and **one product lookup/text field** (e.g., `Interested_Product__c` or `Feature_Product__c`).  
  - (Recommended) Custom object **Feature_Product__c** with fields: `Name`, `Description__c`, `Features__c`, `Tags__c`.

- **n8n Credentials**  
  - `salesforceOAuth2Api` (to read/write Leads & Events).  
  - `smtp` (or use your email provider node).  
  - `slackApi` (for internal notifications).  
  - `openAiApi` (for the chat agent).

- **Widget Embed (optional)**  
  - A place on your site/app to embed the chat launcher.

---

## Step-by-Step Setup

1) **Import the flow into n8n**  
   - Verify nodes: **Chat Trigger → AI Agent → check_duplicate_lead → update/create lead → get_products → get_scheduled_events → create_demo_event → Slack/Email**.

2) **Add/Bind Credentials**
   - **Salesforce OAuth**: authorize org with API scope.  
   - **SMTP**: sender, domain, and authentication (verify SPF/DKIM).  
   - **Slack**: ensure bot can DM users/channels.  
   - **OpenAI**: drop in your API key.

3) **Map Product Field on Lead**
   - Pick **one** field to store the selection (e.g., `Interested_Product__c`).  
   - Ensure **AI Agent** and **Salesforce nodes** reference the **same field**.

4) **(Option A) Use `Feature_Product__c`**
   - Confirm fields exist: `Name`, `Description__c` (used in the numbered list).  
   - In **get_products**, make sure **`Id`** is returned; pass it as `customFieldsValues0_Value`.

5) **(Option B) Use Your Own Catalog**
   - Swap `customObject: Feature_Product__c` → `Product2` (or your object).  
   - Update **fields** to at least: `Id`, `Name`, and a short description field.  
   - Keep the **variable contract** the same (AI expects to store `Id`, `name`, `description`).

6) **Configure Demo Booking**
   - **get_scheduled_events** uses a SOQL search window *(today → +14 days)*.  
   - Ensure your **Event** permissions allow read/write.  
   - Confirm **create_demo_event** URL points to your Salesforce domain & API version.

7) **Customize Widget (optional)**
   - Set **title**, **brand colors**, and **initial message** in the Chat Trigger options.  
   - Limit reply length (≤100 words) is already set.

8) **Test End-to-End**
   - Run a full path: enter name/email/phone, pick a product, select a time slot.  
   - Verify: **Lead/Update** in Salesforce, **Event** creation, **Slack DM**, **Prospect Email**.

---

## Switching to Your Own Products (Quick Tweaks)

- **Replace Data Source:**  
  - In **get_products**:  
    - `customObject: Product2` (or your object API name).  
    - **Fields**: ensure `Id`, `Name`, and a short description are returned.  
- **Update Lead Field Mapping:**  
  - Set `Interested_Product__c` (or your chosen field) to the returned **Product Id**.  
- **Copy Text Logic:**  
  - Keep the AI’s “numbered list” output; it supports both number and name replies.

---

## What Users Experience

- No forms. A friendly AI asks one thing at a time, confirms details, and offers a **live calendar** of the next available 30-minute demo slots.  
- The moment they choose, a **Salesforce Event** is created and they get a **confirmation email**.  
- Your team receives a **Slack heads-up** with who/what/when.

---

## Troubleshooting Quick Checks

- **No product list?** Ensure `Id, Name, Description__c` (or equivalent) are returned by **get_products**.  
- **No free slots shown?** Confirm Event query window (+14 days), timezone handling, and that “current time” filter excludes past times.  
- **Lead not updated?** Check the **duplicate search by Email** and that `update_lead` receives `Lead_ID`.  
- **Event fails to create?** Verify Salesforce API endpoint, OAuth scope, and required Event fields.

---



## 📊 Basic Information

- **Workflow ID:** 8018
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 96
- **Downloads:** 9
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8018)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **salesforceTool** (×5)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **emailSendTool** 
- **slackTool** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
