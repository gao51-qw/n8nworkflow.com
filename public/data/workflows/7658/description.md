Automate the **complete client onboarding process** using **n8n**, **GoHighLevel**, **Slack**, **Google Drive**, and **Gmail**.
This workflow ensures a smooth, scalable onboarding journey for every new client.

---

## 📌 Purpose

This workflow is designed to:

* Eliminate repetitive setup tasks during onboarding
* Automatically create client-specific resources (folders, contacts, tasks, channels)
* Maintain seamless communication between your team and the client
* Deliver instant confirmation and welcome emails (via **Gmail**)

---

## ⚡ Trigger

Triggered by an **n8n Form submission** (`Client Onboarding Form`) where clients provide:

* **Name**
* **Email**
* **Company Name**
* **Website**
* **Proposal/Scope Document (PDF)**

---

## 🛠️ Actions Performed

1. **Extract Proposal/Scope Document**

   * Reads uploaded PDF and extracts key details.

2. **Google Drive Setup**

   * Creates a client folder in Drive
   * Saves uploaded proposal for team access

3. **GoHighLevel Setup**

   * Creates or updates client **contact** in GoHighLevel
   * Uses AI to parse proposal and **generate 20–30 detailed onboarding tasks**
   * Creates **tasks directly in GoHighLevel** for structured project management

4. **Slack Setup**

   * Creates a **dedicated client Slack channel**
   * Posts a **welcome message** with checklist and kickoff details

5. **Welcome Email**

   * Sends a personalized Gmail email including:

     * Google Drive folder link
     * GoHighLevel workspace access
     * Slack channel invite
     * Onboarding call scheduler link

---

## 🧩 Workflow Architecture

```mermaid
flowchart TD
    A[Form Submission] --&gt; B[Extract Proposal PDF]
    B --&gt; C[Create Google Drive Folder]
    C --&gt; D[Save Folder ID]
    D --&gt; E[Create/Update GoHighLevel Contact]
    E --&gt; F[AI: Segment Tasks from Proposal]
    F --&gt; G[Loop Over Tasks]
    G --&gt; H[Create Tasks in GoHighLevel]
    G --&gt; I[Slack Create Channel]
    I --&gt; J[Slack Post Welcome Message]
    J --&gt; K[Send Gmail Welcome Email]
```

---

## 🔧 Configuration Notes

Before using this workflow, configure:

### 1. Google Drive

* OAuth2 credentials
* Folder creation permissions

### 2. GoHighLevel

* OAuth2 credentials for API access
* Ensure permissions for contacts and tasks

### 3. Slack

* Slack App with bot permissions
* OAuth scopes:

  * `channels:write`
  * `chat:write`
  * `users:read.email`

### 4. Gmail (OAuth2 or SMTP)

* Configure account for sending emails
* Update recipient details

---

## 📬 Example Outputs

### ✅ Slack Channel Welcome

Automated Slack post welcoming the client and outlining next steps.

### ✅ Gmail Welcome Email

Personalized welcome message with links to Drive, Slack, and GoHighLevel.

---

## 🚦 Suggested Triggers

This workflow can be adapted to trigger on:

* **Payment received** (Stripe/PayPal)
* **Contract signed** (DocuSign/HelloSign)
* **CRM Opportunity Won** (GoHighLevel or HubSpot)

---

## 🏷️ Tags

`onboarding` · `automation` · `gohighlevel` · `slack` · `google-drive` · `gmail`

---

## 📢 Notes

* Due dates that fall on weekends are shifted to the next weekday.
* AI-powered parsing ensures granular tasks and sequential steps.
* Designed for **scalability**, ensuring every client receives a consistent onboarding flow.

