# Website lead capture with Apollo.io enrichment, HubSpot storage & Gmail notifications

> ## What problem does this workflow solve?
Capture leads from your website, enrich them via Apollo, store them in HubSpot, send a personalized thank-you email, and notify your team—all automatically.

## What does this workflow do?
1. Capture leads from website forms automatically.
2. Send a personalized thank-you email to each new lead.
3. Enrich lead data using Apollo for deeper insights.
4. Create or update a contact/lead in HubSpot CRM.
5. Notify the internal team via email about the new lead.

## Setup

### Gmail Setup
Create Gmail Credentials by creating a project in Google Cloud Console.

### Hubspot Setup
Create Hubspot Credentials with App Token.

## How it Works:
This workflow automates your lead capture, enrichment, and follow-up process to ensure no opportunity is missed. Here's how it works:

### 1. Website Form Submission
A visitor submits a lead form on your website. Lead details like name, email, company, and message are captured instantly.

### 2. Personalized Thank-You Email
A customized thank-you email is automatically sent to the lead, building trust and confirming receipt of their inquiry.

### 3. Apollo Lead Enrichment
The captured data is enriched using Apollo to fetch additional information like job title, LinkedIn profile, and other details. This helps you better understand and qualify your leads.

### 4. Create Lead in HubSpot
The enriched lead information is pushed into HubSpot as a new contact or lead. Duplicate checks ensure that there are no repeat entries.

### 5. Internal Notification
An email notification with enriched lead details is sent to your team. Your team can follow up immediately with a complete profile.

## Who can use it?
This workflow can be used by any website owner with a "Get In Touch" or "Contact Us" button.





## 📊 Basic Information

- **Workflow ID:** 4618
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1765
- **Downloads:** 176
- **Created:** 2025/6/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4618)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **webhook** 
- **gmail** (×2)
- **hubspot** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
