# Website contact form to Slack with optional email confirmation

> This n8n workflow sends a real-time Slack notification when a user submits a contact form on your website. It also optionally sends a confirmation email via either Outlook or Gmail.

You can embed the form directly into your website and route all submissions to your preferred Slack channel for quick follow-up.

---

### ✅ Key Features

- **🌐 Website Form Trigger**: A no-code form that can be embedded directly on your website.
- **⚡ Slack Integration**: Instantly posts lead details to a designated Slack channel.
- **📧 Email Follow-Up (Optional)**: Sends a thank-you email to the user via either Gmail or Microsoft Outlook.
- **🔗 Easy to Connect**: Requires minimal setup with OAuth for Slack and email APIs.

---

### 🧰 What You'll Need

- **Slack Bot Token & Permissions**
- **Gmail or Outlook account (optional)**
- **n8n instance (cloud or self-hosted)**

---

### 🛠️ Step-by-Step Setup

#### 1️⃣ Embed Contact Form on Website
- **Node**: `Form Submission on Website`
- **What it does**: Captures user inputs — Name, Email, and Phone.
- **How to use**:
  - Grab the public webhook URL from this node.
  - Embed it as a form action on your website (HTML form or no-code builder).
- **API**: None required. Webhook-based.

#### 2️⃣ Send to Slack
- **Node**: `Slack`
- **What it does**: Posts a message to your Slack `#leads` channel with submission details.
- **Message format**:
  ```
  You have a form submission with these details.
  Name: {{ Name }}
  Email: {{ Email }}
  Phone: {{ Phone }}
  ```
- **API**: Slack Bot Token (OAuth2)

#### 3️⃣ Optional: Send Confirmation Email
- **Node**: `Send Email - Gmail`
  - Sends email using Gmail API.
- **Node**: `Send Email - Outlook`
  - Sends email using Microsoft Outlook API.
- **Message**:
  ```
  Hi {{ Name }},

  Thank you for reaching out on our website. We'll be in touch soon!
  ```
- **API**: Gmail or Microsoft Outlook OAuth2

---

### 👤 Created By
**Robert Breen**  
Automation Consultant | AI Workflow Designer | n8n Expert  
📧 [rbreen@ynteractive.com](mailto:rbreen@ynteractive.com)  
🌐 [ynteractive.com](https://ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

### 🏷️ Tags
`slack` `lead alerts` `website form` `n8n` `email automation` `real-time notification` `lead generation` `form trigger` `webhook`


## 📊 Basic Information

- **Workflow ID:** 6987
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 411
- **Downloads:** 41
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6987)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **slack** 
- **formTrigger** 
- **microsoftOutlook** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
