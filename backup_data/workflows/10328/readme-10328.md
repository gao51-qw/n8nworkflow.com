# Personalized cold lead re-engagement with Zoho CRM and GPT-4o-mini

> ## Description:
Reignite cold leads automatically with this intelligent n8n automation template that integrates Zoho CRM, Azure OpenAI (GPT-4o-mini), and Email.
This workflow identifies leads that haven’t been contacted in the last 30 days, generates personalized AI-written emails based on lead data, sends them directly, and updates the CRM—all without manual follow-up.
Perfect for sales teams, marketing managers, and business development professionals who want to recover lost opportunities, boost engagement rates, and maintain an active sales pipeline with minimal effort.

## ✅ What This Template Does (Step-by-Step)

⏰ Daily Trigger
 Automatically runs on a set schedule (daily or weekly) to check for inactive leads.

📅 Calculate 30 Days Ago
 Computes the exact date threshold (today − 30 days) to filter stale leads from Zoho CRM.

🔍 Fetch Cold Leads from Zoho
 Searches Zoho CRM for leads whose Last Activity occurred before the calculated date—returning only those needing re-engagement.

🤖 AI Email Generation
 Uses Azure OpenAI (GPT-4o-mini) to analyze each lead’s data and craft a personalized re-engagement email that reflects their previous interactions, interests, or stage in the funnel.

📧 Send Personalized Email
 Delivers the custom AI-generated email directly to each lead.
 Subject: “Let’s Reconnect!”
 Body: Tailored, human-like message written by AI.

✅ Update CRM Record
 After each email is sent, the workflow updates the lead in Zoho CRM—marking them as contacted, refreshing the Last Activity timestamp, and maintaining accurate engagement history.

## 🧠 Key Features
 ✔️ Smart lead filtering based on inactivity window
 ✔️ AI-crafted, context-aware personalized emails
 ✔️ Seamless Zoho CRM integration for tracking and updates
 ✔️ Fully automated daily execution
 ✔️ Customizable for different CRMs or intervals

## 💼 Use Cases
 💡 Re-engage leads who’ve gone silent for 30+ days
 📈 Improve conversion and response rates automatically
 🤝 Maintain continuous pipeline nurturing
 🔁 Save hours of manual email follow-up

## 📦 Required Integrations
 • Zoho CRM API – for fetching and updating lead data
 • Azure OpenAI API (GPT-4o-mini) – for email personalization
 • SMTP / Email API – for sending re-engagement emails

## 🎯 Why Use This Template?
 ✅ Automates your entire cold-lead revival process
 ✅ Saves manual outreach time for sales reps
 ✅ Increases lead conversion through personalized AI communication
 ✅ Keeps CRM data fresh and accurate


## 📊 Basic Information

- **Workflow ID:** 10328
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 83
- **Downloads:** 8
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10328)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **function** (×3)
- **if** (×4)
- **set** (×5)
- **emailSend** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
