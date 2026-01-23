# Automate Client Onboarding with GPT-4o-mini, Asana, Slack, Google Drive and Gmail

> Automate the **complete client onboarding process** for AI automation services using **n8n**, **Asana**, **Slack**, **Google Drive**, and **Gmail**.
This workflow ensures a consistent, professional, and scalable onboarding experience for every new client.

---

## 📌 Purpose

This workflow is designed to:

* Eliminate manual setup tasks during client onboarding
* Automatically create client-specific resources (folders, projects, channels)
* Ensure smooth communication between your team and the client
* Deliver instant confirmation and welcome emails to the client

---

## ⚡ Trigger

The workflow is triggered by an **n8n Form submission** (`Client Onboarding Form`) where clients provide:

* **Name**
* **Email**
* **Company Name**
* **Website**
* **Proposal/Scope Document (PDF)**

---

## 🛠️ Actions Performed

Once the form is submitted, the workflow executes the following steps:

1. **Extract Proposal/Scope Document**

   * Reads the uploaded PDF and extracts key information.

2. **Rename & Store Project Data**

   * Standardizes project information for downstream steps.

3. **Google Drive Setup**

   * Creates a client folder in Drive
   * Stores the uploaded document
   * Saves folder ID for references

4. **Asana Setup**

   * Creates a **new Asana Project** from a template
   * Uses AI (OpenAI GPT-4o-mini) to parse the proposal and **generate 20–30 detailed onboarding tasks**
   * Populates Asana with automatically assigned tasks and due dates

5. **Slack Setup**

   * Creates a **dedicated client Slack channel** (named dynamically using the company name)
   * Posts a **welcome message** with next steps and checklist

6. **Welcome Email**

   * Sends a personalized email to the client, including:

     * Google Drive folder link
     * Asana project access
     * Slack channel invite
     * Onboarding call scheduler link

---

## 🔧 Configuration Notes

Before using this workflow, configure:

### 1. Google Drive

* Set up OAuth2 credentials
* Ensure the account has **folder creation permissions**

### 2. Asana

* Set up OAuth2 credentials
* Verify workspace permissions
* Ensure the correct **project template** is available

### 3. Slack

* Create a Slack App with **bot permissions**
* Add OAuth scopes:

  * `channels:write`
  * `chat:write`
  * `users:read.email`

### 4. Email (SMTP or Gmail OAuth2)

* Configure SMTP/Gmail credentials for internal notifications
* Update **recipient email address**

---

## 📬 Example Outputs

### ✅ Slack Channel Creation

![Slack Welcome Message](https://i.ibb.co/60ZL8mV5/Screenshot-2025-08-20-at-16-04-27.png)

### ✅ Welcome Email

![Welcome Email](https://i.ibb.co/CszkQvcp/Screenshot-2025-08-20-at-16-31-41.png)

### ✅ Asana Tasks
![Screenshot 20250820 at 16.35.15.png](fileId:2161)

---

## 🚦 Suggested Triggers

While currently triggered by an **n8n Form**, you can adapt this workflow to start from:

* **Payment received** (Stripe/PayPal integration)
* **Contract signed** (DocuSign/HelloSign)
* **CRM Opportunity Change** (HubSpot/Pipedrive/Salesforce)

---

## 🏷️ Tags

`onboarding` · `automation` · `asana` · `slack` · `google-drive` · `client-success`

---

## 📢 Notes

* If due dates fall on weekends, they are rolled forward to the next business day.
* Task breakdown leverages AI to **generate detailed, sequential, and actionable onboarding steps**.
* This workflow is optimized for **scalability**, ensuring every new client receives the same structured onboarding experience.

---



## 📊 Basic Information

- **Workflow ID:** 7656
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 95
- **Downloads:** 9
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7656)

## 👤 Author

- **Name:** Abdellah Homrani
- **Username:** @adamcrafts

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **gmail** 
- **formTrigger** 
- **slack** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **splitInBatches** 
- **set** (×2)
- **extractFromFile** 
- **googleDrive** 
- **asana** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
