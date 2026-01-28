# Automatically close cold HubSpot deals with Gmail feedback & Slack notifications

> ## How it works

This workflow identifies HubSpot deals that have gone untouched for 21+ days and automatically updates their status to Closed Lost. It fetches associated contacts, retrieves their details, and sends personalized follow-up emails requesting feedback. Finally, it notifies your team via Slack about the deals moved to Closed Lost. The workflow runs on a scheduled interval, ensuring consistent lead management without manual intervention.

## Step-by-step

**1. Trigger the workflow**  
- **Schedule Trigger** – Runs the workflow at a defined interval (daily, weekly, etc.).  
- **Get HubSpot Deals** – Retrieves all deals with key properties from HubSpot.  
- **Extract Deal Fields** – Normalizes deal data for consistent processing.  

**2. Identify and update cold deals**  
- **Filter Cold Leads (21+ days)** – Keeps only deals not updated in the past 21 days.  
- **Update Deal to Closed Lost** – Marks stale deals as Closed Lost in HubSpot.  

**3. Map deals to contacts**  
- **Fetch Deal Associations** – Retrieves contacts linked to filtered deals.  
- **Extract Contact IDs** – Parses associations to get contactId, dealId, and dealName.  
- **Get Contact Details** – Fetches enriched contact information.  
- **Extract Contact Email** – Simplifies data, keeping only the email field.  

**4. Follow-up & team notification**  
- **Send Gmail Feedback Request** – Sends a personalized thank-you email requesting feedback.  
- **Send Slack Notification** – Alerts the team about deals updated to Closed Lost.  

## Why use this?

- Ensures timely closure of stale HubSpot deals, keeping your pipeline clean.  
- Automates follow-up emails to gather valuable feedback from disengaged leads.  
- Reduces manual effort in deal management and contact outreach.  
- Keeps your team informed in real-time with Slack notifications.  
- Improves sales process efficiency and lead data hygiene.


## 📊 Basic Information

- **Workflow ID:** 9096
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 71
- **Downloads:** 7
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9096)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **hubspot** (×3)
- **code** (×3)
- **filter** 
- **httpRequest** 
- **gmail** 
- **slack** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
