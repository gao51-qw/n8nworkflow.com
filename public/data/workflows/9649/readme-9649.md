# Automate property maintenance requests with GPT-4o-mini, Jotform and Gmail

> Tired of juggling maintenance calls, lost requests, and slow vendor responses?
This workflow streamlines the entire property maintenance process — from tenant request to vendor dispatch — powered by AI categorization and automated communication.

Cut resolution time from 5–7 days to under 24 hours and boost tenant satisfaction by 85% with zero manual follow-up.

## What This Workflow Does

Transforms chaotic maintenance management into seamless automation:

📝 Captures Requests – Tenants submit issues via Jotform with unit number, issue description, urgency, and photos.

🤖 AI Categorization – OpenAI (GPT-4o-mini) analyzes and classifies issues (plumbing, HVAC, electrical, etc.).

⚙️ Smart Prioritization – Flags emergencies (leak, electrical failure) and assigns priority.

📬 Vendor Routing – Routes issue to the correct contractor or vendor based on AI category.

📧 Automated Communication – Sends acknowledgment to tenant and work order to vendor via Gmail.

📊 Audit Trail Logging – Optionally logs requests in Google Sheets for performance tracking and reporting.

## Key Features

🧠 AI-Powered Categorization – Intelligent issue type and priority detection.

🚨 Emergency Routing – Automatically escalates critical issues.

📤 Automated Work Orders – Sends detailed emails with property and tenant info.

📈 Google Sheets Logging – Transparent audit trail for compliance and analytics.

🔄 End-to-End Automation – From form submission to vendor dispatch in seconds.

💬 Sticky Notes Included – Every section annotated for easy understanding.

## Perfect For

1. Property management companies

2. Real estate agencies and facility teams

3. Smart building operators

4. Co-living and rental startups

5. Maintenance coordinators managing 50–200+ requests monthly

## What You’ll Need

Required Integrations:

1. Jotform – Maintenance request form
Create your form for free on [Jotform using this link](https://www.jotform.com/?partner=mediajade)

2. OpenAI (GPT-4o-mini) – Categorization and prioritization

3. Gmail – Automated email notifications

4. (Optional) Google Sheets – Logging and performance tracking

## Quick Start

1. Import Template – Copy JSON into n8n and import.

2. Create Jotform – Include fields:
Tenant name, email, unit number, issue description, urgency, photo upload.

3. Add Credentials – Configure Jotform, Gmail, and OpenAI credentials.

4. Set Vendor Emails – Update “Send to Contractor” Gmail node with vendor email IDs.

5. Test Workflow – Submit sample maintenance requests for AI categorization and routing.

6. Activate Workflow – Go live and let your tenants submit maintenance issues.

## Expected Results

⏱️ 24-hour average resolution time (vs 5–7 days).

😀 85% higher tenant satisfaction with instant communication.

📉 Zero lost requests – every issue logged automatically.

🧠 AI-driven prioritization ensures critical issues handled first.

🕒 10+ hours saved weekly for property managers.

## Pro Tips

🧾 Add Google Sheets logging for a complete audit trail.

🔔 Include keywords like “leak,” “no power,” or “urgent” in AI prompts for faster emergency detection.

🧰 Expand vendor list dynamically using a Google Sheet lookup.

🧑‍🔧 Add follow-up automation to verify task completion from vendors.

📊 Create dashboards for monthly maintenance insights.

## Learning Resources

This workflow demonstrates:

1. AI categorization using OpenAI’s Chat Model (GPT-4o-mini)

2. Multi-path routing logic (emergency vs. normal)

3. Automated communication via Gmail

4. Optional data logging in Google Sheets

5. Annotated workflow with Sticky Notes for learning clarity

## 📊 Basic Information

- **Workflow ID:** 9649
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 216
- **Downloads:** 21
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9649)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **if** 
- **gmail** (×3)
- **googleSheets** (×2)
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **jotFormTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
