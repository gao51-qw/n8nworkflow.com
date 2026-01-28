# Screen DPDP consent manager registrations with GPT-4o, Google Sheets and Gmail

> ## 📘 Description
This workflow automates the complete DPDP-aligned Consent Manager Registration screening pipeline — from intake to eligibility evaluation and final compliance routing.
Every incoming registration request is normalized, validated, logged, evaluated by an AI compliance engine (GPT-4o), and then routed into either approval or rejection flows.
It intelligently handles missing documentation (treated as a minor issue), evaluates financial/technical/operational capacity, generates structured eligibility JSON, updates registration records in Google Sheets, and sends outcome-specific emails to applicants and compliance teams.
 The workflow creates a full audit trail while reducing manual screening workload and ensuring consistent eligibility decisions.

## ⚙️ What This Workflow Does (Step-by-Step)
▶️ Receive Consent Registration Event (Webhook)
 Collects incoming Consent Manager registration applications and triggers the processing pipeline.
🧹 Extract & Normalize Registration Payload (Code Node)
 Cleans the body payload and extracts key fields:
 action, organizationName, applicationType, contactEmail, netWorth, technicalCapacity, operationalCapacity, documentAttached, submittedAt.
🔍 Validate Registration Payload Structure (IF Node)
 Checks the presence of mandatory fields.
 Valid → continue to eligibility evaluation
 Invalid → log in the audit sheet.
📄 Log Invalid Registration Requests to Sheet (Google Sheets)
 Stores malformed or incomplete submissions for audit, follow-up, and retry handling.
📝 Write Initial Registration Entry to Sheet (Google Sheets)
 Creates the initial intake row in the master registration sheet before applying eligibility logic.
🧠 Configure GPT-4o — Eligibility Evaluation Model (Azure OpenAI)
 Prepares the AI model used to determine whether the applicant meets DPDP’s eligibility criteria.
🤖 AI Eligibility Evaluator (DPDP Compliance)
 Analyzes applicant data and evaluates their eligibility based on:
 financial capacity, technical capability, operational readiness, and documentation status.
 Missing documents → NOT a rejection condition.
 Returns strictly formatted JSON with: eligible, riskLevel, decisionReason, missingItems, recommendedNextSteps.
🧼 Parse AI Eligibility JSON Output (Code Node)
 Converts AI output into valid JSON by removing markdown artifacts and ensuring safe parsing.
🔎 Validate Eligibility Status (IF Node)
 Routes the outcome:
 Eligible → approval workflow
 Ineligible → rejection email.
📧 Send Rejection Email to Applicant (Gmail)
 Sends a structured rejection email listing issues and re-submission instructions.
🔗 Merge Registration + Eligibility Summary (Code Node)
 Combines raw registration data with AI eligibility results into one unified JSON package.
📬 Send Approval Email to Compliance Team (Gmail)
 Notifies compliance officers that an applicant passed eligibility and is ready for verification.
🧩 Prepare Status Update Fields (Set Node)
 Constructs the final status value (e.g., “passed”) for updating the database.
📘 Update Registration Status in Sheet (Google Sheets)
 Updates the applicant’s record using contactEmail as the key, marking the final eligibility status.

## 🧩 Prerequisites
Azure OpenAI (GPT-4o) credentials
Gmail OAuth connection
Google Sheets OAuth connection
Valid webhook endpoint for intake

## 💡 Key Benefits
 ✔ Fully automates DPDP Consent Manager registration screening
 ✔ AI-driven eligibility evaluation with standardized JSON output
 ✔ Smart handling of missing documents without unnecessary rejections
 ✔ Automatic routing to approval or rejection flows
 ✔ Complete audit logs for all submissions
 ✔ Reduces manual review time and improves consistency

## 👥 Perfect For
- DPDP compliance teams
- Regulatory operations units
- SaaS platforms handling consent manager onboarding
- Organizations managing structured eligibility workflows


## 📊 Basic Information

- **Workflow ID:** 12268
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 10
- **Downloads:** 1
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12268)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** (×3)
- **if** (×2)
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** (×2)
- **set** 
- **stickyNote** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
